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

    <!-- Header -->
    <div class="w-full mb-10">
        <Header title="Meu perfil"></Header>
    </div>

    <div class="lg:grid lg:grid-cols-4 lg:gap-6">
        <div class="lg:col-span-1">
            <div class="px-1 lg:px-0">
                <h3 class="flex items-center justify-start font-semibold text-white lg:w-auto mb-3 lg:mb-0">
                    <img
                        src="../../../../assets/img/emoji-rocket.png"
                        class="w-4 h-4 mr-2 drop-shadow-[0_1px_3px_rgba(255,255,255,0.25)]" />
                    Minhas informações
                </h3>
                <p class="mt-1 text-sm text-gray-400">Edite as informações do seu perfil.</p>
            </div>
        </div>
        <div class="mt-5 lg:col-span-3 lg:mt-0">

            <div class="overflow-hidden rounded-md bg-pepper-dark-2 border border-pepper-dark-3">
                <div class="grid grid-cols-2 gap-4 px-4 py-5 sm:p-6">

                    <div class="col-span-2">
                        <div class="mt-1 flex flex-col items-center justify-center">
                            <span class="inline-block h-20 w-20 shadow-lg overflow-hidden rounded-full bg-gray-100">

                                <!-- Se user não tem foto do perfil: -->
                                <svg v-if="!userHasPicture" class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>

                                <!-- Se user tem foto do perfil: -->
                                <img v-if="userHasPicture" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Silvio_Santos_em_maio_de_2019.jpg" class="h-full w-full rounded-full object-cover" />

                            </span>
                            <button type="button" class="flex items-center justify-center mt-5 rounded-md border border-zinc-800 bg-pepper-dark-3 py-2 px-3 text-sm font-semibold leading-4 text-red-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                                </svg>
                                <span>Alterar foto</span>
                            </button>
                        </div>
                    </div>

                    <div class="col-span-2">
                        <label class="block mb-2 text-sm font-medium text-gray-400">
                            Nome completo:
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="Nome completo"
                            value="Ronaldo Silveira"
                            class="border-zinc-700 text-gray-300 text-sm bg-pepper-dark-3 placeholder-zinc-500 focus:border-indigo-600 focus:ring-0 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500" />
                    </div>
                    <div class="col-span-2">
                        <label class="block mb-2 text-sm font-medium text-gray-400">
                            E-mail de acesso:
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="joao.silva@terra.com.br"
                            value="contato@cineticaedu.com"
                            disabled
                            class="border-zinc-700 text-gray-300 text-sm bg-pepper-dark-3 placeholder-zinc-500 focus:border-indigo-600 focus:ring-0 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500" />
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

        <div class="py-8 lg:py-2 mt-6 lg:mt-0 col-span-4">
            <div class="border-t border-gray-700"></div>
        </div>

        <div class="lg:col-span-1 mt-2 lg:mt-0">
            <div class="px-1 lg:px-0">
                <h3 class="flex items-center justify-start font-semibold text-white lg:w-auto mb-3 lg:mb-0">
                    <img
                        src="../../../../assets/img/emoji-lock.png"
                        class="w-4 h-4 mr-2 drop-shadow-[0_1px_3px_rgba(255,255,255,0.25)]" />
                    Alterar senha
                </h3>
                <p class="mt-1 text-sm text-gray-400">Deixe em branco para manter a sua senha atual.</p>
            </div>
        </div>
        <div class="mt-5 lg:col-span-3 lg:mt-0">

            <div class="overflow-hidden rounded-md bg-pepper-dark-2 border border-pepper-dark-3">
                <div class="grid grid-cols-2 gap-4 px-4 py-5 sm:p-6">
                    <div class="col-span-2">
                        <label class="block mb-2 text-sm font-medium text-gray-400">
                            Senha atual:
                        </label>
                        <input
                            type="password"
                            required
                            class="border-zinc-700 text-gray-300 text-sm bg-pepper-dark-3 placeholder-zinc-500 focus:border-indigo-600 focus:ring-0 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500" />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-400">
                            Nova senha:
                        </label>
                        <input
                            type="password"
                            required
                            class="border-zinc-700 text-gray-300 text-sm bg-pepper-dark-3 placeholder-zinc-500 focus:border-indigo-600 focus:ring-0 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500" />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label for="" class="block mb-2 text-sm font-medium text-gray-400">
                            Confirme a nova senha:
                        </label>
                        <input
                            type="password"
                            required
                            class="border-zinc-700 text-gray-300 text-sm bg-pepper-dark-3 placeholder-zinc-500 focus:border-indigo-600 focus:ring-0 w-full rounded-md py-2 px-3 font-medium outline-none transition duration-500" />
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