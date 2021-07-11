<template>
  <div>
    <Button @click="showDialog">toggle</Button>
    <Dialog v-model:visible="visible" :ok="f1" :cancel="f2">
      <template v-slot:header>
        <h1>tittle</h1>
      </template>
      <template v-slot:main>
        <p>1</p>
        <p>2</p>
      </template>
    </Dialog>

    <Button @click="showDialog2">openDialog</Button>
  </div>
</template>

<script>
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref, h} from 'vue'

import {openDialog} from '../lib/openDialog.ts'

export default {
  name: "DialogDoc",
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
      console.log('hi2');
    }

    const showDialog2 = ()=>{
      openDialog(
          {
            'ok':f1,
            'cancel':f2,
            'header':h(
              `strong`,
              '',
                '标题'
              ),
            'main':'内容内容内容内容内容'
          }
      )
    }
    return {visible, showDialog, f1, f2,showDialog2}
  }
}
</script>

<style scoped lang="scss">

</style>