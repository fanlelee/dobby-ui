<template>
  <div class="topnav">
    <svg class="icon" aria-hidden="true" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <div class="logo">logo</div>
    <ul class="menu">
      <li><a href="">菜单一</a></li>
      <li><a href="">菜单二</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import '//at.alicdn.com/t/font_2648871_qm6hcmucm9.js'
import {inject, Ref} from "vue";

export default {
  name: "Topnav",
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible')
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    return {menuVisible, toggleMenu}
  }
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
  height: 3em;
  > .logo {
    margin-left: 10%;
  }
  > .menu {
    display: flex;
    justify-content: space-around;
    li {
      display: inline-block;
      margin: 0 5px;
    }
  }
  > .icon {
    width: 1em;
    height: 1em;
    position: absolute;
    left: 4%;
    display: none;
  }
  @media (max-width: 500px) {
    > .icon {
      display: inline-block;
    }
  }
}
</style>