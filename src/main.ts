import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import Fan from './components/Fan.vue'
import Fan2 from './components/Fan2.vue'

import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Fan},
        {path: '/xxx', component: Fan2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
