import Home from './view/Home.vue'
import Doc from './view/Doc.vue'
import Switch from './components/switch/SwitchDoc.vue'
import Button from './components/button/ButtonDoc.vue'
import Dialog from './components/dialog/DialogDoc.vue'
import Tabs from './components/tabs/TabsDoc.vue'
import Article from './components/Article.vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import {h} from "vue"

// @ts-ignore
import introduce from './markdown/introduce.md'
// @ts-ignore
import install from './markdown/install.md'
// @ts-ignore
import getStarted from './markdown/get-started.md'

const md = (mdString,key)=>{
    return h(Article,{content:mdString,key})
}
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path:'',redirect:'/doc/introduce'},
                {path: 'switch', component: Switch},
                {path: 'button', component: Button},
                {path: 'dialog', component: Dialog},
                {path: 'tabs', component: Tabs},
                {path: 'install', component: md(install,1)},
                {path: 'introduce', component: md(introduce,2)},
                {path: 'get-started', component: md(getStarted,3)},
            ]
        }
    ]
})
