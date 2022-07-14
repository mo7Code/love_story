<template>
  <div class="view-wrapper view_1">
    <div class="view-textBox">
      <div class="view-textContent">
        <textFade :text="textArr" @end="nextBtnShow = true" />
      </div>
    </div>
    <transition name="fade">
      <div class="view_1-wavebtn" v-if="nextBtnShow">
        <WavesBtn v-bind="$attrs" />
      </div>
    </transition>
  </div>
</template>
// 开场白
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import NextBtn from "@/components/NextBtn";
import WavesBtn from "@/components/WavesBtn";
import textFade from "@/components/TextFade/textFade.vue";

@Options({
  data() {
    return {
      textArr: [
        {
          content: "你准备好了吗？",
        },
        {
          content: "请带上耳机。。。",
        },
      ],
      nextBtnShow: false,
    };
  },
  components: {
    NextBtn,
    WavesBtn,
    textFade,
  },
  methods: {},
})
export default class View extends Vue {}
</script>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.view_1 {
  background-color: #000;
  color: #fff;
}

.view_1-wavebtn {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
