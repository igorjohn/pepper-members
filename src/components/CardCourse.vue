<script setup>
import { ref } from 'vue'

import PlayIcon from "@/assets/img/icon-play.png";

defineProps({
    img: String,
    title: String,
    isPublished: Boolean,
    productRoute: String,
    courseProgress: Number
})

const count = ref(0)
</script>

<template>
    <router-link v-if="productRoute" :to="productRoute" class="thumb-link">
        <div class="thumb-container">
            <img
                class="w-full aspect-video bg-slate-500 bg-opacity-10"
                :src="img" />
            <!-- Não publicado -->
            <span v-if="!isPublished" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-red-800 border border-red-500 text-xs rounded-md shadow-stone-800 shadow-lg leading-tight">
                Não publicado
            </span>
            <!-- Concluído -->
            <span v-if="courseProgress == 100" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-emerald-500 border border-emerald-700 text-xs rounded-md shadow-stone-800 shadow-lg leading-tight">
                Concluído
            </span>
            <div v-if="courseProgress && courseProgress > 0" class="absolute bottom-0 left-0 overflow-hidden flex justify-end items-end w-full h-full aspect-video rounded-b-lg">
                <div class="pepper-progress w-full h-1 bg-gray-600">
                    <div class="pepper-progress-current h-1 bg-red-600" :style="'width:' + courseProgress + '%'"></div>
                </div>
            </div>
        </div>
        <div class="thumb-play-wrapper">
            <img :src="PlayIcon" />
        </div>
        <div v-if="title" class="px-1 py-3">
            <div class="font-medium text-gray-100 hover:text-indigo-600 transition duration-300 text-base md:text-sm mb-2">{{ title }}</div>
        </div>
    </router-link>

    <div v-if="!productRoute" class="flex flex-col">
        <div class="thumb-container cursor-default">
            <img
                class="w-full aspect-video bg-slate-500 bg-opacity-10"
                :src="img" />
            <span v-if="!isPublished" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-red-800 border border-red-500 text-xs rounded-md shadow-stone-800 shadow-lg leading-tight">
                Não publicado
            </span>
        </div>
        <div v-if="title" class="px-1 py-3">
            <div class="font-medium text-gray-100 text-base md:text-sm mb-2">{{ title }}</div>
        </div>
    </div>

</template>

<script type="text/javascript">
export default {
    name: "CardCourse",
};
</script>