<script setup>
import { ref } from 'vue'

defineProps({
    title: String,
    buttonPrimaryText: String,
    buttonSecondaryText: String
})

const count = ref(0)
</script>

<template>
    <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-bold leading-7 text-white sm:tracking-tight">{{ title }}</h2>
    </div>

</template>


<script>

import { PlusIcon } from '@heroicons/vue/20/solid'

export default {
    name: "Header",
};
</script>