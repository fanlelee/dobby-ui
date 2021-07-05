<template>
  <topnav></topnav>
  <div class="doc">
    <aside v-if="menuVisible">
      <h3>组件列表</h3>
      <router-link to="/doc/switch">Switch组件</router-link>
      <router-link to="/doc/button">Button组件</router-link>
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
    background-color: lightseagreen;
    height: 100%;
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    padding: 3em 20px 5px 20px;
    display: flex;
    flex-direction: column;
    a {
      display: block;
      padding: 5px 0;
    }
  }
  > main {
    height: 100%;
    width: 100%;
    padding: 20px;
    background-color: lightgoldenrodyellow;
    overflow: auto;
  }
  @media (min-width: 500px) {
    aside {
      width: 30%;
    }
    main {
      margin-left: 30%;
    }
  }
}
</style>