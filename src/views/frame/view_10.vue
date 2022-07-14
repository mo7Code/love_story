<template>
  <div class="view-wrapper view_10">
    <div class="view-textBox">
      <div class="view-textContent">
        <TextShow :text="textArr" @end="nextAnimate" />
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
import TextShow from "@/components/TextShow";
import TextFade from "@/components/TextFade";
import Rain from "@/components/Rain";

@Options({
  data() {
    return {
      nextBtnShow: false,
      textArr: [
        {
          content: `有一些沉睡已久的东西<span class="suxing">惊醒了</span>`,
        },

        {
          content: `男孩儿的<span class="heart">内心</span>和<span class="life">生活</span>迎来了一场暴风雨。`,
        },
        {
          content: `这场风暴，席卷了男孩儿的一切。`,
        },
        {
          content: `现在，暴风雨逐渐散场。。`,
        },
      ],
      isRain: true,
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
      this.isRain = false;
      this.nextBtnShow = true;
    },
  },
})
export default class View extends Vue {}
</script>
<style lang="scss">
.view_10 {
  .suxing {
    color: #ff6666;
  }
  .heart {
    color: #cc0033;
  }
  .life {
    color: #ff9900;
  }
}
</style>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_10 {
  background: #000;
  color: #fff;
}
</style>
