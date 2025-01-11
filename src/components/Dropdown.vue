<template>
    <div class="flex items-center justify-between sm:justify-start gap-3">
        <p class="gray-text">Pozycji na stronie:</p>
        <div class="relative">
            <select
                v-model="selectedValue"
                @change="updateRecordsPerPage"
                class="px-4 py-2.5 pr-6 border rounded-xl"
            >
                <option v-for="option in options" :key="option" :value="option">
                    {{ option }}
                </option>
            </select>
            <svg class="absolute right-2.5 top-1/2 w-3 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            </svg>
        </div>
    </div>
</template>
  
<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps<{
        options: number[];
        defaultValue: number;
    }>();

    const emit = defineEmits<{
        (event: 'updateRecordsPerPage', value: number): void;
    }>();

    const selectedValue = ref(props.defaultValue);

    function updateRecordsPerPage() {
        emit('updateRecordsPerPage', selectedValue.value);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>
<style lang="scss">
    @use '../assets/variables.scss' as *;

    select {
        border-color: $gray;
        appearance: none;
    }
</style>