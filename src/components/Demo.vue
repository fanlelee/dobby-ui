<template>
  <div class="demo">
    <h3 class="title">{{ componentDemo.__sourceCodeTitle }}</h3>
    <div class="component"><component :is="componentDemo"></component></div>
    <pre v-if="coreCode" class="core-code">{{ coreCode }}</pre>
    <div v-if="description" class="description">{{description}}</div>
    <div v-if="codeVisible"><Button @click="toggle" size="small">隐藏代码</Button></div>
    <div v-else><Button @click="toggle" size="small">显示完整代码</Button></div>
    <pre v-if="codeVisible &&componentDemo2" class="all-code language-html" v-html="Prism.highlight(componentDemo2.__sourceCode,Prism.languages.html, 'html')"/>
    <pre v-else-if="codeVisible" class="all-code language-html" v-html="Prism.highlight(componentDemo.__sourceCode,Prism.languages.html, 'html')"/>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
import {ref} from 'vue'
const Prism = (window as any).Prism
export default {
  name: "Demo",
  components: {Button},
  props:{
    componentDemo:Object,
    componentDemo2:Object,
    coreCode:String,
    description:String,
  },
  setup() {
    const codeVisible = ref<boolean>(false)
    const toggle = ()=>{
      codeVisible.value = !codeVisible.value
    }
    return { Prism,toggle,codeVisible}
  }

}
</script>
<style lang="scss">
.demo {
  border: 1px solid #e2e6eb;
  margin-bottom: 16px;
  > *{
    padding: 16px;
  }
  .title{
    border-bottom: 1px solid #e2e6eb;
  }
  >.description{
    border: 1px solid #e2e6eb;
    margin: 8px;
  }
  .core-code{
    background-color: #cad3de;
    width: 100%;
    overflow-x: scroll;
    font-size: 13px;
    padding-left: 0;
  }
}
</style>