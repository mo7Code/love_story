<template>
  <div class="trees">
    <canvas id="trees-canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import trees from "./trees";

@Options({
  props: {},
  mounted() {
    this.creatInit();
  },
  methods: {
    creatInit() {
      trees();
    },
  },
})
export default class Trees extends Vue {}
</script>

<style scoped lang="scss">
canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  user-select: none;
  touch-action: none;
  background: #fff;
  cursor: pointer;
}
</style>
