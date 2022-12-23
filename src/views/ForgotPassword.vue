<script>
export default {

}
</script>

<template>
    <div class="flex h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 login-container">
        <div class="w-full max-w-md space-y-6">
            <div>
                <img class="mx-auto h-6 w-auto" src="../assets/img/pepper-logo-dark.svg" alt="Pepper members" />
                <h2 class="mt-6 text-center text-2xl font-bold tracking-tight text-gray-100">Recuperar minha senha</h2>
            </div>

            <div class="text-sm">
                <router-link to="/login" class="flex items-center font-semibold text-indigo-600 hover:text-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 mr-2 font-bold">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Lembrou sua senha? Faça login
                </router-link>
            </div>

            <label for="email-address" class="text-sm text-gray-400 font-semibold mb-2 block">Digite o seu e-mail:</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="email@email.com" />

            <div>
                <button class="w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2">
                    Recuperar senha
                </button>
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