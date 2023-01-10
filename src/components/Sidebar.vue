<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const open = ref(false);

let showHeaderDropdown = ref(false);

const menuLogo = `
    <div class="inline-flex h-full items-center justify-center px-4 lg:px-6">
        <img src="https://peppermembers.com/img/logotipo-white-pepper.52ff1608.png" style="height: 20px;" />
    </div>`;

const sidebarLinks = [
    {
        route: '/area',
        isAdmin: false,
        text: 'Meus conteúdos',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>`
    },
    {
        route: '/area/certificados',
        isAdmin: false,
        text: 'Certificados',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>`
    },
    /* {
        route: '/area/ranking',
        isAdmin: false,
        text: 'Ranking',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
        </svg>`
    }, */
    {
        route: '/area/contato',
        isAdmin: false,
        text: 'Contato e suporte',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>`
    },
    {
        route: '/area/perfil',
        isAdmin: false,
        text: 'Meu perfil',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>`
    },
    {
        route: '/memberareas',
        isAdmin: false,
        text: 'Áreas de membros',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>`
    },
    // Admin routes:
    {
        route: '/area',
        isAdmin: true,
        text: 'Adicionar',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`,
        submenu: true,
        children: [
            {
                text: 'Novo curso',
                route: '/area/novo-curso'
            },
            {
                text: 'Novo certificado',
                route: '/area/novo-certificado'
            }
        ]
    },
    {
        route: '/area/alunos',
        isAdmin: true,
        text: 'Gerenciar alunos',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>`
    },
    {
        route: '/area/categorias',
        isAdmin: true,
        text: 'Categorias',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
        </svg>`
    },
    {
        route: '/area/integracoes',
        isAdmin: true,
        text: 'Integrações',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>`
    },
    {
        route: '/area/configuracoes',
        isAdmin: true,
        text: 'Configurações',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>`
    },
]
</script>


<script type="text/javascript">

export default {
    name: 'Sidebar',
    data() {
        return {
            show: false,
            showMenu: false
        };
    },
    methods: {
        toggleShow() {
            this.showMenu = !this.showMenu;
        }
    },
    computed: {
        class() {
            return this.showMenu ? this.height : "h-0";
        }
    }
};
</script>

<template>
    <div id="navbar-container" class="flex flex-col w-screen md:w-auto md:flex-row md:h-screen md:fixed z-10">
        <!-- Header MOBILE -->
        <header class="bg-gray-800 flex justify-between w-full md:hidden" data-dev-hint="mobile menu bar">
            <!-- Logo -->
            <div v-html="menuLogo"></div>
            <!-- Menu toggle icon -->
            <div @click="open = true" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 text-gray-500 rounded-md">
                <svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </header>
        <!-- Header MOBILE end -->

        <!-- Sidebar DESKTOP -->
        <aside id="sidebar" class="hidden md:flex bg-gray-900 border border-transparent border-r-gray-700 md:h-full h-full md:w-64 w-3/4 space-y-6 pt-5 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out flex-col justify-between overflow-y-auto z-50">
            <div class="flex flex-col space-y-6">
                <!-- Logo -->
                <div v-html="menuLogo"></div>
                <!-- Sidebar menu -->
                <nav id="sidebarMenu">
                    <div v-for="u in sidebarLinks">
                        <router-link
                            v-if="(!u.submenu || u.submenu == false) && u.isAdmin == false"
                            :to="u.route"
                            class="sidebar-li-router space-x-3 transition duration-200 hover:bg-gray-800 hover:text-white">
                            <div v-html="u.icon"></div>
                            <span>{{ u.text }}</span>
                        </router-link>
                    </div>
                    <!-- Rotas do Admin -->
                    <span class="text-xs font-bold tracking-wide mt-8 mb-4 block px-6 uppercase text-gray-300">
                        Administrador
                    </span>
                    <div v-for="a in sidebarLinks">
                        <!-- Submenu -->
                        <div v-if="(a.submenu == true && a.isAdmin == true)">
                            <a
                                href="javascript:void(0);"
                                @click="toggleShow"
                                class="sidebar-li-router justify-between space-x-3 transition duration-200 hover:bg-gray-800 hover:text-white">
                                <div class="inline-flex items-center space-x-3">
                                    <div v-html="a.icon"></div>
                                    <span>{{ a.text }}</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" :class="{ 'rotate-90': showMenu }" class="dropdown-menu" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0h24v24H0V0z" />
                                    <path fill="currentColor" class="text-red-700" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                </svg>
                            </a>
                            <!-- Submenu children -->
                            <ul class="overflow-hidden dropdown-menu font-normal transform transition" :class="this.class">
                                <li v-for="s in a.children">
                                    <router-link
                                        :to="s.route"
                                        class="font-medium flex cursor-pointer items-center space-x-3 py-3 pr-6 pl-14 text-sm transition duration-200 bg-gray-800 hover:bg-gray-700 hover:text-white border-b border-gray-700">
                                        {{ s.text }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <router-link
                            v-if="(!a.submenu || a.submenu == false) && a.isAdmin == true"
                            :to="a.route"
                            class="sidebar-li-router space-x-3 transition duration-200 hover:bg-gray-800 hover:text-white">
                            <div v-html="a.icon"></div>
                            <span>{{ a.text }}</span>
                        </router-link>
                    </div>
                </nav>
            </div>
            <nav class="p-6 pt-4">
                <button type="button" class="w-full inline-flex justify-center items-center rounded-md border border-pepper-primary bg-pepper-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-danger-700 focus:outline-none focus:ring-1 focus:ring-danger-500 focus:ring-offset-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <span>Desconectar</span>
                </button>
            </nav>
        </aside>
        <!-- Sidebar DESKTOP end -->

        <!-- Sidebar MOBILE -->
        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-10 lg:hidden" @close="open = false">
                <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-24">
                            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="-translate-x-full">
                                <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                                    <div class="flex h-full flex-col overflow-y-scroll bg-gray-900 py-6 shadow-xl">
                                        <div class="h-full" aria-hidden="true">
                                            <!-- Logo -->
                                            <div v-html="menuLogo" class="mb-4 mx-2"></div>
                                            <div v-for="u in sidebarLinks">
                                                <router-link
                                                    @click="open = false"
                                                    v-if="(!u.submenu || u.submenu == false) && u.isAdmin == false"
                                                    :to="u.route"
                                                    class="sidebar-li-router space-x-3 transition duration-200 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-0">
                                                    <div v-html="u.icon"></div>
                                                    <span>{{ u.text }}</span>
                                                </router-link>
                                            </div>
                                            <!-- Rotas do Admin -->
                                            <span class="text-xs font-bold tracking-wide mt-8 mb-4 block px-6 uppercase text-gray-300">
                                                Administrador
                                            </span>
                                            <div v-for="a in sidebarLinks">
                                                <!-- Submenu -->
                                                <div v-if="(a.submenu == true && a.isAdmin == true)">
                                                    <a
                                                        href="javascript:void(0);"
                                                        @click="toggleShow"
                                                        class="sidebar-li-router justify-between space-x-3 py-2 px-6 transition duration-200 hover:bg-gray-800 hover:text-white">
                                                        <div class="inline-flex items-center space-x-3">
                                                            <div v-html="a.icon"></div>
                                                            <span>{{ a.text }}</span>
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" :class="{ 'rotate-90': showMenu }" class="dropdown-menu" viewBox="0 0 24 24">
                                                            <path fill="none" d="M0 0h24v24H0V0z" />
                                                            <path fill="currentColor" class="text-red-700" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                                        </svg>
                                                    </a>
                                                    <!-- Submenu children -->
                                                    <ul class="overflow-hidden dropdown-menu font-normal transform transition" :class="this.class">
                                                        <li v-for="s in a.children">
                                                            <router-link
                                                                @click="open = false"
                                                                :to="s.route"
                                                                class="font-medium flex cursor-pointer items-center space-x-3 py-3 pr-6 pl-14 text-sm transition duration-200 bg-gray-800 hover:bg-gray-700 hover:text-white border-b border-gray-700">
                                                                {{ s.text }}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <router-link
                                                    v-if="(!a.submenu || a.submenu == false) && a.isAdmin == true"
                                                    @click="open = false"
                                                    :to="a.route"
                                                    class="sidebar-li-router space-x-3 transition duration-200 hover:bg-gray-800 hover:text-white">
                                                    <div v-html="a.icon"></div>
                                                    <span>{{ a.text }}</span>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
        <!-- Sidebar MOBILE end -->


        <!-- Header on DESKTOP -->
        <header class="bg-gray-800 justify-end w-full h-auto hidden md:flex md:w-screen md:pl-72 w-3/4 absolute left-0 z-10">
            <!-- Logo -->
            <div class="block py-4 px-3">
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
                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                            Desconectar
                        </router-link>
                        </MenuItem>
                    </MenuItems>
                </transition>
            </Menu>

        </header>

    </div>
</template>


<style scoped>
#sidebarMenu a {
    font-weight: 500;
    font-size: 14px;
    color: #dfdfdf;
}

#menu-close-icon {
    display: none;
}

#menu-open:checked~* #mobile-menu-button {
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}

#menu-open:checked~* #menu-close-icon {
    display: block;
}

.sidebar-li-router {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0.6rem 1.5rem;
}

@media (min-width: 768px) {
    #sidebar {
        --tw-translate-x: 0;
    }
}

@media (max-width:992px) {
    #sidebar {
        max-height: 100vh;
        position: fixed;
    }
}

.dropdown-menu {
    transition: 300ms;
}

.svg-sidebar {
    width: 18px;
    height: 18px;
}

svg.rotate-90 {
    transform: rotate(90deg);
}
</style>