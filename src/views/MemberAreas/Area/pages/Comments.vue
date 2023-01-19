<script setup>

import { ref } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption
} from '@headlessui/vue'

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'


const products = [
    {
        id: 1,
        title: 'Aprendendo a vender online com escala'
    },
    {
        id: 2,
        title: 'Scripts para vender no automático pelo Whatsapp'
    },
    {
        id: 3,
        title: 'Curso de biomecânica avançada'
    },
    {
        id: 4,
        title: 'Curso de Powerlifting e Agachamento'
    },
    {
        id: 5,
        title: 'Periodização e Controle de Carga no Treinamento Físico'
    },
    {
        id: 6,
        title: 'Método indiano – Fature 5 dígitos com jQuery'
    }
]

const selectedProduct = ref([]);
</script>

<script type="text/javascript">

import Header from "@/components/Header.vue";


export default {
    data() {
        return {
            tab: 1,
            pepper: this.pepper,
            inReplyTo: false,
        };
    },
    methods: {
        showNewComments() {
            this.tab = 1;
        },
        showApprovedComments() {
            this.tab = 2;
        },

        replyComment: function () {
            this.inReplyTo = true;
            const textarea = this.$refs.comment;
            textarea.focus()
        }


    },
};

</script>

<template>
    <div class="w-full max-w-7xl mx-auto">
        <Header title="Comentários"></Header>

        <div class="mt-8 mb-10 max-w-3xl">
            <label :class="pepper.darkMode.form.label">
                Filtrar por curso:
            </label>
            <Listbox v-model="selectedProduct" multiple>
                <div class="relative mt-1">
                    <ListboxButton
                        :class="pepper.darkMode.listbox.darkBg.button">

                        <!-- 'placeholder' -->
                        <span v-if="selectedProduct.length === 0" :class="pepper.darkMode.listbox.darkBg.buttonInnerSpan" class="opacity-70">
                            Filtrar por curso
                        </span>

                        <span v-if="selectedProduct.length !== 0" :class="pepper.darkMode.listbox.darkBg.buttonInnerSpan">
                            {{ selectedProduct.map((p) => p.title).join(', ') }}
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
                            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-900 border border-zinc-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
                            <ListboxOption
                                v-slot="{ active, selected }"
                                v-for="p in products"
                                :key="p.title"
                                :value="p"
                                as="template">
                                <li :class="[active ? 'bg-indigo-500 text-white' : 'text-gray-200', 'relative cursor-pointer select-none py-2 pl-10 pr-4',]">
                                    <span :class="pepper.darkMode.listbox.darkBg.optionLi">
                                        {{ p.title }}
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


        <!-- Tabs -->
        <ul class="flex justify-start">
            <li>
                <button
                    @click="showNewComments"
                    :class="tab == 1 ? 'border-indigo-500 text-indigo-400' : 'border-gray-800 text-gray-300'"
                    class="text-sm sm:text-base inline-block px-4 sm:px-6 py-2.5 font-semibold rounded-none border-0 border-b-2 hover:border-indigo-600 hover:text-indigo-400 transition duration-300 bg-transparent">
                    Novos comentários (27)
                </button>
            </li>
            <li>
                <button
                    @click="showApprovedComments"
                    :class="tab == 2 ? 'border-indigo-500 text-indigo-400' : 'border-gray-800 text-gray-300'"
                    class="text-sm sm:text-base inline-block px-4 sm:px-6 py-2.5 font-semibold rounded-none border-0 border-b-2 hover:border-indigo-600 hover:text-indigo-400 transition duration-300 bg-transparent">
                    Aprovados (2.100)
                </button>
            </li>

        </ul>
        <div class="p-3 mt-6">

            <div v-show="tab === 1">

                <!-- Comment -->
                <div class="mb-6 border-b border-zinc-900 pb-6">
                    <div class="flex items-start gap-x-3">
                        <img
                            src="https://pbs.twimg.com/profile_images/1537593562619060225/AmmxIwWi_400x400.jpg"
                            class="w-10 h-10 flex-none rounded-full overflow-hidden aspect-square border border-zinc-700 object-cover" />
                        <div>
                            <div class="w-100 flex flex-col md:flex-row md:items-start md:justify-between md:gap-x-5 mb-4 md:mb-1">
                                <div>
                                    <div class="flex items-center justify-start gap-x-3 mb-2">
                                        <span class="block text-sm font-semibold text-gray-100">
                                            Ronaldo Assis
                                        </span>
                                        <span class="block text-xs font-normal text-gray-500">
                                            Há 3 horas
                                        </span>
                                    </div>
                                    <div class="w-100 flex items-center justify-start gap-x-2 mt-1 mb-3 truncate" style="max-width:75vw;">
                                        <span class="text-xs font-medium text-gray-500 truncate">
                                            Curso Powerlifting
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                        <span class="text-xs font-medium text-indigo-500 truncate pr-2">
                                            Como agachar com acessórios
                                        </span>
                                    </div>
                                </div>

                                <div class="inline-flex items-center mt-1 md:mt-0">
                                    <button
                                        @click="replyComment()"
                                        class="bg-transparent hover:bg-indigo-700 hover:border-indigo-700 hover:text-white border border-indigo-500 rounded-none rounded-l-md px-4 py-1.5 inline-flex items-center gap-x-1 text-xs font-medium text-indigo-400 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3.5 h-3.5 -ml-1 -mt-1" viewBox="0 0 16 16">
                                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                                        </svg>
                                        Responder
                                    </button>
                                    <button
                                        @click="approveComment()"
                                        class="bg-transparent hover:bg-indigo-700 hover:border-indigo-700 hover:text-white border-x-0 border-y border-indigo-500 rounded-none px-4 py-1.5 inline-flex items-center gap-x-1 text-xs font-medium text-indigo-400 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 -ml-1" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                        </svg>
                                        Aprovar
                                    </button>
                                    <button
                                        @click="confirmDelete()"
                                        class="bg-transparent hover:bg-indigo-700 hover:border-indigo-700 hover:text-white border border-indigo-500 rounded-none rounded-r-md px-4 py-1.5 inline-flex items-center gap-x-1 text-xs font-medium text-indigo-400 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 -ml-1" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        Excluir
                                    </button>
                                </div>
                            </div>
                            <span class="block text-sm font-normal text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            </span>
                        </div>
                    </div>

                    <!-- In Reply to -->
                    <transition appear name="slide-fade">
                        <div v-if="inReplyTo" class="w-full mt-4">
                            <span @click="inReplyTo = false" class="w-full py-1 inline-flex items-center gap-x-2 text-xs font-medium text-indigo-400 mb-4 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 text-indigo-500 -mt-1" viewBox="0 0 16 16">
                                    <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                                </svg>
                                <span>
                                    Respondendo a Ronaldo A.
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 -mt-1 text-gray-500 ml-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>

                            <textarea type="text" placeholder="Responder comentário" :class="pepper.darkMode.form.input" rows="3" maxlength="1000" minlength="5" required ref="comment"></textarea>
                            <button type="button" :class="pepper.darkMode.button.login">
                                Enviar comentário
                            </button>
                        </div>
                    </Transition>
                    <!-- End In Reply to -->
                </div>
                <!-- End comment -->

            </div>


            <div v-show="tab === 2">
                <!-- Comment -->
                <div class="mb-6 border-b border-zinc-900 pb-6">
                    <div class="flex items-start gap-x-3">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            class="w-10 h-10 flex-none rounded-full overflow-hidden aspect-square border border-zinc-700 object-cover" />
                        <div>
                            <div class="w-100 flex flex-col md:flex-row md:items-start md:justify-between md:gap-x-5 mb-4 md:mb-1">
                                <div>
                                    <div class="flex items-center justify-start gap-x-3 mb-2">
                                        <span class="block text-sm font-semibold text-gray-100">
                                            Gilson Tavares
                                        </span>
                                        <span class="block text-xs font-normal text-gray-500">
                                            Em 26/12/2022
                                        </span>
                                    </div>

                                    <span class="w-full inline-flex items-center gap-x-2 text-xs font-medium text-indigo-400 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 text-indigo-500 -mt-1" viewBox="0 0 16 16">
                                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                                        </svg>
                                        Em resposta a Ronaldo A.
                                    </span>

                                    <div class="w-100 flex items-center justify-start gap-x-2 mt-1 mb-3 truncate" style="max-width:75vw;">
                                        <span class="text-xs font-medium text-gray-500 truncate">
                                            Curso Powerlifting
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 text-gray-600">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                        <span class="text-xs font-medium text-indigo-500 truncate pr-2">
                                            Como agachar com acessórios
                                        </span>
                                    </div>
                                </div>

                                <div class="inline-flex items-center mt-1 md:mt-0">
                                    <button
                                        @click="replyComment()"
                                        class="bg-transparent hover:bg-indigo-700 hover:border-indigo-700 hover:text-white border border-indigo-500 rounded-none rounded-l-md px-4 py-1.5 inline-flex items-center gap-x-1 text-xs font-medium text-indigo-400 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3.5 h-3.5 -ml-1 -mt-1" viewBox="0 0 16 16">
                                            <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                                        </svg>
                                        Responder
                                    </button>
                                    <button
                                        @click="confirmDelete()"
                                        class="bg-transparent hover:bg-indigo-700 hover:border-indigo-700 hover:text-white border-l-0 border border-indigo-500 rounded-none rounded-r-md px-4 py-1.5 inline-flex items-center gap-x-1 text-xs font-medium text-indigo-400 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 -ml-1" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                        Excluir
                                    </button>
                                </div>
                            </div>
                            <span class="block text-sm font-normal text-gray-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            </span>
                        </div>
                    </div>

                    <!-- In Reply to -->
                    <transition appear name="slide-fade">
                        <div v-if="inReplyTo" class="w-full mt-4">
                            <span @click="inReplyTo = false" class="w-full py-1 inline-flex items-center gap-x-2 text-xs font-medium text-indigo-400 mb-4 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 text-indigo-500 -mt-1" viewBox="0 0 16 16">
                                    <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                                </svg>
                                <span>
                                    Respondendo a Ronaldo A.
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 -mt-1 text-gray-500 ml-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </span>

                            <textarea type="text" placeholder="Responder comentário" :class="pepper.darkMode.form.input" rows="3" maxlength="1000" minlength="5" required ref="comment"></textarea>
                            <button type="button" :class="pepper.darkMode.button.login">
                                Enviar comentário
                            </button>
                        </div>
                    </Transition>
                    <!-- End In Reply to -->
                </div>
                <!-- End comment -->

            </div>
        </div>
    </div>
</template>