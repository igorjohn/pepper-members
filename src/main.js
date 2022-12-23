import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'

import './styles.css'

const app = createApp(App)

app.use(router);
app.use(VueRouter);
app.mount('#app');