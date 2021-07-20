<demo>简洁快速的用法</demo>
<template>
  <Button @click="showDialog">openDialog</Button>
</template>

<script>
import Dialog from '../../lib/Dialog.vue'
import Button from '../../lib/Button.vue'
import {h} from 'vue'

import {openDialog} from '../../lib/openDialog.ts'

export default {
  components: {Dialog, Button},
  setup() {
    const ok = () => {
      return true
    }
    const cancel = () => {
      console.log('hello');
    }

    const showDialog = () => {
      openDialog(
          {
            'ok': ok,
            'cancel': cancel,
            'header': h(
                `strong`,
                '',
                '标题'
            ),
            'main': '内容'
          }
      )
    }
    return { showDialog}
  }
}
</script>