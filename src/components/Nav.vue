<template>
    <nav class="bg-white dark:bg-gray-800 dark:text-white/50 fixed right-0 left-0 font-mono">
        <div class="flex justify-between items-center  py-5 md:px-64 px-5  border-b border-gray-200 dark:border-white/20 select-none">
            <div>
                <div class="text-2xl text-gray-500 dark:text-gray-300">Logo</div>
            </div>
            <div class="text-gray-500 dark:text-gray-300 text-sm font-bold hidden sm:block cursor-pointer flex items-center">
                <span class="mr-3 hover:text-gray-800 dark:hover:text-white">Home</span>
                <span class="mr-3 hover:text-gray-800 dark:hover:text-white">Quizzes</span>
                <span class="mr-3 hover:text-gray-800 dark:hover:text-white">About Us</span>
                <span class="mr-3 hover:text-gray-800 dark:hover:text-white">Contacts</span>
                <span @click="toggleDark()" v-if="!isDark" class=" border px-5 py-2 border-yellow-500 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6 inline text-yellow-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </span>
                <span @click="toggleDark()" v-else class=" border px-5 py-2 border-white/30 hover:border-white hover:text-white rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </span>
            </div>
            <div class="sm:hidden" @click="toggleMenu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
        </div>
        <div class=" w-full bg-gray-100 text-gray-500 flex flex-col items-start px-5  py-3 space-y-3 sm:hidden dark:bg-gray-700"
            v-show="menuOpen">
            <span class="block text-sm font-bold cursor-pointer hover:text-gray-800">Home</span>
            <span class="block text-sm font-bold cursor-pointer hover:text-gray-800">Quizzes</span>
            <span class="block text-sm font-bold cursor-pointer hover:text-gray-800">About Us</span>
            <span class="block text-sm font-bold cursor-pointer hover:text-gray-800">Contacts</span>
            <span @click="toggleDark()" v-if="!isDark" class=" border px-5 py-2 border-yellow-500 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6 inline text-yellow-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </span>
                <span @click="toggleDark()" v-else class=" border px-5 py-2 border-white/30 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 inline text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </span>
        </div>
    </nav>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        let menuOpen = ref(false);

        let toggleMenu = () => {
            menuOpen.value = !menuOpen.value;
        };

        return { toggleMenu, menuOpen};
    },
};
</script>

<style >
nav {
    /* width: 1400px; */
    margin: 0 auto;
}
</style>
