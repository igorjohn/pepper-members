<script setup>

import { TrashIcon, ArrowPathRoundedSquareIcon, Cog6ToothIcon, PhotoIcon } from '@heroicons/vue/24/outline'
import { InformationCircleIcon } from '@heroicons/vue/20/solid'

</script>

<script type="text/javascript">

import Header from "@/components/Header.vue";

export default {
    data: function () {
        return {
            pepper: this.pepper,
            coverFormat: 0,
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
    <div class="w-full mb-10 max-w-6xl mx-auto">
        <Header title="Editar configurações"></Header>
    </div>

    <div class="shadow overflow-hidden rounded-md max-w-6xl mx-auto">
        <div class="grid grid-cols-2 gap-4 bg-pepper-dark-2 border border-pepper-dark-3 px-4 pt-5 pb-8 md:px-6 md:pt-6 md:pb-10">
            <div class="col-span-2">
                <h3 class="flex items-center justify-start gap-x-2 font-semibold text-white text-lg mb-2">
                    <Cog6ToothIcon class="w-5 h-5 opacity-50" />
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
                <input id="allowComments" type="checkbox" class="border-zinc-700 rounded" checked />
                <div>
                    <label for="allowComments" class="block text-sm text-gray-100 font-medium mb-1 -mt-[2px] cursor-pointer">
                        Permitir comentários dos alunos
                    </label>
                    <span class="block text-xs text-gray-400">
                        Os comentários serão exibidos para você aprovar e responder, caso queira, na aba 'Comentários'.
                    </span>
                </div>
            </div>

            <div class="col-span-2">
                <hr class="border-zinc-800 mt-4" />
            </div>

            <!-- Formato da capa dos produtos -->
            <div class="col-span-2">
                <h3 class="flex items-center justify-start gap-x-2 font-semibold text-white text-lg mt-4 mb-4">
                    <ArrowPathRoundedSquareIcon class="w-5 h-5 opacity-50" />
                    Orientação das imagens dos cursos
                </h3>

                <!-- Alert -->
                <div class="mt-4 mb-6 bg-slate-700 bg-opacity-70 rounded text-indigo-900 px-4 py-3 lg:py-3.5" role="alert">
                    <div class="flex">
                        <InformationCircleIcon class="h-3.5 w-3.5 fill-current text-slate-400 mr-3 my-1" />
                        <div>
                            <span class="block text-sm text-gray-100 font-medium mb-1.5">
                                Selecione a aparência da capa dos seus cursos.
                            </span>
                            <span class="block text-xs text-gray-300 font-normal mb-1">
                                Escolha se prefere os seus cursos com o formato estilo "Netflix" (imagem em pé) ou com formato "YouTube" (imagem deitada).
                            </span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-1">
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
                <hr class="border-zinc-800 mt-4" />
            </div>

            <div class="col-span-2">
                <h3 class="flex items-center justify-start gap-x-2 font-semibold text-white text-lg mt-4 mb-3">
                    <PhotoIcon class="w-5 h-5 opacity-50" />
                    Imagens:
                </h3>
            </div>

            <div class="col-span-2 lg:flex lg:gap-5 xl:gap-6">
                <div class="lg:w-1/3 lg:max-w-[450px]">
                    <span :class="pepper.darkMode.form.label" class="text-base font-semibold text-gray-200 mb-2">
                        Capa da área de membros
                    </span>
                    <span class="block text-xs text-gray-400 mb-4">
                        Esta imagem ficará visível para os seus alunos ao acessar a área de membros.
                    </span>
                </div>
                <label for="file-upload" class="mt-1 flex flex-col lg:grow items-center justify-center rounded-md border-2 border-dashed border-zinc-700 hover:border-indigo-600 transition duration-300 cursor-pointer px-6 py-5 text-center bg-zinc-900">
                    <input id="file-upload" name="file-upload" type="file" accept="image/*" @change="previewImage" class="sr-only" />
                    <!-- upload -->
                    <template v-if="!preview">
                        <svg class="mx-auto h-12 w-12 text-gray-400 -mt-1" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-indigo-500 font-medium justify-center mb-2">
                            Clique para fazer upload
                        </div>
                        <p class="text-xs text-gray-400 mb-1.5">PNG, JPG, GIF, WEBP (até 5mb)</p>
                        <p class="text-xs text-gray-400">Tamanho sugerido: 1600x900px</p>
                    </template>
                    <!-- preview -->
                    <div v-if="preview" class="flex flex-col items-center justify-center">
                        <div class="relative bg-zinc-800 max-w-full w-[300px] border border-zinc-700 rounded-md overflow-hidden mx-auto mb-3">
                            <img class="w-full aspect-video object-cover" :src="preview">
                            <div class="absolute top-0 right-0 m-2">
                                <button @click="reset" class="py-1 px-1 rounded bg-slate-600 bg-opacity-40 text-white hover:bg-red-600 hover:bg-opacity-60 transition duration-600">
                                    <TrashIcon class="h-3 w-3" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mb-0">{{ image.name }}</p>
                    </div>
                </label>
            </div>

            <div class="col-span-2 lg:flex lg:gap-5 xl:gap-6 mt-3">
                <div class="lg:w-1/3 lg:max-w-[450px]">
                    <span :class="pepper.darkMode.form.label" class="text-base font-semibold text-gray-200 mb-2">
                        Logo personalizada
                    </span>
                    <span class="block text-xs text-gray-400 mb-4">
                        Faça o upload da logo da sua marca, para exibi-la no menu lateral.
                    </span>
                </div>
                <label for="file-upload" class="mt-1 flex flex-col lg:grow items-center justify-center rounded-md border-2 border-dashed border-zinc-700 hover:border-indigo-600 transition duration-300 cursor-pointer px-6 py-5 text-center bg-zinc-900">
                    <input id="file-upload" name="file-upload" type="file" accept="image/*" @change="previewImage" class="sr-only" />
                    <!-- upload -->
                    <template v-if="!preview">
                        <svg class="mx-auto h-12 w-12 text-gray-400 -mt-1" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-indigo-500 font-medium justify-center mb-2">
                            Clique para fazer upload
                        </div>
                        <p class="text-xs text-gray-400">PNG, JPG, GIF, WEBP (até 5mb)</p>
                    </template>
                    <!-- preview -->
                    <div v-if="preview" class="flex flex-col items-center justify-center">
                        <div class="relative bg-zinc-800 border border-zinc-700 rounded-md overflow-hidden mx-auto mb-3 max-w-full w-[300px] px-3 py-4">
                            <img class="max-w-[70%] max-h-[26px] mx-auto object-cover" :src="preview">
                            <div class="absolute top-0 right-0 m-2">
                                <button @click="reset" class="py-1 px-1 rounded bg-slate-600 bg-opacity-40 text-white hover:bg-red-600 hover:bg-opacity-60 transition duration-600">
                                    <TrashIcon class="h-3 w-3" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mb-0">{{ image.name }}</p>
                    </div>
                </label>
            </div>

            <div class="col-span-2 lg:flex lg:gap-5 xl:gap-6 mt-3">
                <div class="lg:w-1/3 lg:max-w-[450px]">
                    <span :class="pepper.darkMode.form.label" class="text-base font-semibold text-gray-200 mb-2">
                        Banner na tela inicial
                    </span>
                    <span class="block text-xs text-gray-400 mb-4">
                        Adicione um banner no topo da tela "Meus conteúdos".
                    </span>
                    <div class="flex items-start gap-x-3 mt-5 mb-1.5">
                        <input id="bannerHref" type="checkbox" class="border-zinc-700 rounded" />
                        <label for="bannerHref" class="block text-sm text-gray-100 font-medium mb-1 -mt-[2px] cursor-pointer">
                            Adicionar link no banner (URL externa)
                        </label>
                    </div>
                    <input
                        type="url"
                        placeholder="https://seu-link-de-upsell.com.br"
                        :class="pepper.darkMode.form.input"
                        class="mb-1 py-2" />
                </div>

                <label for="file-upload" class="mt-1 flex flex-col lg:grow items-center justify-center rounded-md border-2 border-dashed border-zinc-700 hover:border-indigo-600 transition duration-300 cursor-pointer px-6 py-5 text-center bg-zinc-900">
                    <input id="file-upload" name="file-upload" type="file" accept="image/*" @change="previewImage" class="sr-only" />
                    <!-- upload -->
                    <template v-if="!preview">
                        <svg class="mx-auto h-12 w-12 text-gray-400 -mt-1" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-indigo-500 font-medium justify-center mb-2">
                            Clique para fazer upload
                        </div>
                        <p class="text-xs text-gray-400 mb-1.5">PNG, JPG, GIF, WEBP (até 5mb)</p>
                        <p class="text-xs text-gray-400">Tamanho sugerido: 1200x400px</p>
                    </template>
                    <!-- preview -->
                    <div v-if="preview" class="flex flex-col items-center justify-center">
                        <div class="relative bg-zinc-800 max-w-full w-[300px] border border-zinc-700 rounded-md overflow-hidden mx-auto mb-3">
                            <img class="w-full" :src="preview">
                            <div class="absolute top-0 right-0 m-2">
                                <button @click="reset" class="py-1 px-1 rounded bg-slate-600 bg-opacity-40 text-white hover:bg-red-600 hover:bg-opacity-60 transition duration-600">
                                    <TrashIcon class="h-3 w-3" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mb-0">{{ image.name }}</p>
                    </div>
                </label>
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