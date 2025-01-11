<template>
    <div class="flex justify-between items-center mb-4 sm:mb-6">
        <div class="flex items-center gap-4">
            <h1 class="heading-title">Użytkownicy</h1>
            <div title="Lorem Ipsum is simply dummy text">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_9_45)">
                    <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 12V9" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 6H9.0075" stroke="#939393" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_9_45">
                    <rect width="18" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
        <div>
            <button class="invite-user flex items-center gap-2.5 py-4 px-4 sm:px-5 rounded-xl">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.33331 7.99998H12.6666M7.99998 3.33331V12.6666" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="invite-button text-white hidden sm:block">Zaproś użytkownika</p>
            </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../assets/variables.scss' as *;
    @use '../assets/breakpoints.scss' as *;

    .heading-title {
        font-size: 2rem;
        line-height: 2.4rem;
        font-weight: 600;
        letter-spacing: -0.063rem;
        @media (max-width: $br-mobile) {
            font-size: 1.75rem;
            line-height: 2.1rem;
        }
    }
    .invite-button {
        font-size: 0.875rem;
        line-height: 1.225rem;
        font-weight: 700;
        letter-spacing: -0.01rem;
    }
    .invite-user {
        transition: .3s;
        background-color: $blue;
        &:hover {
            background-color: $blue-hover;
        }
    }
    svg {
        path {
            transition: .3s;
        }
        &:hover {
            path {
                stroke: $black;
            }
        }
    }
</style>