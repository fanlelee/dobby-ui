<template>
  <topnav></topnav>
  <div class="doc">
    <aside v-if="menuVisible">
      <h3>菜单栏</h3>
      <router-link to="/switch">Switch组件</router-link>
      <router-link to="/button">Button组件</router-link>
    </aside>
    <main>
      <router-view/>
    </main>
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
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: center;
  }
}
</style>