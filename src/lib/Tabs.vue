<template>
  <div class="dobby-tabs">
    <div class="dobby-tabs-titles">
      <div class="dobby-tabs-title"
           v-for="(title,index) in titles"
           :key="index" @click="clickTitle(index)"
           :class="{selected: selectName===names[index]}">
        {{ title }}
      </div>
    </div>
    <div class="dobby-tabs-contents">
      <component :is="current" :key="current.props.name"></component>
    </div>
  </div>

</template>

<script lang="ts">
import Tab from './Tab.vue'
import {computed} from 'vue'

export default {
  name: "Tabs",
  props: {
    selectName: String
  },
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
    const names = defaults.map(el => {
      return el.props.name
    })
    const current  = computed(()=>{
      return defaults.find(el=>el.props.name === props.selectName)
    })

    const clickTitle = (index) => {
      if (props.selectName !== names[index]) {
        context.emit('update:selectName', names[index])
      }
    }
    return {defaults, titles, names,current, clickTitle}
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
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: $blue;
    }
    &.selected{
      color: $blue;
    }
  }
}
</style>