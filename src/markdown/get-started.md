## 快速起步
在安装好Dobby-UI的前提下，给出一下示例：
#### 引用
```ts
import {Button, Tabs, Switch, Dialog} from "dobby-ui"
```
#### 使用
以组件Button为例：
```vue
<template>
  <Button @click="click">normal button</Button>
</template>
<script>
import {Button} from 'dobby-ui'
export default {
  components: {Button},
  setup() {
    const click = () => {
      console.log('say hi');
    }
    return {click}
  }
}
</script>
```