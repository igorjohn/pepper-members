<script setup>

import { ref, computed } from 'vue'
import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'

// Preloader
const isPreloaderShown = ref(false);
function preloader() {
    isPreloaderShown.value = true;
    document.querySelector('#app').classList.add('blured-3');

    setTimeout(() => {
        isPreloaderShown.value = false;
        document.querySelector('#app').classList.remove('blured-3');
    }, 1200);
}

preloader();


</script>
<script type="text/javascript">

import Header from "../../../components/Header.vue";
import Sidebar from "../../../components/Sidebar.vue";
import CardCourse from "../../../components/CardCourse.vue";



export default {
    components: {
        Header,
        Sidebar,
        CardCourse
    }
};
</script>

<template>
    <div class="lg:h-screen lg:w-screen">
        <div class="relative min-h-screen md:flex bg-pepper-dark" data-dev-hint="container">
            <Sidebar />
            <main id="content" class="flex-1 pb-6 pt-48 md:pr-8 md:pl-72 2xl:pl-80 md:pt-48 lg:pt-64 bg-pepper-dark-1 z-0">
                <div class="px-4 py-6 lg:py-10 md:px-2 max-w-7xl mx-auto">
                    <router-view />
                </div>
            </main>
        </div>
    </div>

    <!-- ## PRELOADER PEPPER ## -->
    <TransitionRoot appear :show="isPreloaderShown" as="template">
        <Dialog as="div" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-70"></div>
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-2xl flex flex-col items-center justify-center transform p-6 transition-all overflow-visible">
                            <!-- Spinner -->
                            <div class="pepper-loading w-20 h-20"></div>
                            <!-- Icon preloader -->
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 163 193" version="1.1" class="w-8 h-8 fixed">
                                <g xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M37.92,173.11c.21.11.41.23.61.32a70.74,70.74,0,0,0,19.75,6.8l1.1.35v1.65a11,11,0,0,0,11,11H92.94V179.15A90.55,90.55,0,0,0,137.39,27.47,90,90,0,0,0,74.6.36L56.11,0V40.39a71.46,71.46,0,0,0-52.46,47,2.36,2.36,0,0,0-.28.12,72.51,72.51,0,0,0,34.55,85.58m-1.43-67.33A35.05,35.05,0,0,1,71.06,75,21.6,21.6,0,0,0,86,69.09,20.9,20.9,0,0,0,92.37,54V40.31A54.25,54.25,0,0,1,76.05,145.05l-.13-.06-4.27.16-2.51-.05c-1.18-.08-2.34-.21-3.5-.4l-.59-.1a35.07,35.07,0,0,1-28.19-27.86l-.21-1.09a28.36,28.36,0,0,1-.3-8.77Z" style="fill: #e02932">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>