<template>
  <div class="view-wrapper view_5">
    <div class="view-textBox">
      <div class="view-textContent">
        <TextFade :text="textArr" @end="nextText" />
      </div>
    </div>
    <Trees />
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
import Trees from "@/components/Trees";

@Options({
  data() {
    return {
      nextBtnShow: false,
      textShow: true,
      textArr: [
        {
          content: `<div class="text_time">时光荏苒，青春飞逝</div>`,
        },
        {
          content: `思念如同树木般疯长`,
        },
      ],
    };
  },
  components: {
    Trees,
    NextBtn,
    TextFade,
    TextShow,
  },
  methods: {
    async nextText() {
      const _this = this;
      timeOut({
        func() {
          _this.nextBtnShow = true;
        },
        time: 2000,
      });
    },
  },
})
export default class View extends Vue {}
</script>

<style lang="scss">
.view_5 {
  .trees {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .view-textBox {
    position: relative;
    z-index: 99;
  }
  .text_time {
    margin-bottom: 50px;
  }
  .view-textContent {
    font-size: 40px;
    color: #ffcc33;
    text-shadow: 3px 5px 5px #656b79;
  }
}
</style>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_5 {
  background-color: #738073;
}
</style>
