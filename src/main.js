import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mitt from 'mitt'

//Bootstrap: css, js
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//Icons: css
import "bootstrap-icons/font/bootstrap-icons.min.css"

const emitter = mitt()
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.globalProperties.emitter = emitter
app.mount('#app')
