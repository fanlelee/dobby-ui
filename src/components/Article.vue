<template>
  <article class="markdown-body" v-html="content"></article>
</template>
<script lang="ts">
export default {
  name: "Article",
  props:{content:String},
}
</script>
