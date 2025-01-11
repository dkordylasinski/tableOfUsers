<template>
    <div class="table-wrapper overflow-auto sm:overflow-x-scroll">
        <div class="hidden sm:block">
            <table class="overflow-hidden border-separate border-spacing-y-0.5 w-full rounded-xl relative mb-8 min-w-[57.813rem]">
                <thead>
                    <tr>
                        <th class="whitespace-nowrap w-10 xl:w-[4.125rem]"></th>
                        <th @click="sort('name')">
                            <div class="flex items-center gap-1">
                                Imię i nazwisko
                                <svg :class="{ 'asc' : ascSort }" width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.91663 7.49935L6.99996 3.41602L11.0833 7.49935" stroke="#4D4D4D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7 11.5827V3.41602" stroke="#4D4D4D" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </th>
                        <th @click="sort('email')">Adres email</th>
                        <th @click="sort('username')">Nazwa użytkownika</th>
                        <th @click="sort('country')">Kraj zamieszkania</th>
                        <th @click="sortDate('registrationDate')">Data rejestracji</th>
                        <th class=" whitespace-nowrap w-10 xl:w-[4.125rem]"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in paginatedUsers" :key="user.name">
                        <td class="whitespace-nowrap w-10 xl:w-[4.125rem]">
                            <div class="flex justify-center">
                                <label class="checkbox-wrapp">
                                    <input type="checkbox">
                                    <svg viewBox="0 0 64 64" height="18px" width="18px">
                                        <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                                    </svg>
                                </label>
                            </div>
                        </td>
                        <td class="name-cell">
                            <div class="flex items-center gap-2.5">
                                <img :src="user.image" class="w-6 h-6 rounded-full" /> {{ user.name }}
                            </div>
                        </td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.username }}</td>
                        <td>
                            <div class="flex items-center gap-2.5">
                                <img class="w-[1.063rem] h-auto" :src="'https://flagsapi.com/' + user.nat + '/shiny/64.png'" />{{ user.country }}
                            </div>
                        </td>
                        <td>{{ formattedDate(user.registrationDate) }}</td>
                        <td class="whitespace-nowrap w-10 xl:w-[4.125rem]">
                            <div class="flex justify-center">
                                <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 2.75C7.41421 2.75 7.75 2.41421 7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2C6.25 2.41421 6.58579 2.75 7 2.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12.25 2.75C12.6642 2.75 13 2.41421 13 2C13 1.58579 12.6642 1.25 12.25 1.25C11.8358 1.25 11.5 1.58579 11.5 2C11.5 2.41421 11.8358 2.75 12.25 2.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1.75 2.75C2.16421 2.75 2.5 2.41421 2.5 2C2.5 1.58579 2.16421 1.25 1.75 1.25C1.33579 1.25 1 1.58579 1 2C1 2.41421 1.33579 2.75 1.75 2.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <ul class="flex sm:hidden flex-col gap-2 mb-6">
            <user-mobile-li v-for="user in paginatedUsers" :key="user.name" :user="user" :registrationDate="formattedDate(user.registrationDate)"></user-mobile-li>
        </ul>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { User } from '../interfaces/User';
    import UserMobileLi from './elements/UserMobileLi.vue';

    let ascSort: boolean = false;

    const props = defineProps<{
        users: User[];
        recordsPerPage: number;
        currentPage: number;
    }>();

    function formattedDate(userDate: Date): string {
        userDate = new Date(userDate);
        const d = String(userDate.getDate()).padStart(2, '0');
        const m = String(userDate.getMonth() + 1).padStart(2, '0');
        const y = userDate.getFullYear();
        const h = String(userDate.getHours()).padStart(2, '0');
        const min = String(userDate.getMinutes()).padStart(2, '0');
        return `${d}.${m}.${y}, ${h}:${min}`;
    }

    const emit = defineEmits<{
        (event: 'sort', column: keyof User, direction: 'asc' | 'desc'): void;
    }>();

    const sortDirection = ref<'asc' | 'desc'>('asc');
    const sortColumn = ref<keyof User | null>(null);

    const paginatedUsers = computed(() => {
        const start = (props.currentPage - 1) * props.recordsPerPage;
        return props.users.slice(start, start + props.recordsPerPage);
    });

    const sortedUsers = computed(() => {
        if (!sortColumn.value) return props.users;

        return [...props.users].sort((a, b) => {
            const aValue = a[sortColumn.value!];
            const bValue = b[sortColumn.value!];

            if (aValue < bValue) return sortDirection.value === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortDirection.value === 'asc' ? 1 : -1;
            return 0;
        });
    });

    const paginatedAndSortedUsers = computed(() => {
        const start = (props.currentPage - 1) * props.recordsPerPage;
        return sortedUsers.value.slice(start, start + props.recordsPerPage);
    });

    function sort(column: keyof User): void {
        if (column === 'name' && sortDirection.value !== 'asc') {
            ascSort = true;
        } else {
            ascSort = false;
        }

        if (sortColumn.value === column) {
            sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
        } else {
            sortDirection.value = 'asc';
            sortColumn.value = column;
        }

        emit('sort', column, sortDirection.value);
    }

    function sortDate(column: keyof User): void {
        if (column === 'date' as keyof User && sortDirection.value !== 'asc') {
            ascSort = true;
        } else {
            ascSort = false;
        }

        if (sortColumn.value === column) {
            sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
        } else {
            sortDirection.value = 'asc';
            sortColumn.value = column;
        }

        emit('sort', column, sortDirection.value);
    }

</script>
<style scoped lang="scss">
    @use  '../assets/breakpoints.scss' as *;
    @use '../assets/variables.scss' as *;

    .table-wrapper {
        &::-webkit-scrollbar {
            display: none;
        }
    }
    table {
        table-layout: fixed;
        border: 1px solid $gray;
        box-shadow: rgba(224, 224, 224, 0.2) 0px 4px 2px;
        @media (max-width: $br-l) {
            table-layout: auto;
        }
        &::after {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 3px;
            background-color: $gray2;
        }
        &::before {
            content: '';
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100%;
            height: 5px;
            background-color: $white;
        }
        thead {
            background-color: $gray2;
        }
        th {
            text-align: left;
            font-size: 0.75rem;
            line-height: 1.05rem;
            color: $gray3;
        }
        th, td {
            overflow: hidden;
            padding: 1.063rem 1.5rem;
            border-bottom: 1px solid $gray;
            @media (max-width: $br-xl) {
                padding: 0.95rem 0.5rem;
            }
            @media (max-width: $br-s) {
                padding: 0.85rem 0.5rem;
            }
        }
        td {
            color: $gray5;
            @media (max-width: $br-s) {
                font-size: 0.8rem;
            }
        }
        tr {
            overflow: hidden;
        }
        .name-cell {
            color: $black;
        }
        .asc {
            transform: rotate(180deg);
        }
    }
</style>