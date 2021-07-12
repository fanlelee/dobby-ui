<template>
  <slot/>
</template>

<script lang="ts">
export default {
  name: "Tab",
  props:{
    title:String,
    name:String
  }
}
</script>