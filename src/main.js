import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

import './styles.css'

const app = createApp(App)

app.config.globalProperties.pepper = {

    darkMode: {
        header: {
            buttonsContainer: 'flex mt-5 lg:mt-0 lg:ml-4'
        },
        form: {
            input: 'border-zinc-700 text-gray-300 text-sm bg-zinc-900 disabled:bg-zinc-900 placeholder-zinc-500 focus:border-indigo-600 focus:ring-0 w-full rounded-md py-2.5 px-3 font-medium outline-none transition duration-500 disabled:border-zinc-700',
            inputWhiteBg: 'border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 w-full rounded-md py-2.5 px-3 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]',
            label: 'block mb-2 text-sm font-medium text-gray-400',
            labelWhiteBg: 'block mb-2 text-sm font-medium text-gray-700',
            select: 'border-zinc-700 text-gray-300 text-sm bg-zinc-900 placeholder-zinc-500 focus:border-indigo-600 focus:ring-0 w-full rounded-md py-2.5 px-3 font-medium outline-none transition duration-500 disabled:cursor-default disabled:bg-zinc-900',
            inputRadioWhiteBg: 'w-3.5 h-3.5 border-gray-500 focus:border-indigo-600 focus:ring-indigo-300 focus:ring-1 transition duration-300',
        },
        card: {
            container: 'overflow-hidden rounded-md bg-pepper-dark-3 border border-pepper-dark-4',
            footer: 'bg-pepper-dark-4 px-4 py-3 md:px-6 lg:py-4 flex items-center justify-end gap-x-1',
        },
        table: {
            th: 'px-5 py-3 border-b-2 border-pepper-dark-5 bg-pepper-dark-4 text-left text-xs font-semibold text-gray-200 uppercase tracking-wider',
            td: 'px-4 py-3 border-b border-pepper-dark-5 bg-pepper-dark-3 text-sm text-gray-400',
            tdNoWrap: 'px-4 py-3 border-b border-pepper-dark-5 bg-pepper-dark-3 text-sm text-gray-400 whitespace-no-wrap',
        },
        button: {
            login: 'flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2.5 px-4 text-sm font-bold text-white hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-0',
            headerPrimary: 'inline-flex justify-center items-center rounded-md border border-red-600 bg-red-600 hover:bg-red-700 hover:text-white py-2 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1 transition duration-400',
            headerSecondary: 'inline-flex items-center rounded-md bg-gray-900 border border-gray-700 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1',
            secondaryOutline: 'flex items-center justify-center rounded-md border border-zinc-700 bg-pepper-dark-4 py-2 px-3 text-sm font-semibold leading-4 text-indigo-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500',
            primary: 'inline-flex justify-center items-center rounded-md border border-transparent bg-red-600 hover:bg-red-700 py-2.5 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-1',
            secondary: 'inline-flex justify-center items-center rounded-md border border-transparent bg-gray-700 hover:bg-gray-800 py-2.5 px-4 text-sm font-semibold text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-1',
            successButton: 'inline-flex justify-center items-center rounded-md border border-transparent bg-green-600 hover:bg-green-700 py-2.5 px-4 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-1',
            group: {
                outline: {
                    first: 'inline-flex items-center justify-center bg-transparent text-xs text-red-500 hover:bg-red-600 hover:text-white border border-r-0 border-red-600 rounded-r-none rounded-l-md px-3 py-1.5 mx-0 outline-none focus:shadow-outline',
                    second: 'inline-flex items-center justify-center bg-transparent text-xs text-red-500 hover:bg-red-600 hover:text-white border border-red-600 rounded-l-none rounded-r-md px-3 py-1.5 mx-0 outline-none focus:shadow-outline'
                },
            },
            modal: {
                primary: 'inline-flex justify-center rounded-md border border-transparent bg-pepper-primary px-4 py-2 text-sm font-medium text-white hover:bg-red-700',
                secondary: 'inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300',
            }
        },
        listbox: {
            whiteBg: {
                button: 'min-h-42 border border-gray-300 text-gray-700 text-sm bg-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none w-full rounded-md py-2.5 px-3 font-medium outline-none',
                buttonInnerSpan: 'block truncate text-left text-sm font-medium text-gray-700 pr-6',
                optionLi: 'block font-medium truncate text-sm',
            },
            darkBg: {
                button: 'min-h-42 border border-zinc-700 text-gray-300 text-sm bg-zinc-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none w-full rounded-md py-2.5 px-3 font-medium outline-none',
                buttonInnerSpan: 'block truncate text-left text-sm font-medium text-gray-200 pr-6',
                optionLi: 'block font-medium truncate text-sm',
            }
        },
        pill: {
            success: 'inline-block px-2 py-1 font-semibold text-gray-100 bg-green-600 text-xs rounded-full leading-tight',
            danger: 'inline-block px-2 py-1 font-semibold text-gray-100 bg-red-700 text-xs rounded-full leading-tight',
        },
        svgIcon: {
            button: {
                small: 'w-3 h-3 -ml-1 mr-2 text-white',
            }
        },
        text: {
            integration: {
                label: 'text-gray-200 font-semibold',
            }
        }
    }
};

app.use(router);
app.use(VueRouter);
app.mount('#app');