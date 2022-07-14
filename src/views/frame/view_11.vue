<template>
  <div class="view-wrapper view_11">
    <div class="view_11-wavebtn">
      <transition name="fade">
        <WavesBtn v-if="pageEnd" @next="nextFunc" />
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WavesBtn from "@/components/WavesBtn";
import { timeOut, getSaveTime } from "@/utils/utils";

@Options({
  data() {
    return {
      pageEnd: true,
    };
  },
  components: {
    WavesBtn,
  },
  methods: {
    nextFunc() {
      const _this = this;
      _this.pageEnd = false;
      timeOut({
        func() {
          getSaveTime().then((res: any) => {
            if (res) {
              _this.$router.push("/keep");
            } else {
              _this.$router.push("/scenery");
            }
          });
        },
        time: 3000,
      });
    },
  },
})
export default class View extends Vue {}
</script>
<style lang="scss">
.view_11 {
}
</style>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_11 {
  background-color: #000;
  color: #fff;
}
.view_11-wavebtn {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
