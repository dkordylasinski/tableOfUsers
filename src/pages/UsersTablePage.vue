<template>
    <div class="wrapper my-8 sm:my-[3.125rem]">
        <heading></heading>
        <filter-input v-model="filter" @sortedByName="updateFilter"></filter-input>
        <div v-if="users[0]">
            <users-table 
                :users="filteredUsersF" 
                :recordsPerPage="recordsPerPage"
                :currentPage="currentPage" 
                @sort="onSort"
            ></users-table>
            <div class="flex lg:justify-between flex-col-reverse sm:flex-col lg:items-center lg:flex-row gap-4 sm:gap-5">
                <dropdown :options="[10,20,50,100,200]" :defaultValue="recordsPerPage" @updateRecordsPerPage="onUpdateRecordsPerPage"></dropdown>
                <pagination 
                    :recordsPerPage="recordsPerPage" 
                    :totalRecords="usersNumber" 
                    :currentPage="currentPage"
                    @newCurrentPage="newCurrentPage"
                ></pagination>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed } from 'vue';
    import UsersTable from '../components/UsersTable.vue';
    import FilterInput from '../components/FilterInput.vue';
    import Dropdown from '../components/Dropdown.vue';
    import Pagination from '../components/Pagination.vue';
    import Heading from '../components/Heading.vue';
    import { fetchUsers } from '../services/userService';
    import { User } from '../interfaces/User';

    let usersNumber: number = 1005;
    const users = ref<User[]>([]);
    const filter = ref<string>('');
    const recordsPerPage = ref<number>(10);
    const currentPage = ref<number>(1);

    const filteredUsersF = computed(() => {
        const lowerFilter: string = filter.value.toLowerCase();
        if (lowerFilter.length >= 1) currentPage.value = 1;

        const filteredUsers = users.value.filter(
            (user) => 
            user.name.toLowerCase().includes(lowerFilter) ||
            user.country.toLowerCase().includes(lowerFilter)
        );
        usersNumber = filteredUsers.length;

        return filteredUsers;
    });

    const onSort = (column: keyof User, direction: 'asc' | 'desc') => {
        users.value.sort((a, b) => {
            const valueA = a[column] ?? '';
            const valueB = b[column] ?? '';
            return direction === 'asc'
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        });
    }

    const onSortDate = (column: keyof User, direction: 'asc' | 'desc') => {
        users.value.sort((a, b) => {
            const dateA = new Date(a[column] ?? '');
            const dateB = new Date(b[column] ?? '');
            return direction === 'asc'
                ? dateA.getTime() - dateB.getTime()
                : dateB.getTime() - dateA.getTime();
        });
    };

    const updateFilter = (sort: boolean) => {
        sort ? onSort('name', 'asc') : onSort('name', 'desc');
    }

    const onUpdateRecordsPerPage = (value: number) => {
        recordsPerPage.value = value;
        currentPage.value = 1;
    };

    function newCurrentPage(newPage: number) {
        currentPage.value = newPage;
    }

    fetchUsers().then((data: User[]) => {
        users.value = data;
    });
</script>


<style scoped>

</style>