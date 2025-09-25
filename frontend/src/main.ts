import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '~/style.scss'
import { css } from '~/font/MapleMono-CN-Thin.ttf?subsets'
// import { css } from '~/font/MapleMono-CN-Light.ttf?subsets'

document.body.style.fontFamily = `"${css.family}"`
document.body.style.fontWeight = css.weight || 'normal'
document.body.style.fontStyle = css.style || 'normal'
document.body.style.fontSize = '14px'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
