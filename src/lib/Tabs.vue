<template>
  <div class="dobby-tabs">
    <div class="dobby-tabs-titles" ref="titlesContainer">
      <div class="dobby-tabs-title"
           v-for="(title,index) in titles"
           :key="index" @click="clickTitle(index)"
           :class="{selected: selectName===names[index]}"
           :ref="el => { if (selectName===names[index]) selectedTitle = el }">
        {{ title }}
      </div>
      <span class="dobby-tabs-indicator" ref="indicator"></span>
    </div>
    <div class="dobby-tabs-contents">
      <component :is="current" :key="current"></component>
    </div>
  </div>

</template>

<script lang="ts">

import Tab from './Tab.vue'
import {computed, ref, onMounted, onUpdated} from 'vue'

export default {
  name: "Tabs",
  props: {
    selectName: String
  },
  setup(props, context) {
    const current = computed(() => {
      return defaults.filter(el => el.props.name === props.selectName)[0]
    })
    const selectedTitle = ref<HTMLDivElement>(null)

    const indicator = ref<HTMLDivElement>(null)
    const titlesContainer = ref<HTMLDivElement>(null)

    const x = () => {
      indicator.value.style.width = selectedTitle.value.getBoundingClientRect().width + 'px'
      const {left: left1} = titlesContainer.value.getBoundingClientRect()
      const {left: left2} = selectedTitle.value.getBoundingClientRect()
      indicator.value.style.left = left2 - left1 + 'px'

    }
    onMounted(x)
    onUpdated(x)

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

    const clickTitle = (index) => {
      if (props.selectName !== names[index]) {
        context.emit('update:selectName', names[index])
      }
    }

    return {
      defaults,
      titles,
      names,
      current,
      clickTitle,
      indicator,
      titlesContainer,
      selectedTitle
    }
  }
}
</script>
<style lang="scss">
$light-blue: #5ca8f8;
$blue: #408df1;
$deep-blue: #2d6dd2;
.dobby-tabs {
  &-titles {
    position: relative;
    border-bottom: 1px solid #ccc;
  }
  &-title {
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    &:hover {
      color: $blue;
    }
    &.selected {
      color: $blue;
    }
  }
  &-indicator {
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 3px;
    background-color: $blue;
    transition: all 250ms;
  }
}
</style>