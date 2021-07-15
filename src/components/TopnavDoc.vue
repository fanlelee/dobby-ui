<template>
  <div class="topnav">
    <svg class="icon" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
    <div class="logo">
      <router-link to="/">
        <svg class="icon">
          <use xlink:href="#icon-cat"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  name: "TopnavDoc",
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
  color: #fff;
  background-color: #0e161b;
  padding: 10px 20px;
  height: 3em;
  > .logo {
    margin-left: 10%;
    .icon {
      width: 2em;
      height: 2em;
    }
  }
  > .menu {
    display: flex;
    justify-content: space-around;
    li {
      display: inline-block;
      margin: 0 5px;
      > a {color: #fff;}
    }
  }
  > .icon {
    fill: #fff;
    position: absolute;
    left: 4%;
    display: none;
  }
  @media (max-width: 600px) {
    > .icon {
      display: inline-block;
    }
  }
}
</style>