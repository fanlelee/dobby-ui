<template>
  <topnav></topnav>
  <div class="doc">
    <aside v-if="menuVisible">菜单栏</aside>
    <main>对应内容</main>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import {Ref, inject} from "vue";

export default {
  name: 'Home',
  components: {
    Topnav
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    return {menuVisible}
  }
}
</script>
<style lang="scss" scoped>
.doc {
  > aside {
    position: absolute;
    background-color: lightseagreen;
    height: 200pX;
    top: 40px;
    left: 0;
    padding-top: 10px;
  }
}
</style>