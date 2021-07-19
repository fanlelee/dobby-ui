<template>
  <Switch1></Switch1>
  <h3>{{Switch1.__sourceCodeTitle}}</h3>
  <pre>{{Switch1.__sourceCode}}</pre>
</template>
<script>
import Switch1 from './Switch1.demo.vue'
export default {
  name: "SwitchDoc",
  components: {Switch1},
  setup(){
    return {Switch1}
  }

}
</script>