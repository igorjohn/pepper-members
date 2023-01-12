<script setup>
import logoPepperzap from '../../../../assets/img/logos-integracoes/logo-pepperzap.png';

const integrations = [
    {
        logoImg: 'https://peppermembers.com/img/logotipo-white-pepper.52ff1608.png',
        title: 'Pepper',
        isActive: true,
        description: 'Configure a entrega dos seus produtos da Pepper.',
        router: '/area/integracoes/pepper'
    },
    /* {
        logoImg: logoPepperzap,
        title: 'Pepperzap',
        isActive: true,
        description: 'Recupere carrinhos abandonados, PIX e boletos.',
        router: '/area/'
    } */
]

</script>

<script type="text/javascript">

import Header from "@/components/Header.vue";

export default {
    data() {
        return {
            pepper: this.pepper
        }
    }
}
</script>

<template>
    <div class="lg:flex lg:justify-between pb-4">
        <Header title="Integrações"></Header>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pt-4">

        <div
            :class="pepper.darkMode.card.container" class="p-5 pb-4"
            v-for="integration in integrations">
            <router-link
                v-if="integration.isActive"
                :to="integration.router"
                class="w-full flex flex-col items-start justify-start">
                <img :src="integration.logoImg" class="h-6 mt-1 mb-4" />
                <span class="text-sm text-gray-300 font-medium block mb-2">
                    {{ integration.description }}
                </span>
                <div class="mt-4 mb-2">
                    <router-link
                        :to="integration.router"
                        role="button"
                        :class="pepper.darkMode.button.headerPrimary">
                        Configurar integração
                    </router-link>
                </div>
            </router-link>
        </div>

    </div>
</template>