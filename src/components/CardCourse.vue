<script setup>
import { ref } from 'vue'

defineProps({
    img: String,
    title: String,
    isPublished: Boolean,
    productRoute: String
})

const count = ref(0)
</script>

<template>
    <router-link v-if="productRoute" :to="productRoute" class="w-full overflow-hidden">
        <div class="thumb-container w-full rounded-lg overflow-hidden">
            <img
                class="w-full aspect-video bg-slate-500 bg-opacity-10"
                :src="img" />
            <span v-if="!isPublished" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-red-800 border border-red-500 text-xs rounded-md shadow-stone-800 shadow-lg leading-tight">
                Não publicado
            </span>
        </div>
        <div v-if="title" class="px-1 py-3">
            <div class="font-medium text-gray-100 hover:text-indigo-600 transition duration-300 text-base md:text-sm mb-2">{{ title }}</div>
        </div>
    </router-link>

    <div v-if="!productRoute" class="flex flex-col">
        <div class="thumb-container cursor-default w-full rounded-lg overflow-hidden">
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