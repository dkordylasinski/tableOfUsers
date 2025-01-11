<template>
    <li class="rounded-2xl py-6 px-4">
        <div class="flex items-center justify-between mb-4">
            <label class="checkbox-wrapp">
                <input type="checkbox">
                <svg viewBox="0 0 64 64" height="18px" width="18px">
                    <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" class="path"></path>
                </svg>
            </label>
            <p class="register-date">Data rejestracji: {{ registrationDate }}</p>
        </div>
        <div class="flex items-center gap-2.5 mb-4">
            <div>
                <img :src='user?.image' class="w-8 h-8 rounded-full min-w-8">
            </div>
            <div>
                <p>{{ user?.name }}</p>
                <p class="gray-text">{{ user?.email }}</p>
            </div>
        </div>
        <div class="flex items-center gap-2.5">
            <img :src="'https://flagsapi.com/' + user?.nat + '/shiny/64.png'" class="w-3.5 h-auto">
            <p class="country">{{ user?.country }}</p>
        </div>
    </li>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const props = defineProps({
        user: Object,
        registrationDate: String,
    })
</script>

<style scoped lang="scss">
    @use '../../assets/variables.scss' as *;

    li {
        border: 1px solid $gray;
    }
    .gray-text, .country, .register-date {
        color: $gray5;
    }
    .country {
        font-size: 0.813rem;
        line-height: 1.138rem;
    }
    .register-date {
        font-size: 0.75rem;
        line-height: 1.05rem;
    }
</style>