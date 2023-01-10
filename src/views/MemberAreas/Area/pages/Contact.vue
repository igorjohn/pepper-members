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

// notification
let showNotification = ref(false);
function notification() {
    showNotification.value = true;

    setTimeout(() => {
        showNotification.value = false;
    }, 3500);

}
</script>

<script type="text/javascript">

import { ref } from 'vue'
import Header from "@/components/Header.vue";

// Run 2 functions
function bindFunctions(func1, func2) {
    func1();
    setTimeout(() => { func2() }, 1600)
}


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
                <div class="col-span-2 flex items-center justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3 text-indigo-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <span v-if="!emailSupport" class="font-semibold text-base text-gray-700">
                        Envie a sua mensagem para o e-mail de suporte do produtor:
                    </span>

                    <span v-if="emailSupport" class="font-semibold text-base text-gray-700">
                        Envie a sua mensagem para o e-mail de suporte do produtor, ou se preferir, clique no botão do WhatsApp:
                    </span>
                </div>
                <div class="col-span-2">
                    <label class="block mb-2 text-sm font-medium text-gray-700">
                        Área de membros:
                    </label>
                    <select
                        class="border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]">
                        <option value="Cinética: Escola do movimento" selected disabled>
                            Cinética: Escola do movimento
                        </option>
                    </select>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                        Seu nome:
                    </label>
                    <input
                        type="text"
                        readonly
                        value="José Afonso Oliveira Antunes"
                        class="border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                </div>
                <div class="col-span-2 md:col-span-1">
                    <label class="block mb-2 text-sm font-medium text-gray-700">
                        Seu e-mail onde receberá a resposta:
                    </label>
                    <input
                        type="email"
                        readonly
                        placeholder="Digite o e-mail"
                        value="igor@gmail.com"
                        class="border-gray-300 text-gray-700 text-sm bg-white disabled:bg-gray-50 placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition" />
                </div>
                <div class="col-span-2">
                    <label class="block mb-2 text-sm font-medium text-gray-700">
                        Assunto:
                    </label>
                    <input
                        type="text"
                        max="500"
                        placeholder="Digite o título da mensagem"
                        value="Quero meu rebolço"
                        class="border-gray-300 text-gray-700 text-sm bg-white disabled:bg-gray-50 placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition" />
                </div>
                <div class="col-span-2">
                    <label class="block mb-2 text-sm font-medium text-gray-700">
                        Mensagem:
                    </label>
                    <textarea
                        type="text"
                        max="5000"
                        placeholder="Digite aqui a sua mensagem"
                        rows="4"
                        class="border-gray-300 text-gray-700 text-sm bg-white disabled:bg-gray-50 placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition" />
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 flex items-center justify-end gap-x-1">
                <button
                    class="inline-flex justify-center items-center rounded-md border border-transparent bg-green-600 hover:bg-green-700 py-2.5 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="none" class="w-3.5 h-3.5 -ml-1 mr-2 text-white">
                        <path
                            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    <span>Contato via WhatsApp</span>
                </button>

                <button
                    @click="bindFunctions(preloader, notification)"
                    class="inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2.5 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="none" class="w-3.5 h-3.5 -ml-1 mr-2 text-white">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                    <span>Enviar por e-mail</span>
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


    <!-- Notification -->
    <transition appear name="slide-fade">
        <div v-if="showNotification" class="float-right min-w-full fixed bottom-3 right-0 md:right-3">
            <div class="flex flex-col space-y-3 w-100 md:w-1/2 xl:w-1/3 mx-auto md:mx-0 md:ml-auto shadow-lg" style="max-width:93vw;">
                <div class="bg-green-100 border border-lime-800 p-5 w-full rounded-md">
                    <div class="flex justify-between">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-green-500 h-4 w-4">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
                            </svg>
                            <div class="flex-1 leading-tight text-sm text-green-700 font-medium">
                                Sua mensagem foi enviada com sucesso!
                            </div>
                        </div>
                        <svg @click="showNotification = !showNotification" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-green-600 h-3 w-3 cursor-pointer">
                            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>