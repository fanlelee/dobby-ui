<demo>
基本用法
</demo>

<template>
  <Switch v-model:check="open"></Switch>
</template>
<script lang="ts">
import Switch from '../../lib/Switch.vue'
import {ref} from 'vue'
export default {
  components: {Switch},
  setup() {
    const open = ref(false)
    return {open}
  }
}
</script>