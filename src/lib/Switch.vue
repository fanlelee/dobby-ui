<template>
  <button @click="toggle" :class="{checked:check}"><span></span></button>
</template>

<script>
import {ref} from "vue";

export default {
  name: "my-switch",
  setup() {
    const check = ref(false)
    const toggle = () => {
      console.log(check.value);
      check.value = !check.value
    }
    return {check, toggle}
  }
}
</script>

<style scoped lang="scss">
button {
  $w: 48px;
  position: relative;
  width: $w;
  height: $w/2;
  background-color: #ccc;
  border-radius: $w/2;
  border: none;
  cursor: pointer;
  span {
    position: absolute;
    top: 1px;
    left: 1px;
    background-color: #ffffff;
    width: $w/2-2px;
    height: $w/2-2px;
    border-radius: $w/2-2px;
    transition: all 250ms;
    &:active{
      width:$w/2+5px;
    }
  }
  &.checked {
    background-color: #408df1;
    span {
      left: $w/2+1px;
    &:active{
      width:$w/2+5px;
      margin-left: -7px;
    }
    }
  }
}
</style>