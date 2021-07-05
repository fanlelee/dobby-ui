<template>
  <button @click="toggle" :class="{checked:check}"><span></span></button>
</template>
<script>
export default {
  name: "my-switch",
  props: {check: {type: Boolean, default: false}},
  setup(props, context) {
    const toggle = () => {
      context.emit('update:check', !props.check)
    }
    return {toggle}
  }
}
</script>
<style scoped lang="scss">
button {
  $w: 48px;
  position: relative;width: $w;height: $w/2;background-color: #ccc;
  border-radius: $w/2;border: none;cursor: pointer;
  span {
    position: absolute;top: 1px;left: 1px;background-color: #ffffff;
    width: $w/2-2px;height: $w/2-2px;border-radius: $w/2-2px;transition: all 250ms;
    &:active {width: $w/2+3px;}
  }
  &.checked {
    background-color: #408df1;
    span {
      left: $w/2+1px;
      &:active {width: $w/2+3px;margin-left: -5px;}
    }
  }
}
</style>