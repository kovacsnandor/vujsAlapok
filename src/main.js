import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Bootstrap: css, js
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//Icons: css
import "bootstrap-icons/font/bootstrap-icons.min.css"

//Globális komponensek importja
import KomponensG from "./components/KomponensG.vue"
import KomponensAlert from "./components/KomponensAlert.vue"

const app = createApp(App)
//Globális komponensek bejegyzése az alkalmazásba
app.component("KomponensG", KomponensG);
app.component("KomponensAlert", KomponensAlert);


app.use(createPinia())
app.use(router)

app.mount('#app')
