<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue'

import { PlusIcon, TrashIcon } from '@heroicons/vue/20/solid'

import AlertError from '@/components/AlertError.vue';
import AlertInfo from '@/components/AlertInfo.vue';
import AlertSuccess from '@/components/AlertSuccess.vue';

let showHeaderDropdown = ref(false);

const menuLogo = `
    <div class="inline-flex h-full items-center justify-center px-4 lg:px-6">
        <img src="https://peppermembers.com/img/logotipo-white-pepper.52ff1608.png" style="height: 22px;" />
    </div>`;

</script>

<script type="text/javascript">

// Mock images
import Cinetica from "@/assets/img/mock/cinetica.png";

export default {
    components: { AlertSuccess, AlertError, AlertInfo },

    data () {
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
            image: null,
            viewUI: false,
            hasAdmin: false,
            isOpenModal: false,
            memberAreas: {},
            formCreateMemberArea: {
                title: '',
                slug: '',
                media: null,
            }
        };
    },

    methods: {
        /* Alterando o status dos modals */
        openModal() {
            this.isOpenModal = true;
        },

        closeModal() {
            this.isOpenModal = false;
        },

        /* Formatando o slug */
        formatSlugWithStopping: function formatSlugWithStopping($event) {
            clearTimeout(formatSlugWithStopping.timeout);
            
            formatSlugWithStopping.timeout = setTimeout(() => {
                this.formCreateMemberArea.slug = this.formCreateMemberArea.slug.replace(/\s/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
            }, 1);
        },

        /* Mostrando/Setando a imagem da área */
        previewImage(event) {
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.image = input.files[0];
                console.log(this.image);
                reader.readAsDataURL(input.files[0]);
                this.formCreateMemberArea.media = input.files[0];
            }
        },

        /* Resetando a imagem upada */
        reset() {
            this.image = null;
            this.preview = null;
            this.formCreateMemberArea.media = null
        },

        /* Request para criação da Área de Membros */
        postCreateMemberArea() {
            if (!this.formCreateMemberArea.title || !this.formCreateMemberArea.slug) {
                return this.notification('error', 'Você não preencheu os campos corretamente!');
            }

            let data = {
                title: this.formCreateMemberArea.title,
                slug: this.formCreateMemberArea.slug.replace(/\s/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
            };

            if (this.formCreateMemberArea.media) {
                data['image'] = this.formCreateMemberArea.media;
            }

            this.isOpenModal = false;

            this.$axios.post('/memberarea', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                validateStatus: status => status >= 200 && status < 300 || status === 422
            })
            .then((response) => {
                console.log(response);
                if (response.status == 201) {
                    setTimeout(() => {
                        return this.$router.push(response.data.slug);
                    }, 500);
                } else if (response.status == 422 && response.data.errors.slug) {
                    setTimeout(() => {
                        return this.notification('error', 'Esse slug já está sendo utilizado, escolha outro!');
                    }, 500);
                } else if (response.status == 422 && response.data.errors.image == "The image failed to upload.") {
                    setTimeout(() => {
                        return this.notification('error', 'Não foi possível processar sua imagem, só são permitidas imagens até 4MB.');
                    }, 500);
                }
            }).catch((error) => {
                return this.notification('error', 'Ocorreu um erro durante a criação, tente novamente!');
            });
        },

        /* Notificações */
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

    created() {
        document.title = 'Areas – Pepper Members';

        this.$axios.get('/user/access')
        .then((result) => {
            console.log(result.data);
            this.memberAreas = result.data;

            result.data.forEach(area => {
                if (area.role == 'admin') {
                    this.hasAdmin = true;
                }
            });

            console.log(this.hasAdmin);

            this.viewUI = true;
        })
        .catch((error) => {
            return console.log(error);
        });
    }
}
</script>

<template>
    <div v-if="viewUI" class="md:min-h-screen w-full items-center flex flex-col justify-center grid">
        <!-- Empty State (Para usuários que não tenham acesso a nenhuma área) -->
        <div v-if="memberAreas.length <= 0" class="px-6 pt-20 pb-10 max-w-7xl mx-auto flex flex-col justify-center items-center">
            <div :class="pepper.darkMode.card.container" class="p-5 mt-8">
                <div class="flex space-x-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-500 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div class="leading-tight text-sm text-gray-200 font-medium">Nenhuma área de membros cadastrada.</div>
                </div>
            </div>
        </div>

        <!-- Listagem das áreas que o usuário tem acesso -->
        <div v-if="memberAreas.length > 0" class="px-6 pt-20 pb-10 max-w-7xl mx-auto flex flex-col justify-center items-center">
            <div class="w-full mb-14">
                <h3 class="font-semibold text-lg mb-14 text-center">
                    Escolha a área de membros que deseja acessar:
                </h3>
                <div id="member-areas-container">
                    <div v-for="(area, index) in memberAreas" :key="index" class="thumb-wrapper w-full sm:w-1/2 lg:w-1/5 xl:w-1/6">
                        <a :href="area.member_area.slug">
                            <div class="thumb-container w-full rounded-lg overflow-hidden">
                                <img v-if="area.member_area.media == null" src="../../assets/img/capa-pepper-null.png" class="w-full aspect-video bg-slate-500 object-cover bg-opacity-10" alt="" />

                                <img v-else class="w-full aspect-video bg-slate-500 object-cover bg-opacity-10" :src="area.member_area.media.file_url" />
                            </div>
                            <div class="px-1 py-3 font-semibold text-sm mb-2 transition duration-300">
                                {{ area.member_area.title }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Botão para cadastro de nova área -->
        <div v-if="hasAdmin" class="flex items-center justify-center mb-14">
            <button @click="openModal" type="button" :class="pepper.darkMode.button.primary">
                <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                <span>Criar nova área de membros</span>
            </button>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-center mb-7">
            <span class="text-xs text-gray-500 text-center font-medium">
                Pepper Members © 2023 - Todos os direitos reservados
            </span>
        </div>
    </div>

    <!-- Modal para criar nova área de membros -->
    <TransitionRoot appear :show="isOpenModal" as="template">
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
                        <DialogPanel class="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all overflow-visible">
                            <div class="m-6">
                                <h3 class="text-lg font-semibold leading-6 text-gray-900">Criar nova área de membros</h3>
                                <div class="flex flex-col w-full mx-auto mt-4 gap-4">

                                    <!-- Nome da área de membros -->
                                    <div>
                                        <label :class="pepper.darkMode.form.labelWhiteBg">
                                            Nome da área de membros:
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Nome que irá aparecer para seus alunos"
                                            maxlength="200"
                                            :class="pepper.darkMode.form.inputWhiteBg"
                                            v-model="formCreateMemberArea.title" />
                                    </div>

                                    <!-- Slug -->
                                    <div>
                                        <label :class="pepper.darkMode.form.labelWhiteBg">
                                            Slug (URL) da área de membros:
                                        </label>
                                        <div class="w-full inline-flex items-center">
                                            <div class="min-h-42 text-sm rounded-none rounded-l-md border border-gray-300 border-r-0 flex items-center justify-center w-auto px-2 lg:px-2.5 text-gray-500 bg-gray-50">
                                                https://peppermembers.com/
                                            </div>
                                            <input
                                                type="text"
                                                required
                                                placeholder="slug-da-sua-area"
                                                maxlength="200"
                                                class="rounded-none rounded-r-md px-2 border-l-gray-100"
                                                :class="pepper.darkMode.form.inputWhiteBg"
                                                v-model="formCreateMemberArea.slug" 
                                                v-on:keyup="formatSlugWithStopping($event)" />
                                        </div>
                                    </div>

                                    <!-- Imagem de capa -->
                                    <div>
                                        <label :class="pepper.darkMode.form.labelWhiteBg">
                                            Imagem de capa:
                                        </label>
                                        <label for="file-upload" class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 hover:border-indigo-400 transition duration-300 cursor-pointer">
                                            <div class="space-y-1 text-center bg-white w-full h-full px-6 pt-5 pb-6">
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
                                                    <p class="text-xs text-gray-500">PNG, JPG, GIF, WEBP (até 5mb)</p>
                                                </div>
                                                <!-- Image preview -->
                                                <div v-if="preview" class="flex flex-col items-center justify-center">
                                                    <img
                                                        style="max-width: 280px"
                                                        class="aspect-video shadow-lg w-full border border-slate-200 rounded-lg overflow-hidden mx-auto mb-3 max-h-full object-cover bg-slate-500 bg-opacity-10"
                                                        :src="preview">

                                                    <p class="text-xs text-gray-500 mb-4">{{ image.name }}</p>
                                                    <button @click="reset" :class="pepper.darkMode.button.primary">
                                                        <TrashIcon class="h-4 w-4 mr-1" aria-hidden="true" />
                                                        <span>Remover imagem</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </label>
                                    </div>

                                </div>
                            </div>
                            <div class="bg-gray-50 rounded-b-lg px-4 py-3 sm:px-6 flex items-center justify-end">
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300"
                                    @click="closeModal">
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-pepper-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    @click="postCreateMemberArea">
                                    Confirmar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Notificações -->
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

<style scoped>
#member-areas-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
}

@media (max-width:545px) {
    #member-areas-container {
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
}

#member-areas-container .thumb-wrapper.w-full {
    min-width: 220px;
    overflow: hidden;
}
</style>