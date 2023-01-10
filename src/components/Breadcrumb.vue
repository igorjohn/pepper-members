<script setup>
import { ref } from 'vue'

defineProps({
    item1Text: String,
    item1Route: String,
    item2Text: String,
    item2Route: String,
})

const count = ref(0)
</script>

<template>
    <div class="w-full flex flex-row items-center justify-start gap-1 mb-8">
        <router-link
            :to="item1Route"
            class="leading-tight text-xs text-gray-400 font-semibold transition duration-500 hover:text-indigo-500">
            {{ item1Text }}
        </router-link>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3.5 h-3.5 text-gray-700">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

        <span class="leading-tight text-xs text-gray-400 font-semibold cursor-default">
            {{ item2Text }}
        </span>
    </div>
</template>

<script type="text/javascript">
export default {
    name: "Breadcrumb",
};
</script>