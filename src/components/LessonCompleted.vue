<script>
export default {
    data() {
        return {
            lessonStatus: false
        }
    },
    props: {
        isCompleted: {
            type: Boolean,
            required: true,
        }
    },
    emits: [
        'onClick'
    ],
    created() {
        this.lessonStatus = this.isCompleted;
    }
};
</script>

<template>
    <div
        id="btnCompleteLesson"
        @click="this.$emit('onClick')"
        :class="[isCompleted ? 'svgCompletedHover bg-indigo-600 text-white' : 'svgNotCompletedHover bg-transparent text-indigo-100 hover:bg-indigo-600 hover:text-white']"
        class="px-4 lg:px-6 py-2.5 flex whitespace-nowrap justify-center items-center text-sm cursor-pointer rounded-lg border border-indigo-600 transition duration-300 font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 mr-2 -ml-1" :class="[isCompleted ? 'svgCompleted' : 'svgNotCompleted']">
            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
        </svg>
        Marcar como concluído
    </div>
</template>

<style scoped>
.svgNotCompleted {
    fill: rgb(99, 91, 250) !important;
    stroke-width: 0 !important;
}

.svgCompleted,
.svgNotCompletedHover:hover svg {
    fill: rgb(16 185 129) !important;
    stroke-width: 0 !important;
}

svg {
    fill: none;
    stroke: rgb(16 185 129);
    stroke-width: 1;
    transition: .3s;
}
</style>