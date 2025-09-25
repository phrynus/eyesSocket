import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '~/style.scss'
import { css } from '~/font/MapleMono-CN-Thin.ttf?subsets'
// import { css } from '~/font/MapleMono-CN-Light.ttf?subsets'

document.body.style.fontFamily = `"${css.family}" , sans-serif`
console.log(`"${css.family}" , sans-serif !important`)

document.body.style.fontWeight = css.weight || 'normal'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
