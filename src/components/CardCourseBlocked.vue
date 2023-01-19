<script setup>
import { ref } from 'vue'

defineProps({
    img: String,
    title: String,
    linkHref: String
})

const count = ref(0)
</script>

<template>
    <a :href="linkHref" class="thumb-link">
        <div class="thumb-container grayscale">
            <img
                class="w-full aspect-video bg-slate-500 bg-opacity-10"
                :src="img" />
        </div>

        <div class="w-full absolute top-0 left-0 aspect-video flex items-end justify-end p-2.5">
            <div class="rounded-full p-1.5 flex items-center justify-center bg-red-600 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 md:w-3.5 md:h-3.5 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
            </div>
        </div>

        <div v-if="title" class="px-1 py-3">
            <div class="font-medium text-gray-100 hover:text-indigo-600 transition duration-300 text-base md:text-sm mb-2">
                {{ title }}
            </div>
        </div>
    </a>
</template>

<script type="text/javascript">
export default {
    name: "CardCourseBlocked",
};
</script>