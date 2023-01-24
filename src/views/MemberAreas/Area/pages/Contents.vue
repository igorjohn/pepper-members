<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
} from '@headlessui/vue'

import { CheckIcon, ChevronUpIcon, ChevronDownIcon, ChevronUpDownIcon, PlusIcon } from '@heroicons/vue/20/solid'
import { TrashIcon } from '@heroicons/vue/24/outline'


// Modal 'Add Module'
let isOpenModalAddModule = ref(false);
function openModalAddModule() {
    isOpenModalAddModule.value = true;
}

function closeModal() {
    isOpenModalAddModule.value = false;
}


// Admin components
const isAdmin = true;

// Input combobox
const category = [
    { id: 1, name: 'Empreendedorismo' },
    { id: 2, name: 'Educação física e fisioterapia' },
    { id: 3, name: 'Programação ágil' },
]

const coverFormat = 1;

const product = [
    {
        id: 1,
        belongsToCategory: 1,
        isPublished: true,
        userProgress: 90,
        title: 'Aprendendo a vender online com escala',
        description: 'Escalar uma empresa, setor ou processos é, genericamente, o famoso “fazer mais com menos”. Trata-se da capacidade de crescer em 2x, 5x, 10x ou mais seus resultados sem aumentar proporcionalmente os seus esforços (custo financeiro, tempo, pessoas e atividades). Neste curso, você irá aprender exatamente isso.',
        route: '/area/produto',
        thumbnail: 'https://www.userede.com.br/content/userede/pt-br/blog/quais-ferramentas-de-marketing-digital-posso-usar-para-divulgar-meu-negocio-na-internet/_jcr_content/root/responsivegrid/tabcontainer_4788725/tabs-container-1/productdetails_copy/bottom-container/card_copy_copy_copy_94108686/card-container-content-responsivegrid/image.coreimg.jpeg/1557325623466.jpeg'
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

function stopPropagation(event) {
    event.stopPropagation()
}

</script>

<script type="text/javascript">
import { ref } from 'vue'

import Breadcrumb from "@/components/Breadcrumb.vue"
import Header from "@/components/Header.vue";

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'


export default {
    data() {
        return {
            isOptionsExpanded: false,
            selectedOption: "Publicado",
            options: ["Publicado", "Rascunho"]
        };
    },

    methods: {
        setOption(option) {
            this.selectedOption = option;
            this.isOptionsExpanded = false;
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
                    @click="openModalAddModule"
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
        <div class="mx-auto w-full lg:w-auto lg:max-w-[400px]">

            <div class="w-full mb-8 mx-auto overflow-hidden max-w-full"
                :style="coverFormat ? 'width: 320px' : 'width: 400px'">
                <div class="text-gray-200 hover:text-indigo-500 transition duration-500 mx-auto overflow-hidden">
                    <div
                        class="relative w-full overflow-hidden border border-pepper-dark-4 hover:border-indigo-800 transition duration-500 rounded-lg"
                        :class="coverFormat ? 'aspect-movie' : 'aspect-video'">

                        <!-- Course image -->
                        <img
                            class="w-full mx-auto h-full object-cover bg-gray-500 bg-opacity-10"
                            :src="product[0].thumbnail">

                        <!-- Não publicado -->
                        <span v-if="!product[0].isPublished" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-red-800 border border-red-500 text-xs rounded-md leading-tight shadow-lg">
                            Não publicado
                        </span>

                        <!-- Concluído -->
                        <span v-if="product[0].userProgress == 100" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-emerald-500 border border-emerald-700 text-xs rounded-md leading-tight shadow-lg">
                            Concluído
                        </span>

                        <!-- User progress -->
                        <div class="absolute bottom-0 left-0 overflow-hidden flex justify-end items-end w-full h-full rounded-b-md"
                            :class="coverFormat ? 'aspect-movie' : 'aspect-video'">
                            <div class="pepper-progress w-full h-1 bg-pepper-dark-4">
                                <div class="pepper-progress-current h-1 bg-red-600" :style="'width:' + product[0].userProgress + '%'"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Nome do curso -->
            <span class="block mt-2 mb-2 font-semibold text-lg text-white">
                {{ product[0].title }}
            </span>

            <!-- Descrição do curso -->
            <span
                v-if="product[0].description && product[0].description !== ''"
                class="block mt-2 mb-4 font-normal text-sm text-gray-300">
                {{ product[0].description }}
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
                    class="flex flex-row items-center gap-x-2">
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
                <div class="relative w-full z-10">
                    <button
                        class="flex items-center px-3 py-2.5 bg-pepper-dark-3 w-full border border-pepper-dark-5 rounded-lg"
                        @click="isOptionsExpanded = !isOptionsExpanded"
                        @blur="isOptionsExpanded = false">
                        <svg v-if="selectedOption == 'Rascunho'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-500 h-4 w-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        <svg v-if="selectedOption == 'Publicado'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-emerald-400 h-4 w-4 mr-2">
                            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm text-medium text-gray-100">{{ selectedOption }}</span>
                        <ChevronDownIcon class="h-5 w-5 text-gray-400 ml-auto" aria-hidden="true" />
                    </button>
                    <transition
                        enter-active-class="transform transition duration-500 ease-custom"
                        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                        enter-to-class="translate-y-0 scale-y-100 opacity-100"
                        leave-active-class="transform transition duration-300 ease-custom"
                        leave-class="translate-y-0 scale-y-100 opacity-100"
                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                        <ul v-show="isOptionsExpanded" class="absolute left-0 right-0 mb-4 bg-pepper-dark-3 border border-pepper-dark-5 rounded-lg overflow-hidden">
                            <li
                                v-for="(option, index) in options"
                                :key="index"
                                class="px-3 py-2 transition-colors text-sm cursor-pointer border-b border-pepper-dark-5 text-gray-200 text-medium duration-300 hover:bg-gray-800 hover:text-white"
                                @mousedown.prevent="setOption(option)">
                                {{ option }}
                            </li>
                        </ul>
                    </transition>
                </div>

            </div>
        </div>

        <div class="mx-auto w-full lg:w-full lg:flex-1">

            <!-- Empty state -->
            <div v-if="modules.length < 1" class="bg-pepper-dark-2 rounded-md p-5 w-full border border-pepper-dark-3 mt-6 lg:mt-0 mb-2">
                <div class="flex space-x-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-500 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div class="leading-tight text-sm text-gray-200 font-medium">Adicione um módulo para incluir aulas.</div>
                </div>
            </div>

            <div v-for="mod in modules" class="mx-auto w-full">
                <Disclosure v-slot="{ open }" defaultOpen="true">
                    <DisclosureButton
                        class="flex w-full justify-between items-center rounded-lg bg-pepper-dark-3 px-4 py-3 text-left border border-pepper-dark-4 hover:border-gray-600 hover:cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
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
                                    <MenuButton @click="stopPropagation" class="flex p-0 rounded-md bg-pepper-dark-5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-gray-800">
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
                                <DisclosurePanel class="px-2 py-2 text-sm text-gray-300 text-medium">
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
                                <DisclosurePanel class="px-2 py-2">
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

                                            <span class="text-sm text-gray-300 text-medium">
                                                {{ content.name }}
                                            </span>
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


    <!-- Modal Adicionar módulo -->
    <TransitionRoot appear :show="isOpenModalAddModule" as="template">
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
                                Adicionar novo módulo
                            </DialogTitle>
                            <div class="mt-6">
                                <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                    Nome deste módulo:
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