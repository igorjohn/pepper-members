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


let isOpenModalAddCategory = ref(false);
function openModalAddCategory() {
    isOpenModalAddCategory.value = true;
}

function closeModal() {
    isOpenModalAddCategory.value = false;
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
import Header from "@/components/Header.vue";
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import Loader from '@/components/Loader.vue';

import AlertError from '@/components/AlertError.vue';
import AlertInfo from '@/components/AlertInfo.vue';
import AlertSuccess from '@/components/AlertSuccess.vue';

export default {
    data() {
        return {
            notifications: {
                error: {
                    showErrorNotification: false,
                    textErrorNotification: '',
                },
                success: {
                    showSuccessNotification: false,
                    textSuccessNotification: '',
                },
                info: {
                    showInfoNotification: false,
                    textInfoNotification: '',
                },
            },
            pepper: this.pepper,
            preview: null,
            viewUI: false,
            loader: true,
            image: null,
            coverFormat: 1,
            categories: [],
            productsWithoutAccess: [],
            formCreateCategory: {
                title: ''
            }
        };
    },
    props: {
        memberAreaInfos: Object
    },
    created() {
        this.$axios.get(`memberarea/categories/${this.memberAreaInfos.id}`)
            .then((response) => {
            this.categories = response.data.allCategories.category;
            this.productsWithoutAccess = response.data.productsWithoutAccess;

            this.loader = false;
            this.viewUI = true;

            console.log(this.categories);
            console.log(this.productsWithoutAccess);
        });
    },
    methods: {
        previewImage(event) {
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                };
                this.image = input.files[0];
                console.log(this.image);
                reader.readAsDataURL(input.files[0]);
            }
        },
        resizeTo() {
            this.image = null;
            this.preview = null;
        },
        postCreateCategory() {
            if (!this.formCreateCategory.title) {
                return this.notification('error', 'Voc?? n??o preencheu o t??tulo!');
            }

            this.loader = true;

            this.notification('info', 'Estamos criando a sua categoria, aguarde enquanto finalizamos!');

            this.$axios.post('/category', {
                member_area_id: this.memberAreaInfos.id,
                title: this.formCreateCategory.title
            }, {
                validateStatus: status => status >= 200 && status < 300 || status == 404
            })
            .then((response) => {
                if (response.status = 201) {
                    this.notification('success!', 'A sua categoria foi criada com sucesso!');
                
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                } else {
                    this.notification('error', 'Ocorreu um erro durante a cria????o e n??o foi poss??vel criar!');
                    this.formCreateCategory.title = '';

                    this.loader = false;
                }
            });
        },
        notification(type, text) {
            if (type == 'error') {
                this.notifications.error.showErrorNotification = true;
                this.notifications.error.textErrorNotification = text;
    
                setTimeout(() => {
                    this.notifications.error.showErrorNotification = false;
                    this.notifications.error.textErrorNotification = '';
                }, 2500);
            }

            if (type == 'success') {
                this.notifications.success.showSuccessNotification = true;
                this.notifications.success.textSuccessNotification = text;
    
                setTimeout(() => {
                    this.notifications.success.showSuccessNotification = false;
                    this.notifications.success.textSuccessNotification = '';
                }, 2500);
            }

            if (type == 'info') {
                this.notifications.info.showInfoNotification = true;
                this.notifications.info.textInfoNotification = text;
    
                setTimeout(() => {
                    this.notifications.info.showInfoNotification = false;
                    this.notifications.info.textInfoNotification = '';
                }, 2500);
            }
        },
    },
    components: { Loader }
};
</script>

<template>
    <!-- Banner image -->
    <img v-if="memberAreaInfos.banner && viewUI"
        class="rounded-md w-full h-auto border border-zinc-800 bg-zinc-900 mb-12"
        :src="memberAreaInfos.banner.file_url" />

    <!-- Header -->
    <div v-if="viewUI" class="lg:flex lg:justify-between pb-8">
        <Header title="Meus conte??dos"></Header>
        <!-- Action buttons -->
        <div v-if="memberAreaInfos.access.role == 'admin'" class="mt-5 flex lg:mt-0 lg:ml-4">
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
                    :to="`/${this.$route.params.area}/criar-curso`"
                    :class="pepper.darkMode.button.headerPrimary">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar curso
                </router-link>
            </span>
        </div>
    </div>

    <!-- Empty state -->
    <div v-if="categories.length == 0 && viewUI" class="p-5 mt-6" :class="pepper.darkMode.card.container">
        <div class="flex space-x-2 justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-500 h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <div class="leading-tight text-sm text-gray-200 font-medium">Adicione uma categoria para come??ar a incluir seus conte??dos.</div>
        </div>
    </div>

    <!-- For: Category -->
    <div v-if="viewUI" v-for="category in categories">
        <div v-if="(category.products.length > 0 && memberAreaInfos.access.role != 'admin') || memberAreaInfos.access.role == 'admin'" class="md:flex md:items-center mb-6">
            <h3 class="font-bold text-white text-xl md:w-auto mb-3 md:mb-0">
                {{ category.title }}
            </h3>
        </div>
        <div class="w-full grid gap-4 mb-12"
            :class="coverFormat ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'">
            <template v-for="product in category.products">
                <router-link :to="`/${this.$route.params.area}/${product.id}`" class="text-gray-200 hover:text-indigo-500 transition duration-500">
                    <div
                        class="scale-hover relative w-full overflow-hidden cursor-pointer border border-pepper-dark-4 hover:border-indigo-800 transition duration-500 rounded-lg"
                        :class="coverFormat ? 'aspect-movie' : 'aspect-video'">

                        <!-- Course image -->
                        <img
                            v-if="product.media"
                            :src="product.media.file_url"
                            class="w-full mx-auto h-full object-cover bg-gray-500 bg-opacity-10" />

                        <img
                            v-if="!product.media && coverFormat == 0"
                            src="@/assets/img/capa-pepper-null.png"
                            class="w-full mx-auto h-full object-cover bg-gray-500 bg-opacity-10" />

                        <img
                            v-if="!product.media && coverFormat == 1"
                            src="@/assets/img/capa-pepper-null-vertical.png"
                            class="w-full mx-auto h-full object-cover bg-gray-500 bg-opacity-10" />

                        <!-- N??o publicado -->
                        <span v-if="product.status == 0" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-red-800 border border-red-500 text-xs rounded-md leading-tight shadow-lg">
                            N??o publicado
                        </span>

                        <!-- Conclu??do -->
                        <!-- <span v-if="p.userProgress == 100" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-emerald-500 border border-emerald-700 text-xs rounded-md leading-tight shadow-lg">
                            Conclu??do
                        </span> -->

                        <!-- User progress -->
                        <!-- <div class="absolute bottom-0 left-0 overflow-hidden flex justify-end items-end w-full h-full rounded-b-md">
                            <div class="pepper-progress w-full h-1 bg-pepper-dark-4">
                                <div class="pepper-progress-current h-1 bg-red-600" :style="'width:' + p.userProgress + '%'"></div>
                            </div>
                        </div> -->
                    </div>

                    <span class="mt-1 text-truncate-2l max-w-full text-sm font-semibold p-1">
                        {{ product.title }}
                    </span>
                </router-link>
            </template>
        </div>
    </div>


    <div v-if="productsWithoutAccess.length > 0 && viewUI" class="pt-2">
        <div class="md:flex md:items-center mb-6">
            <h3 class="font-bold text-white text-xl md:w-auto mb-3 md:mb-0">
                Voc?? pode tamb??m ter interesse em:
            </h3>
        </div>

        <div class="w-full grid gap-4 mb-8"
            :class="coverFormat ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'">
            <template v-for="v in productsWithoutAccess">
                <a :href="v.sale_page" target="_blank" class="text-gray-200 hover:text-indigo-500 transition duration-500">
                    <div
                        class="scale-hover relative w-full overflow-hidden cursor-pointer border border-pepper-dark-4 hover:border-indigo-800 transition duration-500 rounded-lg"
                        :class="coverFormat ? 'aspect-movie' : 'aspect-video'">

                        <img
                            v-if="v.media"
                            :src="v.media.file_url"
                            class="w-full mx-auto h-full object-cover bg-gray-500 bg-opacity-10 grayscale rounded-md border-none my-0" />

                        <img
                            v-if="!v.media && coverFormat == 0"
                            src="@/assets/img/capa-pepper-null.png"
                            class="w-full mx-auto h-full object-cover bg-gray-500 bg-opacity-10 grayscale rounded-md border-none my-0" />

                        <img
                            v-if="!v.media && coverFormat == 1"
                            src="@/assets/img/capa-pepper-null-vertical.png"
                            class="w-full mx-auto h-full object-cover bg-gray-500 bg-opacity-10 grayscale rounded-md border-none my-0" />

                        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-red-500 drop-shadow-[1px_5px_12px_rgba(220,38,38,0.9)]">
                                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <span class="mt-2 text-truncate-2l max-w-full text-sm font-semibold p-1">
                        {{ v.title }}
                    </span>
                </a>
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
                                    class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                                    v-model="formCreateCategory.title" />
                                <div class="mt-4 pb-4 text-xs text-gray-500 flex flex-row items-center justify-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1 opacity-70">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                    <span>Esta categoria aparecer?? para seus alunos, ap??s voc?? adicionar conte??dos a ela.</span>
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
                                    @click="postCreateCategory">
                                    Adicionar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Loader -->
    <section v-if="loader">
        <Loader :show="loader" />
    </section>

    <!-- Notifica????es -->
    <transition appear name="slide-fade">
        <div v-if="
            notifications.error.showErrorNotification || 
            notifications.success.showSuccessNotification ||
            notifications.info.showInfoNotification
        " class="float-right min-w-full fixed bottom-3 right-0 md:right-3">
            <AlertSuccess v-if="notifications.success.showSuccessNotification" :title="notifications.success.textSuccessNotification" />

            <AlertError v-if="notifications.error.showErrorNotification" :title="notifications.error.textErrorNotification" />

            <AlertInfo v-if="notifications.info.showInfoNotification" :title="notifications.info.textInfoNotification" />
        </div>
    </transition>

</template>