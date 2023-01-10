<script setup>

import { CheckIcon, ChevronUpDownIcon, PlusIcon } from '@heroicons/vue/20/solid'

import { ref, computed } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
} from '@headlessui/vue'
</script>

<script type="text/javascript">

import { ref } from 'vue'
import Header from "@/components/Header.vue";


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


export default {

};
</script>

<template>
    <div class="w-full max-w-5xl mx-auto mb-10">
        <Header title="Contatar suporte"></Header>
    </div>

    <div class="mt-5 lg:col-span-3 lg:mt-0 max-w-5xl mx-auto">
        <div class="shadow overflow-hidden rounded-md">
            <div class="grid grid-cols-2 gap-4 bg-white px-4 py-5 sm:p-6">

                <div class="col-span-2">
                    <label class="block mb-2 text-sm font-medium text-gray-700">
                        Nome da área de membros:
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Defina o nome que irá aparecer"
                        value="Cinética: Escola do movimento"
                        class="border-primary text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                </div>
                <div class="col-span-2">
                    <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                        Link de acesso:
                    </label>
                    <input
                        type="text"
                        readonly
                        value="https://peppermembers.com/cinetica-escola-do-movimento"
                        class="border-primary text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                </div>
                <div class="col-span-2 md:col-span-1">
                    <label class="block mb-2 text-sm font-medium text-gray-700">
                        E-mail de suporte:
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="Digite o e-mail"
                        value="contato@cineticaedu.com"
                        class="border-primary text-gray-700 text-sm bg-white disabled:bg-gray-50 placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition" />
                </div>
                <div class="col-span-2 md:col-span-1">
                    <label class="block mb-2 text-sm font-medium text-gray-700">
                        WhatsApp de suporte:
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Somente números"
                        class="border-primary text-gray-700 text-sm bg-white disabled:bg-gray-50 placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition" />
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                    @click="preloader"
                    class="inline-flex justify-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                    Salvar alterações
                </button>
            </div>
        </div>
    </div>

    <!-- ## PRELOADER PEPPER ## -->
    <TransitionRoot appear :show="isPreloaderShown" as="template">
        <Dialog as="div" @close="stopLoading" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-slate-900 bg-opacity-70"></div>
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
