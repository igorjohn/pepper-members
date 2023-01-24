<script setup>

import { ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/20/solid'

let isOpenModalEditCategory = ref(false);
function openModalEditCategory() {
    isOpenModalEditCategory.value = true;
}

let isOpenModalAddCategory = ref(false);
function openModalAddCategory() {
    isOpenModalAddCategory.value = true;
}

function closeModal() {
    isOpenModalEditCategory.value = false;
    isOpenModalAddCategory.value = false;
}

</script>

<script type="text/javascript">
import Header from "@/components/Header.vue";

import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

export default {
    data() {
        return {
            pepper: this.pepper,
            category: [
                {
                    position: 1,
                    name: 'Empreendedorismo'
                },
                {
                    position: 2,
                    name: 'Educação física e fisioterapia'
                },
                {
                    position: 3,
                    name: 'Programação ágil'
                },
            ]
        };
    }
};
</script>

<template>
    <div class="w-full max-w-7xl mx-auto">

        <!-- Header -->
        <div class="lg:flex lg:justify-between gap-x-4">
            <Header title="Categorias"></Header>
            <div class="flex mt-5 lg:mt-0">
                <button
                    @click="openModalAddCategory"
                    :class="pepper.darkMode.button.headerPrimary">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar categoria
                </button>
            </div>
        </div>
        <!-- End header -->

        <!-- Alert info -->
        <div v-if="category.length > 1" class="mt-8 mb-4 bg-indigo-100 border-l-4 border-indigo-500 rounded text-indigo-900 px-4 py-3 lg:py-3.5" role="alert">
            <div class="flex">
                <div class="py-1"><svg class="fill-current h-4 w-4 text-indigo-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg></div>
                <div>
                    <span class="block text-sm font-semibold mb-1">Para editar os produtos que fazem parte de cada categoria:</span>
                    <span class="block text-sm">
                        Vá em
                        <span class="font-semibold">Curso</span>
                        <span class="font-normal opacity-70">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 inline-flex mx-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </span>
                        <span class="font-semibold">Editar curso</span>
                    </span>
                </div>
            </div>
        </div>

        <!-- Empty state -->
        <div v-if="category.length < 1" :class="pepper.darkMode.card.container" class="p-5 mt-8">
            <div class="flex space-x-2 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-500 h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <div class="leading-tight text-sm text-gray-200 font-medium">Nenhuma categoria cadastrada.</div>
            </div>
        </div>

        <div class="mt-6 mb-10">

            <!-- Category -->
            <template v-for="c in category">
                <div class="w-100 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between gap-x-5 bg-pepper-dark-3 border border-pepper-dark-5 rounded-md px-4 lg:px-6 py-3 mb-2">
                    <span class="block text-base font-semibold text-gray-100">
                        {{ c.name }}
                    </span>
                    <div class="inline-flex items-center mb-1 md:mb-0">
                        <button
                            :class="c.position == 1 ? 'disabled cursor-not-allowed' : 'cursor-pointer hover:bg-indigo-600 hover:border-indigo-600 hover:text-white'"
                            class="min-h-30 bg-transparent border border-indigo-500 rounded-none rounded-l-md px-4 py-1.5 inline-flex items-center gap-x-1 text-xs font-medium text-indigo-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 -mx-1" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                            </svg>
                        </button>
                        <button
                            :class="c.position == category.length ? 'disabled cursor-not-allowed' : 'cursor-pointer hover:bg-indigo-600 hover:border-indigo-600 hover:text-white'"
                            class="min-h-30 bg-transparent border-l-0 border-r border-y border-indigo-500 rounded-none px-4 py-1.5 inline-flex items-center gap-x-1 text-xs font-medium text-indigo-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 -mx-1" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                            </svg>
                        </button>
                        <button
                            @click="openModalEditCategory"
                            class="min-h-30 bg-transparent hover:bg-indigo-600 hover:border-indigo-600 hover:text-white border-x-0 border-y border-indigo-500 rounded-none px-4 py-1.5 inline-flex items-center gap-x-1 text-xs font-medium text-indigo-300 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 -ml-1" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            Editar
                        </button>
                        <button
                            class="min-h-30 bg-transparent hover:bg-indigo-600 hover:border-indigo-600 hover:text-white border border-indigo-500 rounded-none rounded-r-md px-4 py-1.5 inline-flex items-center gap-x-1 text-xs font-medium text-indigo-300 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 -ml-1" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            Excluir
                        </button>
                    </div>
                </div>
            </template>
            <!-- End category -->

        </div>
    </div>

    <!-- Modal Add Nova categoria -->
    <TransitionRoot appear :show="isOpenModalAddCategory" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-50"></div>
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
                        <DialogPanel class="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all overflow-visible">
                            <DialogTitle as="h3" class="text-lg font-bold leading-6 text-gray-800">
                                Adicionar nova categoria
                            </DialogTitle>
                            <div class="mt-6">
                                <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                    Nome da categoria:
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Digite aqui"
                                    class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                            </div>
                            <div class="mt-4 flex items-center justify-end">
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300"
                                    @click="closeModal">
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-pepper-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    @click="closeModal">
                                    Salvar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Modal Editar categoria -->
    <TransitionRoot appear :show="isOpenModalEditCategory" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-50"></div>
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
                        <DialogPanel class="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all overflow-visible">
                            <DialogTitle as="h3" class="text-lg font-bold leading-6 text-gray-800">
                                Editar categoria
                            </DialogTitle>
                            <div class="mt-6">
                                <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                    Nome da categoria:
                                </label>
                                <input
                                    type="text"
                                    required
                                    value="Empreendedorismo"
                                    placeholder="Digite aqui"
                                    class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                            </div>
                            <div class="mt-4 flex items-center justify-end">
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300"
                                    @click="closeModal">
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-pepper-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    @click="closeModal">
                                    Salvar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

</template>