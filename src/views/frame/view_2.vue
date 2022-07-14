<template>
  <div class="view-wrapper view_2">
    <div class="view-textBox">
      <div class="view-textContent">
        <TextFade :text="textArr" @end="nextBtnShow = true" />
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
import TextFade from "@/components/TextFade/textFade.vue";

@Options({
  data() {
    return {
      textArr: [
        {
          content: "这是一个来源已久的故事",
          class: "view_2-text1",
        },
        {
          content: `
          这是一个
          <div class="pianzhi">“偏执”</div>
          和
          <div class="danxiangsi">“单相思”</div>
          的故事
          `,
        },
      ],
      nextBtnShow: false,
    };
  },
  components: {
    NextBtn,
    TextFade,
  },
})
export default class View extends Vue {}
</script>
<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_2 {
  background-color: #000;
  color: #fff;
}
.view_2-text1 {
  margin-bottom: 30px;
}
.pianzhi {
  color: #ccffff;
}
.danxiangsi {
  color: #ffcc00;
}
</style>

<style lang="scss">
.view_2 {
  .view_2-text1 {
    margin-bottom: 30px;
  }
  .pianzhi {
    color: #ccffff;
  }
  .danxiangsi {
    color: #ffcc00;
  }
}
</style>
