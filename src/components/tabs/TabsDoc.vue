<template>
  <Tabs v-model:selectName="selectName">
    <Tab name="a" title="tab1">内容一</Tab>
    <Tab name="b" title="tab222222222">内容二</Tab>
  </Tabs>
</template>

<script>
import Tabs from '../../lib/Tabs.vue'
import Tab from '../../lib/Tab.vue'
import {ref} from "vue";

export default {
  name: "TabsDoc",
  components:{
    Tabs,
    Tab
  },
  setup(){
    const selectName = ref('a')
    return {selectName}
  }
}
</script>

<style scoped lang="scss">

</style>