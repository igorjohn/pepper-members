<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue'

import { PlusIcon, TrashIcon } from '@heroicons/vue/20/solid'

let showHeaderDropdown = ref(false);

const menuLogo = `
    <div class="inline-flex h-full items-center justify-center px-4 lg:px-6">
        <img src="https://peppermembers.com/img/logotipo-white-pepper.52ff1608.png" style="height: 22px;" />
    </div>`;

</script>

<script type="text/javascript">

// Mock images
import Cinetica from "@/assets/img/mock/cinetica.png";


const memberAreas = [
    {
        router: '/area',
        title: 'The Walking Dead',
        thumbnail: 'https://nerdreactor.com/wp-content/uploads/2017/09/The-Walking-Dead-_S8_14x48BB_REF1-thumb.jpg',
    },
    {
        router: '/area',
        title: 'Curso de Programação',
        thumbnail: 'https://www.memesmonkey.com/images/memesmonkey/9f/9f098b405bac22358a2f73abc09f3c24.jpeg',
    },
    {
        router: '/area',
        title: 'Cinética - Escola do Movimento!',
        thumbnail: Cinetica,
    },
]

let isOpenModal = ref(false);
function openModal() {
    isOpenModal.value = true;
}

function closeModal() {
    isOpenModal.value = false;
}


export default {
    data: function () {
        return {
            pepper: this.pepper,
            preview: null,
            image: null
        };
    },

    methods: {
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
}
</script>

<template>

    <div class="md:min-h-screen w-screen flex flex-col md:justify-between">

        <header id="header-mobile" class="bg-pepper-dark-3 flex justify-between w-full py-1.5">
            <!-- Logo -->
            <div v-html="menuLogo"></div>

            <div class="flex items-center justify-start px-2">
                <div class="block py-4 px-2">
                    <h6 class="font-bold text-sm">Olá, Gilney</h6>
                </div>
                <Menu as="div" :show="showHeaderDropdown" @close="showHeaderDropdown = false" class="relative ml-2 mr-2">
                    <div class="inline-flex flex-row justify-center items-center h-full">
                        <MenuButton class="flex p-0 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-gray-800">
                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </MenuButton>
                        <svg class="w-5 h-5 mt-2 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill="currentColor" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem v-slot="{ active }">
                            <router-link
                                to="/area/perfil"
                                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                Meu perfil
                            </router-link>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <router-link
                                to="/memberareas"
                                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                                Áreas de membros
                            </router-link>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <router-link
                                to="#"
                                :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-600']">
                                Desconectar
                            </router-link>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
        </header>

        <div class="px-6 py-20 max-w-7xl mx-auto flex flex-col justify-center items-center">
            <div class="w-full mb-14">
                <h3 class="font-semibold text-lg mb-14 text-center">
                    Escolha a área de membros que deseja acessar:
                </h3>
                <div id="member-areas-container">
                    <div v-for="a in memberAreas" class="thumb-wrapper w-full sm:w-1/2 lg:w-1/5 xl:w-1/6">
                        <router-link :to="a.router">
                            <div class="thumb-container w-full rounded-lg overflow-hidden">
                                <img class="w-full aspect-video bg-slate-500 object-cover bg-opacity-10"
                                    :src="a.thumbnail" />
                            </div>
                            <div class="px-1 py-3 font-semibold text-sm mb-2 transition duration-300">
                                {{ a.title }}
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center mb-14">
                <button @click="openModal" type="button" :class="pepper.darkMode.button.primary">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    <span>Criar nova área de membros</span>
                </button>
            </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-center my-10">
            <span class="text-xs text-gray-500 text-center font-medium">
                Pepper Members © 2023 - Todos os direitos reservados
            </span>
        </div>
    </div>


    <TransitionRoot appear :show="isOpenModal" as="template">
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
                            <div class="m-6">
                                <h3 class="text-lg font-semibold leading-6 text-gray-900">Criar nova área de membros</h3>
                                <div class="flex flex-col w-full mx-auto mt-4 gap-4">

                                    <!-- Nome da área de membros -->
                                    <div>
                                        <label :class="pepper.darkMode.form.labelWhiteBg">
                                            Nome da área de membros:
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Nome que irá aparecer para seus alunos"
                                            maxlength="200"
                                            :class="pepper.darkMode.form.inputWhiteBg" />
                                    </div>

                                    <!-- Slug -->
                                    <div>
                                        <label :class="pepper.darkMode.form.labelWhiteBg">
                                            Slug (URL) da área de membros:
                                        </label>
                                        <div class="w-full inline-flex items-center">
                                            <div class="min-h-42 text-sm rounded-none rounded-l-md border border-gray-300 border-r-0 flex items-center justify-center w-auto px-2 lg:px-2.5 text-gray-500 bg-gray-50">
                                                https://peppermembers.com/
                                            </div>
                                            <input
                                                type="text"
                                                required
                                                placeholder="slug-da-sua-area"
                                                maxlength="200"
                                                class="rounded-none rounded-r-md px-2 border-l-gray-100"
                                                :class="pepper.darkMode.form.inputWhiteBg" />
                                        </div>
                                    </div>

                                    <!-- Imagem de capa -->
                                    <div>
                                        <label :class="pepper.darkMode.form.labelWhiteBg">
                                            Imagem de capa:
                                        </label>
                                        <label for="file-upload" class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 hover:border-indigo-400 transition duration-300 cursor-pointer">
                                            <div class="space-y-1 text-center bg-white w-full h-full px-6 pt-5 pb-6">
                                                <!-- input hidden -->
                                                <input id="file-upload" name="file-upload" type="file" accept="image/*" @change="previewImage" class="sr-only" />
                                                <!-- upload -->
                                                <div v-if="!preview" class="w-full">
                                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <div class="flex text-sm text-indigo-500 font-medium justify-center mb-2">
                                                        Clique para fazer upload
                                                    </div>
                                                    <p class="text-xs text-gray-500">PNG, JPG, GIF, WEBP (até 5mb)</p>
                                                </div>
                                                <!-- Image preview -->
                                                <div v-if="preview" class="flex flex-col items-center justify-center">
                                                    <img
                                                        style="max-width: 280px"
                                                        class="aspect-video shadow-lg w-full border border-slate-200 rounded-lg overflow-hidden mx-auto mb-3 max-h-full object-cover bg-slate-500 bg-opacity-10"
                                                        :src="preview">

                                                    <p class="text-xs text-gray-500 mb-4">{{ image.name }}</p>
                                                    <button @click="reset" :class="pepper.darkMode.button.primary">
                                                        <TrashIcon class="h-4 w-4 mr-1" aria-hidden="true" />
                                                        <span>Remover imagem</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </label>
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
                                    @click="closeModal">
                                    Confirmar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

</template>

<style scoped>
#member-areas-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
}

@media (max-width:545px) {
    #member-areas-container {
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
}

#member-areas-container .thumb-wrapper.w-full {
    min-width: 220px;
    overflow: hidden;
}
</style>