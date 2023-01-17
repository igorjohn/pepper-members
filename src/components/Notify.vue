<script>
export default {
    name: "Notify",

    data() {
        return {
            message: "",
            notifyType: 'information',
            showNotify: false,
        }
    },

    props: {
        type: String,
        notifyMessage: String,
        timeout: { type: Number, required: true }
    },

    emits: [
        'hideNotify'
    ],

    created() {
        switch(this.type) {
            case 'success':
                this.notifyType = 'success';
                break;
            case 'error':
                this.notifyType = 'error';
                break;
            case 'info':
                this.notifyType = 'info';
                break;
            
            default:
                'info'
        }

        this.message = this.notifyMessage
        this.showNotify = true;
        setTimeout(() => {
            this.showNotify = false;
            this.$emit('hideNotify');
        }, this.timeout);
    }
}
</script>

<template>
    <transition appear name="slide-fade">
        <div v-if="showNotify" class="float-right min-w-full fixed bottom-3 right-0 md:right-3">
            <!-- Success Notify -->
            <div v-if="notifyType == 'success'" class="flex flex-col space-y-3 w-100 md:w-1/2 xl:w-1/3 mx-auto md:mx-0 md:ml-auto shadow-lg" style="max-width:93vw;">
                <div class="bg-green-100 border border-lime-800 p-5 w-full rounded-md">
                    <div class="flex justify-between">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-green-500 h-4 w-4">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
                            </svg>
                            <div class="flex-1 leading-tight text-sm text-green-700 font-medium">
                                {{ this.notifyMessage }}
                            </div>
                        </div>
                        <svg @click="showNotify = !showNotify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-green-600 h-3 w-3 cursor-pointer">
                            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Error Notify -->
            <div v-if="notifyType == 'error'" class="flex flex-col space-y-3 w-100 md:w-1/2 xl:w-1/3 mx-auto md:mx-0 md:ml-auto shadow-lg" style="max-width:93vw;">
                <div class="bg-red-100 border border-lime-800 p-5 w-full rounded-md">
                    <div class="flex justify-between">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-red-500 h-4 w-4">
                                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
                            </svg>
                            <div class="flex-1 leading-tight text-sm text-red-700 font-medium">
                                {{ this.notifyMessage }}
                            </div>
                        </div>
                        <svg @click="showNotify = !showNotify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-red-600 h-3 w-3 cursor-pointer">
                            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Info Notify -->
            <div v-if="notifyType == 'info'" class="flex flex-col space-y-3 w-100 md:w-1/2 xl:w-1/3 mx-auto md:mx-0 md:ml-auto shadow-lg" style="max-width:93vw;">
                <div class="bg-blue-100 border border-lime-800 p-5 w-full rounded-md">
                    <div class="flex justify-between">
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none text-blue-500 h-5 w-5" stroke="currentColor" strokeWidth="1.5" fill="none">
                                <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                            </svg>
                            <div class="flex-1 leading-tight text-sm text-blue-700 font-medium">
                                {{ this.notifyMessage }}
                            </div>
                        </div>
                        <svg @click="showNotify = !showNotify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="flex-none fill-current text-blue-600 h-3 w-3 cursor-pointer">
                            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style>

</style>