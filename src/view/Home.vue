<template>
  <div class="home">
    <topnav :menuLogoVisible="false"></topnav>
    <main>
      <div class="banner">
        <h1 class="tittle">Dobby UI</h1>
        <p class="describe">一套为开发者准备的基于Vue 3的组件库</p>
        <p class="detail">
          Dobby is my cat's name
        </p>
        <p class="detail detail2">
          People who love cats have some of the biggest hearts around
        </p>
        <div class="lead">
          <router-link to="/doc">Get Started</router-link>
        </div>
      </div>
      <div class="base">
        <div></div>
        <div></div>
        <div class="item-icon">
          <svg class="icon">
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <p>基于typescript</p>
        </div>
        <div></div>
        <div class="item-icon item-pink">
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <p>基于Vue 3</p>
        </div>
        <div></div>
        <div class="item-icon">
          <svg class="icon">
            <use xlink:href="#icon-scss"></use>
          </svg>
          <p>基于scss</p>
        </div>
        <div></div>
        <div class="item-icon">
          <a href="https://github.com/fanlelee/dobby-ui">
          <svg class="icon">
            <use xlink:href="#icon-code"></use>
          </svg>
          <p>源码</p>
          </a>
        </div>
      </div>
    </main>
  </div>

</template>
<script lang="ts">
import Topnav from "../components/TopnavDoc.vue";

export default {
  name: 'Home',
  components: {
    Topnav
  }
}
</script>
<style lang="scss" scoped>
html, body, .home {height: 100vh}
.home {

  > main {
    height: calc(100% - 3em);
    overflow: hidden;
    background: linear-gradient(151deg, rgba(11, 22, 27, 1) 17%, rgba(43, 72, 94, 1) 78%, rgba(242, 56, 110, 1) 100%);
    border-top: 1px solid #242424;
    color: #fff;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 60% 40%;
    > .banner {
      place-self: center center;
      @media (min-width: 600px) {
        place-self: center start;
        padding-left: 3em;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      > .tittle {font-size: 48px;padding-bottom: 20px;}
      > .describe {padding-bottom: 10px;}
      > .detail {font-size: 12px;}
      > .detail2 {padding-bottom: 20px;}
      > .lead {
        a {
          background-color: #c64768;
          color: #fff;
          font-weight: bold;
          $h: 48px;
          border-radius: $h/2;
          padding: 0 $h/2;
          height: $h;
          line-height: $h;
          display: inline-block;
          &:hover{text-decoration: underline;}
        }
      }
    }

    > .base {
      display: grid;
      place-self: end end;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      @media (min-width: 600px) {
        padding-right: 3em;
        > div,.item-icon>a {
          width: 10em;
          height: 8em;
          .icon {
            width: 5em;
            height: 5em;
          }
        }
      }
      @media (max-width: 600px) {
        padding: 0 8px 16px 0;
        > div,.item-icon>a {
          width: 7em;
          height: 5em;
          .icon {
            width: 3em;
            height: 3em;
          }
          >p{font-size: 13px;}
        }
      }

      > .item-icon,>.item-icon>a {
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      > .item-pink {background-color:#c64768;}
      > div {
        display: inline-block;
        a{color: #fff;text-decoration: underline;}
      }
    }
  }
}
</style>

