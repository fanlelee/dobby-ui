import './index.scss'
import './lib/dobby.scss'
import {createApp} from 'vue'
import App from './App.vue'
import {router} from './router'
import 'github-markdown-css'
import Article from './components/Article.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Article',Article)
