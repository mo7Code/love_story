<template>
  <div class="next-btn-wrapper">
    <button
      v-if="btnShow"
      class="next-btn"
      :class="{
        flashing: flashingStatus,
      }"
      @click="flayFun"
    >
      <span class="default">Next</span>
      <span class="success">Loading...</span>
      <div class="left"></div>
      <div class="right"></div>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import nextBtn from "./nextBtn";

@Options({
  props: {},
  data() {
    return {
      btnText: "Next",
      flashingStatus: true,
      btnShow: true,
    };
  },
  mounted() {
    this.creatInit();
  },
  methods: {
    creatInit() {
      nextBtn();
    },
    flayFun() {
      this.flashingStatus = false;
      setTimeout(() => {
        this.btnShow = false;
        this.$emit("next");
      }, 1600);
    },
  },
})
export default class NextBtn extends Vue {}
</script>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");

.next-btn-wrapper {
  width: 100%;
  position: fixed;
  z-index: 99;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 10px;
}

.next-btn {
  --primary: #707070;
  --primary-dark: #525252;
  --primary-darkest: #333333;
  --text: #ffffff;
  --text-opacity: 1;
  --success: #2b3044;
  --success-scale: 0.2;
  --success-opacity: 0;
  --border-radius: 7;
  --overflow: hidden;
  --rotate: 0;
  --plane-x: 0;
  --plane-y: 0;
  --plane-opacity: 1;
  --left-wing-background: var(--primary);
  --left-wing-first-x: 0;
  --left-wing-first-y: 0;
  --left-wing-second-x: 50;
  --left-wing-second-y: 0;
  --left-wing-third-x: 0;
  --left-wing-third-y: 100;
  --left-body-background: var(--primary);
  --left-body-first-x: 50;
  --left-body-first-y: 0;
  --left-body-second-x: 50;
  --left-body-second-y: 100;
  --left-body-third-x: 0;
  --left-body-third-y: 100;
  --right-wing-background: var(--primary);
  --right-wing-first-x: 50;
  --right-wing-first-y: 0;
  --right-wing-second-x: 100;
  --right-wing-second-y: 0;
  --right-wing-third-x: 100;
  --right-wing-third-y: 100;
  --right-body-background: var(--primary);
  --right-body-first-x: 50;
  --right-body-first-y: 0;
  --right-body-second-x: 50;
  --right-body-second-y: 100;
  --right-body-third-x: 100;
  --right-body-third-y: 100;
  display: block;
  cursor: pointer;
  position: relative;
  border: 0;
  padding: 8px 0;
  min-width: 100px;
  text-align: center;
  margin: 0;
  line-height: 24px;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  background: none;
  outline: none;
  color: var(--text);
  -webkit-transform: rotate(calc(var(--rotate) * 1deg)) translateZ(0);
  transform: rotate(calc(var(--rotate) * 1deg)) translateZ(0);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}
.next-btn .left,
.next-btn .right {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: var(--plane-opacity);
  -webkit-transform: translate(
      calc(var(--plane-x) * 1px),
      calc(var(--plane-y) * 1px)
    )
    translateZ(0);
  transform: translate(calc(var(--plane-x) * 1px), calc(var(--plane-y) * 1px))
    translateZ(0);
}
.next-btn .left:before,
.next-btn .left:after,
.next-btn .right:before,
.next-btn .right:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: calc(var(--border-radius) * 1px);
  -webkit-transform: translate(var(--x, 0.4%), var(--y, 0)) translateZ(0);
  transform: translate(var(--x, 0.4%), var(--y, 0)) translateZ(0);
  z-index: var(--z-index, 2);
  background: var(--background, var(--left-wing-background));
  -webkit-clip-path: polygon(
    calc(var(--first-x, var(--left-wing-first-x)) * 1%)
      calc(var(--first-y, var(--left-wing-first-y)) * 1%),
    calc(var(--second-x, var(--left-wing-second-x)) * 1%)
      calc(var(--second-y, var(--left-wing-second-y)) * 1%),
    calc(var(--third-x, var(--left-wing-third-x)) * 1%)
      calc(var(--third-y, var(--left-wing-third-y)) * 1%)
  );
  clip-path: polygon(
    calc(var(--first-x, var(--left-wing-first-x)) * 1%)
      calc(var(--first-y, var(--left-wing-first-y)) * 1%),
    calc(var(--second-x, var(--left-wing-second-x)) * 1%)
      calc(var(--second-y, var(--left-wing-second-y)) * 1%),
    calc(var(--third-x, var(--left-wing-third-x)) * 1%)
      calc(var(--third-y, var(--left-wing-third-y)) * 1%)
  );
}
.next-btn .left:after {
  --x: 0;
  --z-index: 1;
  --background: var(--left-body-background);
  --first-x: var(--left-body-first-x);
  --first-y: var(--left-body-first-y);
  --second-x: var(--left-body-second-x);
  --second-y: var(--left-body-second-y);
  --third-x: var(--left-body-third-x);
  --third-y: var(--left-body-third-y);
}
.next-btn .right:before {
  --x: -0.4%;
  --z-index: 2;
  --background: var(--right-wing-background);
  --first-x: var(--right-wing-first-x);
  --first-y: var(--right-wing-first-y);
  --second-x: var(--right-wing-second-x);
  --second-y: var(--right-wing-second-y);
  --third-x: var(--right-wing-third-x);
  --third-y: var(--right-wing-third-y);
}
.next-btn .right:after {
  --x: 0;
  --z-index: 1;
  --background: var(--right-body-background);
  --first-x: var(--right-body-first-x);
  --first-y: var(--right-body-first-y);
  --second-x: var(--right-body-second-x);
  --second-y: var(--right-body-second-y);
  --third-x: var(--right-body-third-x);
  --third-y: var(--right-body-third-y);
}
.next-btn span {
  display: block;
  position: relative;
  z-index: 4;
  opacity: var(--text-opacity);
}
.next-btn span.success {
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
  -webkit-transform: rotate(calc(var(--rotate) * -1deg))
    scale(var(--success-scale)) translateZ(0);
  transform: rotate(calc(var(--rotate) * -1deg)) scale(var(--success-scale))
    translateZ(0);
  opacity: var(--success-opacity);
  color: var(--success);
}

.flashing {
  opacity: 0.7;
  animation: blink 3s infinite;
}
@keyframes blink {
  from {
    opacity: 0.7;
  }

  50% {
    opacity: 0.3;
  }

  to {
    opacity: 0.7;
  }
}
</style>
