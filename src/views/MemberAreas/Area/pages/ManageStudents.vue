<script setup>
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
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue'

import { CheckIcon, ChevronUpDownIcon, ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/vue/20/solid'

// Modals
let isOpenModalAddStudent = ref(false);
function openModalAddStudent() {
    isOpenModalAddStudent.value = true;
}

let isOpenModalEditStudent = ref(false);
function openModalEditStudent() {
    isOpenModalEditStudent.value = true;
}

let isOpenModalAddMultiple = ref(false);
function openModalAddMultiple() {
    isOpenModalAddMultiple.value = true;
}

let isOpenModalConfirmDelete = ref(false);
function openModalConfirmDelete() {
    isOpenModalConfirmDelete.value = true;
}

function closeModal() {
    isOpenModalAddStudent.value = false;
    isOpenModalEditStudent.value = false;
    isOpenModalAddMultiple.value = false;
    isOpenModalConfirmDelete.value = false;
}


let showNotification = ref(false);
function notificationAddStudent() {

    closeModal();
    showNotification.value = true;

    setTimeout(() => {
        showNotification.value = false;
    }, 3500);

}

function stopPropagation(event) {
    event.stopPropagation()
}

// Students:
const students = [
    {
        id: 1,
        name: 'Kleberson Fonseca das Neves',
        email: 'kleb_fonseca@bol.com.br',
        dateIncluded: '11/11/2022',
        dateLastAccess: '29/11/2022',
        status: 'active',
        image: 'https://static.comschool.com.br/bnn/l_comschool/2021-06-14/5470_Cleber-Fonseca.jpg'
    }
]


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


</script>


<script type="text/javascript">

import { ref } from 'vue'
import Header from "@/components/Header.vue";

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

export default {

};
</script>

<template>

    <div class="lg:flex lg:justify-between pb-4">
        <!-- Header -->
        <Header title="Gerenciar alunos"></Header>
        <!-- Action buttons -->
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="block">
                <button
                    type="button"
                    @click="openModalAddMultiple"
                    class="inline-flex items-center rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-ml-1 mr-2 h-4 w-4 font-bold">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    Adição em massa
                </button>
            </span>
            <span class="ml-1">
                <button
                    type="button"
                    @click="openModalAddStudent"
                    class="inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar aluno
                </button>
            </span>
        </div>
    </div>

    <div class="w-full mx-auto">
        <div class="py-4">

            <div class="group w-100 md:w-1/2 lg:w-1/3">
                <label for="4" class="block w-full text-sm font-medium text-gray-400 mb-2">Pesquisar aluno:</label>
                <div class="relative flex items-center">
                    <input
                        type="text"
                        placeholder="Digite e-mail ou nome..."
                        class="relative border-primary text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border border-gray-700 py-2 pr-3 pl-10 font-medium outline-none transition" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-indigo-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>

            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full rounded-md bg-gray-900 border border-gray-700">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th class="px-5 py-3 border-b-2 border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider rounded-tl-md">
                                    Nome:
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                    Incluído em:
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                    Último acesso:
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider">
                                    Status:
                                </th>
                                <th class="px-5 py-3 border-b-2 border-gray-700 bg-gray-800 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider rounded-tr-md">
                                    Ações:
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <!-- Empty state -->
                            <tr v-if="students.length == 0">
                                <td class="px-4 py-3 lg:py-4 border-b border-gray-200" colspan="5">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-indigo-500 h-5 w-5 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                        </svg>
                                        <span class="text-sm font-medium text-gray-200">
                                            Nenhum aluno adicionado ainda.
                                        </span>
                                    </div>
                                </td>
                            </tr>

                            <tr v-for="student in students">
                                <td class="px-4 py-3 border-b border-gray-700 bg-gray-900 text-sm">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0 w-8 h-8">
                                            <img class="w-full h-full rounded-full" :src="student.image" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-200 font-medium whitespace-no-wrap">
                                                {{ student.name }}
                                            </p>
                                            <p class="text-gray-400 whitespace-no-wrap text-xs mt-1">
                                                {{ student.email }}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-3 border-b border-gray-700 bg-gray-900 text-sm">
                                    <p class="text-gray-400 whitespace-no-wrap">
                                        {{ student.dateIncluded }}
                                    </p>
                                </td>
                                <td class="px-4 py-3 border-b border-gray-700 bg-gray-900 text-sm">
                                    <p v-if="student.dateLastAccess" class="text-gray-400 whitespace-no-wrap">
                                        {{ student.dateLastAccess }}
                                    </p>
                                    <p v-if="!student.dateLastAccess" class="text-gray-400 whitespace-no-wrap">
                                        –
                                    </p>
                                </td>
                                <td class="px-4 py-3 border-b border-gray-700 bg-gray-900 text-sm">
                                    <span
                                        v-if="student.status == 'active'"
                                        class="inline-block px-2 py-1 font-semibold text-green-900 bg-green-100 text-xs rounded-full leading-tight">
                                        Ativo
                                    </span>
                                    <span
                                        v-if="student.status == 'blocked'"
                                        class="inline-block px-2 py-1 font-semibold text-red-900 bg-red-100 text-xs rounded-full leading-tight">
                                        Bloqueado
                                    </span>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-700 bg-gray-900 text-sm text-left">
                                    <Menu as="div" class="relative z-5">
                                        <div class="inline-flex flex-row justify-center items-center h-full">
                                            <MenuButton @click="stopPropagation" class="flex p-0 rounded-md bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-gray-800">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                </svg>
                                            </MenuButton>
                                        </div>
                                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                            <MenuItems class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <MenuItem v-slot="{ active }">
                                                <a
                                                    href="javascript:void(0);"
                                                    @click="openModalEditStudent"
                                                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-left text-gray-700']">
                                                    Editar aluno
                                                </a>
                                                </MenuItem>
                                                <MenuItem v-slot="{ active }">
                                                <a href="javascript:void(0);" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-left text-gray-700']">
                                                    Reenviar acesso
                                                </a>
                                                </MenuItem>
                                                <MenuItem v-slot="{ active }">
                                                <a @click="openModalConfirmDelete" href="javascript:void(0);" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-left text-red-500']">
                                                    Excluir aluno
                                                </a>
                                                </MenuItem>
                                            </MenuItems>
                                        </transition>
                                    </Menu>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between p-4 lg:px-6 lg:py-5">
                        <div>
                            <p class="text-sm text-gray-400">
                                Total de:
                                <span class="font-semibold text-gray-300">11.834 alunos</span>
                            </p>
                        </div>
                        <div>
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a href="#" class="relative inline-flex items-center rounded-l-md border border-gray-700 bg-gray-900 px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50 focus:z-20">
                                    <span class="sr-only">Anterior</span>
                                    <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                                </a>
                                <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                                <a href="#" aria-current="page" class="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-600 px-4 py-2 text-sm font-medium text-white focus:z-20">1</a>
                                <a href="#" class="relative inline-flex items-center border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50 focus:z-20">2</a>
                                <a href="#" class="relative hidden items-center border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50 focus:z-20 md:inline-flex">3</a>
                                <span class="relative inline-flex items-center border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-700">...</span>
                                <a href="#" class="relative hidden items-center border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50 focus:z-20 md:inline-flex">8</a>
                                <a href="#" class="relative inline-flex items-center border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50 focus:z-20">9</a>
                                <a href="#" class="relative inline-flex items-center border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50 focus:z-20">10</a>
                                <a href="#" class="relative inline-flex items-center rounded-r-md border border-gray-700 bg-gray-900 px-2 py-2 text-sm font-medium text-gray-300 hover:bg-gray-50 focus:z-20">
                                    <span class="sr-only">Next</span>
                                    <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Adicionar aluno -->
    <TransitionRoot appear :show="isOpenModalAddStudent" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-30"></div>
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
                                Adicionar aluno
                            </DialogTitle>
                            <div class="mt-6">
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-700">
                                        Nome e sobrenome:
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Digite o nome completo"
                                        class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-2.5 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-700">
                                        E-mail:
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Informe o e-mail do aluno"
                                        class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-2.5 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                                </div>
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-medium text-gray-700">
                                        Produtos que serão liberados:
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
                                    @click="notificationAddStudent">
                                    Adicionar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Modal Adicionar em Massa -->
    <TransitionRoot appear :show="isOpenModalAddMultiple" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-30"></div>
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
                                Adicionar alunos em massa
                            </DialogTitle>
                            <div class="mt-6">
                                <router-link
                                    to="/planilha"
                                    class="mb-6 inline-flex items-center justify-start text-red-600 hover:text-red-700 text-sm font-semibold gap-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                    <span>
                                        Baixar planilha modelo
                                    </span>
                                </router-link>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-700">
                                        Clique para fazer upload do arquivo .xlsx:
                                    </label>
                                    <div class="w-full flex flex-row">
                                        <input
                                            type="file"
                                            accept="image/png, image/gif, image/jpeg, image/webp, image/jpg"
                                            required
                                            class="border border-gray-300 text-gray-700 text-sm bg-white focus:border-gray-300 focus:outline-none w-full rounded-md py-2 px-2.5 font-medium outline-none transition" />
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <label class="block mb-2 text-sm font-medium text-gray-700">
                                        Produtos que serão liberados para estes alunos:
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
                                    @click="notificationAddStudent">
                                    Adicionar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Modal Editar aluno -->
    <TransitionRoot appear :show="isOpenModalEditStudent" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-30"></div>
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
                                Editar aluno
                            </DialogTitle>
                            <div class="mt-6">
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-700">
                                        Nome e sobrenome:
                                    </label>
                                    <input
                                        value="Kleberson Fonseca das Neves"
                                        type="text"
                                        required
                                        placeholder="Digite o nome completo"
                                        class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-2.5 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-700">
                                        E-mail:
                                    </label>
                                    <input
                                        value="kleb_fonseca@bol.com.br"
                                        type="email"
                                        required
                                        placeholder="Informe o e-mail do aluno"
                                        class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-2.5 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-medium text-gray-700">
                                        Produtos liberados:
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
                                    @click="notificationAddStudent">
                                    Salvar
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
                <div class="fixed inset-0 bg-black bg-opacity-30"></div>
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
                                    <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Excluir aluno</h3>
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">Tem certeza de que deseja excluir este aluno? Esta ação não poderá ser desfeita.</p>
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
                                    @click="notificationAddStudent">
                                    Confirmar exclusão
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Notification Success -->
    <transition appear name="slide-fade">
        <div v-if="showNotification" class="float-right min-w-full fixed bottom-3 right-0 md:right-3">
            <div class="flex flex-col space-y-3 w-100 md:w-1/2 xl:w-1/3 mx-auto md:mx-0 md:ml-auto shadow-lg" style="max-width:93vw;">
                <div class="bg-green-100 border border-lime-800 p-5 w-full rounded-md">
                    <div class="flex justify-between">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-green-500 h-4 w-4">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
                            </svg>
                            <div class="flex-1 leading-tight text-sm text-green-700 font-semibold">
                                Adição realizada com sucesso!
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


<style scoped>
input::file-selector-button,
::-webkit-file-upload-button {
    color: rgb(255 255 255);
    background-color: rgb(79 70 229);
    border-color: rgb(79 70 229);
    border-radius: 3px;
    font-size: 14px;
    font-weight: 600;
    padding: 0.25rem 1rem;
    margin-right: .5rem;
}
</style>