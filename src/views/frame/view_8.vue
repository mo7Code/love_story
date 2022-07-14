<template>
  <div
    class="view-wrapper view_8"
    :class="{
      bgColor: isBgClass,
    }"
  >
    <div class="view-textBox">
      <transition name="fade">
        <div class="view-textContent" v-if="text1">
          <TextShow :isEndLine="false" :text="textArr" @end="nextAnimate" />
        </div>
      </transition>
      <transition name="fade">
        <div class="view-textContent" v-if="text2">
          <TextFade :text="textArr2" @end="nextText4" />
        </div>
      </transition>
      <transition name="fade">
        <div class="view-textContent" v-if="text4">
          <TextFade :text="textArr4" @end="nextBtnShow = true" />
        </div>
      </transition>
    </div>
    <transition name="fade">
      <Lightning v-if="isLightning" />
    </transition>
    <transition name="fade">
      <NextBtn v-if="nextBtnShow" v-bind="$attrs" />
    </transition>
  </div>
</template>
// 开场白
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NextBtn from "@/components/NextBtn";
import { timeOut } from "@/utils/utils";
import TextShow from "@/components/TextShow";
import TextFade from "@/components/TextFade";
import Lightning from "@/components/Lightning";

@Options({
  data() {
    return {
      nextBtnShow: false,
      isBgClass: false,
      isLightning: false,
      text1: false,
      text2: false,
      text4: false,
      textArr: [
        {
          content: `“<span class="she">她</span>，过得很好，这就够了。”`,
        },
        {
          content: `“<span class="she">她</span>，好像过的不是很开心？”`,
        },
        {
          content: `“<span class="she">她</span>，好像要失恋了。。。”`,
        },
        {
          content: `“<span class="she">她</span>，真的失恋了。。。。”`,
        },
      ],
      textArr2: [
        {
          content: `她很伤心。`,
        },
        {
          content: `男孩绞尽脑汁，`,
        },
        {
          content: `不擅交际的他想了各种办法。。`,
        },
      ],
      textArr4: [
        {
          content: `<span class="boy-talk">“旅游吧，”</span>`,
        },
        {
          content: `男孩儿想，`,
        },
        {
          content: `<span class="boy-talk">“出去走一走她的心情一定会好起来”</span>`,
        },
      ],
    };
  },
  components: {
    NextBtn,
    TextShow,
    Lightning,
    TextFade,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const _this = this;
      timeOut({
        func() {
          _this.isBgClass = true;
          _this.text1 = true;
        },
        time: 2000,
      });
    },
    async nextAnimate() {
      const _this = this;
      _this.isBgClass = false;
      await timeOut({
        func() {
          _this.text1 = false;
          _this.isLightning = true;
        },
        time: 2000,
      });
      await timeOut({
        func() {
          _this.text2 = true;
        },
        time: 3000,
      });
    },
    nextText4() {
      const _this = this;
      _this.text2 = false;
      timeOut({
        func() {
          _this.isLightning = false;
          _this.text4 = true;
        },
        time: 3000,
      });
    },
  },
})
export default class View extends Vue {}
</script>
<style lang="scss" >
.view_8 {
  .she {
    color: #ffcc33;
    font-size: 50px;
  }
  .lightning {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .view-textBox {
    position: relative;
    z-index: 10;
  }
}
</style>


<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_8 {
  background: #000;
  transition: background 2s ease;
  color: #fff;
  &.bgColor {
    background: #0099cc;
  }
}
</style>
