<script setup>


import { CheckIcon, ChevronUpDownIcon, PlusIcon } from '@heroicons/vue/20/solid'

import { ref, computed } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'

const products = [
    {
        id: 1,
        title: 'Aprendendo a vender online com escala'
    },
    {
        id: 2,
        title: 'Scripts para vender no automático pelo Whatsapp'
    },
    {
        id: 3,
        title: 'Curso de biomecânica avançada'
    },
    {
        id: 4,
        title: 'Curso de Powerlifting e Agachamento'
    },
    {
        id: 5,
        title: 'Periodização e Controle de Carga no Treinamento Físico'
    },
    {
        id: 6,
        title: 'Método indiano – Fature 5 dígitos com jQuery'
    }
]
const selectedProduct = ref([products[0], products[1]]);


// Modal 'Add integration'
const isOpenModalAddIntegration = ref(false);
function openModalAddIntegration() {
    isOpenModalAddIntegration.value = true;
}

const isOpenModalConfirmDelete = ref(false);
function openModalConfirmDelete() {
    isOpenModalConfirmDelete.value = true;
}

function closeModal() {
    isOpenModalAddIntegration.value = false;
    isOpenModalConfirmDelete.value = false;
}
</script>

<script type="text/javascript">

import Breadcrumb from "@/components/Breadcrumb.vue"

export default {
    data: function () {
        return {
            show: true
        };
    },
    methods: {
        copyToClipboard: function (ev) {
            let input = ev.closest('input')
            console.log(input)
        }
    }
};
</script>

<template>
    <Breadcrumb
        item1Route="/area/integracoes"
        item1Text="Integrações"
        item2Text="Pepper" />

    <div class="w-full flex flex-col-reverse justify-start items-start md:flex-row md:justify-between md:items-center">
        <!-- Integration logo -->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 882 193" version="1.1" class="h-6 mt-8 md:mt-0">
            <g xmlns="http://www.w3.org/2000/svg">
                <g>
                    <g>
                        <path d="M232.93,148.39H208.12v-115h82.62q17.42,0,28,10.18a33.3,33.3,0,0,1,10.59,25q0,16.92-10.67,26t-27.93,9H232.93Zm-.17-94.78V83.34h53.88q9.19,0,13.55-3.53t4.35-11.25q0-7.73-4.35-11.33t-13.55-3.62Z" class="ppr-logo-fill"></path>
                        <path d="M384.53,151q-22.33,0-35.89-12t-13.55-31.7q0-19.71,13.55-31.7t35.89-12q22,0,35.56,10.27t13.88,27v13.47H359.73q2,9.36,9.77,13.55t23.24,4.19q4.77,0,9.2-.42a72.61,72.61,0,0,0,7.31-1,56,56,0,0,0,6.41-1.73q3.52-1.14,5.17-1.8t5-2.14l4.52-2V143a134.09,134.09,0,0,1-21.52,6.32Q399.65,151,384.53,151m-25.29-48,51.24-1.15A17.16,17.16,0,0,0,403,88q-7.14-5.17-18.48-5.17-10.51,0-17.41,5.42a20.68,20.68,0,0,0-7.88,14.78" class="ppr-logo-fill"></path>
                        <path d="M515.77,63.63q20.21,0,32.85,12.24T561.26,108q0,19-12.23,31t-30.31,12q-15.77,0-27.59-7.63a32.25,32.25,0,0,1-14.62-21.6h-.66v59.46H451.22v-115h25.29L472.9,93h2a34.87,34.87,0,0,1,14.29-21.27q11.32-8.13,26.61-8.13m-6.9,19.22q-11.83,0-20.2,6.73t-8.38,18.07a21.19,21.19,0,0,0,8.38,17.58q8.37,6.57,20.2,6.57,12.32,0,20.28-6.49t8-17.66q0-11.49-8-18.15t-20.28-6.65" class="ppr-logo-fill"></path>
                        <path d="M641.58,63.63q20.2,0,32.85,12.24T687.08,108q0,19-12.24,31t-30.3,12q-15.76,0-27.59-7.63a32.22,32.22,0,0,1-14.62-21.6h-.66v59.46H577v-115h25.3L598.71,93h2A35,35,0,0,1,615,71.76q11.34-8.13,26.61-8.13m-6.89,19.22q-11.84,0-20.21,6.73t-8.38,18.07a21.22,21.22,0,0,0,8.38,17.58q8.38,6.57,20.21,6.57,12.31,0,20.28-6.49t8-17.66q0-11.49-8-18.15t-20.28-6.65" class="ppr-logo-fill"></path>
                        <path d="M746.38,151q-22.35,0-35.89-12t-13.55-31.7q0-19.71,13.55-31.7t35.89-12q22,0,35.56,10.27t13.88,27v13.47H721.57q2,9.36,9.78,13.55t23.24,4.19q4.75,0,9.2-.42a73,73,0,0,0,7.31-1,55.84,55.84,0,0,0,6.4-1.73c2.36-.76,4.08-1.36,5.18-1.8s2.76-1.15,5-2.14l4.51-2V143a133.71,133.71,0,0,1-21.51,6.32Q761.48,151,746.38,151m-25.3-48,51.25-1.15A17.14,17.14,0,0,0,764.85,88q-7.14-5.17-18.47-5.17-10.51,0-17.41,5.42a20.72,20.72,0,0,0-7.89,14.78" class="ppr-logo-fill"></path>
                        <path d="M835.57,148.39H810.93V66.26h26.94l-3.29,30.55h1.64q3.28-17.9,14-25.54t33-7.64V84.49q-25.62,0-36.63,8.3t-11,28Z" class="ppr-logo-fill"></path>
                        <path d="M37.92,173.11c.21.11.41.23.61.32a70.74,70.74,0,0,0,19.75,6.8l1.1.35v1.65a11,11,0,0,0,11,11H92.94V179.15A90.55,90.55,0,0,0,137.39,27.47,90,90,0,0,0,74.6.36L56.11,0V40.39a71.46,71.46,0,0,0-52.46,47,2.36,2.36,0,0,0-.28.12,72.51,72.51,0,0,0,34.55,85.58m-1.43-67.33A35.05,35.05,0,0,1,71.06,75,21.6,21.6,0,0,0,86,69.09,20.9,20.9,0,0,0,92.37,54V40.31A54.25,54.25,0,0,1,76.05,145.05l-.13-.06-4.27.16-2.51-.05c-1.18-.08-2.34-.21-3.5-.4l-.59-.1a35.07,35.07,0,0,1-28.19-27.86l-.21-1.09a28.36,28.36,0,0,1-.3-8.77Z" style="fill: #e02932"></path>
                    </g>
                </g>
            </g>
        </svg>

        <div>
            <button
                @click="openModalAddIntegration"
                type="button"
                :class="pepper.darkMode.button.headerPrimary">
                <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                <span>Adicionar integração</span>
            </button>
        </div>
    </div>
    <div class="pb-4">
        <span class="leading-tight text-sm text-gray-400 font-medium block mt-8 mb-2">
            Configure a liberação dos conteúdos e acessos para os seus alunos que comprarem na Pepper.
        </span>
    </div>

    <!-- Empty state -->
    <div
        v-if="integration == 0"
        class="p-5 lg:px-6 mt-4"
        :class="pepper.darkMode.card.container">
        <div class="flex space-x-2 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-500 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <div class="leading-tight text-sm text-gray-200 font-medium">Nenhuma integração cadastrada.</div>
        </div>
    </div>

    <div class="p-5 lg:p-6 mt-4" :class="pepper.darkMode.card.container">
        <div class="w-full flex flex-col md:flex-row items-start md:items-center md:justify-between gap-y-4">
            <div class="inline-flex items-center justify-start gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
                <span class="leading-tight text-base text-white font-bold block">
                    Nome da integração configurada
                </span>
            </div>
            <div class="flex justify-center rounded-lg text-lg mb-3 md:mb-0" role="group">
                <button :class="pepper.darkMode.button.group.outline.first">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 mr-1 -ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <span>Editar</span>
                </button>
                <button
                    @click="openModalConfirmDelete"
                    :class="pepper.darkMode.button.group.outline.second">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 mr-1 -ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    <span>Excluir</span>
                </button>
            </div>
        </div>
        <div class="mt-4 mb-2 text-sm block">
            <span :class="pepper.darkMode.text.integration.label">Data de criação:</span>
            <span class="text-gray-400 font-medium ml-2">28/11/2022</span>
        </div>
        <div class="mt-4 mb-6 text-sm block w-full">
            <span :class="pepper.darkMode.text.integration.label">Esta integração libera o acesso aos conteúdos:</span>
            <ul class="block w-full text-sm mt-3">
                <li v-for="p in products" class="text-gray-400 font-medium text-left flex items-center justify-start gap-x-2 xl:gap-x-2.5 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 text-green-400" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                    {{ p.title }}
                </li>
            </ul>
        </div>
        <div class="mt-4 mb-2 text-sm block w-full">
            <span :class="pepper.darkMode.text.integration.label">URL de webhook:</span>
            <div class="w-full flex items-center justify-center mt-3">
                <input
                    type="text"
                    value="https://b90gs20b09.execute-api.us-east-1.amazonaws.com/api/webhook/982d9515-73cd-4f99-b4fe-2304acd6b00b"
                    readonly
                    class="rounded-r-none font-light"
                    :class="pepper.darkMode.form.input" />
                <button
                    type="button"
                    @click="copyToClipboard"
                    class="rounded-l-none px-4 lg:px-5 xl:px-6"
                    :class="pepper.darkMode.button.primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 mr-1 -ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                    <span>Copiar</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Modal - Adicionar integração -->
    <TransitionRoot appear :show="isOpenModalAddIntegration" as="template">
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
                                Adicionar integração
                            </DialogTitle>
                            <div class="mt-6">
                                <!-- Nome da integração -->
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-medium text-gray-700">
                                        Digite um nome para esta integração:
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Digite o nome"
                                        class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-2.5 px-3 font-medium outline-none transition" />
                                </div>
                                <!-- Select produtos -->
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-medium text-gray-700">
                                        Selecione os conteúdos que serão liberados para quem comprar:
                                    </label>
                                    <Listbox v-model="selectedProduct" multiple>
                                        <div class="relative mt-1">
                                            <ListboxButton
                                                class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none w-full rounded-md py-2.5 px-3 font-medium outline-none">
                                                <span class="block truncate text-left text-sm font-medium text-gray-700" style="max-width:95%">
                                                    {{ selectedProduct.map((p) => p.title).join(', ') }}
                                                </span>
                                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </span>
                                            </ListboxButton>
                                            <transition
                                                leave-active-class="transition duration-100 ease-in"
                                                leave-from-class="opacity-100"
                                                leave-to-class="opacity-0">
                                                <ListboxOptions
                                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    <ListboxOption
                                                        v-slot="{ active, selected }"
                                                        v-for="p in products"
                                                        :key="p.title"
                                                        :value="p"
                                                        as="template">
                                                        <li :class="[active ? 'bg-indigo-100 text-indigo-900' : 'text-gray-900', 'relative cursor-pointer select-none py-2 pl-10 pr-4',]">
                                                            <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate',]">
                                                                {{ p.title }}
                                                            </span>
                                                            <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        </li>
                                                    </ListboxOption>
                                                </ListboxOptions>
                                            </transition>
                                        </div>
                                    </Listbox>
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
        </Dialog>
    </TransitionRoot>

    <!-- Modal confirm delete -->
    <TransitionRoot appear :show="isOpenModalConfirmDelete" as="template">
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
                        <DialogPanel class="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all overflow-visible">
                            <div class="my-8 mx-6 sm:flex sm:items-start">
                                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Excluir integração?</h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">Tem certeza de que deseja excluir esta integração? Esta ação não poderá ser desfeita.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-b-lg px-4 py-3 sm:px-6 flex items-center justify-end">
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300"
                                    @click="closeModal">
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-pepper-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    @click="notification">
                                    Confirmar exclusão
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

</template>