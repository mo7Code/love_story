<template>
  <div class="text-fade">
    <template v-for="(item, index) in textArr" :key="index">
      <div
        v-if="!isInLine"
        v-html="item.content"
        class="opacity0 transition-3"
        :class="[
          {
            opacity1: textShowArr[index],
          },
          item.class,
        ]"
      ></div>
      <span
        v-if="isInLine"
        v-html="item.content"
        class="opacity0 transition-3"
        :class="[
          {
            opacity1: textShowArr[index],
          },
          item.class,
        ]"
      ></span>
    </template>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { timeOut } from "@/utils/utils";

@Options({
  props: {
    text: {
      type: Array,
      default() {
        return [
          {
            content: "我爱你",
            class: "text",
            time: 3000,
          },
          {
            content: "我恨你",
            class: "text",
            time: 3000,
          },
          {
            content: "我喜欢你",
            class: "text",
            time: 3000,
          },
          {
            content: "我永远陪着你",
            class: "text",
            time: 3000,
          },
        ];
      },
    },
    isInLine: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultTextObj: {
        content: "我爱你",
        class: "text",
        time: 3000,
      },
      textArr: [],
      textShowArr: [],
      textShowIndex: 0,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const len = this.text.length;
      const textShowArr = [];
      const textArr = [];
      for (let i = 0; i < len; i++) {
        const el = this.text[i];
        textArr.push({
          ...this.defaultTextObj,
          ...el,
        });
        textShowArr.push(false);
      }
      this.textArr = textArr;
      this.textShowArr = textShowArr;
      this.timeOutShow();
    },
    async timeOutShow() {
      const _this = this;
      await timeOut({
        func() {
          _this.textShowArr[_this.textShowIndex] = true;
        },
        time: _this.getTime(_this.textShowIndex),
      }).then(() => {
        if (_this.textShowIndex < _this.text.length) {
          _this.textShowIndex++;
          _this.timeOutShow();
        } else {
          _this.$emit("end");
        }
      });
    },
    getTime(index: number) {
      if (this.textArr[index]) {
        return this.textArr[index].time;
      } else {
        return this.textArr[this.textArr.length - 1].time;
      }
    },
  },
})
export default class TextFade extends Vue {}
</script>

<style scoped lang="scss">
/* opacity0 */
.opacity0 {
  opacity: 0;
}

.opacity1 {
  opacity: 1;
}

.transition-3 {
  transition: opacity 3s ease;
}
</style>
