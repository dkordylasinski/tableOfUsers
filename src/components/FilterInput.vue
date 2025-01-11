<template>
    <div class="flex items-center gap-3 mb-[1.063rem] sm:mb-8">
        <div class="relative w-full sm:w-auto">
            <svg class="absolute  left-4 sm:left-[1.625rem] top-1/2 -translate-y-2/4 z-10" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 13L10.1333 10.1333M11.6667 6.33333C11.6667 9.27885 9.27885 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27885 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27885 1 11.6667 3.38781 11.6667 6.33333Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input v-model="inputValue" placeholder="Wyszukaj użytkownika..." class="search-input border custom-shadow py-[0.813rem] sm:py-3.5 pl-10 sm:pl-12 pr-3.5 rounded-xl w-full sm:w-80 lg:w-[31.5rem]">
        </div>
        <div class="custom-shadow rounded-xl">
            <button @click="sortByName" class="border flex gap-2 items-center py-[0.826rem] sm:py-3.5 px-4 rounded-xl">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10.6667L4.66667 13.3333L7.33333 10.6667" fill="black"/>
                    <path d="M4.66667 13.3333V2.66666V13.3333Z" fill="black"/>
                    <path d="M14 5.33332L11.3333 2.66666L8.66667 5.33332" fill="black"/>
                    <path d="M11.3333 2.66666V13.3333V2.66666Z" fill="black"/>
                    <path d="M2 10.6667L4.66667 13.3333M4.66667 13.3333L7.33333 10.6667M4.66667 13.3333V2.66666M14 5.33332L11.3333 2.66666M11.3333 2.66666L8.66667 5.33332M11.3333 2.66666V13.3333" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="sort-text hidden md:block">Sortuj od: Imię i nazwisko</p>
                <p class="sort-text block md:hidden">Sortuj</p>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed } from 'vue';

    let sort: boolean = true;

    const props = defineProps<{
        modelValue: string;
    }>();

    const emit = defineEmits<{
        (event: 'update:modelValue', value: string): void;
        (event: 'sortedByName', sort: boolean): void;
    }>();

    function sortByName() {
        emit('sortedByName', sort);
        sort = !sort;
    }

    const inputValue = computed({
        get: () => props.modelValue,
        set: (value: string) => emit('update:modelValue', value),
    });
</script>

<style scoped lang="scss">
    @use '../assets/variables.scss' as *;
    @use '../assets/breakpoints.scss' as *;

    .search-input {
        outline: none;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 400;
        &::placeholder {
            color: $dark-gray;
        }
    }
    .sort-text {
        font-size: 0.875rem;
        line-height: 1.225rem;
    }
    .custom-shadow {
        box-shadow: rgba(224, 224, 224, 0.2) 0px 4px 2px;
    }
    .border {
        border: 1px solid  $gray;
    }
</style>