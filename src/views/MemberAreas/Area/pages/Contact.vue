<script setup>

import { ref } from 'vue'

// notification
let showNotification = ref(false);
function notification() {
    showNotification.value = true;

    setTimeout(() => {
        showNotification.value = false;
    }, 3500);

}
</script>

<script type="text/javascript">

import Header from "@/components/Header.vue";

// Run 2 functions
function bindFunctions(func1, func2) {
    func1();
    setTimeout(() => { func2() }, 1600)
}


export default {
    data() {
        return {
            pepper: this.pepper
        }
    }
}
</script>

<template>
    <div class="w-full max-w-5xl mx-auto mb-10">
        <Header title="Contato suporte"></Header>
    </div>

    <div class="mt-5 lg:col-span-3 lg:mt-0 max-w-5xl mx-auto">
        <div :class="pepper.darkMode.card.container">
            <div class="grid grid-cols-2 gap-4 px-4 py-5 sm:p-6">
                <div class="col-span-2 flex items-center justify-start">
                    <span class="font-semibold text-base text-gray-100 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 md:w-6 md:h-6 mr-1 mb-1 text-indigo-500 inline-flex">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        Envie a sua mensagem para o suporte do produtor:
                    </span>
                </div>
                <div class="col-span-2">
                    <label :class="pepper.darkMode.form.label">
                        Área de membros:
                    </label>
                    <select
                        :class="pepper.darkMode.form.select">
                        <option value="Cinética: Escola do movimento" selected disabled>
                            Cinética: Escola do movimento
                        </option>
                    </select>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <label :class="pepper.darkMode.form.label">
                        Seu nome:
                    </label>
                    <input
                        type="text"
                        readonly
                        value="José Afonso Oliveira Antunes"
                        :class="pepper.darkMode.form.input" />
                </div>
                <div class="col-span-2 md:col-span-1">
                    <label :class="pepper.darkMode.form.label">
                        Seu e-mail onde receberá a resposta:
                    </label>
                    <input
                        type="email"
                        readonly
                        placeholder="Digite o e-mail"
                        value="igor@gmail.com"
                        :class="pepper.darkMode.form.input" />
                </div>
                <div class="col-span-2">
                    <label :class="pepper.darkMode.form.label">
                        Assunto:
                    </label>
                    <input
                        type="text"
                        max="500"
                        placeholder="Digite o título da mensagem"
                        value="Quero meu rebolço"
                        :class="pepper.darkMode.form.input" />
                </div>
                <div class="col-span-2">
                    <label :class="pepper.darkMode.form.label">
                        Mensagem:
                    </label>
                    <textarea
                        type="text"
                        max="5000"
                        placeholder="Digite aqui a sua mensagem"
                        rows="4"
                        :class="pepper.darkMode.form.input" />
                </div>
            </div>
            <div :class="pepper.darkMode.card.footer">
                <button
                    :class="pepper.darkMode.button.successButton">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="none" :class="pepper.darkMode.svgIcon.button.small">
                        <path
                            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    WhatsApp
                </button>
                <button
                    @click="notification"
                    :class="pepper.darkMode.button.primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="none" :class="pepper.darkMode.svgIcon.button.small">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg>
                    Enviar por e-mail
                </button>

                <!-- 

var formattedBody = "FirstLine \n Second Line \n Third Line";
var mailToLink = "mailto:x@y.com?body=" + encodeURIComponent(formattedBody);
window.location.href = mailToLink;

                 -->


            </div>
        </div>
    </div>

    <!-- Notification -->
    <transition appear name="slide-fade">
        <div v-if="showNotification" class="float-right min-w-full fixed bottom-3 right-0 md:right-3">
            <div class="flex flex-col space-y-3 w-100 md:w-1/2 xl:w-1/3 mx-auto md:mx-0 md:ml-auto shadow-lg" style="max-width:93vw;">
                <div class="bg-green-100 border border-lime-800 p-5 w-full rounded-md">
                    <div class="flex justify-between">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-green-500 h-4 w-4">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
                            </svg>
                            <div class="flex-1 leading-tight text-sm text-green-700 font-medium">
                                Sua mensagem foi enviada com sucesso!
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