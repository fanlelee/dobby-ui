<template>
  <div class="dobby-tabs-titles">
    <component v-for="(title,index) in titles" :key="index">{{title}}</component>
  </div>
  <div class="dobby-tabs-contents">
    <component v-for="(content,i) in defaults" :is="content" :key="i"></component>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
export default {
  name: "Tabs",
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach(tag=>{
      if(tag.type !== Tab){
        throw new Error('Tabs子标签必须是Tab')
      }
    })
    const titles = defaults.map(el=>{
      return el.props.title
    })
    return {defaults,titles}
  }
}
</script>

<style lang="scss">

</style>