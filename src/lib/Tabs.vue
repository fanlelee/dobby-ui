<template>
  <div class="dobby-tabs">
    <div class="dobby-tabs-titles">
      <component class="dobby-tabs-title" v-for="(title,index) in titles" :key="index">{{ title }}</component>
    </div>
    <div class="dobby-tabs-contents">
      <component v-for="(content,i) in defaults" :is="content" :key="i"></component>
    </div>
  </div>

</template>

<script lang="ts">
import Tab from './Tab.vue'

export default {
  name: "Tabs",
  setup(props, context) {
    const defaults = context.slots.default()
    defaults.forEach(tag => {
      if (tag.type !== Tab) {
        throw new Error('Tabs子标签必须是Tab')
      }
    })
    const titles = defaults.map(el => {
      return el.props.title
    })
    return {defaults, titles}
  }
}
</script>
<style lang="scss">
$light-blue: #5ca8f8;
$blue: #408df1;
$deep-blue: #2d6dd2;
.dobby-tabs {
  &-titles {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  &-title {
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: $blue;
    }
  }
}
</style>