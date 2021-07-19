<template>
  <Switch v-model:check="open"></Switch>
</template>
<script>
import Switch from '../../lib/Switch.vue'
import {ref} from 'vue'
export default {
  name: "SwitchDoc",
  components: {Switch},
  setup() {
    const open = ref(false)
    return {open}
  }
}
</script>