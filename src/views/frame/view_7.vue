<template>
  <div class="view-wrapper view_7">
    <div class="view-textBox">
      <transition name="fade">
        <div class="view-textContent" v-if="text1">
          <TextFade :text="textArr" @end="nextText" />
        </div>
      </transition>
      <transition name="fade">
        <div class="view-textContent" v-if="text2">
          <div class="isHer">“是她！”</div>
          <div
            class="end"
            :class="{
              opcity1: endif,
            }"
          >
            男孩儿的内心世界泛起了一丝丝涟漪。。。
          </div>
        </div>
      </transition>
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

@Options({
  data() {
    return {
      nextBtnShow: false,
      text1: true,
      text2: false,
      endif: false,
      textArr: [
        {
          content: `平常的一天，`,
        },
        {
          content: `男孩儿像往常一样工作。`,
        },
        {
          content: `微信图标闪动了。。`,
        },
      ],
    };
  },
  components: {
    NextBtn,
    TextFade,
  },
  methods: {
    async nextText() {
      const _this = this;
      _this.text1 = false;
      timeOut({
        func() {
          _this.text2 = true;
          _this.showText();
        },
        time: 2500,
      });
    },
    async showText() {
      const _this = this;
      await timeOut({
        func() {
          _this.endif = true;
        },
        time: 5000,
      });
      await timeOut({
        func() {
          _this.nextBtnShow = true;
        },
        time: 1000,
      });
    },
  },
})
export default class View extends Vue {}
</script>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_7 {
  background-color: #000;
  color: #fff;
}
.isHer {
  font-size: 50px;
  color: #cc6699;
}
.end {
  margin-top: 50px;
  font-size: 24px;
  opacity: 0;
  transition: opacity 2s ease;
}
.opcity1 {
  opacity: 1;
}
</style>
