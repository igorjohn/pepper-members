<script setup>
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel
} from '@headlessui/vue';

// Mock images
import CursoPowerlifting from "@/assets/img/mock/curso-powerlifting.png";

// imgs
import PlayIcon from "@/assets/img/icon-play.png";
import EmojiParty from "@/assets/img/emoji-party.png";

// modal 'curso concluído'
let isCourseCompleted = ref(false);
function openModalCourseCompleted() {

    setTimeout(() => {
        isCourseCompleted.value = true;
    }, 500);

}

function closeModal() {
    isCourseCompleted.value = false;
}


let isVideoOpen = ref(false);
function openVideo() {
    isVideoOpen.value = true;
}

function closeVideo() {
    isVideoOpen.value = false;
}



</script>

<script type="text/javascript">

import { ref } from 'vue'
import Header from "@/components/Header.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Rate from "@/components/Rate.vue";
import LessonCompleted from '@/components/LessonCompleted.vue';

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel
} from '@headlessui/vue'


export default {
    components: { LessonCompleted },
    data() {
        return {
            lessonStatus: false,
            pepper: this.pepper,
            inReplyTo: false,
        }
    },
    methods: {
        replyComment: function () {
            this.inReplyTo = true;

            const textarea = this.$refs.comment;
            textarea.focus()
        }
    }
};
</script>

<template>
    <div class="w-full max-w-5xl mx-auto mb-10 -mt-8 lg:-mt-10">

        <div class="classroom-thumb-container">
            <img :src="CursoPowerlifting" />
            <div class="classroom-thumb-overlay" @click="openVideo">
                <div class="classroom-icon-container">
                    <img :src="PlayIcon" />
                </div>
            </div>
        </div>

        <Breadcrumb item1Route="/area/produto" item1Text="Curso de Powerlifting" item2Text="Agachamento com acessórios" />

        <div class="mt-4 w-full flex flex-col md:flex-row md:items-start md:justify-between">
            <div class="mb-4 md:mb-0 md:pr-4">
                <Header title="Agachamento com acessórios"></Header>
                <div class="h-14">
                    <Rate />
                </div>
            </div>

            <LessonCompleted :isCompleted="lessonStatus" @onClick="lessonStatus = !lessonStatus; openModalCourseCompleted()" />
        </div>


        <div class="w-full mt-6">
            <span class="block mb-2 text-sm font-medium text-gray-400">
                Materiais para download
            </span>
            <div class="mt-1 text-sm text-gray-300">
                <ul role="list" class="divide-y divide-zinc-900 rounded-md border border-zinc-900 bg-pepper-dark-2">
                    <!-- Document -->
                    <li class="flex items-center justify-between py-3 md:py-3.5 pl-3 pr-4 text-sm">
                        <div class="flex w-0 flex-1 items-center">
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                            <a href="#" class="font-medium text-indigo-500 hover:text-indigo-400">Download</a>
                        </div>
                    </li>
                    <!-- End Document -->
                    <!-- Document -->
                    <li class="flex items-center justify-between py-3 md:py-3.5 pl-3 pr-4 text-sm">
                        <div class="flex w-0 flex-1 items-center">
                            <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                            </svg>
                            <span class="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                        </div>
                        <div class="ml-4 flex-shrink-0">
                            <a href="#" class="font-medium text-indigo-500 hover:text-indigo-400">Download</a>
                        </div>
                    </li>
                    <!-- End Document -->
                </ul>
            </div>
        </div>

        <!-- Comentários -->
        <div class="mt-8 w-full">
            <span class="block text-lg text-gray-100 font-bold mb-6">
                Comentários (12)
            </span>

            <!-- 
                    Definições de como exibir a data dos comentários:

                    Se o comentário foi:

                    ## menos de 1h = 'Há X min'
                    ## mais de 1h e menos de 1dia = 'Há X horas'
                    ## mais de 1dia e menos de 2dias = 'Ontem às 15:18'
                    ## else = '24/09/2022 às 15:18'
             -->

            <!-- Comment -->
            <div class="flex items-start gap-x-3 mb-6">
                <img
                    src="https://pbs.twimg.com/profile_images/1537593562619060225/AmmxIwWi_400x400.jpg"
                    class="w-10 h-10 flex-none rounded-full overflow-hidden aspect-square border border-zinc-700 object-cover" />
                <div>
                    <div class="w-100 flex flex-col md:flex-row md:items-center md:gap-x-5">
                        <div class="flex items-center justify-start gap-x-3 mb-2">
                            <span class="block text-sm font-semibold text-gray-100">
                                Ronaldo Assis
                            </span>
                            <span class="block text-xs font-normal text-gray-500">
                                Há 3 horas
                            </span>
                        </div>
                        <span
                            @click="replyComment()"
                            class="inline-flex items-center gap-x-2 text-xs font-medium text-indigo-400 cursor-pointer mb-4 md:mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 text-indigo-500 -mt-1" viewBox="0 0 16 16">
                                <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                            </svg>
                            Responder
                        </span>
                    </div>
                    <span class="block text-sm font-normal text-gray-300">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </span>
                </div>
            </div>
            <!-- Comment End -->

            <!-- Reply to comment -->
            <div class="mb-6 border-l-2 border-indigo-900 ml-14 pl-4">
                <span class="w-full inline-flex items-center gap-x-2 text-xs font-medium text-indigo-400 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 text-indigo-500 -mt-1" viewBox="0 0 16 16">
                        <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                    </svg>
                    Em resposta a Ronaldo A.
                </span>
                <div class="flex items-start gap-x-3">
                    <img
                        src="https://ichef.bbci.co.uk/news/640/cpsprodpb/14A22/production/_110641548_hi058415541.jpg"
                        class="w-10 h-10 flex-none rounded-full overflow-hidden aspect-square border border-zinc-700 object-cover" />
                    <div>
                        <div class="w-full inline-flex items-center justify-start gap-x-3 mb-2">
                            <span class="block text-sm font-semibold text-gray-100">
                                Sérgio Moro
                            </span>
                            <span class="block text-xs font-normal text-gray-500">
                                Ontem às 07:42
                            </span>
                        </div>
                        <span class="block text-sm font-normal text-gray-300">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        </span>
                    </div>
                </div>
            </div>
            <!-- End of Reply -->

            <span class="block text-lg text-gray-100 font-bold mb-4 mt-10">
                Enviar comentário:
            </span>

            <!-- In Reply to -->
            <transition appear name="slide-fade">
                <span v-if="inReplyTo" @click="inReplyTo = false" class="w-full py-1 inline-flex items-center gap-x-2 text-xs font-medium text-indigo-400 mb-4 cursor-pointer">
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
            </Transition>
            <!-- End In Reply to -->

            <!-- Submit comment -->
            <textarea type="text" placeholder="Escrever comentário sobre o conteúdo..." :class="pepper.darkMode.form.input" rows="3" maxlength="1000" minlength="5" required ref="comment"></textarea>
            <button type="button" :class="pepper.darkMode.button.login">
                Enviar comentário
            </button>
            <!-- End submit comment -->

        </div>
    </div>

    <!-- Watch video 'modal' -->
    <TransitionRoot appear :show="isVideoOpen" as="template">
        <Dialog as="div" @close="closeVideo" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/[.95]"></div>
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex flex-col min-h-full items-center justify-center p-4 md:p-6 text-center">
                    <div class="absolute top-0 right-0 m-3 lg:m-5 text-white cursor-pointer" @click="closeVideo">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="max-h-full max-w-5xl xl:max-w-5xl w-full aspect-video bg-black rounded-md shadow-lg m-3 md:m-4">
                            <!-- youtube / vimeo -->
                            <iframe class="w-full rounded-md h-full border border-zinc-900" src="https://www.youtube.com/embed/Y41uBqI0WSA?rel=0&amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen allowautoplay></iframe>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>


    <!-- Modal 'Curso concluído' -->
    <TransitionRoot appear :show="isCourseCompleted" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-80"></div>
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
                            <DialogTitle as="h3" class="text-lg font-bold leading-6 text-gray-800 flex items-center justify-start gap-x-2">
                                <img :src="EmojiParty" class="w-5 h-5" />
                                Curso concluído!
                            </DialogTitle>
                            <div class="mt-4 mb-6">
                                <span class="block mb-2 text-sm text-gray-700 font-semibold">
                                    Parabéns, você concluiu este curso!
                                </span>
                                <span class="block text-sm text-gray-600">
                                    Agora, seu certificado já está disponível na aba "Certificados".
                                </span>
                            </div>
                            <div class="mt-1 flex items-center justify-end">
                                <button
                                    type="button"
                                    class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-pepper-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    @click="closeModal">
                                    Fechar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>


</template>

<style scoped>
.classroom-thumb-container {
    width: 100%;
    z-index: 2;
    box-shadow: -2px -5px 20px 5px #000000AA;
    position: relative;
    aspect-ratio: 16/9;
    margin-bottom: 2rem;
    border-radius: 0.375rem;
}

@media (min-width:1024px) {
    .classroom-thumb-container {
        margin-bottom: 3rem !important;
    }

    .classroom-icon-container {
        width: 5rem !important;
        height: 5rem !important;
    }
}

.classroom-thumb-container>img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
    border-radius: 0.375rem;
}

.classroom-thumb-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgb(39, 39, 42, 0.7);
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    cursor: pointer;
    z-index: 2;
    background-image: linear-gradient(10deg, #00000044, #00000077, #00000099 90%);
}

.classroom-icon-container {
    width: 3rem;
    height: 3rem;
    background: transparent;
    border-radius: 999px;
    box-shadow: 1px 2px 50px 15px #000000AA;
}

.classroom-icon-container img {
    filter: hue-rotate(182deg) saturate(1.5) contrast(1.15);
    -webkit-filter: hue-rotate(182deg) saturate(1.5) contrast(1.15);
    width: calc(100%+2px);
    height: calc(100%+2px);

}
</style>