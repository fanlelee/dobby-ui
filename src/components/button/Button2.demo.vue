<demo>size</demo>
<template>
    <div class="button"><Button size="small">small button</Button></div>
    <div class="button"><Button>normal button</Button></div>
    <div class="button"><Button size="big">big button</Button></div>
</template>

<script type="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {Button}
}
</script>
<style>
.button{margin-bottom: 8px}
</style>