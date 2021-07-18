## 起步
在安装好Dobby-UI的前提下，给出下面的示例：
#### 引入
```ts
import {Button, Tabs, Switch, Dialog} from "dobby-ui"
```
#### 使用
以组件Button为例：
```vue
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