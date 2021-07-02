<template>
  <div class="topnav">
    <div class="logo">logo</div>
    <ul class="menu">
        <li><a href="">菜单一</a></li>
        <li><a href="">菜单二</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Topnav"
}
</script>

<style scoped lang="scss">
.topnav {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  padding: 10px 20px;
  > .logo {
  }
  > .menu {
    display: flex;
    justify-content: space-around;
    li{
      display: inline-block;
      margin: 0 5px;
    }
  }
}
</style>