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

# Direktívák (directives)
branch: 01_directives
Olyan vue html attrivútumok, amik v- előtaggal kezdődnek.
v-bind, v-if, v-show, v-for, v-on, v-model

## v-bind, v-model