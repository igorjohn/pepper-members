<script setup>

import { ref } from 'vue'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/vue'
import { ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/outline'

const courses = [
    { id: 1, name: 'Empreendedorismo' },
    { id: 2, name: 'Educação física e fisioterapia' },
    { id: 3, name: 'Programação ágil' },
]
const selectedCourse = ref(courses[0]);

</script>

<script type="text/javascript">

import Header from "@/components/Header.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import CertificateSvg from '@/assets/img/icons/certificate.svg';

// Certificate models:
import CertificateModel01 from '@/assets/img/certificate/certificate-model-01.jpg';
import CertificateModel02 from '@/assets/img/certificate/certificate-model-02.jpg';

export default {
    data: function () {
        return {
            pepper: this.pepper,
            certificateModel: 1,

            certificateSignature: false,

            preview: null,
            image: null
        };
    },

    methods: {
        selectCertificate1() {
            this.certificateModel = 1
        },
        selectCertificate2() {
            this.certificateModel = 2
        },

        previewImage: function (event) {
            var input = event.target;
            if (input.files) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                }
                this.image = input.files[0];
                console.log(this.image);
                reader.readAsDataURL(input.files[0]);
            }
        },
        reset: function () {
            this.image = null;
            this.preview = null;
        }
    }
}
</script>

<template>
    <div class="w-full max-w-6xl mx-auto mb-10">
        <Header title="Configurar certificado"></Header>
    </div>

    <div class="mt-5 lg:col-span-3 lg:mt-0 max-w-6xl mx-auto">
        <div :class="pepper.darkMode.card.container">
            <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-3 lg:gap-y-4 px-4 py-8 sm:px-6">

                <div class="lg:col-span-3">
                    <label :class="pepper.darkMode.form.label">
                        Você está editando o certificado do curso:
                    </label>
                    <Listbox v-model="selectedCourse" class="max-w-[600px]">
                        <div class="relative mt-1">
                            <ListboxButton :class="pepper.darkMode.listbox.darkBg.button">
                                <!-- 'placeholder' -->
                                <span v-if="selectedCourse == ''" :class="pepper.darkMode.listbox.darkBg.buttonInnerSpan" class="opacity-40">
                                    Selecionar curso
                                </span>
                                <span v-if="selectedCourse !== ''" :class="pepper.darkMode.listbox.darkBg.buttonInnerSpan">
                                    {{ selectedCourse.name }}
                                </span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </ListboxButton>
                            <transition
                                leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-900 border border-zinc-800 py-1 focus:outline-none text-sm">
                                    <ListboxOption
                                        v-slot="{ active }"
                                        v-for="c in courses"
                                        :key="c.name"
                                        :value="c"
                                        as="template">
                                        <li :class="[active ? 'bg-indigo-500 text-white' : 'text-gray-200', 'relative cursor-pointer select-none py-2 px-4']">
                                            <span :class="pepper.darkMode.listbox.darkBg.optionLi">
                                                {{ c.name }}
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>

                <div class="lg:col-span-3">
                    <span class="flex items-center gap-2 font-semibold text-lg text-white mb-4 mt-4">
                        <img :src="CertificateSvg" class="w-7 h-6 -ml-1 inline-flex" />
                        Escolha o modelo do certificado:
                    </span>
                    <ul class="flex justify-start gap-2 mb-4">
                        <li>
                            <button
                                @click="selectCertificate1"
                                :class="certificateModel == 1 ? 'border-indigo-500' : 'border-gray-600 opacity-40'"
                                class="inline-flex items-center justify-center rounded-md overflow-hidden border-2 hover:border-indigo-600 transition duration-300 bg-gray-800 p-0 max-w-[250px]">
                                <img :src="CertificateModel01" class="w-full h-full object-cover object-center mx-auto" />
                            </button>
                        </li>
                        <li>
                            <button
                                @click="selectCertificate2"
                                :class="certificateModel == 2 ? 'border-indigo-500' : 'border-gray-600 opacity-40'"
                                class="inline-flex items-center justify-center rounded-md overflow-hidden border-2 hover:border-indigo-600 transition duration-300 bg-gray-800 p-0 max-w-[250px]">
                                <img :src="CertificateModel02" class="w-full h-full object-cover object-center mx-auto" />
                            </button>
                        </li>
                    </ul>
                </div>

                <div class="flex items-start gap-x-2 mb-1 lg:col-span-3">
                    <input id="showCertificateSignature" type="checkbox" class="border-zinc-700 rounded" @change="certificateSignature = !certificateSignature" />
                    <div class="-mt-[3px]">
                        <label for="showCertificateSignature" class="inline-block text-base text-gray-100 font-medium mb-1 cursor-pointer">
                            Exibir assinatura do responsável no certificado.
                        </label>
                        <span class="block text-xs text-gray-400">
                            Anexe a assinatura do responsável (com fundo transparente). Tamanho recomendado: 1280x720px.
                        </span>
                    </div>
                </div>

                <label for="file-upload" :class="[certificateSignature ? 'opacity-100 translate-y-0 px-6 py-5 mb-5' : 'z-[-1] h-0 opacity-0 -translate-y-20']" class="lg:col-span-3 rounded-md border-2 border-dashed border-zinc-700 hover:border-indigo-600 transition duration-500 cursor-pointer text-center bg-zinc-900">
                    <input id="file-upload" name="file-upload" type="file" accept="image/*" @change="previewImage" class="sr-only" />
                    <!-- upload -->
                    <template v-if="!preview">
                        <svg class="mx-auto h-12 w-12 text-gray-400 -mt-1" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div class="flex text-sm text-indigo-500 font-medium justify-center mb-2">
                            Clique para fazer upload
                        </div>
                        <p class="text-xs text-gray-400">Anexe imagem PNG com fundo transparente</p>
                    </template>
                    <!-- preview -->
                    <div v-if="preview" class="flex flex-col items-center justify-center">
                        <div class="relative bg-zinc-800 border border-zinc-700 rounded-md overflow-hidden mx-auto mb-3 max-w-full w-[300px] px-3 py-4">
                            <img class="max-w-[70%] max-h-[26px] mx-auto object-cover" :src="preview">
                            <div class="absolute top-0 right-0 m-2">
                                <button @click="reset" class="py-1 px-1 rounded bg-slate-600 bg-opacity-40 text-white hover:bg-red-600 hover:bg-opacity-60 transition duration-600">
                                    <TrashIcon class="h-3 w-3" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <p class="text-xs text-gray-500 mb-0">{{ image.name }}</p>
                    </div>
                </label>

                <span class="flex items-center gap-2 font-semibold text-lg text-white lg:col-span-3">
                    <PencilSquareIcon class="w-5 h-5 -mt-[2px] text-indigo-500 inline-flex" />
                    Rodapé do certificado
                </span>
                <div>
                    <label :class="pepper.darkMode.form.label">
                        Nome da empresa:
                    </label>
                    <input
                        type="text"
                        placeholder="Digite o nome da empresa"
                        maxlength="200"
                        :class="pepper.darkMode.form.input" />
                </div>
                <div>
                    <label :class="pepper.darkMode.form.label">
                        CNPJ:
                    </label>
                    <input
                        type="text"
                        placeholder="Digite aqui o CNPJ"
                        maxlength="200"
                        :class="pepper.darkMode.form.input" />
                </div>
                <div>
                    <label :class="pepper.darkMode.form.label">
                        Carga-horária do certificado:
                    </label>
                    <input
                        type="number"
                        required
                        :class="pepper.darkMode.form.input" />
                </div>

                <div class="lg:col-span-3 mt-2">
                    <a href="#" class="font-semibold text-sm text-indigo-500 border-b border-indigo-500 hover:text-indigo-600 hover:border-indigo-600 transition duration-400">
                        Clique aqui para visualizar certificado
                    </a>
                </div>

            </div>

            <div :class="pepper.darkMode.card.footer">
                <button
                    :class="pepper.darkMode.button.secondary">
                    Cancelar
                </button>
                <button
                    @click="notification"
                    :class="pepper.darkMode.button.primary">
                    Salvar alterações
                </button>

            </div>
        </div>
    </div>
</template>