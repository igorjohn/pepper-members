<script setup>
import logoPepperzap from '@/assets/img/logos-integracoes/logo-pepperzap.png';
import logoPerfectPay from "@/assets/img/logos-integracoes/logo-perfect-pay.png";
import logoHotmart from "@/assets/img/logos-integracoes/logo-hotmart.png";
import logoMonetizze from "@/assets/img/logos-integracoes/logo-monetizze.png";
import logoBraip from "@/assets/img/logos-integracoes/logo-braip.svg";
import logoEduzz from "@/assets/img/logos-integracoes/logo-eduzz.png";

const integrations = [
    {
        logoImg: 'https://peppermembers.com/img/logotipo-white-pepper.52ff1608.png',
        logoClass: 'h-5',
        isActive: true,
        description: 'Configure a entrega dos seus produtos da Pepper.',
        router: '/area/integracoes/pepper'
    },
    {
        logoImg: logoPepperzap,
        logoClass: 'h-6',
        isActive: false,
        description: 'Recupere carrinhos abandonados, PIX e boletos e aumente suas conversões.',
        router: '/area/'
    },
    {
        logoImg: logoPerfectPay,
        logoClass: 'h-5',
        isActive: false,
        description: 'Integre os seus produtos vendidos pela PerfectPay.',
        router: '/area/'
    },
    {
        logoImg: logoHotmart,
        logoClass: 'h-7 -mt-1',
        isActive: false,
        description: 'Integre os seus produtos vendidos pela Hotmart.',
        router: '/area/'
    },
    {
        logoImg: logoMonetizze,
        logoClass: 'h-3.5 mt-1',
        isActive: false,
        description: 'Integre os seus produtos vendidos pela Monetizze.',
        router: '/area/'
    },
    {
        logoImg: logoBraip,
        logoClass: 'h-6',
        isActive: false,
        description: 'Integre os seus produtos vendidos pela Braip.',
        router: '/area/'
    },
    {
        logoImg: logoEduzz,
        logoClass: 'h-6',
        isActive: false,
        description: 'Integre os seus produtos vendidos pela Eduzz.',
        router: '/area/'
    }
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

    <span class="flex flex-row items-center gap-x-2 mt-6 mb-3 text-sm text-gray-400 uppercase font-semibold tracking-wider">
        Disponíveis:
    </span>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pt-4">
        <template v-for="integration in integrations">
            <div :class="pepper.darkMode.card.container" class="p-5 pb-4" v-if="integration.isActive">
                <router-link
                    :to="integration.router"
                    class="w-full flex flex-col items-start justify-start">
                    <div class="mt-1 mb-1 h-10">
                        <img :src="integration.logoImg" :class="integration.logoClass" />
                    </div>
                    <span class="text-sm text-gray-300 block mb-1 lg:h-[40px]">
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
        </template>
    </div>

    <span class="flex flex-row items-center gap-x-2 mt-12 lg:mt-14 mb-3 text-sm text-gray-400 uppercase font-semibold tracking-wider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-500">
            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
        </svg>
        Disponíveis para assinantes:
    </span>

    <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 py-4">
        <template v-for="integration in integrations">
            <div :class="pepper.darkMode.card.container" class="p-5 pb-4" v-if="!integration.isActive">
                <router-link
                    :to="integration.router"
                    class="w-full flex flex-col items-start justify-start">
                    <div class="mb-3 h-9 w-full flex flex-row items-center justify-between">
                        <img :src="integration.logoImg" :class="integration.logoClass" />
                        <!-- Lock icon -->
                        <div class="w-6 h-6 rounded-full bg-slate-700 bg-opacity-40 flex items-center justify-center border border-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3 text-red-500">
                                <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <span class="text-sm text-gray-300 block mb-1 lg:h-[40px]">
                        {{ integration.description }}
                    </span>
                    <div class="mt-4 mb-2">
                        <a href="#"
                            role="button"
                            :class="pepper.darkMode.button.headerPrimary">
                            Liberar integração
                        </a>
                    </div>
                </router-link>
            </div>
        </template>
    </div>

</template>