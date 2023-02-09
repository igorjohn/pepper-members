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
import AlertError from '@/components/AlertError.vue';
import AlertInfo from '@/components/AlertInfo.vue';
import AlertSuccess from '@/components/AlertSuccess.vue';

export default {
    data() {
        return {
            notifications: {
                error: {
                    showErrorNotification: false,
                    textErrorNotification: '',
                },
                success: {
                    showSuccessNotification: false,
                    textSuccessNotification: '',
                },
                info: {
                    showInfoNotification: false,
                    textInfoNotification: '',
                },
            },
            pepper: this.pepper,
            viewUI: false,
            form: {
                password: '',
                password_confirmation: ''
            },
        }
    },
    created() {
        const actualUrl = window.location.href;
        const url = new URL(actualUrl);
        const codeParam = url.searchParams.get("c");
        this.codeParam = codeParam;
        const emailParam = url.searchParams.get("e");
        this.emailParam = emailParam;
        if (codeParam && emailParam) {
            this.$axios.get(`/user/forgot-password/${codeParam}`, {
                validateStatus: status => status >= 200 && status < 422
            })
            .then((response) => {
                console.log(response);
                this.viewUI = true;
                if (response.status != 200) {
                    return this.$router.push('/login');
                }
            });
        } else {
            return this.$router.push('/login');
        }
        console.log(codeParam);
        console.log(emailParam);
    },
    mounted() {
        document.title = 'Recuperar minha senha – Pepper Members'
    },
    methods: {
        recoverPassword() {
            if (!this.form.password || !this.form.password_confirmation) {
                return this.notification('error', 'Você não preencheu o campo com sua nova senha!');
            }

            if (this.form.password < 8 || this.form.password_confirmation < 8) {
                return this.notification('error', 'A senha precisa ter no mínimo 8 dígitos!');
            }

            this.notification('info', 'Estamos atualizando a sua senha, aguarde enquanto finalizamos!');

            this.$axios.post(`/user/recover-password/${this.codeParam}`, {
                email: this.emailParam,
                password: this.form.password
            }, {
                validateStatus: status => status >= 200 && status < 422
            })
            .then((response) => {
                if (response.status == 404) {
                    return this.notification('error', 'Não foi possível atualizar a sua senha, código ou e-mail inválidos!');
                } else if (response.status == 200) {
                    this.notification('success', 'Atualizamos a sua senha, você será redirecionado para a página de login');
                    this.$router.push('/login');
                }
            });
        },

        notification(type, text) {
            if (type == 'error') {
                this.notifications.error.showErrorNotification = true;
                this.notifications.error.textErrorNotification = text;
    
                setTimeout(() => {
                    this.notifications.error.showErrorNotification = false;
                    this.notifications.error.textErrorNotification = '';
                }, 2500);
            }

            if (type == 'success') {
                this.notifications.success.showSuccessNotification = true;
                this.notifications.success.textSuccessNotification = text;
    
                setTimeout(() => {
                    this.notifications.success.showSuccessNotification = false;
                    this.notifications.success.textSuccessNotification = '';
                }, 2500);
            }

            if (type == 'info') {
                this.notifications.info.showInfoNotification = true;
                this.notifications.info.textInfoNotification = text;
    
                setTimeout(() => {
                    this.notifications.info.showInfoNotification = false;
                    this.notifications.info.textInfoNotification = '';
                }, 2500);
            }
        },
    }
};

</script>

<template>
    <div v-if="viewUI" class="flex h-full items-center justify-center login-container">
        <div id="bg-gradient-container" class="flex h-full w-full items-center justify-center pt-24 pb-12 px-6 lg:px-8 lg:pt-32">
            <div class="w-full max-w-md space-y-4 lg:space-y-6">
                <div>
                    <img class="mx-auto h-6 w-auto" src="../assets/img/pepper-logo-dark.svg" alt="Pepper Members" />
                    <h2 class="mt-6 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-100">Alterar a sua senha</h2>
                </div>
                <div class="mb-4">
                    <label for="new-password" :class="pepper.darkMode.form.label">Digite a sua nova senha:</label>
                    <input v-model="form.password" id="new-password" name="email" type="password" required="" :class="pepper.darkMode.form.input" placeholder="************" />
                </div>
                <div class="mb-4">
                    <label for="new-password-confirmation" :class="pepper.darkMode.form.label">Repita a sua nova senha:</label>
                    <input v-model="form.password_confirmation" id="new-password-confirmation" name="email" type="password" required="" :class="pepper.darkMode.form.input" placeholder="************" />
                </div>
                <button
                    @click="recoverPassword"
                    :class="pepper.darkMode.button.login">
                    Redefinir senha
                </button>
            </div>
        </div>
    </div>


    <!-- Notificações -->
    <transition appear name="slide-fade">
        <div v-if="
            notifications.error.showErrorNotification || 
            notifications.success.showSuccessNotification ||
            notifications.info.showInfoNotification
        " class="float-right min-w-full fixed bottom-3 right-0 md:right-3">
            <AlertSuccess v-if="notifications.success.showSuccessNotification" :title="notifications.success.textSuccessNotification" />

            <AlertError v-if="notifications.error.showErrorNotification" :title="notifications.error.textErrorNotification" />

            <AlertInfo v-if="notifications.info.showInfoNotification" :title="notifications.info.textInfoNotification" />
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