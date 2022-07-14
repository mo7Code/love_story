<template>
  <div class="text-fade">
    <transition name="fade" v-for="(item, index) in textArr" :key="index">
      <div
        v-if="textShowArr[index]"
        v-html="item.content"
        :class="[item.class]"
      ></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { timeOut } from "@/utils/utils";

@Options({
  props: {
    isHide: {
      //走过的每一行是否保留
      type: Boolean,
      default: true,
    },
    isEndLine: {
      // 是否保留最好一行
      type: Boolean,
      default: true,
    },
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

      // 下一个开始前消灭上一个
      if (_this.isHide) {
        if (typeof this.textShowArr[_this.textShowIndex - 1] !== "undefined") {
          _this.textShowArr[_this.textShowIndex - 1] = false;
        }
      }

      //下一个开始出现
      await timeOut({
        func() {
          _this.textShowArr[_this.textShowIndex] = true;
        },
        time: _this.getTime(_this.textShowIndex),
      });

      if (_this.isEndLine) {
        if (_this.textShowIndex === this.textArr.length - 1) {
          setTimeout(() => {
            _this.$emit("end");
          }, 2500);
          return;
        }
      }

      // 终结递归
      if (_this.textShowIndex < _this.text.length) {
        _this.textShowIndex++;
        if (_this.isHide) {
          // 等待上一个完全消失
          setTimeout(() => {
            _this.timeOutShow();
          }, 2500);
        } else {
          _this.timeOutShow();
        }
      } else {
        _this.$emit("end");
        return;
      }
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
