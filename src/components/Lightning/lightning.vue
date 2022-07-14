<template>
  <div class="lightning">
    <canvas id="lightning-canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import lightning from "./lightning";

@Options({
  props: {},
  mounted() {
    this.creatInit();
  },
  methods: {
    creatInit() {
      lightning();
    },
  },
})
export default class Trees extends Vue {}
</script>

<style scoped lang="scss">
canvas {
  display: block;
}
.lightning {
  width: 100%;
  height: 100%;
  background: linear-gradient(#000, #151515);
  overflow: hidden;
}
</style>
