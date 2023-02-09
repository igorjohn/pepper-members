<script>
import AlertError from '@/components/AlertError.vue';
import AlertInfo from '@/components/AlertInfo.vue';
import AlertSuccess from '@/components/AlertSuccess.vue';
import { ref } from 'vue'

export default {
    components: { AlertSuccess, AlertError, AlertInfo },
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
            formLogin: {
                email: null,
                password: null,
            },
            formResetPassword: {
                email: null
            },
            tab: 1
        }
    },
    setup() {
        /* Notificação */
        let showNotification = ref(false);
        function notification(type) {
            showNotification.value = true;
            setTimeout(() => {
                showNotification.value = false;
            }, 2000);
        }
    },
    created() {
        /* Setando o título da página */
        document.title = 'Login – Pepper Members';

        /* Verificando se a página de login foi acessada com os dados na URL */
        const actualUrl = window.location.href;
        const url = new URL(actualUrl);
        const emailParam = url.searchParams.get("e");
        const passwordParam = url.searchParams.get("p");
        if (emailParam && passwordParam) {
            this.formLogin.email = emailParam;
            this.formLogin.password = passwordParam;
            this.postLogin();
        }
    },
    methods: {
        /* Fazendo a requisição para login */
        postLogin() {
            if (!this.formLogin.email || !this.formLogin.password) {
                return this.notification('error', 'Você não preencheu todos os dados corretamente!');
            }

            this.$axios.post("/user/login", {
                email: this.formLogin.email,
                password: this.formLogin.password
            }).then((response) => {
                localStorage.setItem("token", response.data.token);
                return this.$router.push("/memberareas");
            }).catch((error) => {
                return console.log(error);
            })
        },

        recoverPassword() {
            if (!this.formResetPassword.email) {
                return this.notification('error', 'Você não informou o seu e-mail!');
            }

            this.notification('info', 'Estamos enviando a recuperação de senha para o seu e-mail!');

            this.$axios.post(`/user/forgot-password`, {
                email: this.formResetPassword.email
            }, {
                validateStatus: status => status >= 200 && status < 422
            })
            .then((response) => {
                this.formResetPassword.email = '';
                console.log(response);
                if (response.status == 200) {
                    this.notification('success', 'Enviamos o e-mail de recuperação, confira na sua caixa de mensagens!');
                    return;
                } else if (response.status == 404) {
                    this.notification('error', 'Não foi possível encontrar o endereço de e-mail!');
                } else if (response.status == 401) {
                    this.notification('error', 'Você já solicitou uma recuperação nos últimos 10 minutos!');
                } else {
                    this.notification('error', 'Ocorreu um erro durante o envio do e-mail e não foi possível concluir!');
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
    <div class="flex h-full items-center justify-center login-container">
        <!-- Tela de Login -->
        <div v-if="tab == 1" id="bg-gradient-container" class="flex h-full w-full items-center justify-center pt-24 pb-12 px-6 lg:px-8 lg:pt-32">
            <div class="w-full max-w-md space-y-4 lg:space-y-6">
                <div>
                    <img class="mx-auto h-6 w-auto" src="../assets/img/pepper-logo-dark.svg" alt="Pepper members" />
                    <h2 class="mt-6 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-100">Acessar área de membros</h2>
                </div>

                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div class="mb-4">
                        <label for="email-address" :class="pepper.darkMode.form.label">E-mail:</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required :class="pepper.darkMode.form.input" placeholder="email@email.com" v-model="formLogin.email" />
                    </div>
                    <div>
                        <label for="password" :class="pepper.darkMode.form.label">Digite sua senha</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required :class="pepper.darkMode.form.input" v-model="formLogin.password" />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded bg-zinc-800 border-zinc-500 text-indigo-600 focus:ring-0 outline-none" />
                        <label for="remember-me" class="ml-2 block text-sm font-medium text-gray-500">Lembrar-me</label>
                    </div>

                    <div class="text-sm">
                        <a @click="tab = 2" class="font-semibold text-indigo-500 hover:text-indigo-600 cursor-pointer">Esqueceu sua senha?</a>
                    </div>
                </div>

                <button :class="pepper.darkMode.button.login" @click="postLogin">
                    Fazer login
                </button>

            </div>
        </div>

        <!-- Tela de esqueci a senha -->
        <div v-if="tab == 2" id="bg-gradient-container" class="flex h-full w-full items-center justify-center pt-24 pb-12 px-6 lg:px-8 lg:pt-32">
            <div class="w-full max-w-md space-y-4 lg:space-y-6">
                <div>
                    <img class="mx-auto h-6 w-auto" src="../assets/img/pepper-logo-dark.svg" alt="Pepper Members" />
                    <h2 class="mt-6 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-100">Recuperar minha senha</h2>
                </div>
                <div class="mb-4">
                    <label for="email-address" :class="pepper.darkMode.form.label">Digite o seu e-mail para recuperar a senha:</label>
                    <input id="email-address" v-model="formResetPassword.email" name="email" type="email" autocomplete="email" :class="pepper.darkMode.form.input" placeholder="email@email.com" />
                </div>
                <button
                    @click="recoverPassword"
                    :class="pepper.darkMode.button.login">
                    Recuperar senha
                </button>
                <div class="text-sm pt-4">
                    <router-link to="/login" class="font-semibold text-indigo-500 hover:text-indigo-600 flex items-center justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>
                        <span @click="tab = 1">
                            Lembrou sua senha? Faça login
                        </span>
                    </router-link>
                </div>
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