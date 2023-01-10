<script setup>
import { PlusIcon } from '@heroicons/vue/20/solid'
</script>

<script type="text/javascript">

const memberAreas = [
    {
        router: '/area',
        title: 'The Walking Dead',
        thumbnail: 'https://nerdreactor.com/wp-content/uploads/2017/09/The-Walking-Dead-_S8_14x48BB_REF1-thumb.jpg',
    },
    {
        router: '/area',
        title: 'Curso de Programação',
        thumbnail: 'https://www.memesmonkey.com/images/memesmonkey/9f/9f098b405bac22358a2f73abc09f3c24.jpeg',
    },
    {
        router: '/area',
        title: 'Cinética - Escola do Movimento!',
        thumbnail: '../../assets/img/mock/cinetica.png',
    },
]

export default {

};
</script>

<template>

    <div class="md:min-h-screen w-screen flex flex-col md:justify-between">

        <!-- Logo -->
        <div class="flex items-center justify-center mb-14 mt-10">
            <img src="../../assets/img/pepper-logo-dark.svg" class="h-6" />
        </div>

        <div class="px-6 pt-6 lg:pt-10 max-w-7xl mx-auto flex flex-col justify-center items-center pb-20">
            <div class="w-full mb-14">
                <h3 class="font-semibold text-lg mb-14 text-center">
                    Escolha a área de membros que deseja acessar:
                </h3>
                <div id="member-areas-container">
                    <div v-for="a in memberAreas" class="thumb-wrapper w-full sm:w-1/2 lg:w-1/5 xl:w-1/6">
                        <router-link :to="a.router">
                            <div class="thumb-container w-full rounded-lg overflow-hidden">
                                <img class="w-full aspect-video bg-slate-500 object-cover bg-opacity-10"
                                    :src="a.thumbnail" />
                            </div>
                            <div class="px-1 py-3 font-semibold text-sm mb-2">
                                {{ a.title }}
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center mb-14">
                <button type="button" class="w-full inline-flex justify-center items-center rounded-md border border-pepper-primary bg-pepper-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-danger-700 focus:outline-none focus:ring-1 focus:ring-danger-500 focus:ring-offset-1">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    <span>Criar nova área de membros</span>
                </button>
            </div>
        </div>

        <!-- Footer -->
        <div class="flex items-center justify-center my-10">
            <span class="text-xs text-gray-500 text-center font-medium">
                Pepper members © 2023 - Todos os direitos reservados
            </span>
        </div>
    </div>
</template>

<style scoped>
#member-areas-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
}

@media (max-width:545px) {
    #member-areas-container {
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
}

#member-areas-container .thumb-wrapper.w-full {
    min-width: 220px;
    overflow: hidden;
}
</style>