<template>
  <h1>Dialog组件</h1>
  <Demo :component-demo="Dialog1" :core-code="coreCode1" :description="description1"/>
  <Demo :component-demo="Dialog2" :core-code="coreCode2" :description="description2"/>
</template>

<script>
import Demo from "../Demo.vue";
import Dialog1 from "./Dialog1.demo.vue";
import Dialog2 from "./Dialog2.demo.vue";

export default {
  name: "DialogDoc",
  components: {Demo},
  setup() {
    const dialog1 = {
      'coreCode1':'  <Dialog v-model:visible="visible" :ok="f1" :cancel="f2">\n' +
          '    <template v-slot:header>\n' +
          '      <h1>标题</h1>\n' +
          '    </template>\n' +
          '    <template v-slot:main>\n' +
          '      <p>内容1</p>\n' +
          '      <p>内容2</p>\n' +
          '    </template>\n' +
          '  </Dialog>',
      'description1': '"ok"函数返回布尔值，如果为false，则点击确定时不会关闭dialog;\n"closeOnClickOverlay"属性值默认：true,即点击非dialog的位置，dialog会消失。',
      Dialog1
    }
    const dialog2 = {
      'coreCode2':'      openDialog(\n' +
          '          {\n' +
          '            \'ok\': ok,\n' +
          '            \'cancel\': cancel,\n' +
          '            \'header\': h(\n' +
          '                `strong`,\n' +
          '                \'\',\n' +
          '                \'标题\'\n' +
          '            ),\n' +
          '            \'main\': \'内容\'\n' +
          '          }\n' +
          '      )',
      'description2':'通过JS来设置dialog相关参数；\n注意需要引入"import {openDialog} from \'openDialog.ts\'"。',
      Dialog2
    }
    return {...dialog1, ...dialog2}
  }
}
</script>

<style scoped lang="scss">

</style>