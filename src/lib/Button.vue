<template>
  <div >
    <button v-bind="rest">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  inheritAttrs:false,
  setup(props, context){
    const {size, ...rest} = context.attrs
    console.log(size);
    return {size, rest}
  }
}
</script>

<style lang="scss">
</style>