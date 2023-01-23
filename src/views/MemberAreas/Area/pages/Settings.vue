<script setup>
import { ref, computed } from 'vue'
</script>

<script type="text/javascript">

import { ref } from 'vue'
import Header from "@/components/Header.vue";

export default {
    data: function () {
        return {
            pepper: this.pepper,
            coverFormat: 0
        }
    }
};
</script>

<template>
    <div class="w-full mb-10 max-w-6xl mx-auto">
        <Header title="Editar configurações"></Header>
    </div>

    <div class="shadow overflow-hidden rounded-md max-w-6xl mx-auto">
        <div class="grid grid-cols-2 gap-4 bg-pepper-dark-2 border border-pepper-dark-3 px-4 pt-5 pb-8 md:px-6 md:pt-6 md:pb-10">
            <div class="col-span-2">
                <h3 class="flex items-center justify-start gap-x-2 font-semibold text-white text-lg mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-50">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Definições gerais
                </h3>
            </div>
            <div class="col-span-2">
                <label :class="pepper.darkMode.form.label">
                    Nome da área de membros:
                </label>
                <input
                    type="text"
                    required
                    placeholder="Nome que irá aparecer para seus alunos"
                    value="Cinética: Escola do movimento"
                    :class="pepper.darkMode.form.input" />
            </div>
            <div class="col-span-2">
                <label :class="pepper.darkMode.form.label">
                    Link de acesso:
                </label>
                <input
                    type="text"
                    readonly
                    value="https://peppermembers.com/cinetica-escola-do-movimento"
                    :class="pepper.darkMode.form.input" />
            </div>
            <div class="col-span-2 md:col-span-1">
                <label :class="pepper.darkMode.form.label">
                    E-mail de suporte:
                </label>
                <input
                    type="email"
                    required
                    placeholder="Digite o e-mail"
                    value="contato@cineticaedu.com"
                    :class="pepper.darkMode.form.input" />
            </div>
            <div class="col-span-2 md:col-span-1">
                <label :class="pepper.darkMode.form.label">
                    WhatsApp de suporte:
                </label>
                <input
                    type="text"
                    required
                    placeholder="Somente números"
                    :class="pepper.darkMode.form.input" />
            </div>
            <div class="col-span-2 flex items-start gap-x-3 mt-3">
                <input id="showForPurchase" type="checkbox" class="border-zinc-700 rounded" checked />
                <div>
                    <label for="showForPurchase" class="block text-sm text-gray-100 font-medium mb-1 -mt-1 cursor-pointer">
                        Permitir comentários dos alunos
                    </label>
                    <span class="block text-xs text-gray-400">
                        Os comentários serão exibidos para aprovação na aba 'Comentários'.
                    </span>
                </div>
            </div>

            <!-- Formato da capa dos produtos -->
            <div class="col-span-2">
                <h3 class="flex items-center justify-start gap-x-2 font-semibold text-white text-lg mt-6 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-50">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                    </svg>
                    Orientação das imagens dos cursos
                </h3>
                <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <div class="flex items-center gap-2">
                        <input type="radio" v-model="coverFormat" value="0" id="coverFormatLandscape" :class="pepper.darkMode.form.inputRadioWhiteBg" class="bg-pepper-dark-5">
                        <label for="coverFormatLandscape" :class="pepper.darkMode.form.label" class="mb-0 cursor-pointer">
                            Formato thumbnail (deitada - estilo "YouTube")
                        </label>
                    </div>
                    <div class="flex items-center gap-2">
                        <input type="radio" v-model="coverFormat" value="1" id="coverFormatPortrait" :class="pepper.darkMode.form.inputRadioWhiteBg" class="bg-pepper-dark-5">
                        <label for="coverFormatPortrait" :class="pepper.darkMode.form.label" class="mb-0 cursor-pointer">
                            Formato filme (em pé - estilo "Netflix")
                        </label>
                    </div>
                </div>
            </div>

            <div class="col-span-2">
                <h3 class="flex items-center justify-start gap-x-2 font-semibold text-white text-lg mt-6 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 opacity-50">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    Capa da área de membros
                </h3>
            </div>
            <div class="col-span-2 mt-1 flex flex-col items-center justify-center">
                <span class="inline-block w-72 shadow-lg overflow-hidden rounded-lg border border-zinc-700 bg-pepper-dark-3 aspect-video">
                    <img v-if="!memberAreaImage" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Silvio_Santos_em_maio_de_2019.jpg" class="h-full w-full object-cover" />
                </span>
                <button type="button" class="flex items-center justify-center mt-5 rounded-md border border-zinc-800 bg-pepper-dark-3 py-2 px-3 text-sm font-semibold leading-4 text-indigo-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <span>Alterar foto de capa</span>
                </button>
            </div>
        </div>
        <div class="bg-pepper-dark-3 px-4 py-3 text-right sm:px-6">
            <button
                :class="pepper.darkMode.button.modal.primary">
                Salvar alterações
            </button>
        </div>
    </div>
</template>