import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap.icons.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createApp(App)
    .use (createPinia())
    .use (Toast)
    .mount('#app')
