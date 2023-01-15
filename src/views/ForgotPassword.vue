<script setup>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
} from '@headlessui/vue'
import { ref } from 'vue'

let showNotification = ref(false);
function notification() {

    showNotification.value = true;

    setTimeout(() => {
        showNotification.value = false;
    }, 9993500);

}

</script>

<script type="text/javascript">

export default {
    data() {
        return {
            pepper: this.pepper
        }
    },
    mounted() {
        document.title = 'Recuperar minha senha – Pepper members'
    }
};

</script>

<template>
    <div class="flex h-full items-center justify-center login-container">
        <div id="bg-gradient-container" class="flex h-full w-full items-center justify-center pt-24 pb-12 px-6 lg:px-8 lg:pt-32">
            <div class="w-full max-w-md space-y-4 lg:space-y-6">
                <div>
                    <img class="mx-auto h-6 w-auto" src="../assets/img/pepper-logo-dark.svg" alt="Pepper members" />
                    <h2 class="mt-6 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-100">Recuperar minha senha</h2>
                </div>
                <div class="mb-4">
                    <label for="email-address" :class="pepper.darkMode.form.label">Digite o seu e-mail para recuperar a senha:</label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required="" :class="pepper.darkMode.form.input" placeholder="email@email.com" />
                </div>
                <button
                    @click="notification"
                    :class="pepper.darkMode.button.login">
                    Recuperar senha
                </button>
                <div class="text-sm pt-4">
                    <router-link to="/login" class="font-semibold text-indigo-500 hover:text-indigo-600 flex items-center justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        <span>
                            Lembrou sua senha? Faça login
                        </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>


    <!-- Notification -->
    <transition appear name="slide-fade">
        <div v-if="showNotification" class="float-right min-w-full fixed bottom-3 right-0 md:right-3">
            <div class="flex flex-col space-y-3 w-100 md:w-1/2 xl:w-1/3 mx-auto md:mx-0 md:ml-auto" style="max-width:93vw;">
                <div class="bg-green-100 border border-lime-800 py-5 px-4 lg:px-5 w-full rounded-md">
                    <div class="flex justify-between">
                        <div class="flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-green-500 h-4 w-4">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
                            </svg>
                            <div class="flex-1 leading-tight text-sm text-green-700 font-medium">
                                E-mail de recuperação de senha enviado!
                            </div>
                        </div>
                        <svg @click="showNotification = !showNotification" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-green-600 h-3 w-3 cursor-pointer">
                            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>

<style scoped>
#bg-gradient-container {
    background-image: linear-gradient(10deg, #000 30%, #000000DD 70%, #000000CF, #000000EE)
}

.login-container {
    background-image: url('../assets/img/bg-login.png');
    background-repeat: no-repeat;
    background-color: #000;
}

@media (max-width:992px) {
    .login-container {
        background-size: 145vw;
        background-position-x: right;
        background-position-y: -50px;
    }
}

@media (min-width:993px) {
    .login-container {
        background-size: 1300px;
        background-position-x: center;
        background-position-y: -70px;
    }
}
</style>