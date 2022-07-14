<template>
  <div class="view-wrapper view_4" :class="{ bgColor: bgColor }">
    <div class="view-textBox">
      <div class="view-textContent">
        <transition name="fade">
          <TextFade v-if="textIndex == 1" :text="textArr" @end="nextText" />
        </transition>
        <transition name="fade">
          <TextFade v-if="textIndex == 2" :text="textArr2" @end="nextText2" />
        </transition>
        <transition name="fade">
          <TextShow
            v-if="textIndex == 3"
            :text="textArr3"
            @end="nextBtnShow = true"
          />
        </transition>
      </div>
    </div>
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
import TextFade from "@/components/TextFade";
import TextShow from "@/components/TextShow";

@Options({
  data() {
    return {
      nextBtnShow: false,
      bgColor: false,
      textIndex: 1,
      textArr: [
        {
          content: `
          <span class="girlTalk">“大家好”</span>`,
        },
        {
          content: `
          <span class="girlTalk">“我叫刘浠”</span>`,
        },
        {
          content: `<div class="mt-20">略带慵懒但响亮的女中音惊醒了后排的男生。<div>`,
        },
      ],
      textArr2: [
        {
          content: `
          <span class="shirt">鹅黄色</span>的短袖，`,
        },
        {
          content: `
          乌黑的马尾辫，`,
        },
        {
          content: `彩虹般的笑容`,
        },
      ],
      textArr3: [
        {
          content: `变成了一位少年永久的青春记忆。`,
        },
        {
          content: `但男孩因<span class='neixiang'>内向</span>始终没有去表白。。。。`,
        },
      ],
    };
  },
  components: {
    NextBtn,
    TextFade,
    TextShow,
  },
  methods: {
    async nextText() {
      const _this = this;
      _this.textIndex = 0;
      await timeOut({
        func() {
          _this.bgColor = true;
        },
        time: 1000,
      });
      await timeOut({
        func() {
          _this.textIndex = 2;
        },
        time: 2000,
      });
    },
    async nextText2() {
      const _this = this;
      _this.textIndex = 0;

      await timeOut({
        func() {
          _this.textIndex = 3;
        },
        time: 2000,
      });
    },
  },
})
export default class View extends Vue {}
</script>

<style lang="scss">
.view_4 {
  .girlTalk {
    color: #0099cc;
  }
  .mt-20 {
    color: #336666;
    margin-top: 20px;
  }
  .shirt {
    color: #ffff00;
  }
  .neixiang {
    color: #cccc99;
  }
}
</style>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_4 {
  background-color: #fff;
  color: #000;
  transition: 2s;
}
.bgColor {
  background-color: #000;
  color: #fff;
}
</style>
