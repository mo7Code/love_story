<template>
  <div class="love-btn">
    <button
      class="button button--primary"
      v-if="type === 'black'"
      @click="handleClick($event)"
    >
      <span class="button__text">{{ text }}</span
      ><span class="button__icon"
        ><span class="heart__particles"
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
        ></span>
        <svg class="heart heart--stroke" viewBox="0 0 24 24">
          <path
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          ></path>
        </svg>
        <svg class="heart heart--fill" viewBox="0 0 24 24">
          <path
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          ></path></svg
      ></span>
    </button>

    <button
      class="button button--secondary"
      v-if="type === 'white'"
      @click="handleClick($event)"
    >
      <span class="button__text">{{ text }}</span
      ><span class="button__icon"
        ><span class="heart__particles"
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
          ><span class="heart__particle"></span
        ></span>
        <svg class="heart heart--stroke" viewBox="0 0 24 24">
          <path
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          ></path>
        </svg>
        <svg class="heart heart--fill" viewBox="0 0 24 24">
          <path
            d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
          ></path></svg
      ></span>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import loveBtn from "./loveBtn";

@Options({
  props: {
    type: {
      type: String,
      default: "white", // black
    },
    text: {
      type: String,
      default: "Love", // black
    },
  },
  data() {
    return {
      timer: null,
    };
  },
  mounted() {
    this.creatInit();
  },
  methods: {
    creatInit() {
      loveBtn();
    },
    handleClick() {
      const _this = this;
      clearTimeout(_this.timer);
      _this.timer = setTimeout(() => {
        _this.$emit("handle");
      }, 850);
    },
  },
})
export default class LoveBtn extends Vue {}
</script>

<style lang="scss">
.love-btn {
  * {
    box-sizing: border-box;
  }
}

:root {
  --transition: 0.3;
  --heart-fill: #e63b19;
}
.heart {
  height: 100%;
  width: 100%;
  position: absolute;
}
.heart--stroke {
  stroke: var(--heart-stroke);
  stroke-width: 2.5px;
  fill: none;
}
.heart--fill {
  stroke: none;
  fill: var(--heart-fill);
  -webkit-transform: scale(var(--scale, 0));
  transform: scale(var(--scale, 0));
}
.heart__particle {
  height: 16px;
  width: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: hsl(var(--h), 80%, 70%);
  -webkit-transform: translate(-50%, -50%) rotate(calc(var(--r, 0) * 1deg))
    translate(0, calc(var(--radius, 0) * 1px)) scale(0);
  transform: translate(-50%, -50%) rotate(calc(var(--r, 0) * 1deg))
    translate(0, calc(var(--radius, 0) * 1px)) scale(0);
}
.button {
  height: 40px;
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100px;
  font-family: sans-serif;
  text-align: left;
  outline: transparent;
  color: var(--stroke);
  background: var(--fill);
  background: hsl(
    var(--hue),
    calc(var(--saturation) * 1%),
    calc(var(--lightness) * 1%)
  );
  box-shadow: 2px 4px 4px rgba(26, 26, 26, 0.5);
  -webkit-transition: box-shadow 0.2s, background 0.2s;
  transition: box-shadow 0.2s, background 0.2s;
}
.button--primary {
  --hue: 260;
  --saturation: 50;
  --lightness: 20;
  --stroke: #fff;
  --heart-stroke: #fff;
}
.button--secondary {
  --hue: 0;
  --saturation: 0;
  --lightness: 100;
  --stroke: #666;
  --heart-stroke: #999;
}
.button__text {
  margin-right: 6px;
  opacity: var(--opacity);
}
.button__icon {
  position: relative;
  height: 24px;
  width: 24px;
}
.button:hover {
  --scale: 0.3;
  background: hsl(
    var(--hue),
    calc(var(--saturation) * 1%),
    calc(var(--lightness) * 0.96%)
  );
  box-shadow: 2px 2px 4px rgba(26, 26, 26, 0.5);
}
.button:hover .heart--fill {
  -webkit-transition: -webkit-transform calc(var(--transition) * 1s)
    cubic-bezier(0.7, 0.9, 0.6, 2.5);
  transition: -webkit-transform calc(var(--transition) * 1s)
    cubic-bezier(0.7, 0.9, 0.6, 2.5);
  transition: transform calc(var(--transition) * 1s)
    cubic-bezier(0.7, 0.9, 0.6, 2.5);
  transition: transform calc(var(--transition) * 1s)
      cubic-bezier(0.7, 0.9, 0.6, 2.5),
    -webkit-transform calc(var(--transition) * 1s) cubic-bezier(0.7, 0.9, 0.6, 2.5);
}
.button:active {
  background: hsl(
    var(--hue),
    calc(var(--saturation) * 1%),
    calc(var(--lightness) * 0.92%)
  );
  box-shadow: 0 0 0 rgba(26, 26, 26, 0.5);
}
.button--active,
.button--active:hover {
  --scale: 0.94;
  --opacity: 0.25;
}
.button--active .heart--fill,
.button--active:hover .heart--fill {
  -webkit-transition: -webkit-transform calc(var(--transition) * 1s)
    cubic-bezier(0.7, 0.9, 0.6, 2.5);
  transition: -webkit-transform calc(var(--transition) * 1s)
    cubic-bezier(0.7, 0.9, 0.6, 2.5);
  transition: transform calc(var(--transition) * 1s)
    cubic-bezier(0.7, 0.9, 0.6, 2.5);
  transition: transform calc(var(--transition) * 1s)
      cubic-bezier(0.7, 0.9, 0.6, 2.5),
    -webkit-transform calc(var(--transition) * 1s) cubic-bezier(0.7, 0.9, 0.6, 2.5);
}
.button--active .button__text,
.button--active:hover .button__text {
  -webkit-transition: opacity 0.1s;
  transition: opacity 0.1s;
}
.button--active .heart__particle,
.button--active:hover .heart__particle {
  opacity: 0;
  -webkit-transform: translate(-50%, -50%) rotate(calc(var(--r, 0) * 1deg))
    translate(0, calc(var(--d, 0) * 1px)) scale(var(--s));
  transform: translate(-50%, -50%) rotate(calc(var(--r, 0) * 1deg))
    translate(0, calc(var(--d, 0) * 1px)) scale(var(--s));
  -webkit-transition: opacity calc(var(--transition) * 0.25s)
      calc(var(--t) * 1.25s),
    -webkit-transform calc(var(--t) * 1.25s) calc(var(--transition) * 0.5s);
  transition: opacity calc(var(--transition) * 0.25s) calc(var(--t) * 1.25s),
    -webkit-transform calc(var(--t) * 1.25s) calc(var(--transition) * 0.5s);
  transition: transform calc(var(--t) * 1.25s) calc(var(--transition) * 0.5s),
    opacity calc(var(--transition) * 0.25s) calc(var(--t) * 1.25s);
  transition: transform calc(var(--t) * 1.25s) calc(var(--transition) * 0.5s),
    opacity calc(var(--transition) * 0.25s) calc(var(--t) * 1.25s),
    -webkit-transform calc(var(--t) * 1.25s) calc(var(--transition) * 0.5s);
}
</style>
