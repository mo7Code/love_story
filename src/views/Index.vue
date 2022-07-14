<template>
  <div class="index-wrapper">在这里进行加载 {{ time }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { getSaveTime } from "@/utils/utils";

@Options({
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.start();
  },
  methods: {
    start() {
      getSaveTime().then((res: any) => {
        console.log("res", res);

        if (res) {
          console.log("跳往keep页面");
          this.$router.push("/keep");
        } else {
          console.log("跳往story页面");
          this.$router.push("/story");
        }
      });
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.index-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #000;
  color: #fff;
}
</style>
