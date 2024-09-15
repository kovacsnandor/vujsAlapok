# Környezet telepítése
vite: `npm create vue@latest`
bootstrap: `npm i bootstrap@5.3.3`
icons: `npm i bootstrap-icons`
node_moduls: `npm install`
`main.js`-ben (import bootstrap, icons)
```js
//main.js
//Bootstrap: css, js
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//Icons: css
import "bootstrap-icons/font/bootstrap-icons.min.css"
```

# Gyerek - Gyerek kommunikáció
## Telepítés előkészítés
1. Mitt eseménykibocsájtó csomag telepítése: `npm i mitt`

2. Mitt csomag importálása (`main.js`):

```js
//main.js
//Integrálja a mitt eseménykibocsátó könyvtárat a Vue 3 alkalmazással
//egy emitter példány létrehozásával, 
//amely globálisan elérhetővé teszi a Vue alkalmazáspéldányon keresztül.


import { createApp } from 'vue'
//mitt import
import mitt from 'mitt'
import App from './App.vue'

//emittet objektum (példány) létrehozása
const emitter = mitt()

const app = createApp(App)

//Emitter bejegyzése az app.config-ba
app.config.globalProperties.emitter = emitter

app.mount('#app')

```