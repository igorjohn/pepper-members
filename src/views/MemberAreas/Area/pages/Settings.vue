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
                <div class="grid grid-cols-2 gap-4 bg-pepper-dark-2 border border-pepper-dark-3 px-4 py-5 sm:p-6 pb-8 sm:pb-10">
                    <div class="col-span-2">
                        <div class="mt-1 flex flex-col items-center justify-center">
                            <span class="inline-block w-72 shadow-lg overflow-hidden rounded-lg border border-zinc-700 aspect-video bg-pepper-dark-3">

                                <img v-if="!memberAreaImage" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Silvio_Santos_em_maio_de_2019.jpg" class="h-full w-full object-cover" />

                            </span>
                            <button type="button" class="flex items-center justify-center mt-5 rounded-md border border-zinc-800 bg-pepper-dark-3 py-2 px-3 text-sm font-semibold leading-4 text-red-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                <span>Alterar foto de capa</span>
                            </button>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label class="block mb-2 text-sm font-medium text-gray-300">
                            Nome da área de membros:
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Defina o nome que irá aparecer"
                            value="Cinética: Escola do movimento"
                            class="border-zinc-700 text-gray-300 text-sm bg-pepper-dark-3 placeholder-zinc-500 focus:border-red-500 focus:ring-0 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500" />
                    </div>
                    <div class="col-span-2">
                        <label class="block mb-2 text-sm font-medium text-gray-300">
                            Link de acesso:
                        </label>
                        <input
                            type="text"
                            readonly
                            value="https://peppermembers.com/cinetica-escola-do-movimento"
                            class="border-zinc-700 text-gray-300 text-sm bg-pepper-dark-3 placeholder-zinc-500 focus:border-red-500 focus:ring-0 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500" />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label class="block mb-2 text-sm font-medium text-gray-300">
                            E-mail de suporte:
                        </label>
                        <input
                            type="email"
                            required
                            placeholder="Digite o e-mail"
                            value="contato@cineticaedu.com"
                            class="border-zinc-700 text-gray-300 text-sm bg-pepper-dark-3 placeholder-zinc-500 focus:border-red-500 focus:ring-0 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500" />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label class="block mb-2 text-sm font-medium text-gray-300">
                            WhatsApp de suporte:
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Somente números"
                            class="border-zinc-700 text-gray-300 text-sm bg-pepper-dark-3 placeholder-zinc-500 focus:border-red-500 focus:ring-0 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500" />
                    </div>
                </div>
                <div class="bg-pepper-dark-3 px-4 py-3 text-right sm:px-6">
                    <button
                        class="inline-flex justify-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                        Salvar alterações
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>