<template>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" leave="opacity transition ease-in-out duration-500 sm:duration-700">



                            <DialogPanel
                                class="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all overflow-visible">

                                <DialogTitle
                                    as="h3"
                                    class="text-lg font-bold leading-6 text-gray-800">
                                    Adicionar curso
                                </DialogTitle>
                                <div class="mt-6">

                                    <!-- Título -->
                                    <div class="mb-4">
                                        <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                            Título do curso/produto:
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Digite o nome"
                                            class="border-primary text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                                    </div>

                                    <!-- Categoria -->
                                    <div class="mb-4">
                                        <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                            Selecione a categoria:
                                        </label>
                                        <Combobox v-model="selected">
                                            <div class="relative">
                                                <div
                                                    class="relative w-full cursor-default border overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                    <ComboboxInput
                                                        class="w-full border-none rounded-lg bg-white py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                        :displayValue="(cat) => cat.name"
                                                        @change="query = $event.target.value" />
                                                    <ComboboxButton
                                                        class="absolute inset-y-0 right-0 flex items-center pr-2">
                                                        <ChevronUpDownIcon
                                                            class="h-5 w-5 text-gray-400"
                                                            aria-hidden="true" />
                                                    </ComboboxButton>
                                                </div>
                                                <TransitionRoot
                                                    leave="transition ease-in duration-100"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                    @after-leave="query = ''">
                                                    <ComboboxOptions
                                                        class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        <div
                                                            v-if="filteredCategories.length === 0 && query !== ''"
                                                            class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                            Nenhum resultado encontrado
                                                        </div>

                                                        <ComboboxOption
                                                            v-for="cat in filteredCategories"
                                                            as="template"
                                                            :key="cat.id"
                                                            :value="cat"
                                                            v-slot="{ selected, active }">
                                                            <li
                                                                class="relative cursor-default select-none py-2 pl-10 pr-4"
                                                                :class="{
                                                                    'bg-teal-600 text-white': active,
                                                                    'text-gray-900': !active,
                                                                }">
                                                                <span
                                                                    class="block truncate"
                                                                    :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                                    {{ cat.name }}
                                                                </span>
                                                                <span
                                                                    v-if="selected"
                                                                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                                                                    :class="{ 'text-white': active, 'text-teal-600': !active }">
                                                                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                                </span>
                                                            </li>
                                                        </ComboboxOption>
                                                    </ComboboxOptions>
                                                </TransitionRoot>
                                            </div>
                                        </Combobox>
                                    </div>

                                    <!-- Descrição -->
                                    <div class="mb-4">
                                        <label for="about" class="block mb-2 text-sm font-medium text-gray-700">Descrição:</label>
                                        <div class="mt-1">
                                            <textarea id="about" name="about" rows="3" class="border-primary bg-white text-gray-700 text-sm placeholder-gray-400 focus:border-indigo-500 active:border-primary w-full rounded-md border-[1.5px] py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" placeholder="Como você descreve este curso para os seus alunos?"></textarea>
                                        </div>
                                        <p class="mt-1 mb-2 text-xs text-gray-500">Máximo 500 caracteres.</p>
                                    </div>

                                    <!-- Imagem de capa -->
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-2">Imagem de capa: <span class="text-gray-500 text-xs ml-1">(Opcional)</span></label>
                                        <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                            <div class="space-y-1 text-center">
                                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <div class="flex text-xs md:text-sm text-gray-600">
                                                    <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                        <span>Clique para fazer upload</span>
                                                    </label>
                                                    <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                    <p class="pl-1">ou arraste para cá</p>
                                                </div>
                                                <p class="text-xs text-gray-500">PNG, JPG, GIF, WEBP (até 5mb)</p>
                                            </div>
                                        </div>
                                    </div>

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
                                        Adicionar
                                    </button>
                                </div>
                            </DialogPanel>



                        </TransitionChild>
                    </div>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
  
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const open = ref(true)
</script>


<script>

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

export default {
    name: "ModalAddProduct",
    data() {
        return {
            show: false,
        };
    },
};
</script>