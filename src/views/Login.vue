<script type="text/javascript">

export default {
    data() {
        return {
            pepper: this.pepper
        }
    },
    mounted() {
        document.title = 'Login – Pepper members'
    }
};

</script>

<template>
    <div class="flex h-full items-center justify-center login-container">
        <div id="bg-gradient-container" class="flex h-full w-full items-center justify-center pt-24 pb-12 px-6 lg:px-8 lg:pt-32">
            <div class="w-full max-w-md space-y-4 lg:space-y-6">
                <div>
                    <img class="mx-auto h-6 w-auto" src="../assets/img/pepper-logo-dark.svg" alt="Pepper members" />
                    <h2 class="mt-6 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-100">Acessaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar área de membros</h2>
                </div>

                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div class="mb-4">
                        <label for="email-address" :class="pepper.darkMode.form.label">E-mail:</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required="" :class="pepper.darkMode.form.input" placeholder="email@email.com" />
                    </div>
                    <div>
                        <label for="password" :class="pepper.darkMode.form.label">Digite sua senha</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required="" :class="pepper.darkMode.form.input" />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded bg-zinc-800 border-zinc-500 text-indigo-600 focus:ring-0 outline-none" />
                        <label for="remember-me" class="ml-2 block text-sm font-medium text-gray-500">Lembrar-me</label>
                    </div>

                    <div class="text-sm">
                        <router-link to="/forgot-password" class="font-semibold text-indigo-500 hover:text-indigo-600">Esqueceu sua senha?</router-link>
                    </div>
                </div>

                <router-link
                    to="/memberareas"
                    :class="pepper.darkMode.button.login">
                    Fazer login
                </router-link>

            </div>
        </div>
    </div>
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