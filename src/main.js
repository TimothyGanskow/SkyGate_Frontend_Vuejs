import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../src/interceptors/axios"

const app = createApp(App)
app.use(BootstrapIconsPlugin);
app.use(router)

app.mount('#app')
