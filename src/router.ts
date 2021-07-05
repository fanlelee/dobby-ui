import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import Switch from './components/SwitchDoc.vue'
import Button from './components/ButtonDoc.vue'
import DocDefault from './components/DocDefault.vue'
import {createWebHashHistory, createRouter} from 'vue-router'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path:'',component:DocDefault},
                {path: 'switch', component: Switch},
                {path: 'button', component: Button}]
        }
    ]
})
