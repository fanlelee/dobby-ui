<template>
  <button><span></span></button>
</template>

<script>
export default {
  name: "my-switch"
}
</script>

<style scoped lang="scss">
button {
  $w: 48px;
  position: relative;
  width: $w;
  height: $w/2;
  background-color: #408df1;
  border-radius: $w/2;
  border: none;
  span {
    position: absolute;
    top: 1px;
    left: 1px;
    background-color: #ffffff;
    width: $w/2-2px;
    height: $w/2-2px;
    border-radius: $w/2-2px;
    cursor: pointer;
  }
}
</style>