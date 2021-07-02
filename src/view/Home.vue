<template>
  <topnav></topnav>
  <div class="banner">
    <h2 class="tittle">Dobby UI</h2>
    <p class="detail">Dobby(多比)是我家可爱猫咪的名字</p>
    <div class="lead">
      <a>GitHub</a>
      <a>文档</a>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";

export default {
  name: 'Home',
  components: {
    Topnav
  }
}
</script>
<style lang="scss" scoped>
  .banner{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightsteelblue;
    padding: 80px 0;
    >.lead{
      a{
        background-color: #fff;
        $h:30px;
        border-radius: $h/2;
        padding: 0 10px;
        margin: 3px;
        height: $h;
        line-height: $h;
        display: inline-block;
      }
    }
  }
</style>

