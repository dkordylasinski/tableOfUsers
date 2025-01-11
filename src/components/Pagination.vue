<template>
    <div class="flex items-center justify-end gap-4 sm:gap-6 flex-col sm:flex-row">
        <span class="gray-text">Strona {{ currentPage }} z {{ totalPages }}</span> 
        <div v-if="totalPages > 1" class="flex items-center justify-between sm:justify-center gap-1 w-full sm:w-auto">
            <div class="flex items-center gap-1">
                <button v-if="props.currentPage >= 3" @click="firstPageButtonClick" class="arrow-button xs-mobile flex">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#000"/>
                    </svg>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#000"/>
                    </svg>
                </button>     
                <button
                    :disabled="props.currentPage === 1"
                    @click="prevPage"
                >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z" fill="#000"/>
                    </svg>
                </button>
            </div>
            <div class="flex gap-1">
                <button 
                    v-if="props.currentPage == totalPages && props.currentPage - 2 > 0"
                    @click="emit('newCurrentPage', props.currentPage - 2)">
                    {{ props.currentPage - 2 }}
                </button>
                <button 
                    v-if="props.currentPage > 1" 
                    @click="prevPage">
                    {{ props.currentPage - 1 }}
                </button>
                <button 
                    class="current-button">
                    {{ props.currentPage }}
                </button>
                <button 
                    v-if="props.currentPage < totalPages" 
                    @click="nextPage">
                    {{ props.currentPage + 1 }}
                </button>
                <button 
                    v-if="props.currentPage === 1 && totalPages > 2" 
                    @click="emit('newCurrentPage', 3)">
                    {{ props.currentPage + 2 }}
                </button>
            </div>
            <div class="flex gap-1">
                <button
                    :disabled="currentPage === totalPages"
                    @click="nextPage"
                >
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 12L8 6L2 0L0.6 1.4L5.2 6L0.6 10.6L2 12Z" fill="black"/>
                    </svg>
                </button>
                <button v-if="props.currentPage <= totalPages - 2" @click="lastPageButtonClick" class="arrow-button xs-mobile flex">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L8 6L2 0L0.6 1.4L5.2 6L0.6 10.6L2 12Z" fill="black"/>
                    </svg>
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12L8 6L2 0L0.6 1.4L5.2 6L0.6 10.6L2 12Z" fill="black"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { defineProps, defineEmits, computed } from 'vue';

    const props = defineProps<{
        totalRecords: number;
        recordsPerPage: number;
        currentPage: number;
    }>();

    const emit = defineEmits<{
        (event: 'newCurrentPage', newPage: number): void;
    }>();

    const totalPages = computed(() => Math.ceil(props.totalRecords / props.recordsPerPage));

    function prevPage() {
        if (props.currentPage > 1) {
            emit('newCurrentPage', props.currentPage - 1);
            scrollToTop();
        }
    }

    function nextPage() {
        if (props.currentPage < totalPages.value) {
            emit('newCurrentPage', props.currentPage + 1);
            scrollToTop();
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function firstPageButtonClick() {
        emit('newCurrentPage', 1);
        scrollToTop();
    }

    function lastPageButtonClick() {
        emit('newCurrentPage', totalPages.value);
        scrollToTop();
    }
</script>

<style scoped lang="scss">
    @import '../assets/variables.scss';
    @import '../assets/breakpoints.scss';

    button {
        border-radius: 0.75rem;
        border: 1px solid $gray;
        display: grid;
        place-items: center;
        width: 2.625rem;
        height: 2.625rem;
        font-size: 0.906rem;
        line-height: 1.25rem;
    }
    button:disabled {
        svg {
            opacity: 0.2;
        }
        cursor: not-allowed;
    }
    .arrow-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .current-button {
        border-color: $blue;
        background-color: $blue;
        color: $white;
    }
    .xs-mobile {
        @media (max-width: $br-xs-mobile) {
            display: none;
        }
    }
</style>
  