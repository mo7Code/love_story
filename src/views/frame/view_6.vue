<template>
  <div class="view-wrapper view_6">
    <div class="view-textBox">
      <transition name="fade">
        <div class="view-textContent" v-if="text1 || text2">
          <TextFade :text="textArr" @end="nextText" />
          <div
            class="view-6-text2box"
            :class="{
              show: text2,
            }"
          >
            <TextFade
              v-if="text2"
              :isInLine="true"
              :text="textArr2"
              @end="nextText2"
            />
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div class="view-textContent" v-if="text3">
          <TextShow :text="textArr3" @end="nextBtnShow = true" />
        </div>
      </transition>
    </div>
    <transition name="fade">
      <Parallax v-if="animateBG" />
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
import TextFade from "@/components/TextFade";
import TextShow from "@/components/TextShow";
import Parallax from "@/components/Parallax";

@Options({
  data() {
    return {
      nextBtnShow: false,
      text2: false,
      text1: true,
      text3: false,
      animateBG: false,
      textArr: [
        {
          content: `自此，男孩儿做的每一件事情都带有女孩儿的影子。`,
        },
      ],
      textArr2: [
        {
          content: `<span class="view_6-word word1">高中</span>`,
          time: 1000,
        },
        {
          content: `、<span class="view_6-word word2">大学</span>`,
          time: 1000,
        },
        {
          content: `、<span class="view_6-word word3">毕业</span>`,
          time: 1000,
        },
        {
          content: `、<span class="view_6-word word4">工作</span>`,
          time: 1000,
        },
        {
          content: `、<span class="view_6-word word5">生活</span>`,
          time: 1000,
        },
        {
          content: `、<span class="view_6-word word6">学习</span>。。。`,
          time: 1000,
        },
      ],
      textArr3: [
        {
          content: "每一个词语背后都伴随着成长和青春的离去。。",
        },
        {
          content: `<span class="girl">女孩儿</span>，离<span class="boy">男孩儿</span>，越来越<span class="yuan">远</span>。。。。`,
        },
      ],
    };
  },
  components: {
    Parallax,
    NextBtn,
    TextFade,
    TextShow,
  },
  methods: {
    async nextText() {
      const _this = this;
      _this.text2 = true;
      timeOut({
        func() {
          _this.animateBG = true;
        },
        time: 3000,
      });
    },
    async nextText2() {
      const _this = this;
      timeOut({
        func() {
          _this.text1 = false;
          _this.text2 = false;
          _this.text3 = true;
        },
        time: 2000,
      });
    },
  },
})
export default class View extends Vue {}
</script>

<style lang="scss">
.view_6 {
  .parallax {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .boy {
    text-shadow: 3px 5px 5px #0099cc;
  }
  .girl {
    text-shadow: 3px 5px 5px #ff9999;
  }
  .view-textBox {
    position: relative;
    z-index: 10;
  }
  .view_6-word {
    font-size: 22px;
    text-shadow: 3px 5px 5px #656b79;
  }
  .view-6-text2box {
    height: 68px;
    opacity: 0;
    margin-top: 30px;

    &.show {
      opacity: 1;
    }
  }
  .word1 {
    color: #3366cc;
    text-shadow: 3px 5px 5px #3366cc;
  }
  .word2 {
    color: #996600;
    text-shadow: 3px 5px 5px #996600;
  }
  .word3 {
    color: #99cc66;
    text-shadow: 3px 5px 5px #99cc66;
  }
  .word4 {
    color: #cc0033;
    text-shadow: 3px 5px 5px #cc0033;
  }
  .word5 {
    color: #0099cc;
    text-shadow: 3px 5px 5px #0099cc;
  }
  .word6 {
    color: #999966;
    text-shadow: 3px 5px 5px #999966;
  }
  .yuan {
    color: #0066cc;
  }
}
</style>
<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_6 {
  background-color: #dcdcdc;
  color: #000000;
  text-shadow: 3px 5px 5px #656b79;
}
</style>
