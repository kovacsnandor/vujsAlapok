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

# Globális és lokális komponens
## Globális komponens
Ha egy komponenst sok oldalon szeretnénk használni, ésrdemes goblális komponensként dektlarálni.
Ezt a main.js-ben tehetjük meg, és akkor bármely Weboldalon elérhető anélül, hogy importálni kéne.
```js
//main.js
//...
//Globális komponensek importja
import KomponensG from "./components/KomponensG.vue"

const app = createApp(App)
//Globális komponensek bejegyzése az alkalmazásba
app.component("KomponensG", KomponensG);

//...
```

## Lokális komponens
Ha azt akarjuk, hogy egy komponens csak azon az oldalon legyen elérhető, ahol használjuk, saját kódjában kell importálni és bejegyezni.
```vue
<template>
    <!-- Ez egy lokális komponens -->
    <KomponensL/>
</template>

<script>
import KomponensL from '@/components/KomponensL.vue';
export default {
  components: {
    KomponensL
  }
}
</script>
```
