<demo>简洁快速的用法</demo>
<template>
  <Button @click="showDialog">openDialog</Button>
  <Dialog v-model:visible="visible" :ok="f1" :cancel="f2" :closeOnClickOverlay="true">
    <template v-slot:header>
      <strong>标题</strong>
    </template>
    <template v-slot:main>
      内容
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
      return true
    }
    const f2 = () => {
      console.log('hello');
    }

    return {visible, showDialog, f1, f2}
  }
}
</script>