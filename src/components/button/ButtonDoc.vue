<template>
  <div>
    <div>
      level:
      <Button @click="x">main button</Button>
      <Button @click="x" level="normal">normal button</Button>
    </div>
    <div>
      size:
      <Button size="small">small button</Button>
      <Button>normal button</Button>
      <Button size="big">big button</Button>
    </div>
    <div>
      theme:
      <Button theme="button">default theme</Button>
      <Button theme="link">link theme</Button>
      <Button theme="text">text theme</Button>
    </div>
    <div>
      disabled:
      <Button :disabled="true">disabled</Button>
    </div>
    <div>
      loading:
      <Button :loading="true">loading</Button>
    </div>
  </div>
</template>
<script>
import Button from '../../lib/Button.vue'

export default {
  name: "ButtonDoc",
  components: {Button},
  setup() {
    const x = () => {
      console.log('hi');
    }
    return {x}
  }
}
</script>

<style scoped lang="scss">
button{
  margin:5px;
}
</style>