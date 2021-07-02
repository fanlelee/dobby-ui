<template>
  <topnav></topnav>
  <div class="banner">
    <h1>Dobby UI</h1>
    <p>Dobby(多比)是我家可爱猫咪的名字</p>
    <button>开始</button>
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

