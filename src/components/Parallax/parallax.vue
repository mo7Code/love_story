<template>
  <div class="parallax">
    <canvas id="parallax-canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import parallax from "./parallax";

@Options({
  props: {},
  data() {
    return {
      canvasStatus: false,
    };
  },
  mounted() {
    this.creatInit();
  },
  // beforeUnmount() {},
  methods: {
    creatInit() {
      parallax();
    },
  },
})
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
canvas {
  display: block;
}
.parallax {
  width: 100vw;
  height: 100vh;
  background-color: gainsboro;
  color: #fff;
}
</style>
