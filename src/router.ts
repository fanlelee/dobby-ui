import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import Install from './view/Install.vue'
import Introduce from './view/Introduce.vue'
import GetStarted from './view/GetStarted.vue'
import DocDefault from './components/DocDefault.vue'
import Switch from './components/SwitchDoc.vue'
import Button from './components/ButtonDoc.vue'
import Dialog from './components/DialogDoc.vue'
import Tabs from './components/TabsDoc.vue'
// import Article from './components/Article.vue'
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
                {path: 'button', component: Button},
                {path: 'dialog', component: Dialog},
                {path: 'tabs', component: Tabs},
                // {path:'article', component: Article}
                {path: 'install', component: Install},
                {path: 'introduce', component: Introduce},
                {path: 'get-started', component: GetStarted},
            ]
        }
    ]
})
