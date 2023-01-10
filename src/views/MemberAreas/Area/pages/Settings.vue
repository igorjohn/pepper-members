<script setup>
import { ref, computed } from 'vue'
</script>

<script type="text/javascript">

import { ref } from 'vue'
import Header from "@/components/Header.vue";

export default {

};
</script>

<template>
    <div class="w-full mb-10">
        <Header title="Configurações da área de membros"></Header>
    </div>
    <div class="lg:grid lg:grid-cols-4 lg:gap-6">
        <div class="lg:col-span-1">
            <div class="px-1 lg:px-0">
                <h3 class="flex items-center justify-start font-semibold text-white lg:w-auto mb-3 lg:mb-0">
                    <img
                        src="../../../../assets/img/emoji-settings.png"
                        class="w-4 h-4 mr-2 drop-shadow-[0_1px_3px_rgba(255,255,255,0.25)]" />
                    Definições gerais
                </h3>
                <p class="mt-2 text-sm text-gray-400">Editar área de membros.</p>
            </div>
        </div>
        <div class="mt-5 lg:col-span-3 lg:mt-0">
            <div class="shadow overflow-hidden rounded-md">
                <div class="grid grid-cols-2 gap-4 bg-white px-4 py-5 sm:p-6">
                    <div class="col-span-2">
                        <div class="mt-1 flex flex-col items-center justify-center">
                            <span class="inline-block w-72 shadow-lg overflow-hidden rounded-lg border border-gray-300 aspect-video bg-gray-100">

                                <img v-if="!memberAreaImage" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Silvio_Santos_em_maio_de_2019.jpg" class="h-full w-full object-cover" />

                            </span>
                            <button type="button" class="flex items-center justify-center mt-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-semibold leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                <span>Alterar foto de capa</span>
                            </button>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                            Nome da área de membros:
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Defina o nome que irá aparecer"
                            value="Cinética: Escola do movimento"
                            class="border-primary text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                    </div>
                    <div class="col-span-2">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                            Link de acesso:
                        </label>
                        <input
                            type="text"
                            readonly
                            value="https://peppermembers.com/cinetica-escola-do-movimento"
                            class="border-primary text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label class="block mb-2 text-sm font-medium text-gray-700">
                            E-mail de suporte:
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="Digite o e-mail"
                            value="contato@cineticaedu.com"
                            class="border-primary text-gray-700 text-sm bg-white disabled:bg-gray-50 placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition" />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label class="block mb-2 text-sm font-medium text-gray-700">
                            WhatsApp de suporte:
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Somente números"
                            class="border-primary text-gray-700 text-sm bg-white disabled:bg-gray-50 placeholder-gray-400 focus:border-indigo-500 w-full rounded-md border-[1.5px] py-2 px-3 font-medium outline-none transition" />
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                        class="inline-flex justify-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                        Salvar alterações
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>