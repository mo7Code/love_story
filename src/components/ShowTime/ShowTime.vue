<template>
  <div class="show-time">
    <div class="show-time__box year" v-if="showStatus[0]">
      <span class="show-time__number">{{ doubleNum(timeStep.Y) }}</span>
      <span class="show-time__text">年</span>
    </div>

    <div class="show-time__box month" v-if="showStatus[1]">
      <span class="show-time__number">{{ doubleNum(timeStep.M) }}</span>
      <span class="show-time__text">个月</span>
    </div>

    <div class="show-time__box day" v-if="showStatus[2]">
      <span class="show-time__number">{{ doubleNum(timeStep.D) }}</span>
      <span class="show-time__text">天</span>
    </div>

    <div class="show-time__box hours" v-if="showStatus[3]">
      <span class="show-time__number">{{ doubleNum(timeStep.H) }}</span>
      <span class="show-time__text">小时</span>
    </div>

    <div class="show-time__box minutes" v-if="showStatus[4]">
      <span class="show-time__number">{{ doubleNum(timeStep.m) }}</span>
      <span class="show-time__text">分</span>
    </div>

    <div class="show-time__box seconds" v-if="showStatus[5]">
      <span class="show-time__number">{{ doubleNum(timeStep.s) }}</span>
      <span class="show-time__text">秒</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { doubleNum } from "@/utils/utils";
@Options({
  props: {
    timeStep: {
      type: Object,
      default() {
        return {
          Y: 0,
          M: 0,
          D: 0,
          H: 0,
          m: 0,
          s: 0,
        };
      },
    },
  },
  watch: {
    timeStep(val) {
      const arr = [];
      let num = 0;
      for (const key in val) {
        if (Object.prototype.hasOwnProperty.call(val, key)) {
          const el = val[key];
          if (el && num < 3) {
            num += 1;
            arr.push(true);
          } else {
            arr.push(false);
          }
        }
      }
      let step = 0;
      for (let index = 0; index < 3; index++) {
        const el = arr[index];
        if (!el) {
          step += 1;
        }
      }
      if (step > 2) {
        arr[arr.length - 1] = true;
      }
      this.showStatus = arr;
    },
  },
  data() {
    return {
      showStatus: [false, false, false, false, false, false],
    };
  },
  methods: {
    doubleNum(param: any) {
      // return doubleNum(param);
      return param;
    },
  },
})
export default class ShowTime extends Vue {}
</script>

<style lang="scss"></style>
