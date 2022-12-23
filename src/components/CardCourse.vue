<script setup>
import { ref } from 'vue'

defineProps({
    img: String,
    title: String,
    isPublished: Boolean,
})

const count = ref(0)
</script>

<template>
    <!--Card -->
    <router-link to=".." class="w-full overflow-hidden">
        <div class="thumb-container w-full rounded-lg overflow-hidden">
            <img class="w-full aspect-video bg-slate-500 bg-opacity-10" :src="img" />
            <!-- Not published -->
            <span v-if="!isPublished" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-red-800 border border-red-500 text-xs rounded-md shadow-stone-800 shadow-lg leading-tight">
                Não publicado
            </span>
        </div>
        <div class="px-1 py-3">
            <div class="font-semibold text-lg md:text-base mb-2">{{ title }}</div>
        </div>
    </router-link>

</template>


<script type="text/javascript">
export default {
    name: "CardCourse",
};
</script>