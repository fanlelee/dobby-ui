<template>
  <h1>Switch组件</h1>
  <Demo :component-demo="Switch1" core-code='<Switch v-model:check="open" />'/>
  <Demo :component-demo="Switch2" core-code='<Switch :disabled="true" />'/>
</template>
<script lang="ts">
import Switch1 from "./Switch1.demo.vue";
import Switch2 from "./Switch2.demo.vue";
import Demo from "../Demo.vue";

export default {
  name: "SwitchDoc",
  components: {Demo},
  setup() {
    return {Switch1, Switch2}
  }
}
</script>