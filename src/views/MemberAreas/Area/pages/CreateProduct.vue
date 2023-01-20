<script setup>

import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { TrashIcon } from '@heroicons/vue/24/outline'

// notification
let showNotification = ref(false);
function notification() {
    showNotification.value = true;

    setTimeout(() => {
        showNotification.value = false;
    }, 3500);

}


const category = [
    { id: 1, name: 'Empreendedorismo' },
    { id: 2, name: 'Educação física e fisioterapia' },
    { id: 3, name: 'Programação ágil' },
]

const selectedCategory = ref('');

</script>

<script type="text/javascript">

import Header from "@/components/Header.vue";

export default {
    data: function () {
        return {
            pepper: this.pepper,
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
    <div class="w-full max-w-5xl mx-auto mb-10">
        <Header title="Adicionar novo curso"></Header>
    </div>

    <div class="mt-5 lg:col-span-3 lg:mt-0 max-w-5xl mx-auto">
        <div :class="pepper.darkMode.card.container">
            <div class="gap-y-4 flex flex-col px-4 py-5 sm:p-6 pb-8 sm:pb-8">
                <span class="block font-semibold text-lg text-white mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6 mr-1 mb-1 text-indigo-500 inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Informações do curso
                </span>

                <div>
                    <label :class="pepper.darkMode.form.label">
                        Título deste curso/produto:
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Preencha com o nome do curso"
                        maxlength="200"
                        :class="pepper.darkMode.form.input" />
                </div>

                <div>
                    <label :class="pepper.darkMode.form.label">
                        Selecionar categoria:
                    </label>
                    <Listbox v-model="selectedCategory">
                        <div class="relative mt-1">
                            <ListboxButton :class="pepper.darkMode.listbox.darkBg.button">
                                <!-- 'placeholder' -->
                                <span v-if="selectedCategory == ''" :class="pepper.darkMode.listbox.darkBg.buttonInnerSpan" class="opacity-40">
                                    Selecione a categoria
                                </span>
                                <span v-if="selectedCategory !== ''" :class="pepper.darkMode.listbox.darkBg.buttonInnerSpan">
                                    {{ selectedCategory.name }}
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
                                        v-for="cat in category"
                                        :key="cat.name"
                                        :value="cat"
                                        as="template">
                                        <li :class="[active ? 'bg-indigo-500 text-white' : 'text-gray-200', 'relative cursor-pointer select-none py-2 pl-10 pr-4',]">
                                            <span :class="pepper.darkMode.listbox.darkBg.optionLi">
                                                {{ cat.name }}
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

                    <div class="mt-1 mb-2">
                        <a href="#" class="text-xs text-indigo-500 hover:opacity-90 transition duration-300">
                            Clique para adicionar uma nova categoria
                        </a>
                    </div>
                </div>

                <div>
                    <label :class="pepper.darkMode.form.label">
                        Descrição do curso:
                    </label>
                    <textarea
                        type="text"
                        maxlength="1500"
                        required
                        placeholder="Descreva este curso para os seus alunos"
                        rows="3"
                        :class="pepper.darkMode.form.input"></textarea>
                </div>

                <!-- Imagem de capa -->
                <div>
                    <span :class="pepper.darkMode.form.label">
                        Imagem de capa:
                    </span>
                    <label for="file-upload" class="mt-1 flex justify-center rounded-md border-2 border-dashed border-zinc-700 hover:border-indigo-600 transition duration-300 cursor-pointer">
                        <div class="space-y-1 text-center bg-zinc-900 w-full h-full px-6 pt-5 pb-6">
                            <!-- input hidden -->
                            <input id="file-upload" name="file-upload" type="file" accept="image/*" @change="previewImage" class="sr-only" />
                            <!-- upload -->
                            <div v-if="!preview" class="w-full">
                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="flex text-sm text-indigo-500 font-medium justify-center mb-2">
                                    Clique para fazer upload
                                </div>
                                <p class="text-xs text-gray-400">PNG, JPG, GIF, WEBP (até 5mb)</p>
                            </div>
                            <!-- Image preview -->
                            <div v-if="preview" class="flex flex-col items-center justify-center">
                                <div class="thumb-container shadow-lg w-full border border-slate-200 rounded-lg overflow-hidden mx-auto mb-6" style="max-width: 280px;">
                                    <img class="w-full aspect-video object-cover bg-slate-500 bg-opacity-10" :src="preview">
                                    <div class="absolute bottom-0 m-2">
                                        <p class="text-xs text-gray-500 mb-0">{{ image.name }}</p>
                                    </div>
                                </div>
                                <button @click="reset" :class="pepper.darkMode.button.primary">
                                    <TrashIcon class="h-4 w-4 mr-1" aria-hidden="true" />
                                    <span>Remover imagem</span>
                                </button>
                            </div>
                        </div>
                    </label>
                </div>

                <span class="block font-semibold text-lg text-white mt-4 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6 mr-1 mb-1 text-indigo-500 inline-flex">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    Vitrine de upsell
                </span>

                <div class="flex items-start gap-x-3">
                    <input id="showForPurchase" type="checkbox" class="border-zinc-700 rounded" />
                    <div>
                        <label for="showForPurchase" class="block text-base text-gray-100 font-medium mb-1 -mt-1 cursor-pointer">
                            Mostrar produto na vitrine.
                        </label>
                        <span class="block text-xs text-gray-400">
                            Exiba este curso para quem ainda não é aluno e aumente as suas vendas.
                        </span>
                    </div>
                </div>

                <div>
                    <label :class="pepper.darkMode.form.label">
                        Link da página de vendas:
                    </label>
                    <input
                        type="text"
                        placeholder="https://seudominio.com.br/"
                        maxlength="200"
                        :class="pepper.darkMode.form.input" />
                </div>

            </div>

            <div :class="pepper.darkMode.card.footer">
                <button
                    :class="pepper.darkMode.button.secondary">
                    Cancelar
                </button>
                <button
                    @click="notification"
                    :class="pepper.darkMode.button.primary">
                    Criar curso
                </button>

            </div>
        </div>
    </div>

    <!-- Notification -->
    <transition appear name="slide-fade">
        <div v-if="showNotification" class="float-right min-w-full fixed bottom-3 right-0 md:right-3">
            <div class="flex flex-col space-y-3 w-100 md:w-1/2 xl:w-1/3 mx-auto md:mx-0 md:ml-auto shadow-lg" style="max-width:93vw;">
                <div class="bg-green-100 border border-lime-800 p-5 w-full rounded-md">
                    <div class="flex justify-between">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-green-500 h-4 w-4">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
                            </svg>
                            <div class="flex-1 leading-tight text-sm text-green-700 font-medium">
                                Curso criado com sucesso!
                            </div>
                        </div>
                        <svg @click="showNotification = !showNotification" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-green-600 h-3 w-3 cursor-pointer">
                            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>