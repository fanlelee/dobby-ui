## 起步
在安装好Dobby-UI的前提下，给出下面的示例：
#### 引入
```
import {Button, Tabs, Switch, Dialog} from "dobby-ui"
```
在实际引用时，就不能像组件列表中的示例源码那样写~~`import from '../../lib/Button.vue'`~~，而应如上写法。
#### 使用
以组件Button为例：
```
<template>
  <Button size="normal">normal button</Button>
</template>
<script>
import {Button} from 'dobby-ui'
export default {
  components: {Button}
}
</script>
```