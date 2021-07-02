<template>
  <topnav></topnav>
  <div class="content">
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