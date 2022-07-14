<template>
  <div class="story-wrapper">
    <div class="log">{{ pageIndex }}</div>
    <transition name="fade">
      <view1 v-if="pageIndex == 1" @next="next" />
    </transition>
    <transition name="fade">
      <view2 v-if="pageIndex == 2" @next="next" />
    </transition>
    <transition name="fade">
      <view3 v-if="pageIndex == 3" @next="next" />
    </transition>
    <transition name="fade">
      <view4 v-if="pageIndex == 4" @next="next" />
    </transition>
    <transition name="fade">
      <view5 v-if="pageIndex == 5" @next="next" />
    </transition>
    <transition name="fade">
      <view6 v-if="pageIndex == 6" @next="next" />
    </transition>
    <transition name="fade">
      <view7 v-if="pageIndex == 7" @next="next" />
    </transition>
    <transition name="fade">
      <view8 v-if="pageIndex == 8" @next="next" />
    </transition>
    <transition name="fade">
      <view9 v-if="pageIndex == 9" @next="next" />
    </transition>
    <transition name="fade">
      <view10 v-if="pageIndex == 10" @next="next" />
    </transition>
    <transition name="fade">
      <view11 v-if="pageIndex == 11" @next="next" />
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import view1 from "@/views/frame/view_1.vue";
import view2 from "@/views/frame/view_2.vue";
import view3 from "@/views/frame/view_3.vue";
import view4 from "@/views/frame/view_4.vue";
import view5 from "@/views/frame/view_5.vue";
import view6 from "@/views/frame/view_6.vue";
import view7 from "@/views/frame/view_7.vue";
import view8 from "@/views/frame/view_8.vue";
import view9 from "@/views/frame/view_9.vue";
import view10 from "@/views/frame/view_10.vue";
import view11 from "@/views/frame/view_11.vue";
import { setMobile, getMusic } from "@/utils/utils";
setMobile();
@Options({
  data() {
    return {
      pageIndex: 1,
      isNextStatus: true,
      timer: null,
      music: getMusic(),
    };
  },
  components: {
    view1,
    view2,
    view3,
    view4,
    view5,
    view6,
    view7,
    view8,
    view9,
    view10,
    view11,
  },
  methods: {
    next() {
      clearTimeout(this.timer);
      if (this.isNextStatus) {
        this.isNextStatus = false;
        this.pageIndex += 1;
        this.timer = setTimeout(() => {
          this.isNextStatus = true;
        }, 3000);
      }
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import url("~@/assets/view.scss");
.story-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.log {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background: #fff;
  color: #000;
}
.music-audio {
  display: none;
}
</style>
