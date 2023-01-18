<script setup>
import { PlusIcon } from '@heroicons/vue/20/solid'
import { ref } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

let showHeaderDropdown = ref(false);

const menuLogo = `
    <div class="inline-flex h-full items-center justify-center px-4 lg:px-6">
        <img src="https://peppermembers.com/img/logotipo-white-pepper.52ff1608.png" style="height: 20px;" />
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

export default {


};
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
                            <div class="px-1 py-3 font-semibold text-sm mb-2">
                                {{ a.title }}
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center mb-14">
                <button type="button" class="w-full inline-flex justify-center items-center rounded-md border border-pepper-primary bg-pepper-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-danger-700 focus:outline-none focus:ring-1 focus:ring-danger-500 focus:ring-offset-1">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    <span>Criar nova área de membros</span>
                </button>
            </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-center my-10">
            <span class="text-xs text-gray-500 text-center font-medium">
                Pepper members © 2023 - Todos os direitos reservados
            </span>
        </div>
    </div>
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