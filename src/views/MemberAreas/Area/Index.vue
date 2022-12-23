<script setup>
import { ref, computed } from 'vue'

import { CheckIcon, ChevronUpDownIcon, PlusIcon } from '@heroicons/vue/20/solid'

</script>


<script type="text/javascript">

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import CardCourse from "@/components/CardCourse.vue";

export default {
    components: {
        Header,
        Sidebar,
        CardCourse

    }
};
</script>

<template>
    <div class="h-screen w-screen">

        <div class="relative min-h-screen md:flex bg-gray-900" data-dev-hint="container">
            <input type="checkbox" id="menu-open" class="hidden" />

            <label for="menu-open" class="absolute right-2 bottom-2 shadow-lg rounded-full p-2 bg-gray-100 text-gray-600 md:hidden" data-dev-hint="floating action button">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </label>

            <Sidebar />

            <main id="content" class="flex-1 py-6 md:pr-8 md:pl-80 md:pt-20 bg-gray-900 z-0">
                <div class="px-4 py-6 sm:px-0 lg:py-10 max-w-7xl mx-auto">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>

</style>