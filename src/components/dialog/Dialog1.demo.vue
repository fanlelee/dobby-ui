<demo>常规写法</demo>
<template>
  <Button @click="showDialog">toggle</Button>
  <Dialog v-model:visible="visible" :ok="f1" :cancel="f2" :closeOnClickOverlay="true">
    <template v-slot:header>
      <h1>标题</h1>
    </template>
    <template v-slot:main>
      <p>内容1</p>
      <p>内容2</p>
    </template>
  </Dialog>
</template>

<script>
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue'
import {ref} from 'vue'

export default {
  components: {Dialog, Button},
  setup() {
    const visible = ref(false)
    const showDialog = () => {
      visible.value = !visible.value
    }
    const f1 = () => {
      return false
    }
    const f2 = () => {
      console.log('hello');
    }

    return {visible, showDialog, f1, f2}
  }
}
</script>