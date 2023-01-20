<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
} from '@headlessui/vue'

import { PlusIcon } from '@heroicons/vue/20/solid'


// Mock images
import CursoPowerlifting from "@/assets/img/mock/curso-powerlifting.png";
import CursoBiomecanica from "@/assets/img/mock/curso-biomecanica.png";
import CursoPeriodizacao from "@/assets/img/mock/curso-periodizacao.png";


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
        userProgress: 32,
        thumbnail: 'https://www.userede.com.br/content/userede/pt-br/blog/quais-ferramentas-de-marketing-digital-posso-usar-para-divulgar-meu-negocio-na-internet/_jcr_content/root/responsivegrid/tabcontainer_4788725/tabs-container-1/productdetails_copy/bottom-container/card_copy_copy_copy_94108686/card-container-content-responsivegrid/image.coreimg.jpeg/1557325623466.jpeg'
    },
    {
        id: 2,
        belongsToCategory: 1,
        isPublished: false,
        title: 'Scripts para vender no automático pelo Whatsapp',
        route: '/area/produto',
        userProgress: 2,
        thumbnail: 'https://www.agenciaithink.com.br/Imagem/178/blog-20200610/df/tudo-sobre-como-vender-no-whatsapp.png'
    },
    {
        id: 3,
        belongsToCategory: 2,
        isPublished: true,
        title: 'Curso de biomecânica avançada',
        route: '/area/produto',
        userProgress: 91,
        thumbnail: CursoBiomecanica
    },
    {
        id: 4,
        belongsToCategory: 2,
        isPublished: true,
        title: 'Curso de Powerlifting e Agachamento',
        route: '/area/produto',
        userProgress: 43,
        thumbnail: CursoPowerlifting
    },
    {
        id: 5,
        belongsToCategory: 2,
        isPublished: true,
        title: 'Periodização e Controle de Carga no Treinamento Físico',
        route: '/area/produto',
        userProgress: 0,
        thumbnail: CursoPeriodizacao
    },
    {
        id: 6,
        belongsToCategory: 3,
        isPublished: true,
        title: 'Método indiano – Fature 5 dígitos com jQuery',
        route: '/area/produto',
        userProgress: 100,
        thumbnail: 'https://www.memesmonkey.com/images/memesmonkey/9f/9f098b405bac22358a2f73abc09f3c24.jpeg'
    }
]


const vitrine = {
    title: 'Você pode também ter interesse em:',
    shownProducts: [
        {
            img: 'https://vueschool.io/images/sections/the-vuejs-master-class/thumbnail-masterclass.png',
            title: 'Curso de Vue3',
            linkHref: 'https://google.com/'
        }
    ]
}

const memberAreaBanner = {
    showBanner: true,
    imgUrl: 'https://www.brvidaaph.com.br/images/banner-interno-curso.jpg'
}


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
import CardCourseBlocked from "@/components/CardCourseBlocked.vue";

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
};
</script>

<template>

    <!-- Banner image -->
    <img v-if="memberAreaBanner.showBanner && memberAreaBanner.imgUrl !== ''"
        class="rounded-md w-full h-auto border border-zinc-800 bg-zinc-900 mb-12"
        :src="memberAreaBanner.imgUrl" />

    <!-- Header -->
    <div class="lg:flex lg:justify-between pb-4">
        <Header title="Meus conteúdos"></Header>
        <!-- Action buttons -->
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="block">
                <button
                    type="button"
                    @click="openModalAddCategory"
                    :class="pepper.darkMode.button.headerSecondary">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar categoria
                </button>
            </span>
            <span class="ml-1">
                <router-link
                    to="/area/criar-curso"
                    :class="pepper.darkMode.button.headerPrimary">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar curso
                </router-link>
            </span>
        </div>
    </div>

    <!-- Empty state -->
    <div v-if="category.length == 0" class="p-5 mt-6" :class="pepper.darkMode.card.container">
        <div class="flex space-x-2 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-500 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <div class="leading-tight text-sm text-gray-200 font-medium">Adicione uma categoria para começar a incluir seus conteúdos.</div>
        </div>
    </div>

    <!-- For: Category -->
    <div v-for="c in category" class="pt-8">
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
                    :courseProgress="p.userProgress"
                    :title="p.title" />
            </template>
        </div>
    </div>


    <div v-if="vitrine && vitrine.shownProducts.length !== 0" class="pt-8">
        <div class="md:flex md:items-center mb-6">
            <h3 class="font-bold text-white text-xl md:w-auto mb-3 md:mb-0">
                {{ vitrine.title }}
            </h3>
        </div>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <template v-for="v in vitrine.shownProducts">
                <CardCourseBlocked
                    :img="v.img"
                    :linkHref="v.linkHref"
                    :title="v.title" />
            </template>
        </div>
    </div>

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
                <div class="fixed inset-0 bg-black bg-opacity-50"></div>
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

</template>