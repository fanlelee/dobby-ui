<template>
  <div>
    <Button @click="showDialog">toggle</Button>
    <Dialog v-model:visible="visible" :ok="f1" :cancel="f2" ></Dialog>
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
    const f1 = ()=>{return false}
    const f2 = ()=>{
      console.log('hi2');}
    return {visible, showDialog,f1,f2}
  }
}
</script>

<style scoped lang="scss">

</style>