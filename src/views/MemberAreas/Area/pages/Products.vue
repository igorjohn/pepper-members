<script setup>
import { ref, computed } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
} from '@headlessui/vue'

import { CheckIcon, ChevronUpDownIcon, PlusIcon } from '@heroicons/vue/20/solid'
import { TrashIcon } from '@heroicons/vue/24/outline'


// Modal 'Add Course'
let isOpenModalAddProduct = ref(false);
function openModalAddProduct() {
    isOpenModalAddProduct.value = true;
}

let isOpenModalAddCategory = ref(false);
function openModalAddCategory() {
    isOpenModalAddCategory.value = true;
}

function closeModal() {
    isOpenModalAddProduct.value = false;
    isOpenModalAddCategory.value = false;
}


// Input combobox
const category = [
    { id: 1, name: 'Empreendedorismo' },
    { id: 2, name: 'Educação física e fisioterapia' },
    { id: 3, name: 'Programação ágil' },
]

const product = [
    {
        id: 1,
        belongsToCategory: 1,
        isPublished: true,
        title: 'Aprendendo a vender online com escala',
        route: '/area/produto',
        thumbnail: 'https://www.userede.com.br/content/userede/pt-br/blog/quais-ferramentas-de-marketing-digital-posso-usar-para-divulgar-meu-negocio-na-internet/_jcr_content/root/responsivegrid/tabcontainer_4788725/tabs-container-1/productdetails_copy/bottom-container/card_copy_copy_copy_94108686/card-container-content-responsivegrid/image.coreimg.jpeg/1557325623466.jpeg'
    },
    {
        id: 2,
        belongsToCategory: 1,
        isPublished: false,
        title: 'Scripts para vender no automático pelo Whatsapp',
        route: '/area/produto',
        thumbnail: 'https://www.agenciaithink.com.br/Imagem/178/blog-20200610/df/tudo-sobre-como-vender-no-whatsapp.png'
    },
    {
        id: 3,
        belongsToCategory: 2,
        isPublished: true,
        title: 'Curso de biomecânica avançada',
        route: '/area/produto',
        thumbnail: 'https://cineticaedu.com/assets/images/cursos/curso-biomecanica.png'
    },
    {
        id: 4,
        belongsToCategory: 2,
        isPublished: true,
        title: 'Curso de Powerlifting e Agachamento',
        route: '/area/produto',
        thumbnail: 'https://cineticaedu.com/assets/images/cursos/curso-powerlifting.png'
    },
    {
        id: 5,
        belongsToCategory: 2,
        isPublished: true,
        title: 'Periodização e Controle de Carga no Treinamento Físico',
        route: '/area/produto',
        thumbnail: 'https://cineticaedu.com/assets/images/cursos/curso-periodizacao.png'
    },
    {
        id: 6,
        belongsToCategory: 3,
        isPublished: true,
        title: 'Método indiano – Fature 5 dígitos com jQuery',
        route: '/area/produto',
        thumbnail: 'https://www.memesmonkey.com/images/memesmonkey/9f/9f098b405bac22358a2f73abc09f3c24.jpeg'
    }
]

let selected = ref(category[0]);
let query = ref('')

let filteredCategories = computed(() =>
    query.value === ''
        ? category
        : category.filter((cat) =>
            cat.name
                .toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.value.toLowerCase().replace(/\s+/g, ''))
        )
);


let showNotification = ref(false);
function notification() {

    isOpenModalAddProduct.value = false;
    showNotification.value = true;

    setTimeout(() => {
        showNotification.value = false;
    }, 3500);

}
</script>

<script type="text/javascript">
import { ref } from 'vue'

import Header from "@/components/Header.vue";
import CardCourse from "@/components/CardCourse.vue";

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'


export default {

    data: function () {
        return {
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
};
</script>

<template>

    <div class="lg:flex lg:justify-between pb-4">
        <!-- Header -->
        <Header title="Meus conteúdos"></Header>
        <!-- Action buttons -->
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="block">
                <button
                    type="button"
                    @click="openModalAddCategory"
                    class="inline-flex items-center rounded-md bg-gray-800 border border-gray-700 py-2 px-3 lg:px-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar categoria
                </button>
            </span>
            <span class="ml-1">
                <button
                    type="button"
                    @click="openModalAddProduct"
                    class="inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-3 lg:px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar curso
                </button>
            </span>
        </div>
    </div>

    <!-- Empty state -->
    <div v-if="category.length == 0" class="bg-gray-800 rounded-md p-5 w-full border border-gray-700 mt-6">
        <div class="flex space-x-2 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-indigo-500 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <div class="leading-tight text-sm text-gray-200 font-medium">Adicione uma categoria para começar a incluir seus conteúdos.</div>
        </div>
    </div>

    <!-- For: Category -->
    <div v-for="c in category" class="pt-10">
        <div class="md:flex md:items-center mb-6">
            <h3 class="font-bold text-white text-xl md:w-auto mb-3 md:mb-0">
                {{ c.name }}
            </h3>
        </div>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <template v-for="p in product">
                <CardCourse
                    v-if="p.belongsToCategory == c.id"
                    :isPublished="p.isPublished"
                    :productRoute="p.route"
                    :img="p.thumbnail"
                    :title="p.title" />
            </template>
        </div>
    </div>

    <!-- Modal - Adicionar novo curso -->
    <TransitionRoot appear :show="isOpenModalAddProduct" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-30"></div>
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all overflow-visible">
                            <DialogTitle as="h3" class="text-lg font-bold leading-6 text-gray-800">
                                Adicionar curso
                            </DialogTitle>
                            <div class="mt-6">
                                <!-- Título -->
                                <div class="mb-4">
                                    <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                        Título do curso/produto:
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Digite o nome"
                                        class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                                </div>
                                <!-- Categoria -->
                                <div class="mb-4">
                                    <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                        Selecione a categoria:
                                    </label>
                                    <Combobox v-model="selected">
                                        <div class="relative">
                                            <div class="relative w-full cursor-default border overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                <ComboboxInput
                                                    class="w-full border-none rounded-lg bg-white py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                                                    :displayValue="(cat) => cat.name"
                                                    @change="query = $event.target.value" />
                                                <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                </ComboboxButton>
                                            </div>
                                            <TransitionRoot
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                                @after-leave="query = ''">
                                                <ComboboxOptions
                                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                    <div
                                                        v-if="filteredCategories.length === 0 && query !== ''"
                                                        class="relative cursor-default select-none py-2 px-4 text-gray-700">
                                                        Nenhum resultado encontrado
                                                    </div>
                                                    <ComboboxOption
                                                        v-for="cat in filteredCategories"
                                                        as="template"
                                                        :key="cat.id"
                                                        :value="cat"
                                                        v-slot="{ selected, active }">
                                                        <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{ 'bg-teal-600 text-white': active, 'text-gray-900': !active, }">
                                                            <span class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                                                                {{ cat.name }}
                                                            </span>
                                                            <span
                                                                v-if="selected"
                                                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                                                                :class="{ 'text-white': active, 'text-teal-600': !active }">
                                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        </li>
                                                    </ComboboxOption>
                                                </ComboboxOptions>
                                            </TransitionRoot>
                                        </div>
                                    </Combobox>
                                    <div class="mt-2 mb-4 text-right">
                                        <a href="#" class="text-xs text-indigo-500 underline underline-offset-4">
                                            Clique aqui para adicionar uma nova categoria
                                        </a>
                                    </div>
                                </div>
                                <!-- Descrição -->
                                <div class="mb-4">
                                    <label for="about" class="block mb-2 text-sm font-medium text-gray-700">Descrição:</label>
                                    <div class="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows="3"
                                            value=""
                                            class="border border-gray-300 bg-white text-gray-700 placeholder:text-gray-400 text-sm placeholder-gray-400 focus:border-indigo-500 active:border-primary w-full rounded-md py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                                            placeholder="Como você descreve este curso para os seus alunos?">
                                    </textarea>
                                    </div>
                                    <p class="mt-1 mb-2 text-xs text-gray-500">Máximo 500 caracteres.</p>
                                </div>
                                <!-- Imagem de capa -->
                                <div>
                                    <label for="file-upload">
                                        <div class="block text-sm font-medium text-gray-700 mb-2">Imagem de capa: <span class="text-gray-500 text-xs ml-1">(Opcional)</span></div>
                                        <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                            <div class="space-y-1 text-center">
                                                <!-- input hidden -->
                                                <input id="file-upload" name="file-upload" type="file" accept="image/*" @change="previewImage" class="sr-only" />
                                                <!-- upload -->
                                                <div v-if="!preview" class="w-full">
                                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <div class="flex text-xs md:text-sm text-gray-600 justify-center">
                                                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                                            <span>Clique para fazer upload</span>
                                                        </label>
                                                    </div>
                                                    <p class="text-xs text-gray-500">PNG, JPG, GIF, WEBP (até 5mb)</p>
                                                </div>
                                                <!-- Image preview -->
                                                <div v-if="preview" class="flex flex-col items-center justify-center">
                                                    <div class="thumb-container shadow-lg w-full border border-slate-300 rounded-lg overflow-hidden mx-auto mb-6" style="max-width: 280px;">
                                                        <img class="w-full aspect-video object-cover bg-slate-500 bg-opacity-10" :src="preview">
                                                        <div class="absolute bottom-0 m-2">
                                                            <p class="text-xs text-gray-500 mb-0">{{ image.name }}</p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        @click="reset"
                                                        class="inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                                                        <TrashIcon class="h-4 w-4 mr-1" aria-hidden="true" />
                                                        <span>Remover imagem</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="mt-4 flex items-center justify-end">
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300"
                                    @click="closeModal">
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-pepper-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    @click="notification">
                                    Adicionar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Modal Adicionar categoria -->
    <TransitionRoot appear :show="isOpenModalAddCategory" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-30"></div>
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all overflow-visible">
                            <DialogTitle as="h3" class="text-lg font-bold leading-6 text-gray-800">
                                Adicionar Nova Categoria
                            </DialogTitle>
                            <div class="mt-6">
                                <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                    Nome da nova categoria:
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Digite aqui"
                                    class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                                <div class="mt-4 pb-4 text-xs text-gray-500 flex flex-row items-center justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 opacity-70">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                    <span>Esta categoria aparecerá para seus alunos, após você adicionar conteúdos a ela.</span>
                                </div>
                            </div>
                            <div class="mt-4 flex items-center justify-end">
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300"
                                    @click="closeModal">
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-pepper-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    @click="closeModal">
                                    Adicionar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

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
                                Curso adicionado com sucesso!
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

    <!-- 

    background-color: rgb(189 247 218);
    svg fill: #0eb268;
    color: #1a6b38;
 -->

</template>