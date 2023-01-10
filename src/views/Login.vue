<script>
export default {
    mounted() {
        document.title = 'Login – Pepper members'
    }
}
</script>

<template>
    <div class="flex h-full items-center justify-center login-container">
        <div class="flex h-full w-full items-center justify-center py-12 px-6 lg:px-8" style="background-image:linear-gradient(10deg, #120e1e, #120e1eCC 40%, #120e1eAA)">
            <div class="w-full max-w-md space-y-6">
                <div>
                    <img class="mx-auto h-6 w-auto" src="../assets/img/pepper-logo-dark.svg" alt="Pepper members" />
                    <h2 class="mt-6 text-center text-2xl font-bold tracking-tight text-gray-100">Acessar área de membros</h2>
                </div>

                <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div class="mb-4">
                        <label for="email-address" class="text-sm text-gray-400 font-semibold mb-2 block">E-mail:</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="email@email.com" />
                    </div>
                    <div>
                        <label for="password" class="text-sm text-gray-400 font-semibold mb-2 block">Digite sua senha</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required="" class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <label for="remember-me" class="ml-2 block text-sm font-medium text-gray-500">Lembrar-me</label>
                    </div>

                    <div class="text-sm">
                        <router-link to="/forgot-password" class="font-semibold text-indigo-500 hover:text-indigo-600">Esqueceu sua senha?</router-link>
                    </div>
                </div>

                <router-link to="/memberareas" class="flex w-full justify-center rounded-md border border-transparent bg-red-600 py-3 px-4 text-sm font-bold text-white hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2">
                    Fazer login
                </router-link>

            </div>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    background-image: url('../assets/img/background-login.png');
    background-repeat: no-repeat;
    background-color: #120f1e;
}

@media (max-width:992px) {
    .login-container {
        background-size: 200%;
        background-position-x: 100%;
        background-position-y: -50px;
    }
}

@media (min-width:993px) {
    .login-container {
        background-size: cover;
        background-position: top right;
    }
}
</style>