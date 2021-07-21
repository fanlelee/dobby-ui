<template>
  <button class="dobby-switch" @click="toggle" :class="{'dobby-checked':check,disabled}"><span></span></button>
</template>
<script>
export default {
  name: "my-switch",
  props: {
    check: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
  },
  setup(props, context) {
    const toggle = () => {
      if(!props.disabled)
        context.emit('update:check', !props.check)
    }
    return {toggle}
  }
}
</script>
<style lang="scss">
.dobby-switch {
  $w: 48px;
  position: relative;width: 48px;height: 24px;background-color: #ccc;
  border-radius: 24px;border: none;cursor: pointer;
  span {
    position: absolute;top: 1px;left: 1px;background-color: #ffffff;
    width: 22px;height: 22px;border-radius: 22px;transition: all 250ms;
    &:active {width: 27px;}
  }
  &.dobby-checked {
    background-color: #408df1;
    span {
      left: 25px;
      &:active {width: 27px;margin-left: -5px;}
    }
  }
  &.disabled{cursor: not-allowed;}
}
</style>