<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon, Bars3Icon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline'

const open = ref(false);

let showHeaderDropdown = ref(false);

const props = defineProps({
    memberAreaInfos: Object
});

const menuLogo = `
    <div class="inline-flex h-full items-center justify-center px-4 lg:px-6">
        <img src="https://peppermembers.com/img/logotipo-white-pepper.52ff1608.png" style="height: 22px;" />
    </div>`;

const sidebarLinks = [
    {
        route: '',
        isAdmin: false,
        isActive: true,
        text: 'Meus conteúdos',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
        </svg>`
    },
    {
        route: 'certificados',
        isAdmin: false,
        isActive: true,
        text: 'Certificados',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>`
    },
    {
        route: 'contato',
        isActive: props.memberAreaInfos.support_email || props.memberAreaInfos.support_whatsapp ? true : false,
        isAdmin: false,
        text: 'Contato e suporte',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>`
    },
    {
        route: 'perfil',
        isAdmin: false,
        isActive: true,
        text: 'Meu perfil',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>`
    },
    {
        route: 'memberareas',
        isAdmin: false,
        isActive: true,
        text: 'Áreas de membros',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
        </svg>`
    },
    // Admin routes:
    {
        isAdmin: true,
        isActive: true,
        text: 'Adicionar',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`,
        submenu: true,
        children: [
            {
                text: 'Novo curso',
                route: 'criar-curso'
            },
            {
                text: 'Novo certificado',
                route: 'criar-certificado'
            }
        ]
    },
    {
        route: 'alunos',
        isAdmin: true,
        isActive: true,
        text: 'Gerenciar alunos',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>`
    },
    {
        route: 'comentarios',
        isAdmin: true,
        isActive: true,
        text: 'Comentários',
        badgeNumber: 27,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>`
    },
    {
        route: 'categorias',
        isAdmin: true,
        isActive: true,
        text: 'Categorias',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
        </svg>`
    },
    {
        route: 'integracoes',
        isAdmin: true,
        isActive: true,
        text: 'Integrações',
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>`
    },
    {
        route: 'configuracoes',
        isAdmin: true,
        isActive: true,
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
            showMenu: false,
            showSidebarDesktop: true
        };
    },
    props: {
        memberAreaInfos: Object
    },
    methods: {
        toggleShow() {
            this.showMenu = !this.showMenu;
        },

        toggleMenu() {
            this.showSidebarDesktop = !this.showSidebarDesktop;
            this.$emit('toggleMenu');
        }
    },
    emits: [
        'toggleMenu'
    ]
};
</script>

<template>
    <div id="navbar-container" class="flex flex-col w-screen md:w-auto md:flex-row md:h-screen md:fixed z-10">
        <!-- Header MOBILE -->
        <header id="header-mobile" class="bg-pepper-dark-3 flex justify-between items-center w-full md:hidden">
            <router-link :to="`/${this.$route.params.area}`" class="mt-2">
                <div v-html="menuLogo"></div>
            </router-link>
            <div @click="open = true" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-gray-400 hover:bg-gray-900 text-gray-500 rounded-md cursor-pointer">
                <Bars3Icon class="h-6 w-6 transition duration-200 ease-in-out" fill="none" stroke="currentColor" />
            </div>
        </header>
        <!-- Header MOBILE end -->

        <!-- Sidebar DESKTOP -->
        <aside id="sidebar" :class="[showSidebarDesktop ? 'translate-x-0' : '-translate-x-80', 'hidden md:flex bg-pepper-dark-2 md:h-full h-full md:w-64 2xl:w-72 w-3/4 space-y-6 pt-5 px-0 absolute inset-y-0 left-0 transform md:relative transition duration-200 ease-in-out flex-col justify-between overflow-y-auto z-50']">
            <div class="flex flex-col space-y-6">
                <!-- Logo -->
                <router-link :to="`/${this.$route.params.area}`">
                    <div v-html="menuLogo"></div>
                </router-link>
                <!-- Sidebar menu -->
                <nav id="sidebarMenu">
                    <template v-for="u in sidebarLinks">
                        <router-link
                            v-if="(!u.submenu || u.submenu == false) && u.isAdmin == false && u.isActive"
                            :to="u.route != 'memberareas' ? `/${this.$route.params.area}/${u.route}` : '/memberareas'"
                            class="sidebar-li-router space-x-3 transition duration-200 hover:bg-gray-800 hover:text-white">
                            <div v-html="u.icon"></div>
                            <span>{{ u.text }}</span>
                        </router-link>
                    </template>
                    <!-- Admin -->
                    <span v-if="memberAreaInfos.access.role == 'admin'" class="text-xs font-bold tracking-wide mt-8 mb-4 block px-6 uppercase text-gray-300">
                        Administrador
                    </span>
                    <template v-if="memberAreaInfos.access.role == 'admin'" v-for="a in sidebarLinks">
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
                                <ChevronDownIcon :class="{ '-rotate-90': showMenu }" class="dropdown-menu text-red-600 w-4 h-4" />
                            </a>
                            <!-- Submenu children -->
                            <ul class="overflow-hidden dropdown-menu font-normal transform transition duration-300" :class="{ 'h-0 hidden': !showMenu }">
                                <li v-for="s in a.children">
                                    <router-link
                                        :to="s.route"
                                        class="font-medium flex cursor-pointer items-center space-x-3 py-3 pr-6 pl-14 text-sm transition duration-200 bg-pepper-dark-3 hover:bg-gray-800 hover:text-white">
                                        {{ s.text }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <router-link
                            v-if="(!a.submenu || a.submenu == false) && a.isAdmin == true"
                            :to="a.route != 'memberareas' ? `/${this.$route.params.area}/${a.route}` : '/memberareas'"
                            class="sidebar-li-router transition duration-200 hover:bg-gray-800 hover:text-white justify-between">
                            <div class="inline-flex space-x-3 items-center">
                                <div v-html="a.icon"></div>
                                <span>{{ a.text }}</span>
                            </div>
                            <div v-if="a.badgeNumber" class="inline-block px-2 py-1 font-semibold text-gray-100 bg-red-600 text-xs rounded-full leading-tight">
                                {{ a.badgeNumber }}
                            </div>
                        </router-link>
                    </template>
                </nav>
            </div>
            <nav class="p-6 pt-4">
                <button type="button" class="w-full inline-flex justify-center items-center rounded-md border border-red-600 bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-danger-500 focus:ring-offset-1">
                    <ArrowLeftOnRectangleIcon class="w-5 h-5 mr-2" />
                    <span>Desconectar</span>
                </button>
            </nav>
        </aside>
        <!-- Sidebar DESKTOP end -->

        <!-- Sidebar MOBILE -->
        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-10 lg:hidden" @close="open = false">
                <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-60 transition-opacity" />
                </TransitionChild>
                <div class="fixed inset-0 overflow-hidden">
                    <div class="absolute inset-0 overflow-hidden">
                        <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-24">
                            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="-translate-x-full">
                                <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                                    <div id="sidebar-mobile" class="flex h-full flex-col overflow-y-scroll bg-pepper-dark-2 py-6 shadow-xl">
                                        <div class="h-full flex flex-col" aria-hidden="true">
                                            <!-- Logo -->
                                            <router-link :to="`/${this.$route.params.area}`" @click="open = false" class="focus:ring-0 outline-none focus:ring-offset-0">
                                                <div v-html="menuLogo" class="mb-4 mx-2"></div>
                                            </router-link>
                                            <template v-for="u in sidebarLinks">
                                                <router-link
                                                    @click="open = false"
                                                    v-if="(!u.submenu || u.submenu == false) && u.isAdmin == false"
                                                    :to="u.route != 'memberareas' ? `/${this.$route.params.area}/${u.route}` : '/memberareas'"
                                                    class="sidebar-li-router space-x-3 transition duration-200 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-0">
                                                    <div v-html="u.icon"></div>
                                                    <span>{{ u.text }}</span>
                                                </router-link>
                                            </template>
                                            <!-- Admin -->
                                            <span class="text-xs font-bold tracking-wide mt-6 mb-4 block px-6 uppercase text-gray-300">
                                                Administrador
                                            </span>
                                            <!-- Submenu -->
                                            <template v-for="a in sidebarLinks">
                                                <div v-if="(a.submenu == true && a.isAdmin == true)">
                                                    <a
                                                        href="javascript:void(0);"
                                                        @click="toggleShow"
                                                        class="sidebar-li-router justify-between space-x-3 transition duration-200 hover:bg-gray-800 hover:text-white">
                                                        <div class="inline-flex items-center space-x-3">
                                                            <div v-html="a.icon"></div>
                                                            <span>{{ a.text }}</span>
                                                        </div>
                                                        <ChevronDownIcon :class="{ '-rotate-90': showMenu }" class="dropdown-menu text-red-600 w-4 h-4" />
                                                    </a>
                                                    <!-- Submenu children -->
                                                    <ul class="overflow-hidden dropdown-menu font-normal transform transition duration-300" :class="{ 'h-0 hidden': !showMenu }">
                                                        <li v-for="s in a.children">
                                                            <router-link
                                                                @click="open = false"
                                                                :to="s.route"
                                                                class="font-medium flex cursor-pointer items-center space-x-3 py-3 pr-6 pl-14 text-sm transition duration-200 bg-pepper-dark-3 hover:bg-gray-800 hover:text-white">
                                                                {{ s.text }}
                                                            </router-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <router-link
                                                    v-if="(!a.submenu || a.submenu == false) && a.isAdmin == true"
                                                    :to="a.route != 'memberareas' ? `/${this.$route.params.area}/${a.route}` : '/memberareas'"
                                                    @click="open = false"
                                                    class="sidebar-li-router transition duration-200 hover:bg-gray-800 hover:text-white justify-between">
                                                    <div class="inline-flex space-x-3 items-center">
                                                        <div v-html="a.icon"></div>
                                                        <span>{{ a.text }}</span>
                                                    </div>
                                                    <div v-if="a.badgeNumber" class="inline-block px-2 py-1 font-semibold text-gray-100 bg-red-600 text-xs rounded-full leading-tight">
                                                        {{ a.badgeNumber }}
                                                    </div>
                                                </router-link>
                                            </template>
                                            <nav class="p-6 pb-2 mt-auto">
                                                <button type="button" class="w-full inline-flex justify-center items-center rounded-md border border-red-600 bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-1 focus:ring-danger-500 focus:ring-offset-1">
                                                    <ArrowLeftOnRectangleIcon class="w-5 h-5 mr-2" />
                                                    <span>Desconectar</span>
                                                </button>
                                            </nav>
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
        <header id="header-desktop" :class="[showSidebarDesktop ? 'md:pl-64 2xl:pl-72' : 'md:pl-2', 'bg-pepper-dark-3 justify-between h-auto hidden md:flex md:w-screen w-3/4 absolute left-0 z-10 transition-transform duration-500']">
            <div @click="toggleMenu" class="m-2 p-2 cursor-pointer focus:outline-none hover:text-gray-300 hover:bg-gray-900 text-gray-500 rounded-md">
                <Bars3Icon class="h-6 w-6 transition duration-200 ease-in-out" fill="none" stroke="currentColor" />
            </div>
            <div class="flex items-center">
                <div class="block py-4 px-3">
                    <h6 class="font-bold text-sm">Olá, {{ memberAreaInfos.access.user.name.split(" ")[0] }}</h6>
                </div>
                <Menu as="div" :show="showHeaderDropdown" @close="showHeaderDropdown = false" class="relative ml-2 mr-2 mt-1">
                    <div class="inline-flex flex-row justify-center items-center h-full">
                        <MenuButton class="flex p-0 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-gray-800">
                            <img class="h-8 w-8 rounded-full" v-if="!memberAreaInfos.access.user.media" src="@/assets/img/user-photo.png" alt="">
                            <img class="h-8 w-8 rounded-full" v-if="memberAreaInfos.access.user.media" :src="memberAreaInfos.access.user.media.file_url" alt="">
                        </MenuButton>
                        <ChevronDownIcon class="text-red-500 w-4 h-4 mt-2 mx-[2px]" />
                    </div>
                    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                        <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem v-slot="{ active }">
                            <router-link
                                :to="`/${this.$route.params.area}/perfil`"
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
    </div>
</template>

<style>
#sidebarMenu a {
    font-weight: 500;
    font-size: 14px;
    color: #dfdfdf;
}

.sidebar-li-router {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding: 0.6rem 1.5rem;
}

@media (max-width:992px) {
    #sidebar {
        max-height: 100vh;
        position: fixed;
    }
}

#sidebar,
#sidebar-mobile {
    border-right: 1px solid var(--pepper-bg-dark-4);
}

#sidebar ul li {
    border-bottom: 1px solid var(--pepper-bg-dark-4);
}

#header-desktop {
    border-bottom: 1px solid var(--pepper-bg-dark-4);
    width: 100vw;
}

.dropdown-menu {
    transition: 300ms;
}

.svg-sidebar {
    width: 18px;
    height: 18px;
}
</style>