<script setup>
import { PlusIcon } from '@heroicons/vue/20/solid'
</script>

<script type="text/javascript">

import Header from "@/components/Header.vue";
import ModalConfirmDelete from '@/components/ModalConfirmDelete.vue';

export default {

};
</script>

<template>
    <div class="lg:flex lg:justify-between pb-4">
        <!-- Header -->
        <Header title="Certificados de conclusão"></Header>
        <!-- Action buttons -->
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <button
                type="button"
                @click="ModalConfirmDelete"
                class="inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                Novo certificado
            </button>
        </div>
    </div>

    <!-- Empty state -->
    <div class="bg-pepper-dark-2 rounded-md p-5 w-full border border-pepper-dark-3 mt-6">
        <div class="flex space-x-2 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-500 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <div class="leading-tight text-sm text-gray-200 font-medium">Nenhum certificado a ser exibido.</div>
        </div>
    </div>

    <div class="pt-8">
        <div class="md:flex md:items-center mb-6">
            <h3 class="flex items-center font-bold text-white text-xl md:w-auto mb-3 md:mb-0">
                Cursos concluídos
            </h3>
        </div>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            <router-link to="#" class="w-full overflow-hidden cursor-pointer">
                <div class="thumb-container w-full rounded-lg overflow-hidden">
                    <img class="w-full aspect-video bg-slate-500 bg-opacity-10" src="https://www.memesmonkey.com/images/memesmonkey/9f/9f098b405bac22358a2f73abc09f3c24.jpeg" />
                </div>
                <div class="px-1 py-3">
                    <div class="font-semibold text-base mb-1">Curso de Programação</div>
                    <p class="font-medium text-sm mb-2 text-gray-500">Data da conclusão: 22/11/2022</p>
                </div>
            </router-link>
        </div>
    </div>

    <div class="pt-8">
        <div class="md:flex md:items-center mb-6">
            <h3 class="flex items-center font-bold text-white text-xl md:w-auto mb-3 md:mb-0">
                Em andamento
            </h3>
        </div>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            <router-link to="#" class="w-full overflow-hidden cursor-pointer">
                <div class="thumb-container w-full rounded-lg overflow-hidden">
                    <img class="w-full aspect-video bg-slate-500 bg-opacity-10" src="https://nerdreactor.com/wp-content/uploads/2017/09/The-Walking-Dead-_S8_14x48BB_REF1-thumb.jpg" />
                </div>
                <div class="px-1 py-3">
                    <div class="font-semibold text-base mb-1">Curso Online de Medicina</div>
                    <p class="font-medium text-sm mb-2 text-gray-500">Seu progresso: 42%</p>
                </div>
            </router-link>

            <router-link to="#" class="w-full overflow-hidden cursor-pointer">
                <div class="thumb-container w-full rounded-lg overflow-hidden">
                    <img class="w-full aspect-video bg-slate-500 bg-opacity-10" src="https://ostatniatawerna.pl/wp-content/uploads/2022/07/twd.jpg" />
                </div>
                <div class="px-1 py-3">
                    <div class="font-semibold text-base mb-1">Curso Online de Medicina</div>
                    <p class="font-medium text-sm mb-2 text-gray-500">Seu progresso: 42%</p>
                </div>
            </router-link>
        </div>
    </div>
</template>