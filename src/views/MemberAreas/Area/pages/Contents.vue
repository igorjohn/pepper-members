<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
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

import { CheckIcon, ChevronUpIcon, ChevronDownIcon, PlusIcon } from '@heroicons/vue/20/solid'
import { TrashIcon } from '@heroicons/vue/24/outline'


// Modal 'Add Course'
let isOpenModalAddProduct = ref(false);
function openModalAddProduct() {
    isOpenModalAddProduct.value = true;
}

let isOpenModalAddCategory = ref(false);
function openModalAddCategory() {
    isOpenModalAddCategory.value = true;
}

function closeModal() {
    isOpenModalAddProduct.value = false;
    isOpenModalAddCategory.value = false;
}


// Admin components
const isAdmin = true;

// Input combobox
const category = [
    { id: 1, name: 'Empreendedorismo' },
    { id: 2, name: 'Educação física e fisioterapia' },
    { id: 3, name: 'Programação ágil' },
]

const product = [
    {
        id: 1,
        belongsToCategory: 1,
        isPublished: true,
        title: 'Aprendendo a vender online com escala',
        route: '/area/produto',
        thumbnail: 'https://www.userede.com.br/content/userede/pt-br/blog/quais-ferramentas-de-marketing-digital-posso-usar-para-divulgar-meu-negocio-na-internet/_jcr_content/root/responsivegrid/tabcontainer_4788725/tabs-container-1/productdetails_copy/bottom-container/card_copy_copy_copy_94108686/card-container-content-responsivegrid/image.coreimg.jpeg/1557325623466.jpeg'
    },
    {
        id: 2,
        belongsToCategory: 1,
        isPublished: false,
        title: 'Scripts para vender no automático pelo Whatsapp',
        route: '/area/produto',
        thumbnail: 'https://www.agenciaithink.com.br/Imagem/178/blog-20200610/df/tudo-sobre-como-vender-no-whatsapp.png'
    },
    {
        id: 3,
        belongsToCategory: 2,
        isPublished: true,
        title: 'Curso de biomecânica avançada',
        route: '/area/produto',
        thumbnail: '../../../../assets/img/mock/curso-biomecanica.png'
    },
    {
        id: 4,
        belongsToCategory: 2,
        isPublished: true,
        title: 'Curso de Powerlifting e Agachamento',
        route: '/area/produto',
        thumbnail: '../../../../assets/img/mock/curso-powerlifting.png'
    },
    {
        id: 5,
        belongsToCategory: 2,
        isPublished: true,
        title: 'Periodização e Controle de Carga no Treinamento Físico',
        route: '/area/produto',
        thumbnail: '../../../../assets/img/mock/curso-periodizacao.png'
    },
    {
        id: 6,
        belongsToCategory: 3,
        isPublished: true,
        title: 'Método indiano – Fature 5 dígitos com jQuery',
        route: '/area/produto',
        thumbnail: 'https://www.memesmonkey.com/images/memesmonkey/9f/9f098b405bac22358a2f73abc09f3c24.jpeg'
    }
]


const modules = [
    {
        id: 1,
        name: 'Módulo 1 – Seja bem vindo!',
        content: [
            {
                id: 1,
                type: 'video',
                name: 'Aula de introdução para iniciantes no marketing digital',
                route: '/area/produto/modulo/conteudo',
                finished: false,
            },
            {
                id: 2,
                type: 'video',
                name: 'Princípios básicos para vender online!',
                route: '/area/produto/modulo/conteudo',
                finished: true,
            },
            {
                id: 3,
                type: 'text',
                name: 'Conteúdo complementar para leitura',
                route: '/area/produto/modulo/conteudo',
                finished: false,
            },
            {
                id: 4,
                type: 'text',
                name: 'Templates de Automações para baixar',
                route: '/area/produto/modulo/conteudo',
                finished: false,
            }
        ]
    },
    {
        id: 2,
        name: 'Módulo 2 – Funil de vendas',
        content: [
        ]
    }
]


let selected = ref(category[0]);
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
);


function stopPropagation(event) {
    event.stopPropagation()
}

let showNotification = ref(false);
function notification(type, title, text) {

    isOpenModalAddProduct.value = false;
    showNotification.value = true;

    setTimeout(() => {
        showNotification.value = false;
    }, 88883500);

    return {

    }

}
</script>

<script type="text/javascript">
import { ref } from 'vue'

import Breadcrumb from "@/components/Breadcrumb.vue"
import Header from "@/components/Header.vue";
import CardCourse from "@/components/CardCourse.vue";

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'


export default {
    data: function () {
        return {
            preview: null,
            image: null,
            isOptionsExpanded: false,
            selectedOption: "Publicado",
            options: ["Publicado", "Rascunho"]
        };
    },

    methods: {
        setOption(option) {
            this.selectedOption = option;
            this.isOptionsExpanded = false;
        },

        previewImage: function (event) {
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.image = input.files[0];
                console.log(this.image);
                reader.readAsDataURL(input.files[0]);
            }
        },
        reset: function () {
            this.image = null;
            this.preview = null;
        }
    }
};
</script>

<template>
    <Breadcrumb
        item1Route="/area"
        item1Text="Conteúdos"
        :item2Text="product[0].title" />

    <div v-if="isAdmin" class="lg:flex lg:justify-between pb-4">
        <!-- Header -->
        <Header title="Editar conteúdo"></Header>
        <!-- Action buttons -->
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="block">
                <button
                    type="button"
                    @click="openModalAddCategory"
                    class="inline-flex items-center rounded-md bg-gray-800 border border-gray-700 py-2 px-3 lg:px-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar módulo
                </button>
            </span>
            <span class="ml-1">
                <button
                    type="button"
                    @click="openModalAddProduct"
                    class="inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-3 lg:px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar aula
                </button>
            </span>
        </div>
    </div>

    <div class="w-full pt-6 flex flex-col lg:flex-row gap-4">
        <div class="mx-auto w-full lg:w-2/6">
            <CardCourse
                :isPublished="product[0].isPublished"
                :img="product[0].thumbnail" />
            <span class="block mt-4 mb-2 font-semibold text-lg text-white">
                {{ product[0].title }}
            </span>
            <div v-if="modules.length > 0" class="w-full inline-flex items-center gap-x-3">
                <span class="text-sm text-gray-400">
                    {{ modules.length }} módulos
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-1 w-1 text-gray-700" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                </svg>
                <span class="text-sm text-gray-400">
                    {{ modules.length }} conteúdos
                </span>
            </div>

            <div v-if="isAdmin" class="mt-6">
                <span class="block text-sm text-gray-300 font-semibold mb-3">
                    Gerenciar este curso:
                </span>
                <div
                    class="flex flex-col lg:flex-row lg:items-center lg:gap-x-2">
                    <button
                        type="button"
                        @click=""
                        class="inline-flex items-center rounded-md bg-red-600 border border-red-600 py-2 px-3 lg:px-4 text-sm font-semibold text-white hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3 h-3 mr-2 text-red-200" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                        Editar curso
                    </button>

                    <button
                        type="button"
                        @click=""
                        class="inline-flex items-center rounded-md bg-gray-800 border border-gray-700 py-2 px-3 lg:px-4 text-sm font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3 h-3 mr-2 -ml-1 text-gray-400" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                        </svg>
                        Excluir
                    </button>
                </div>
            </div>

            <div v-if="isAdmin" class="mt-6 gap-y-2">
                <span class="block text-sm text-gray-300 font-semibold mb-2">
                    Status do curso (visibilidade):
                </span>
                <div class="relative w-full">
                    <button
                        class="flex items-center px-3 py-2.5 bg-white w-full border border-gray-500 rounded-lg"
                        @click="isOptionsExpanded = !isOptionsExpanded"
                        @blur="isOptionsExpanded = false">
                        <svg v-if="selectedOption == 'Rascunho'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-400 h-4 w-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        <svg v-if="selectedOption == 'Publicado'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-emerald-400 h-4 w-4 mr-2">
                            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm text-gray-600">{{ selectedOption }}</span>
                        <ChevronDownIcon class="h-5 w-5 text-gray-400 ml-auto" aria-hidden="true" />
                    </button>
                    <transition
                        enter-active-class="transform transition duration-500 ease-custom"
                        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                        enter-to-class="translate-y-0 scale-y-100 opacity-100"
                        leave-active-class="transform transition duration-300 ease-custom"
                        leave-class="translate-y-0 scale-y-100 opacity-100"
                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                        <ul v-show="isOptionsExpanded" class="absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden">
                            <li
                                v-for="(option, index) in options"
                                :key="index"
                                class="px-3 py-2 transition-colors text-sm cursor-pointer text-gray-600 duration-300 hover:bg-indigo-500 hover:text-white"
                                @mousedown.prevent="setOption(option)">
                                {{ option }}
                            </li>
                        </ul>
                    </transition>
                </div>

            </div>
        </div>

        <div class="mx-auto w-full lg:w-4/6">
            <!-- Empty state -->
            <div v-if="modules.length < 1" class="bg-gray-800 rounded-md p-5 w-full border border-gray-700 mt-6 lg:mt-0 mb-2">
                <div class="flex space-x-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-indigo-500 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div class="leading-tight text-sm text-gray-200 font-medium">Adicione um módulo para incluir aulas.</div>
                </div>
            </div>

            <div v-for="mod in modules" class="mx-auto w-full">
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between items-center rounded-lg bg-gray-800 px-4 py-3 text-left border border-gray-700 hover:border-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                        <span class="inline-flex items-center justify-center gap-x-2">
                            <ChevronUpIcon
                                :class="open ? '' : 'rotate-180 transform'"
                                class="h-5 w-5 text-bold text-indigo-500" />
                            <span class="text-gray-200 text-sm lg:text-base font-medium">
                                {{ mod.name }}
                            </span>
                        </span>
                        <div class="inline-flex">
                            <Menu as="div" class="relative z-5">
                                <div class="inline-flex flex-row justify-center items-center h-full">
                                    <MenuButton @click="stopPropagation" class="flex p-0 rounded-md bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                    </MenuButton>
                                </div>
                                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem v-slot="{ active }">
                                        <link-router
                                            to=""
                                            @click="stopPropagation"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-gray-700']">
                                            Editar módulo
                                        </link-router>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <a href="javascript:void(0);" @click="stopPropagation" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-red-500']">
                                            Excluir módulo
                                        </a>
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </DisclosureButton>

                    <div class="content-wrapper">
                        <template v-if="mod.content.length < 1">
                            <transition name="slide-fade">
                                <DisclosurePanel class="px-2 py-2 text-sm text-gray-400">
                                    <div class="w-full inline-flex justify-center items-center gap-x-2">
                                        <div class="w-6 inline-flex items-center justify-center -ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                            </svg>
                                        </div>
                                        Nenhum conteúdo cadastrado neste módulo.
                                    </div>
                                </DisclosurePanel>
                            </transition>
                        </template>

                        <template v-for="content in mod.content">
                            <transition name="slide-fade">
                                <DisclosurePanel class="px-2 py-2 text-sm text-gray-400">
                                    <div class="w-full flex items-center justify-between">
                                        <router-link
                                            to="/area/produto/modulo/conteudo"
                                            class="inline-flex justify-start items-center gap-x-2">
                                            <div class="w-6 inline-flex items-center justify-center">
                                                <svg
                                                    v-if="(content.type == 'video' && !content.finished)"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-indigo-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                                </svg>
                                                <svg
                                                    v-if="(content.type == 'text' && !content.finished)"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-indigo-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                </svg>
                                                <svg
                                                    v-if="(content.finished)"
                                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3.5 h-3.5 text-green-400" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </div>
                                            {{ content.name }}
                                        </router-link>

                                        <Menu as="div" class="relative ml-2 mr-2 z-5">
                                            <div class="inline-flex flex-row justify-center items-center h-full">
                                                <MenuButton @click="stopPropagation" class="flex p-0 rounded-md bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-gray-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                    </svg>
                                                </MenuButton>
                                            </div>
                                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <MenuItem v-slot="{ active }">
                                                    <a href="javascript:void(0);" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-gray-700']">
                                                        Editar
                                                    </a>
                                                    </MenuItem>
                                                    <MenuItem v-slot="{ active }">
                                                    <a href="javascript:void(0);" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-red-500']">
                                                        Excluir aula
                                                    </a>
                                                    </MenuItem>
                                                </MenuItems>
                                            </transition>
                                        </Menu>

                                    </div>
                                </DisclosurePanel>
                            </transition>
                        </template>
                    </div>
                </Disclosure>
            </div>
        </div>

    </div>





    <!-- Modal - Adicionar novo curso -->
    <TransitionRoot appear :show="isOpenModalAddProduct" as="template">
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
                                        class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                                </div>
                                <!-- Categoria -->
                                <div class="mb-4">
                                    <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                        Selecione a categoria:
                                    </label>
                                    <Combobox v-model="selected">
                                        <div class="relative">
                                            <div class="relative w-full cursor-default border overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                <ComboboxInput
                                                    class="w-full border-none rounded-lg bg-white py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                    :displayValue="(cat) => cat.name"
                                                    @change="query = $event.target.value" />
                                                <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                                                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{ 'bg-teal-600 text-white': active, 'text-gray-900': !active, }">
                                                            <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
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
                                    <div class="mt-2 mb-4 text-right">
                                        <a href="javascript:void(0);" class="text-xs text-indigo-500 underline underline-offset-4">
                                            Clique aqui para adicionar uma nova categoria
                                        </a>
                                    </div>
                                </div>
                                <!-- Descrição -->
                                <div class="mb-4">
                                    <label for="about" class="block mb-2 text-sm font-medium text-gray-700">Descrição:</label>
                                    <div class="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows="3"
                                            value=""
                                            class="border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 text-sm placeholder-gray-400 focus:border-indigo-500 active:border-primary w-full rounded-md py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                                            placeholder="Como você descreve este curso para os seus alunos?">
                                    </textarea>
                                    </div>
                                    <p class="mt-1 mb-2 text-xs text-gray-500">Máximo 500 caracteres.</p>
                                </div>
                                <!-- Imagem de capa -->
                                <div>
                                    <label for="file-upload">
                                        <div class="block text-sm font-medium text-gray-700 mb-2">Imagem de capa: <span class="text-gray-500 text-xs ml-1">(Opcional)</span></div>
                                        <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                            <div class="space-y-1 text-center">
                                                <!-- input hidden -->
                                                <input id="file-upload" name="file-upload" type="file" accept="image/*" @change="previewImage" class="sr-only" />
                                                <!-- upload -->
                                                <div v-if="!preview" class="w-full">
                                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <div class="flex text-xs md:text-sm text-gray-600 justify-center">
                                                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                            <span>Clique para fazer upload</span>
                                                        </label>
                                                    </div>
                                                    <p class="text-xs text-gray-500">PNG, JPG, GIF, WEBP (até 5mb)</p>
                                                </div>
                                                <!-- Image preview -->
                                                <div v-if="preview" class="flex flex-col items-center justify-center">
                                                    <div class="thumb-container shadow-lg w-full border border-slate-300 rounded-lg overflow-hidden mx-auto mb-6" style="max-width: 280px;">
                                                        <img class="w-full aspect-video object-cover bg-slate-500 bg-opacity-10" :src="preview">
                                                        <div class="absolute bottom-0 m-2">
                                                            <p class="text-xs text-gray-500 mb-0">{{ image.name }}</p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        @click="reset"
                                                        class="inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                                                        <TrashIcon class="h-4 w-4 mr-1" aria-hidden="true" />
                                                        <span>Remover imagem</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
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
                                    @click="notification">
                                    Adicionar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Modal Adicionar categoria -->
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
                                Adicionar Nova Categoria
                            </DialogTitle>
                            <div class="mt-6">
                                <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                    Nome da nova categoria:
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Digite aqui"
                                    class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                                <div class="mt-4 pb-4 text-xs text-gray-500 flex flex-row items-center justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 opacity-70">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                    <span>Esta categoria aparecerá para seus alunos, após você adicionar conteúdos a ela.</span>
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
                                Curso adicionado com sucesso!
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
.content-wrapper {
    padding-bottom: .5rem;
}

.content-wrapper>div:first-child {
    padding-top: 1rem;
}

.content-wrapper>div:last-child {
    padding-bottom: 1.25rem;
}
</style>