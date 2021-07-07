<template>
  <Button size="small" @click="x">it's button</Button>
</template>
<script>
import Button from '../lib/Button.vue'

export default {
  name: "ButtonDoc",
  components: {Button},
  setup() {
    const x = () => {
      console.log('hi');
    }
    return {x}
  }
}
</script>

<style scoped lang="scss">

</style>