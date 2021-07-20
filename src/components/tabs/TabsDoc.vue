<template>
  <h1>Tabs组件</h1>
  <Demo :component-demo="Tabs1" :core-code="coreCode1" description=""/>
</template>

<script lang="ts">
import Demo from "../Demo.vue";
import Tabs1 from './Tabs1.demo.vue'
export default {
  name: "TabsDoc",
  components:{
    Demo
  },
  setup(){
    const coreCode1 = '  <Tabs v-model:selectName="selectName">\n' +
        '    <Tab name="a" title="tab1">内容一</Tab>\n' +
        '    <Tab name="b" title="tab2">内容二</Tab>\n' +
        '  </Tabs>'
    return {Tabs1,coreCode1}
  }
}
</script>
