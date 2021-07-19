<template>
  <h1>Button组件</h1>
  <Demo :component-demo="Button1" :core-code='corecode1' :description="description1"/>
  <Demo :component-demo="Button2" :core-code='corecode2' :description="description2"/>
  <Demo :component-demo="Button3" :core-code='corecode3' :description="description3"/>
  <Demo :component-demo="Button4" :core-code='corecode4'/>
  <Demo :component-demo="Button5" :core-code='corecode5'/>
</template>
<script>
import Demo from "../Demo.vue";
import Button1 from './Button1.demo.vue'
import Button2 from './Button2.demo.vue'
import Button3 from './Button3.demo.vue'
import Button4 from './Button4.demo.vue'
import Button5 from './Button5.demo.vue'

export default {
  name: "ButtonDoc",
  components: {Demo, Button1, Button2, Button3, Button4, Button5},
  setup() {
    const button1 = {
      'corecode1':'<Button>main button</Button>\n' +
                  '<Button level="normal">normal button</Button>',
      'description1' :"level默认值为'main'。",
      Button1
    }
    const button2 = {
      'corecode2':'<Button size="small">small button</Button>\n' +
                  '<Button size="normal">normal button</Button>\n' +
                  '<Button size="big">big button</Button>',
      'description2' :"size默认值为'normal'。",
      Button2
    }
    const button3 = {
      'corecode3':'<Button theme="button">default theme</Button>\n' +
                  '<Button theme="link">link theme</Button>\n' +
                  '<Button theme="text">text theme</Button>',
      'description3' :"theme默认值为'button'。",
      Button3
    }
    const button4 = {
      'corecode4':'<Button :disabled="true">disabled</Button>',
      Button4
    }
    const button5 = {
      'corecode5':'<Button :loading="true">loading</Button>',
      Button5
    }


    return {
      ...button1,...button2,...button3,...button4,...button5,
    }
  }
}
</script>

<style scoped lang="scss">
button {
  margin: 5px;
}
</style>