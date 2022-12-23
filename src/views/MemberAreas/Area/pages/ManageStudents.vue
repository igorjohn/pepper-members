<script setup>
import { ref, computed } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,

    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,

} from '@headlessui/vue'

import { CheckIcon, ChevronUpDownIcon, ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/vue/20/solid'


// Modal 'Add Course'
const isOpen = ref(false)

function closeModal() {
    isOpen.value = false
}
function openModal() {
    isOpen.value = true;
}



// Input combobox
const category = [
    { id: 1, name: 'Categoria Empreendedorismo' },
    { id: 2, name: 'Receitas top para emagrecer' },
    { id: 3, name: 'Curso de programação XGH' },
]

let selected = ref(category[0])


let query = ref('')

let filteredCategories = computed(() =>
    query.value === ''
        ? category
        : category.filter((cat) =>
            cat.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
)
</script>


<script type="text/javascript">

import { ref } from 'vue'

import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import CardCourse from "@/components/CardCourse.vue";

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'


export default {
    components: {
        Header,
        Sidebar,
        CardCourse

    },

    methods: {
        show: function (args) {
            args.preventFocus = true;
        },
        openModal: function (args) {
            args.preventFocus = true;
        }
    }

};
</script>

<template>

    <div class="lg:flex lg:justify-between pb-4">
        <!-- Header -->
        <Header title="Gerenciar alunos"></Header>
        <!-- Action buttons -->
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="block">
                <button type="button" class="inline-flex items-center rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="-ml-1 mr-2 h-4 w-4 font-bold">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                    Adição em massa
                </button>
            </span>
            <span class="ml-1">
                <button
                    type="button"
                    @click="openModal"
                    class="inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar aluno
                </button>
            </span>
        </div>
    </div>

    <div class="w-full mx-auto">
        <div class="py-4">

            <div class="group w-72 md:w-80 lg:w-96">
                <label for="4" class="block w-full text-sm font-medium text-gray-400 mb-2">Pesquisar aluno:</label>
                <div class="relative flex items-center">
                    <input
                        id="4"
                        type="text"
                        class="relative border-primary text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 pr-3 pl-10 font-medium outline-none transition" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400 absolute left-2 transition-all duration-200 ease-in-out group-focus-within:text-indigo-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
            </div>

            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div
                    class="inline-block min-w-full shadow-md rounded-md bg-white overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Nome:
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Incluído em:
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Último acesso:
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                    Status:
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            <!-- Empty state -->
                            <tr>
                                <td class="px-4 py-3 lg:py-4 border-b border-gray-200 bg-white" colspan="5">
                                    <div class="flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-indigo-300 h-5 w-5 mr-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                        </svg>
                                        <span class="text-sm font-medium text-gray-600">
                                            Nenhum aluno adicionado ainda.
                                        </span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td class="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img
                                                class="w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                Molly Sanders
                                            </p>
                                            <p class="text-gray-600 whitespace-no-wrap text-xs mt-1">molly@gmail.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">11/11/2022</p>
                                </td>
                                <td class="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">11/11/2022</p>
                                </td>
                                <td class="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                                    <span class="inline-block px-2 py-1 font-semibold text-green-900 bg-green-100 text-xs rounded-full leading-tight">
                                        Ativo
                                    </span>

                                    <!-- v-if = """""bloqueado""""" -->
                                    <!-- <span class="inline-block px-2 py-1 font-semibold text-red-900 bg-red-100 text-xs rounded-full leading-tight">
                                        Bloqueado
                                    </span> -->
                                </td>
                                <td
                                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                    <button
                                        type="button"
                                        class="inline-block text-gray-500 hover:text-gray-700">
                                        <svg
                                            class="inline-block h-4 w-4 fill-current"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                        </tbody>

                    </table>


                    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between p-4 lg:px-6 lg:py-5">
                        <div>
                            <p class="text-sm text-gray-700">
                                Exibindo
                                {{ ' ' }}
                                <span class="font-semibold">1</span>
                                {{ ' ' }}
                                –
                                {{ ' ' }}
                                <span class="font-semibold">10</span>
                                {{ ' ' }}
                                de
                                {{ ' ' }}
                                <span class="font-semibold">97</span>
                                {{ ' ' }}
                                resultados
                            </p>
                        </div>
                        <div>
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a href="#" class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                    <span class="sr-only">Anterior</span>
                                    <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                                </a>
                                <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                                <a href="#" aria-current="page" class="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">1</a>
                                <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">2</a>
                                <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">3</a>
                                <span class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...</span>
                                <a href="#" class="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">8</a>
                                <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">9</a>
                                <a href="#" class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">10</a>
                                <a href="#" class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
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
</template>

<style scoped>

</style>