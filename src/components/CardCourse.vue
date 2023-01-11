<script setup>
import { ref } from 'vue'

import PlayIcon from "@/assets/img/icon-play.png";

defineProps({
    img: String,
    title: String,
    isPublished: Boolean,
    productRoute: String
})

const count = ref(0)
</script>

<template>
    <router-link v-if="productRoute" :to="productRoute" class="thumb-link">
        <div class="thumb-container">
            <img
                class="w-full aspect-video bg-slate-500 bg-opacity-10"
                :src="img" />
            <span v-if="!isPublished" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-red-800 border border-red-500 text-xs rounded-md shadow-stone-800 shadow-lg leading-tight">
                Não publicado
            </span>
        </div>
        <div class="thumb-play-wrapper">
            <!-- <img :src="PlayIcon" /> -->

            <div class="player-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 -mr-1">
                    <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                </svg>

            </div>

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