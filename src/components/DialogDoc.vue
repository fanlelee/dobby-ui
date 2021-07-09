<template>
  <div>
    <Button @click="showDialog">toggle</Button>
    <Dialog v-model:visible="visible"></Dialog>
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
    const showDialog = ()=>{
      visible.value = !visible.value
    }
    return {visible, showDialog}
  }
}
</script>

<style scoped lang="scss">

</style>