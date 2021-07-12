<template>
  <Tabs>
    <Tab title="tab1">内容一</Tab>
    <Tab title="tab2">内容二</Tab>
  </Tabs>
</template>

<script>
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'

export default {
  name: "TabsDoc",
  components:{
    Tabs,
    Tab
  },

}
</script>

<style scoped lang="scss">

</style>