<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ref } from 'vue'
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
} from '@headlessui/vue'

import { CheckIcon, ChevronUpIcon, ChevronDownIcon, ChevronUpDownIcon, PlusIcon } from '@heroicons/vue/20/solid'
import { TrashIcon } from '@heroicons/vue/24/outline'


// Modal 'Add Module'
let isOpenModalAddModule = ref(false);
function openModalAddModule() {
    isOpenModalAddModule.value = true;
}

function closeModal() {
    isOpenModalAddModule.value = false;
}


// Admin components
const isAdmin = true;

// Input combobox
const category = [
    { id: 1, name: 'Empreendedorismo' },
    { id: 2, name: 'Educação física e fisioterapia' },
    { id: 3, name: 'Programação ágil' },
]

const coverFormat = 1;

const product = [
    {
        id: 1,
        belongsToCategory: 1,
        isPublished: true,
        userProgress: 90,
        title: 'Aprendendo a vender online com escala',
        description: 'Escalar uma empresa, setor ou processos é, genericamente, o famoso “fazer mais com menos”. Trata-se da capacidade de crescer em 2x, 5x, 10x ou mais seus resultados sem aumentar proporcionalmente os seus esforços (custo financeiro, tempo, pessoas e atividades). Neste curso, você irá aprender exatamente isso.',
        route: '/area/produto',
        thumbnail: 'https://www.userede.com.br/content/userede/pt-br/blog/quais-ferramentas-de-marketing-digital-posso-usar-para-divulgar-meu-negocio-na-internet/_jcr_content/root/responsivegrid/tabcontainer_4788725/tabs-container-1/productdetails_copy/bottom-container/card_copy_copy_copy_94108686/card-container-content-responsivegrid/image.coreimg.jpeg/1557325623466.jpeg'
    }
]


const modules = [
    {
        id: 1,
        name: 'Módulo 1 – Seja bem vindo!',
        content: [
            {
                id: 1,
                type: 'video',
                name: 'Aula de introdução para iniciantes no marketing digital',
                route: '/area/produto/modulo/conteudo',
                finished: false,
            },
            {
                id: 2,
                type: 'video',
                name: 'Princípios básicos para vender online!',
                route: '/area/produto/modulo/conteudo',
                finished: true,
            },
            {
                id: 3,
                type: 'text',
                name: 'Conteúdo complementar para leitura',
                route: '/area/produto/modulo/conteudo',
                finished: false,
            },
            {
                id: 4,
                type: 'text',
                name: 'Templates de Automações para baixar',
                route: '/area/produto/modulo/conteudo',
                finished: false,
            }
        ]
    },
    {
        id: 2,
        name: 'Módulo 2 – Funil de vendas',
        content: [
        ]
    }
]

function stopPropagation(event) {
    event.stopPropagation()
}

</script>

<script type="text/javascript">
import { ref } from 'vue'

import Breadcrumb from "@/components/Breadcrumb.vue"
import Header from "@/components/Header.vue";

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'


export default {
    data() {
        return {
            isOptionsExpanded: false,
            selectedOption: "Publicado",
            options: ["Publicado", "Rascunho"]
        };
    },

    methods: {
        setOption(option) {
            this.selectedOption = option;
            this.isOptionsExpanded = false;
        }
    }
};
</script>

<template>
    <Breadcrumb
        item1Route="/area"
        item1Text="Conteúdos"
        :item2Text="product[0].title" />

    <div v-if="isAdmin" class="lg:flex lg:justify-between pb-4">
        <!-- Header -->
        <Header title="Editar conteúdo"></Header>
        <!-- Action buttons -->
        <div class="mt-5 flex lg:mt-0 lg:ml-4">
            <span class="block">
                <button
                    type="button"
                    @click="openModalAddModule"
                    class="inline-flex items-center rounded-md bg-gray-800 border border-gray-700 py-2 px-3 lg:px-4 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar módulo
                </button>
            </span>
            <span class="ml-1">
                <router-link
                    to="/area/adicionar-aula"
                    class="inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2 px-3 lg:px-4 text-sm font-semibold text-white hover:text-white transition duration-400 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1">
                    <PlusIcon class="-ml-1 mr-1 h-4 w-4 font-bold" aria-hidden="true" />
                    Adicionar aula
                </router-link>
            </span>
        </div>
    </div>

    <div class="w-full pt-6 flex flex-col lg:flex-row gap-4">
        <div class="mx-auto w-full lg:w-auto" :class="coverFormat ? 'lg:max-w-[320px]' : 'lg:max-w-[400px]'">

            <div class="w-full mb-6 mx-auto overflow-hidden max-w-full"
                :style="coverFormat ? 'width: 250px' : 'width: 400px'">
                <div class="text-gray-200 hover:text-indigo-500 transition duration-500 mx-auto overflow-hidden">
                    <div
                        class="relative w-full overflow-hidden border border-pepper-dark-4 hover:border-indigo-800 transition duration-500 rounded-lg"
                        :class="coverFormat ? 'aspect-movie' : 'aspect-video'">

                        <!-- Course image -->
                        <img
                            class="w-full mx-auto h-full object-cover bg-gray-500 bg-opacity-10"
                            :src="product[0].thumbnail">

                        <!-- Não publicado -->
                        <span v-if="!product[0].isPublished" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-red-800 border border-red-500 text-xs rounded-md leading-tight shadow-lg">
                            Não publicado
                        </span>

                        <!-- Concluído -->
                        <span v-if="product[0].userProgress == 100" class="absolute top-0 right-0 m-2 px-2 py-1 font-semibold text-white bg-emerald-500 border border-emerald-700 text-xs rounded-md leading-tight shadow-lg">
                            Concluído
                        </span>

                        <!-- User progress -->
                        <div class="absolute bottom-0 left-0 overflow-hidden flex justify-end items-end w-full h-full rounded-b-md">
                            <div class="pepper-progress w-full h-1 bg-pepper-dark-4">
                                <div class="pepper-progress-current h-1 bg-red-600" :style="'width:' + product[0].userProgress + '%'"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Nome do curso -->
            <span class="block mb-2 font-semibold text-lg text-white">
                {{ product[0].title }}
            </span>

            <!-- Descrição do curso -->
            <span
                v-if="product[0].description && product[0].description !== ''"
                class="block mt-2 mb-4 font-normal text-sm text-gray-300">
                {{ product[0].description }}
            </span>

            <div v-if="modules.length > 0" class="w-full inline-flex items-center gap-x-3">
                <span class="text-sm text-gray-400">
                    {{ modules.length }} módulos
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-1 w-1 text-gray-700" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8" />
                </svg>
                <span class="text-sm text-gray-400">
                    {{ modules.length }} conteúdos
                </span>
            </div>

            <!-- Se o curso tem certificado -->
            <div class="flex items-center gap-x-1 w-full mt-5 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 482" version="1.1" class="w-6 h-5 text-gray-400 -ml-1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g fill="currentColor" transform="translate(64.000000, 64.000000)">
                            <path
                                d="M204.077924,323.727666 L204.470794,324.027506 C204.509151,324.056605 204.547533,324.085673 204.58594,324.114709 L204.077924,323.727666 C204.559548,324.097446 205.045229,324.462204 205.534891,324.821861 C205.590891,324.862993 205.647167,324.904223 205.703497,324.945385 C206.013828,325.172158 206.32554,325.396738 206.63882,325.619257 C206.678965,325.647772 206.719866,325.67677 206.760794,325.705733 C207.037739,325.901714 207.315302,326.095669 207.594065,326.288009 C207.66629,326.337842 207.738753,326.387675 207.811296,326.437399 C208.116038,326.646277 208.421926,326.853044 208.729218,327.05787 C208.804244,327.107879 208.87988,327.158121 208.9556,327.208246 C209.242488,327.398155 209.530319,327.586201 209.819348,327.772549 C209.928285,327.842786 210.037843,327.913069 210.147573,327.983108 C210.404345,328.147002 210.661768,328.309383 210.920115,328.47042 C210.977975,328.506486 211.036098,328.54262 211.094268,328.578685 C211.411477,328.775355 211.729786,328.969831 212.04946,329.162271 C212.12932,329.210346 212.209338,329.258338 212.289442,329.306202 C212.618395,329.502761 212.948858,329.697211 213.280736,329.88949 C213.314282,329.908926 213.347876,329.928359 213.381484,329.947769 C213.697225,330.130123 214.014195,330.310485 214.332424,330.488867 C214.392996,330.52282 214.453745,330.556775 214.514539,330.590657 C214.844557,330.774585 215.17579,330.956315 215.508351,331.1359 C215.580262,331.174733 215.652244,331.213471 215.724288,331.252107 C216.041055,331.421987 216.359065,331.589949 216.678256,331.755953 C216.781919,331.809866 216.88582,331.86363 216.989845,331.917187 C217.266439,332.05959 217.543724,332.200431 217.821877,332.339796 C217.889079,332.373466 217.955851,332.406812 218.022673,332.440072 C218.354667,332.605322 218.688648,332.768839 219.023847,332.930229 C219.106251,332.969904 219.188257,333.009225 219.270336,333.04842 C219.595247,333.203572 219.921598,333.356871 220.249071,333.508155 C220.348269,333.553981 220.447131,333.599422 220.546096,333.644679 C220.863426,333.7898 221.182258,333.933235 221.502123,334.074761 L221.560125,334.100398 L221.560125,334.100398 L221.704641,334.164051 C222.032104,334.307918 222.360643,334.449788 222.690243,334.589645 C222.753871,334.616644 222.81786,334.643704 222.881889,334.670688 C223.609543,334.977341 224.342098,335.274097 225.079628,335.560894 C225.163378,335.59346 225.246821,335.625756 225.330327,335.657923 C225.679551,335.792451 226.030315,335.924908 226.382174,336.055111 C226.464692,336.085647 226.547344,336.116086 226.630057,336.1464 C226.975149,336.272876 227.320965,336.397074 227.667807,336.519094 C227.767069,336.554016 227.86697,336.588952 227.966956,336.623707 C228.263322,336.726724 228.56025,336.828092 228.857911,336.927863 C228.933887,336.953329 229.00966,336.978608 229.08548,337.003783 C229.462648,337.129017 229.841199,337.251759 230.220899,337.371917 C230.276722,337.389582 230.33204,337.407025 230.387382,337.424412 C231.154052,337.665294 231.925726,337.895741 232.701899,338.11548 C232.79306,338.141288 232.884126,338.166904 232.975254,338.192373 C233.321881,338.289251 233.669502,338.384023 234.017999,338.476644 C234.108389,338.500668 234.199102,338.524616 234.289873,338.548418 C234.65671,338.644609 235.024132,338.738325 235.392499,338.829648 C235.49237,338.854408 235.592291,338.878986 235.692281,338.903389 C235.993108,338.976806 236.294783,339.048681 236.597074,339.118949 C236.697737,339.142348 236.798469,339.165569 236.899268,339.188612 C237.294797,339.279028 237.691117,339.366641 238.088462,339.451487 C238.119292,339.458071 238.150617,339.464742 238.181949,339.471395 C238.587059,339.55742 238.992713,339.640469 239.399405,339.720628 C239.466669,339.733886 239.534306,339.747131 239.601971,339.760298 C239.954308,339.828852 240.307072,339.895176 240.660596,339.959322 C240.730841,339.972068 240.801258,339.984753 240.871705,339.997352 C241.251446,340.065265 241.631952,340.130648 242.01331,340.193503 C242.106754,340.208905 242.200089,340.224128 242.293474,340.2392 C242.645705,340.296048 242.998733,340.350752 243.35247,340.403285 L217.290412,401.798731 L178.015539,385.127536 L204.077924,323.727666 Z M307.92405,323.724247 L333.986619,385.126461 L294.711745,401.797656 L268.651131,340.401647 C269.021157,340.346655 269.390406,340.289287 269.758864,340.229561 C269.820837,340.219515 269.882506,340.209449 269.944153,340.199316 C270.332598,340.135473 270.720617,340.068925 271.10773,339.999768 C271.193478,339.98445 271.279572,339.968932 271.36562,339.953286 C271.711925,339.890316 272.057132,339.825328 272.401597,339.758269 C272.463474,339.746222 272.524771,339.734218 272.586045,339.722149 C272.976512,339.645241 273.366771,339.565511 273.756051,339.483128 C273.832667,339.466914 273.90969,339.450502 273.986675,339.433987 C274.366297,339.352543 274.744609,339.26866 275.121966,339.182276 C275.188572,339.167029 275.254973,339.151744 275.321345,339.136381 C275.68024,339.053313 276.038575,338.967907 276.396024,338.880248 C276.451508,338.866642 276.506793,338.853025 276.562057,338.839354 C276.93725,338.746542 277.311546,338.651227 277.684843,338.553447 C277.771879,338.530649 277.858536,338.507803 277.945139,338.484824 C278.298845,338.390976 278.651999,338.294816 279.004234,338.196453 C279.109044,338.167183 279.213131,338.1379 279.317138,338.108425 C279.655201,338.012622 279.993024,337.914605 280.329975,337.814564 C280.369446,337.802845 280.408745,337.791146 280.448032,337.77942 C280.833428,337.664385 281.217751,337.54668 281.600908,337.426345 C281.657756,337.408491 281.714407,337.390634 281.771032,337.372719 C282.153049,337.251859 282.534088,337.128322 282.913941,337.002188 C282.980555,336.980068 283.046949,336.95793 283.113308,336.935712 C283.41801,336.833694 283.722247,336.729898 284.025704,336.624439 C284.134966,336.586467 284.24385,336.548377 284.352633,336.510072 C284.688502,336.391808 285.023652,336.271413 285.357822,336.148988 C285.444965,336.117062 285.531961,336.085029 285.618891,336.052857 C285.982979,335.918113 286.34575,335.781012 286.707332,335.641521 C286.748363,335.625692 286.789075,335.609949 286.829772,335.594177 C287.594706,335.297721 288.354586,334.990437 289.108938,334.672621 C289.175919,334.644402 289.24325,334.615933 289.310538,334.587379 C289.662281,334.438115 290.012534,334.286683 290.361563,334.13298 C290.43655,334.099958 290.511325,334.0669 290.586043,334.033737 C290.911832,333.889143 291.236575,333.742555 291.560227,333.594002 C291.600081,333.57571 291.640019,333.557341 291.67994,333.538943 C292.043374,333.371447 292.405345,333.201512 292.765915,333.02912 C292.821483,333.002553 292.877476,332.975707 292.933435,332.948803 C293.295429,332.774753 293.655404,332.598524 294.013943,332.419847 C294.037891,332.407913 294.062605,332.395582 294.087312,332.38324 C294.427523,332.213283 294.765784,332.041459 295.102737,331.867456 C295.156643,331.839618 295.210243,331.811866 295.26381,331.78406 C295.61949,331.599425 295.973957,331.412226 296.326934,331.222616 C296.366456,331.201386 296.406129,331.180034 296.445783,331.158652 C296.802228,330.966448 297.156896,330.771924 297.510019,330.574965 C297.542819,330.55667 297.575872,330.538206 297.608911,330.51972 C298.313716,330.125374 299.012103,329.721466 299.704143,329.308039 C299.777928,329.263959 299.851555,329.219823 299.92511,329.175579 C300.237575,328.987628 300.548767,328.797714 300.858639,328.605872 C300.939945,328.555536 301.021023,328.505151 301.102011,328.454635 C301.374336,328.284771 301.645744,328.113345 301.916112,327.940437 L302.063439,327.846004 L302.063439,327.846004 L302.135847,327.799436 C302.442862,327.601766 302.748526,327.40218 303.052824,327.200696 C303.119072,327.156831 303.184706,327.113241 303.250276,327.069563 C303.573022,326.854577 303.894667,326.637145 304.214739,326.417587 C304.259459,326.38691 304.304197,326.356159 304.348905,326.325366 C304.639295,326.125353 304.928224,325.923702 305.215839,325.720316 C305.266883,325.684221 305.318077,325.647935 305.369229,325.611595 C305.691146,325.382889 306.01133,325.152063 306.329838,324.919083 C306.37004,324.889676 306.410356,324.860132 306.450645,324.830553 C306.754345,324.607587 307.056287,324.38283 307.356682,324.156134 C307.430983,324.100062 307.505056,324.043972 307.579034,323.987765 L307.92405,323.724247 L307.92405,323.724247 Z M255.996445,192 C291.350045,192 320,220.652493 320,255.998794 C320,291.348311 291.349029,320 255.996445,320 C220.649955,320 192,291.348311 192,255.998794 C192,220.652493 220.648939,192 255.996445,192 Z M384,-2.84217094e-14 L384,298.666667 L329.918518,298.666352 C330.118232,298.321076 330.315597,297.974271 330.510589,297.625958 C330.538069,297.576869 330.565268,297.528173 330.592419,297.479447 C330.780396,297.142116 330.96646,296.802802 331.150276,296.462095 C331.181878,296.403518 331.213066,296.345547 331.24419,296.287536 C331.430968,295.939406 331.615659,295.589329 331.797978,295.237823 C331.820792,295.193837 331.843324,295.150304 331.865818,295.10675 C332.238104,294.385942 332.600571,293.658828 332.952876,292.925904 C332.980453,292.868535 333.008087,292.81088 333.035658,292.75319 C333.384164,292.023957 333.722508,291.289253 334.050632,290.549009 C334.074555,290.495037 334.098316,290.441281 334.122023,290.387496 C334.27858,290.032314 334.432855,289.675698 334.584757,289.317831 C334.613052,289.25117 334.641114,289.184825 334.669093,289.118436 C334.815718,288.77054 334.960208,288.421206 335.102436,288.070712 C335.131599,287.998846 335.160541,287.927243 335.189388,287.855591 C335.475885,287.144002 335.753193,286.427326 336.021029,285.706046 C336.065992,285.584961 336.110752,285.463574 336.155243,285.342057 C336.279257,285.003339 336.401158,284.663697 336.520958,284.323066 C336.547783,284.246791 336.574375,284.170836 336.600861,284.094833 C337.014922,282.906708 337.403549,281.706303 337.76598,280.494582 C337.783524,280.435927 337.800994,280.377289 337.818402,280.318624 C337.931132,279.938733 338.041265,279.557817 338.148805,279.175815 C338.167832,279.108229 338.186866,279.040292 338.205818,278.972321 C338.300483,278.632805 338.393017,278.292753 338.483494,277.951864 C338.500695,277.887053 338.5178,277.822297 338.534831,277.75751 C338.633713,277.381357 338.730127,277.004047 338.824018,276.625739 C338.842602,276.550858 338.861108,276.475855 338.879515,276.400814 C338.975295,276.010323 339.068322,275.61906 339.158646,275.226764 C339.171437,275.171207 339.184182,275.115599 339.196872,275.059969 C339.380348,274.255661 339.55244,273.447137 339.712996,272.634464 C339.724153,272.577994 339.735359,272.520967 339.746508,272.463921 C339.824317,272.065785 339.899262,271.667189 339.971425,271.267626 C339.983218,271.202327 339.994877,271.13734 340.006462,271.072328 C340.153334,270.248134 340.288427,269.419492 340.411499,268.586932 C340.419317,268.534049 340.427102,268.481036 340.434839,268.428006 C340.49366,268.02484 340.549651,267.620844 340.602804,267.215954 C340.611544,267.149376 340.620215,267.082721 340.628808,267.016042 C340.732891,266.208413 340.825673,265.397379 340.907006,264.582971 L340.927081,264.379505 L340.927081,264.379505 L340.941844,264.226599 C340.977076,263.858262 341.009967,263.489241 341.040501,263.119551 C341.046309,263.049237 341.05206,262.97855 341.057724,262.90784 C341.163916,261.582167 341.239812,260.248131 341.284733,258.906239 C341.286707,258.84726 341.2886,258.788927 341.290435,258.730579 C341.318956,257.823768 341.333333,256.91276 341.333333,255.998392 L341.333333,42.6666667 L42.6666667,42.6666667 L42.6666667,256 L170.666,256 L170.678097,257.409664 C170.685015,257.836427 170.695065,258.262427 170.708224,258.687643 C170.710536,258.762327 170.712942,258.83697 170.715445,258.911589 C170.759616,260.228812 170.833652,261.538718 170.936889,262.840395 C170.943782,262.927296 170.950759,263.013597 170.957863,263.099862 C170.988489,263.471749 171.021565,263.843653 171.057019,264.214862 C171.068106,264.330951 171.079426,264.446978 171.090979,264.562936 C171.129055,264.945118 171.16964,265.326449 171.212727,265.70702 C171.218017,265.753747 171.223343,265.800448 171.228707,265.847137 C171.325668,266.691103 171.434942,267.531344 171.556342,268.367654 C171.56827,268.449823 171.580244,268.531473 171.592334,268.613087 C171.780314,269.882104 171.996274,271.142262 172.23953,272.39266 C172.256084,272.47775 172.272688,272.562408 172.289417,272.647021 C172.365389,273.031288 172.444029,273.41504 172.525234,273.797844 C172.537146,273.853997 172.549235,273.910702 172.56138,273.967386 C172.834361,275.241354 173.135639,276.504264 173.464629,277.755932 C173.477852,277.806243 173.491231,277.856952 173.504655,277.907642 C173.704262,278.661369 173.913825,279.410673 174.13328,280.155736 C174.174338,280.295127 174.215633,280.434006 174.257272,280.572737 C174.349975,280.881609 174.444452,281.189971 174.540623,281.497585 C174.579556,281.622114 174.618735,281.746425 174.658192,281.870612 C174.894032,282.612911 175.139701,283.350663 175.395089,284.083859 C175.422255,284.161852 175.449531,284.239791 175.476917,284.317679 C175.600503,284.669168 175.726264,285.019437 175.854242,285.368636 C175.890332,285.46711 175.92647,285.565152 175.962782,285.663108 C176.088301,286.001713 176.216041,286.339653 176.345856,286.676561 C176.376952,286.757263 176.408079,286.837681 176.439324,286.918039 C176.545903,287.192145 176.653964,287.465829 176.763394,287.738816 L176.862971,287.986095 L176.862971,287.986095 L176.911009,288.104591 C177.036816,288.414254 177.16439,288.723011 177.293716,289.030849 C177.337511,289.135096 177.381569,289.239382 177.425828,289.343562 C177.740428,290.084092 178.065125,290.819118 178.399804,291.54861 C178.420751,291.594268 178.44157,291.639539 178.462427,291.684789 C178.630527,292.049499 178.801307,292.4132 178.974568,292.775488 C178.995914,292.820122 179.017,292.864114 179.038122,292.908086 C179.210513,293.266965 179.385656,293.625088 179.563221,293.981791 C179.586251,294.028053 179.609214,294.074078 179.632218,294.12008 C179.993327,294.842205 180.364472,295.558671 180.745383,296.269117 C180.7805,296.334615 180.815973,296.400568 180.85153,296.466469 C181.034638,296.805836 181.21976,297.14343 181.407089,297.479626 C181.435633,297.530854 181.464329,297.582228 181.493076,297.63357 C181.686733,297.979435 181.882632,298.323647 182.080846,298.666352 L0,298.666667 L0,-2.84217094e-14 L384,-2.84217094e-14 Z M255.998815,234.666667 C244.216313,234.666667 234.666667,244.217498 234.666667,255.999598 C234.666667,267.78277 244.216652,277.333333 255.998815,277.333333 C267.78301,277.333333 277.333333,267.78277 277.333333,255.999598 C277.333333,244.217498 267.783348,234.666667 255.998815,234.666667 Z M85.3333333,85.3333333 L298.666667,85.3333333 L298.666667,128 L85.3333333,128 L85.3333333,85.3333333 Z M85.3333333,170.666667 L170.666667,170.666667 L170.666667,213.333333 L85.3333333,213.333333 L85.3333333,170.666667 Z">
                            </path>
                        </g>
                    </g>
                </svg>
                <span v-if="!courseFinished" class="text-sm text-gray-400">
                    Finalize o curso para liberar seu certificado.
                </span>

                <router-link to="/" v-if="courseFinished" class="text-sm text-indigo-400 hover:text-indigo-400 font-medium">
                    Baixar meu certificado de conclusão
                </router-link>
            </div>

            <div v-if="isAdmin" class="mt-6">
                <span class="block text-sm text-gray-300 font-semibold mb-3">
                    Gerenciar este curso:
                </span>
                <div
                    class="flex flex-row items-center gap-x-2">
                    <button
                        type="button"
                        @click=""
                        class="inline-flex items-center rounded-md bg-red-600 border border-red-600 py-2 px-3 lg:px-4 text-sm font-semibold text-white hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3 h-3 mr-2 text-red-200" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                        </svg>
                        Editar curso
                    </button>
                    <button
                        type="button"
                        @click=""
                        class="inline-flex items-center rounded-md bg-gray-800 border border-gray-700 py-2 px-3 lg:px-4 text-sm font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3 h-3 mr-2 -ml-1 text-gray-400" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
                        </svg>
                        Excluir
                    </button>
                </div>
            </div>

            <div v-if="isAdmin" class="mt-6 mb-4 gap-y-2">
                <span class="block text-sm text-gray-300 font-semibold mb-2">
                    Status do curso (visibilidade):
                </span>
                <div class="relative w-full z-10">
                    <button
                        class="flex items-center px-3 py-2.5 bg-pepper-dark-3 w-full border border-pepper-dark-5 rounded-lg"
                        @click="isOptionsExpanded = !isOptionsExpanded"
                        @blur="isOptionsExpanded = false">
                        <svg v-if="selectedOption == 'Rascunho'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-500 h-4 w-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        <svg v-if="selectedOption == 'Publicado'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-emerald-400 h-4 w-4 mr-2">
                            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                        </svg>
                        <span class="text-sm text-medium text-gray-100">{{ selectedOption }}</span>
                        <ChevronDownIcon class="h-5 w-5 text-gray-400 ml-auto" aria-hidden="true" />
                    </button>
                    <transition
                        enter-active-class="transform transition duration-500 ease-custom"
                        enter-class="-translate-y-1/2 scale-y-0 opacity-0"
                        enter-to-class="translate-y-0 scale-y-100 opacity-100"
                        leave-active-class="transform transition duration-300 ease-custom"
                        leave-class="translate-y-0 scale-y-100 opacity-100"
                        leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
                        <ul v-show="isOptionsExpanded" class="absolute left-0 right-0 mb-4 bg-pepper-dark-3 border border-pepper-dark-5 rounded-lg overflow-hidden">
                            <li
                                v-for="(option, index) in options"
                                :key="index"
                                class="px-3 py-2 transition-colors text-sm cursor-pointer border-b border-pepper-dark-5 text-gray-200 text-medium duration-300 hover:bg-gray-800 hover:text-white"
                                @mousedown.prevent="setOption(option)">
                                {{ option }}
                            </li>
                        </ul>
                    </transition>
                </div>

            </div>
        </div>

        <div class="mx-auto w-full lg:w-full lg:flex-1">

            <!-- Empty state -->
            <div v-if="modules.length < 1" class="bg-pepper-dark-2 rounded-md p-5 w-full border border-pepper-dark-3 mt-6 lg:mt-0 mb-2">
                <div class="flex space-x-2 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none fill-none text-red-500 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                    <div class="leading-tight text-sm text-gray-200 font-medium">Adicione um módulo para incluir aulas.</div>
                </div>
            </div>

            <div v-for="mod in modules" class="mx-auto w-full">
                <Disclosure v-slot="{ open }" defaultOpen="true">
                    <DisclosureButton
                        class="flex w-full justify-between items-center rounded-lg bg-pepper-dark-3 px-4 py-3 text-left border border-pepper-dark-4 hover:border-gray-600 hover:cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                        <span class="inline-flex items-center justify-center gap-x-2">
                            <ChevronUpIcon
                                :class="open ? '' : 'rotate-180 transform'"
                                class="h-5 w-5 text-bold text-indigo-500" />
                            <span class="text-gray-200 text-sm lg:text-base font-medium">
                                {{ mod.name }}
                            </span>
                        </span>
                        <div v-if="isAdmin" class="inline-flex">
                            <Menu as="div" class="relative z-5">
                                <div class="inline-flex flex-row justify-center items-center h-full">
                                    <MenuButton @click="stopPropagation" class="flex p-0 rounded-md bg-pepper-dark-5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                        </svg>
                                    </MenuButton>
                                </div>
                                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem v-slot="{ active }">
                                        <a href="javascript:void(0);" :class="[active ? 'bg-gray-100' : '', 'flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700']">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-2.5 h-2.5 -ml-1" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"></path>
                                            </svg>
                                            <span>Mover para cima</span>
                                        </a>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <a href="javascript:void(0);" :class="[active ? 'bg-gray-100' : '', 'flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700']">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-2.5 h-2.5 -ml-1" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path>
                                            </svg>
                                            <span>Mover para baixo</span>
                                        </a>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <router-link
                                            to=""
                                            @click="stopPropagation"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-gray-700']">
                                            Editar módulo
                                        </router-link>
                                        </MenuItem>
                                        <MenuItem v-slot="{ active }">
                                        <a href="javascript:void(0);" @click="stopPropagation" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-red-500']">
                                            Excluir módulo
                                        </a>
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </DisclosureButton>

                    <div class="content-wrapper">
                        <template v-if="mod.content.length < 1">
                            <transition name="slide-fade">
                                <DisclosurePanel class="px-2 py-2 text-sm text-gray-300 text-medium">
                                    <div class="w-full inline-flex justify-center items-center gap-x-2">
                                        <div class="w-6 inline-flex items-center justify-center -ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-400">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                            </svg>
                                        </div>
                                        Nenhum conteúdo cadastrado neste módulo.
                                    </div>
                                </DisclosurePanel>
                            </transition>
                        </template>

                        <template v-for="content in mod.content">
                            <transition name="slide-fade">
                                <DisclosurePanel class="px-2 py-2">
                                    <div class="w-full flex items-center justify-between">
                                        <router-link
                                            to="/area/produto/modulo/conteudo"
                                            class="inline-flex justify-start items-center gap-x-2">
                                            <div class="w-6 inline-flex items-center justify-center">
                                                <svg
                                                    v-if="(content.type == 'video' && !content.finished)"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-indigo-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                                </svg>
                                                <svg
                                                    v-if="(content.type == 'text' && !content.finished)"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-indigo-400">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                                </svg>
                                                <svg
                                                    v-if="(content.finished)"
                                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-3.5 h-3.5 text-green-400" viewBox="0 0 16 16">
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                                </svg>
                                            </div>

                                            <span class="text-sm text-gray-300 text-medium">
                                                {{ content.name }}
                                            </span>
                                        </router-link>

                                        <Menu v-if="isAdmin" as="div" class="relative ml-2 mr-2 z-5">
                                            <div class="inline-flex flex-row justify-center items-center h-full">
                                                <MenuButton @click="stopPropagation" class="flex p-0 rounded-md bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-gray-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                                    </svg>
                                                </MenuButton>
                                            </div>
                                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <MenuItem v-slot="{ active }">
                                                    <a href="javascript:void(0);" :class="[active ? 'bg-gray-100' : '', 'flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700']">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-2.5 h-2.5 -ml-1" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"></path>
                                                        </svg>
                                                        <span>Mover para cima</span>
                                                    </a>
                                                    </MenuItem>
                                                    <MenuItem v-slot="{ active }">
                                                    <a href="javascript:void(0);" :class="[active ? 'bg-gray-100' : '', 'flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700']">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="1.5" stroke="currentColor" class="w-2.5 h-2.5 -ml-1" viewBox="0 0 24 24">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"></path>
                                                        </svg>
                                                        <span>Mover para baixo</span>
                                                    </a>
                                                    </MenuItem>
                                                    <MenuItem v-slot="{ active }">
                                                    <a href="javascript:void(0);" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-gray-700']">
                                                        Editar
                                                    </a>
                                                    </MenuItem>
                                                    <MenuItem v-slot="{ active }">
                                                    <a href="javascript:void(0);" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-red-500']">
                                                        Excluir aula
                                                    </a>
                                                    </MenuItem>
                                                </MenuItems>
                                            </transition>
                                        </Menu>

                                    </div>
                                </DisclosurePanel>
                            </transition>
                        </template>
                    </div>
                </Disclosure>
            </div>
        </div>
    </div>

    <!-- Modal Adicionar módulo -->
    <TransitionRoot appear :show="isOpenModalAddModule" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-50">
            <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100"
                leave-to="opacity-0">
                <div class="fixed inset-0 bg-black bg-opacity-50"></div>
            </TransitionChild>
            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel class="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all overflow-visible">
                            <DialogTitle as="h3" class="text-lg font-bold leading-6 text-gray-800">
                                Adicionar novo módulo
                            </DialogTitle>
                            <div class="mt-6">
                                <label for="" class="block mb-2 text-sm font-medium text-gray-700">
                                    Nome deste módulo:
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Digite aqui"
                                    class="border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-3 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]" />
                            </div>
                            <div class="mt-4 flex items-center justify-end">
                                <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300"
                                    @click="closeModal">
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    class="ml-1 inline-flex justify-center rounded-md border border-transparent bg-pepper-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    @click="closeModal">
                                    Adicionar
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

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
                                Curso adicionado com sucesso!
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
.content-wrapper {
    padding-bottom: .5rem;
}

.content-wrapper>div:first-child {
    padding-top: 1rem;
}

.content-wrapper>div:last-child {
    padding-bottom: 1.25rem;
}
</style>