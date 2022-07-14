<template>
  <div id="wavesBtn" class="wavesBtn">
    <div id="button" @click="handleClick">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import wavesBtn from "./wavesBtn";
import { timeOut } from "@/utils/utils";

@Options({
  props: {},
  mounted() {
    this.creatInit();
  },
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    creatInit() {
      wavesBtn();
    },
    async handleClick() {
      const _this = this;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        timeOut({
          func() {
            _this.$emit("next");
          },
          time: 3000,
        });
      }, 1000);
    },
  },
})
export default class WavesBtn extends Vue {}
</script>

<style lang="scss">
.wavesBtn {
  position: relative;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: #55b9f3;
  color: #c8deeb;
  overflow: hidden;
}

#button {
  z-index: 10;
  position: absolute;
  width: 40px;
  height: 40px;
  background: #55b9f3;
  border-radius: 50%;
  box-shadow: 6px 6px 12px #489dcf, -6px -6px 12px #62d5ff;
  cursor: pointer;
}
#button svg {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
#button.clicked {
  -webkit-animation: shadowFadeOut 200ms ease-out forwards,
    shadowFadeIn 200ms 300ms ease-in forwards;
  animation: shadowFadeOut 200ms ease-out forwards,
    shadowFadeIn 200ms 300ms ease-in forwards;
}
#button.clicked svg {
  -webkit-animation: fillFadeOut 200ms ease-out forwards,
    fillFadeIn 200ms 300ms ease-in forwards;
  animation: fillFadeOut 200ms ease-out forwards,
    fillFadeIn 200ms 300ms ease-in forwards;
}

.wave {
  z-index: 1;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 20px 20px 60px #489dcf, -20px -20px 60px #62d5ff;
  opacity: 0;
  -webkit-animation: fadeIn 400ms ease-out forwards, outside_grow 5s ease-out,
    fadeOut 3s 2s forwards;
  animation: fadeIn 400ms ease-out forwards, outside_grow 5s ease-out,
    fadeOut 3s 2s forwards;
}

.wave::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 0px;
  height: 0px;
  border-radius: 50%;
  box-shadow: inset 20px 20px 60px #489dcf, inset -20px -20px 60px #62d5ff;
  -webkit-animation: inside_grow 5s ease-out;
  animation: inside_grow 5s ease-out;
}

@-webkit-keyframes outside_grow {
  from {
    width: 20px;
    height: 20px;
  }
  to {
    width: 900px;
    height: 900px;
  }
}

@keyframes outside_grow {
  from {
    width: 20px;
    height: 20px;
  }
  to {
    width: 900px;
    height: 900px;
  }
}
@-webkit-keyframes inside_grow {
  from {
    width: 0px;
    height: 0px;
  }
  to {
    width: 880px;
    height: 880px;
  }
}
@keyframes inside_grow {
  from {
    width: 0px;
    height: 0px;
  }
  to {
    width: 880px;
    height: 880px;
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@-webkit-keyframes shadowFadeIn {
  0% {
    box-shadow: inset 6px 6px 12px #489dcf, inset -6px -6px 12px #62d5ff;
  }
  50% {
    box-shadow: none;
  }
  100% {
    box-shadow: 6px 6px 12px #489dcf, -6px -6px 12px #62d5ff;
  }
}
@keyframes shadowFadeIn {
  0% {
    box-shadow: inset 6px 6px 12px #489dcf, inset -6px -6px 12px #62d5ff;
  }
  50% {
    box-shadow: none;
  }
  100% {
    box-shadow: 6px 6px 12px #489dcf, -6px -6px 12px #62d5ff;
  }
}
@-webkit-keyframes shadowFadeOut {
  0% {
    box-shadow: 6px 6px 12px #489dcf, -6px -6px 12px #62d5ff;
  }
  50% {
    box-shadow: none;
  }
  100% {
    box-shadow: inset 6px 6px 12px #489dcf, inset -6px -6px 12px #62d5ff;
  }
}
@keyframes shadowFadeOut {
  0% {
    box-shadow: 6px 6px 12px #489dcf, -6px -6px 12px #62d5ff;
  }
  50% {
    box-shadow: none;
  }
  100% {
    box-shadow: inset 6px 6px 12px #489dcf, inset -6px -6px 12px #62d5ff;
  }
}
@-webkit-keyframes fillFadeOut {
  from {
    fill: none;
  }
  to {
    fill: currentColor;
  }
}
@keyframes fillFadeOut {
  from {
    fill: none;
  }
  to {
    fill: currentColor;
  }
}
@-webkit-keyframes fillFadeIn {
  from {
    fill: currentcolor;
  }
  to {
    fill: none;
  }
}
@keyframes fillFadeIn {
  from {
    fill: currentcolor;
  }
  to {
    fill: none;
  }
}
</style>
