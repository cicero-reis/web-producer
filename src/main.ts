import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { key, store } from './store'

import "bootstrap/dist/css/bootstrap.min.css"

createApp(App).use(store, key).use(router).mount('#app')

import "bootstrap/dist/js/bootstrap.js"