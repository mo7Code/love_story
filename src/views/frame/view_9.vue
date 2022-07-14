<template>
  <div class="view-wrapper view_9">
    <div class="view-textBox">
      <div class="view-textContent">
        <transition name="fade">
          <TextFade v-if="textShow1" :text="textArr" @end="nextAnimate" />
        </transition>
        <transition name="fade">
          <TextShow v-if="textShow2" :text="textArr2" @end="nextAnimate2" />
        </transition>
      </div>
    </div>

    <transition name="fade">
      <Rain v-if="isRain" />
    </transition>

    <transition name="fade">
      <NextBtn v-if="nextBtnShow" v-bind="$attrs" />
    </transition>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NextBtn from "@/components/NextBtn";
import { timeOut } from "@/utils/utils";
import TextShow from "@/components/TextShow";
import TextFade from "@/components/TextFade";
import Rain from "@/components/Rain";

@Options({
  data() {
    return {
      nextBtnShow: false,
      textShow1: true,
      textShow2: false,
      textArr: [
        {
          content: `男孩儿没能抑制住自己内心的波澜，`,
        },
        {
          content: `这是一场糟糕的旅行。。`,
        },
      ],
      textArr2: [
        {
          content: `“她，一定对我失望透了。”`,
        },
        {
          content: `<span class="leave">我还是走吧。。。</span>`,
        },
      ],
      isRain: false,
    };
  },
  components: {
    NextBtn,
    TextShow,
    TextFade,
    Rain,
  },
  methods: {
    nextAnimate() {
      const _this = this;
      this.textShow1 = false;
      this.textShow2 = true;
      timeOut({
        func() {
          _this.isRain = true;
        },
        time: 1000,
      });
    },
    nextAnimate2() {
      this.textShow1 = false;
      this.nextBtnShow = true;
    },
  },
})
export default class View extends Vue {}
</script>
<style lang="scss">
@import url("~@/assets/view.scss");
.view_9 {
  .leave {
    color: #993333;
  }
}
</style>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_9 {
  background: #000;
  color: #fff;
  .leave {
    color: #993333;
  }
}
</style>
