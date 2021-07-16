<template>
  <topnav></topnav>
  <div class="doc">
    <aside v-if="menuVisible">
      <h3>基础</h3>
      <router-link to="/doc/install">安装</router-link>
      <router-link to="/doc/introduce">介绍</router-link>
      <router-link to="/doc/get-started">起步</router-link>
      <h3>组件列表</h3>
      <router-link to="/doc/switch">Switch组件</router-link>
      <router-link to="/doc/button">Button组件</router-link>
      <router-link to="/doc/dialog">Dialog组件</router-link>
      <router-link to="/doc/tabs">Tabs组件</router-link>
    </aside>
    <main>
      <router-view/>
    </main>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/TopnavDoc.vue";
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
  height: calc(100vh - 3em);
  display: flex;
  > aside {
    background-color: #31465a;
    color: #fff;
    height: 100%;
    overflow-y: auto;
    position: fixed;
    z-index: 8;
    top: 0;
    left: 0;
    padding: 3em 0 5px;
    display: flex;
    flex-direction: column;
    h3 {padding: 8px 0 8px 15px;}
    a {
      color: #fff;
      display: block;
      padding: 8px 20px 8px 25px;
    }
    a.router-link-active {
      background-color: #fff;
      color: #131d24;
    }
  }
  > main {
    height: 100%;
    width: 100%;
    padding: 20px;
    //background-color: lightgoldenrodyellow;
    overflow: auto;
  }
  @media (min-width: 500px) {
    aside {
      width: 16%;
    }
    main {
      margin-left: 16%;
    }
  }
}
</style>