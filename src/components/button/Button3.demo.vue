<demo>theme</demo>
<template>
    <div><Button theme="button">default theme</Button></div>
    <div><Button theme="link">link theme</Button></div>
    <div><Button theme="text">text theme</Button></div>
</template>

<script type="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {Button}
}
</script>