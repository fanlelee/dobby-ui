<template>
  <topnav></topnav>
  <div class="doc">
    <aside>菜单栏</aside>
    <main>对应内容</main>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  name:'Home',
  components:{
    Topnav
  }
}
</script>
<style lang="scss" scoped>
  .doc{
    >aside{
      position: absolute;
      background-color: lightseagreen;
      height: 200pX;
      top: 40px;
      left: 0;
      padding-top: 10px;
    }
  }
</style>