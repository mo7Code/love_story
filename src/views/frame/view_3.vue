<template>
  <div class="view-wrapper view_3">
    <div class="view-textBox">
      <div class="view-textContent">
        <TextShow :text="textArr" @end="nextBtnShow = true" />
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
import TextShow from "@/components/TextShow";

@Options({
  data() {
    return {
      nextBtnShow: false,
      textArr: [
        {
          content: `
        <span class="time-text">2007年夏，</span>
            <br />
            <span class="boy">男生</span>
            <span class="recall-text">初二。</span>
        `,
        },
        {
          content: `
          老师介绍了一位新同学。。
        `,
          class: "new-student",
        },
      ],
    };
  },
  components: { NextBtn, TextShow },
})
export default class View extends Vue {}
</script>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_3 {
  background-color: #000;
  color: #fff;
}
</style>

<style lang="scss">
.view_3 {
  .time-text {
    color: #cc9933;
  }
  .new-student {
    color: #ffcc00;
  }
  .recall-text {
    color: #ff9900;
  }
}
</style>
