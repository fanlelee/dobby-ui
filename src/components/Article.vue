<template>
  <article className="markdown-body" v-html="content"></article>
</template>
<script lang="ts">
import {ref} from "vue";
export default {
  name: "Article",
  props:{path:String},
  setup(props) {
    import(props.path).then(result => {
      content.value = result.default
    })

    const content = ref(null)
    return {content}
  }
}
</script>
