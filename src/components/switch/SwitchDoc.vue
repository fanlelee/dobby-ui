<template>
  <Switch1></Switch1>
  <h3>{{ Switch1.__sourceCodeTitle }}</h3>
  <pre class="language-html" v-html="Prism.highlight(Switch1.__sourceCode,Prism.languages.html, 'html')"/>
</template>
<script lang="ts">
import Switch1 from './Switch1.demo.vue'
import 'prismjs';
import 'prismjs/themes/prism-okaidia.css'
const Prism = (window as any).Prism
export default {
  name: "SwitchDoc",
  components: {Switch1},
  setup() {
    return {Switch1, Prism}
  }

}
</script>