<script>
export default {
    data() {
        return {
            rate: {
                hover: 0,
                selected: 0,
                message: ''
            }
        }
    },
    props: {
        currentRate: {
            type: Number,
            required: true
        }
    },
    emits: [
        'selectedRate'
    ]

};
</script>

<template>
    <div class="inline-flex items-center justify-start mt-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @mouseover="rate.hover = 1; rate.message = 'Muito ruim'"
            @mouseleave="rate.hover = 0; rate.message = ''"
            @click="rate.selected = 1"
            :class="[rate.hover >= 1 || rate.selected >= 1 ? 'svg-filled' : 'svg-outline']">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @mouseover="rate.hover = 2; rate.message = 'Ruim'"
            @mouseleave="rate.hover = 0; rate.message = ''"
            @click="rate.selected = 2"
            :class="[rate.hover >= 2 || rate.selected >= 2 ? 'svg-filled' : 'svg-outline']">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @mouseover="rate.hover = 3; rate.message = 'Bom'"
            @mouseleave="rate.hover = 0; rate.message = ''"
            @click="rate.selected = 3"
            :class="[rate.hover >= 3 || rate.selected >= 3 ? 'svg-filled' : 'svg-outline']">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @mouseover="rate.hover = 4; rate.message = 'Muito bom'"
            @mouseleave="rate.hover = 0; rate.message = ''"
            @click="rate.selected = 4"
            :class="[rate.hover >= 4 || rate.selected >= 4 ? 'svg-filled' : 'svg-outline']">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            @mouseover="rate.hover = 5; rate.message = 'Excelente'"
            @mouseleave="rate.hover = 0; rate.message = ''"
            @click="rate.selected = 5"
            :class="[rate.hover >= 5 || rate.selected >= 5 ? 'svg-filled' : 'svg-outline']">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    </div>
    <span class="text-sm font-medium text-gray-400 block">
        {{ rate.message }}
    </span>
</template>

<style scoped>
.svg-filled,
.svg-outline {
    color: #efc20f;
    cursor: pointer;
    transition: all .3s ease-in-out;
    width: 1.5rem;
    height: 1.5rem;
}

.svg-filled {
    fill: currentColor;
}

.svg-outline {
    fill: none;
}

.svg-outline:hover {
    fill: currentColor !important;
    transition: all .3s ease-in-out;
}
</style>