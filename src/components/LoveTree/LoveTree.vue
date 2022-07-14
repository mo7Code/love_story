<template>
  <div class="love-tree">
    <iframe
      class="love-iframe"
      marginheight="0px"
      scrolling="no"
      seamless
      frameborder="0"
      src="/love-tree.html"
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
  data() {
    return {};
  },
  mounted() {
    //
  },
  methods: {},
})
export default class LoveTree extends Vue {}
</script>

<style lang="scss">
.love-tree {
  width: 100%;
  height: 700px;
  background-color: #ffe;
}
.love-iframe {
  height: 100%;
  width: 100%;
  background-color: #ffe;
}
</style>
