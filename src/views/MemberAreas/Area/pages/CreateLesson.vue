<script setup>

import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { TrashIcon } from '@heroicons/vue/24/outline'

const modules = [
    { id: 1, name: 'Módulo 1 – Seja bem vindo!' },
    { id: 2, name: 'Módulo 2 – Funil de vendas' },
    { id: 3, name: 'Módulo 3 – Como fazer sua primeira venda' },
    { id: 4, name: 'Módulo 4 – Fontes de tráfego' },
    { id: 5, name: 'Módulo 5 – Escalando seu negócio digital' },
]
const selectedModule = ref('');

const formats = [
    { value: 0, name: 'Aula em vídeo' },
    { value: 1, name: 'Conteúdo em texto' }
]
const selectedFormat = ref('');

</script>

<script type="text/javascript">
import Breadcrumb from "@/components/Breadcrumb.vue";
import Header from "@/components/Header.vue";

export default {
    data: function () {
        return {
            pepper: this.pepper,
            preview: null,
            attachments: null
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
                this.attachments = input.files;
                console.log(this.attachments);

                let fileName = this.attachments[0].name;

                console.log(fileName)
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
    <div class="w-full max-w-6xl mx-auto mb-10">

        <Breadcrumb
            item1Route="/area"
            item1Text="Conteúdos"
            item2Text="Aprendendo a vender online com escala" />

        <Header title="Adicionar aula"></Header>
    </div>

    <div class="mt-5 lg:mt-0 max-w-6xl mx-auto">
        <div :class="pepper.darkMode.card.container">
            <div class="gap-y-4 flex flex-col px-4 py-5 sm:p-6 pb-8 sm:pb-8">

                <div class="lg:grid lg:grid-cols-4 lg:gap-6">

                    <div class="lg:col-span-1 mb-6">
                        <span class="block font-semibold text-base text-white mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 mb-1 text-indigo-500 inline-flex">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>
                            Informações
                        </span>
                    </div>

                    <div class="lg:col-span-3 flex flex-col gap-4 mb-1">
                        <div>
                            <label :class="pepper.darkMode.form.label">
                                Título da aula:
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Preencha com o nome da aula"
                                maxlength="200"
                                :class="pepper.darkMode.form.input" />
                        </div>
                        <div>
                            <label :class="pepper.darkMode.form.label">
                                Módulo no qual será adicionada esta aula:
                            </label>
                            <Listbox v-model="selectedModule">
                                <div class="relative mt-1">
                                    <ListboxButton :class="pepper.darkMode.listbox.darkBg.button">
                                        <!-- 'placeholder' -->
                                        <span v-if="selectedModule == ''" :class="pepper.darkMode.listbox.darkBg.buttonInnerSpan" class="opacity-40">
                                            Selecionar módulo
                                        </span>
                                        <span v-if="selectedModule !== ''" :class="pepper.darkMode.listbox.darkBg.buttonInnerSpan">
                                            {{ selectedModule.name }}
                                        </span>
                                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </ListboxButton>
                                    <transition
                                        leave-active-class="transition duration-100 ease-in"
                                        leave-from-class="opacity-100"
                                        leave-to-class="opacity-0">
                                        <ListboxOptions
                                            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-900 border border-zinc-800 py-1 focus:outline-none text-sm">
                                            <ListboxOption
                                                v-slot="{ active, selected }"
                                                v-for="mod in modules"
                                                :key="mod.name"
                                                :value="mod"
                                                as="template">
                                                <li :class="[active ? 'bg-indigo-500 text-white' : 'text-gray-200', 'relative cursor-pointer select-none py-2 pl-10 pr-4',]">
                                                    <span :class="pepper.darkMode.listbox.darkBg.optionLi">
                                                        {{ mod.name }}
                                                    </span>
                                                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-400">
                                                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                </li>
                                            </ListboxOption>
                                        </ListboxOptions>
                                    </transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>

                    <div class="lg:col-span-1 mb-6">
                        <span class="block font-semibold text-base text-white mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 mb-1 text-indigo-500 inline-flex">
                                <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path>
                            </svg>
                            Conteúdo
                        </span>
                    </div>

                    <div class="lg:col-span-3 flex flex-col gap-4 mb-1">
                        <div>
                            <label :class="pepper.darkMode.form.label">
                                Formato deste conteúdo:
                            </label>
                            <Listbox v-model="selectedFormat">
                                <div class="relative mt-1">
                                    <ListboxButton :class="pepper.darkMode.listbox.darkBg.button">
                                        <!-- 'placeholder' -->
                                        <span v-if="selectedFormat == ''" :class="pepper.darkMode.listbox.darkBg.buttonInnerSpan" class="opacity-40">
                                            Selecionar formato
                                        </span>
                                        <span v-if="selectedFormat !== ''" :class="pepper.darkMode.listbox.darkBg.buttonInnerSpan">
                                            {{ selectedFormat.name }}
                                        </span>
                                        <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </ListboxButton>
                                    <transition
                                        leave-active-class="transition duration-100 ease-in"
                                        leave-from-class="opacity-100"
                                        leave-to-class="opacity-0">
                                        <ListboxOptions
                                            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-900 border border-zinc-800 py-1 focus:outline-none text-sm">
                                            <ListboxOption
                                                v-slot="{ active, selected }"
                                                v-for="format in formats"
                                                :key="format.name"
                                                :value="format"
                                                as="template">
                                                <li :class="[active ? 'bg-indigo-500 text-white' : 'text-gray-200', 'relative cursor-pointer select-none py-2 pl-10 pr-4',]">
                                                    <span :class="pepper.darkMode.listbox.darkBg.optionLi">
                                                        {{ format.name }}
                                                    </span>
                                                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-emerald-400">
                                                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                </li>
                                            </ListboxOption>
                                        </ListboxOptions>
                                    </transition>
                                </div>
                            </Listbox>
                        </div>

                        <div v-if="selectedFormat.value == 0">
                            <label :class="pepper.darkMode.form.label">
                                Link do vídeo (Youtube, Vimeo ou Panda Video):
                            </label>
                            <input
                                type="text"
                                placeholder="Insira a URL do vídeo"
                                required
                                maxlength="500"
                                :class="pepper.darkMode.form.input" />
                        </div>
                    </div>

                    <div class="lg:col-span-1 mb-6">
                        <span class="block font-semibold text-base text-white mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-1 mb-1 text-indigo-500 inline-flex">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                            </svg>
                            Anexar arquivos
                        </span>
                    </div>

                    <div class="lg:col-span-3">
                        <span :class="pepper.darkMode.form.label">
                            Adicione anexos a esta aula (opcional):
                        </span>
                        <label for="file-upload" class="mt-1 flex justify-center rounded-md border-2 border-dashed border-zinc-700 hover:border-indigo-600 transition duration-300 cursor-pointer">
                            <div class="space-y-1 text-center bg-zinc-900 w-full h-full px-6 pt-5 pb-6">
                                <!-- input hidden -->
                                <input id="file-upload" name="file-upload" type="file" accept="*" @change="previewImage" class="sr-only" multiple />
                                <!-- upload -->
                                <div v-if="!attachments" class="w-full">
                                    <svg class="mx-auto h-8 w-8 mb-2 text-indigo-400" stroke="currentColor" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                    </svg>
                                    <div class="text-sm text-indigo-500 font-medium justify-center mb-2">
                                        Clique para fazer upload
                                    </div>
                                    <p class="text-xs text-gray-400">(Até 10mb por arquivo)</p>
                                </div>
                                <!-- Image preview -->
                                <div v-if="attachments" class="text-left">
                                    <template v-for="img in attachments">
                                        <div class="flex items-center justify-start gap-x-1 mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3.5 h-3.5 text-indigo-500">
                                                <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                                            </svg>
                                            <span class="text-sm text-gray-400">{{ img.name }}</span>
                                        </div>
                                    </template>
                                    <button @click="reset" :class="pepper.darkMode.button.primary" class="mt-2 py-2">
                                        <TrashIcon class="h-3.5 w-3.5 -ml-1 mr-1" aria-hidden="true" />
                                        <span>Remover arquivos</span>
                                    </button>
                                </div>
                            </div>
                        </label>
                    </div>

                </div>
            </div>

            <div :class="pepper.darkMode.card.footer">
                <button
                    :class="pepper.darkMode.button.secondary">
                    Cancelar
                </button>
                <button
                    :class="pepper.darkMode.button.primary">
                    Adicionar
                </button>
            </div>
        </div>
    </div>

</template>