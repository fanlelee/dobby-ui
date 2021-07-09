<template>
  <template v-if="visible">
    <div class="dobby-dialog-overlay" @click="onClickOverlay"></div>
    <div class="dobby-dialog-wrapper">
      <div class="dobby-dialog">
        <header class="dobby-dialog-header">
          <p>tittle</p>
          <span class="dobby-dialog-close" @click="close"></span>
        </header>
        <main class="dobby-dialog-main">
          <p>123</p>
          <p>cvdgv</p>
          <p>1222</p>
        </main>
        <footer class="dobby-dialog-footer">
          <Button level="normal" @click="ok">确定</Button>
          <Button @click="cancel">取消</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'

export default {
  name: "my-dialog",
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: 'false'
    },
    ok:Function,
    cancel:Function,
    closeOnClickOverlay:{
      type:Boolean,
      default: true
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', !props.visible)
    }
    const ok = ()=>{
      if(props.ok?.() !== false){
        close()
      }
    }
    const cancel = ()=>{
      props.cancel?.()
      close()
    }

    const onClickOverlay = ()=>{
      if(props.closeOnClickOverlay){close()}
    }
    return {close,ok,cancel,onClickOverlay}
  }
}
</script>

<style scoped lang="scss">
.dobby-dialog {
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 12;
  }
  &-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 13;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 5px;
  }
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 8px 8px 8px 16px;
  }
  &-main {
    padding: 8px 8px 8px 16px;
    border-bottom: 1px solid #ccc;
  }
  &-footer {
    padding: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    > button {
      margin-left: 8px;
    }
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>