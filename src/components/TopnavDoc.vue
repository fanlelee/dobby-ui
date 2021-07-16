<template>
  <div class="topnav">
    <div></div>
    <div class="logo">
      <svg class="icon icon-menu" @click="toggleMenu" v-if="menuLogoVisible">
        <use xlink:href="#icon-menu"></use>
      </svg>
      <router-link to="/">
        <svg class="icon icon-logo">
          <use xlink:href="#icon-cat"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc/introduce">文档</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from "vue";

export default {
  name: "TopnavDoc",
  props: {
    menuLogoVisible: {
      type: Boolean,
      default: true
    }
  },
  setup(props, context) {
    console.log(context.attrs.menuLogoVisible);
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
  background: rgb(11, 22, 27);
  background: linear-gradient(0deg, rgba(11, 22, 27, 1) 12%, rgba(43, 72, 94, 1) 93%);
  padding: 10px 20px;
  height: 3em;
   .logo {
    position: absolute;
    left: 4%;
    .icon-menu {
      fill: #fff;
      width: 1.3em;
      height: 1.3em;
      margin-right: 16px;
      display: none;
    }
     @media (max-width: 600px) {
       .icon-menu {
         display: inline-block;
       }
     }
    .icon-logo {
      width: 1.6em;
      height: 1.6em;
    }
  }
  > .menu {
    display: flex;
    justify-content: space-around;
    li {
      display: inline-block;
      margin: 0 5px;
      > a {color: #fff;&:hover{text-decoration: underline;}}
    }
  }


}
</style>