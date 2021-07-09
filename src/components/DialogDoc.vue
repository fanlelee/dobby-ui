<template>
  <div>
    <Button @click="click">toggle</Button>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue'
export default {
  name: "DialogDoc",
  components: {Dialog, Button},
  setup(){
    const visible = ref(false)
    const click = ()=>{
        visible.value = !visible.value
    }
    return {visible, click}
  }
}
</script>

<style scoped lang="scss">

</style>