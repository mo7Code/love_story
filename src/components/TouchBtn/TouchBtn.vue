<template>
  <div class="container">
    <!-- Blue Buttons -->
    <div v-if="color === 'blue'">
      <a class="btn btn--lg btn--blue" v-if="size === 'lg'">{{ text }}</a>
      <a class="btn btn--df btn--blue" v-if="size === 'df'">{{ text }}</a>
      <a class="btn btn--md btn--blue" v-if="size === 'md'">{{ text }}</a>
      <a class="btn btn--sm btn--blue" v-if="size === 'sm'">{{ text }}</a>
    </div>

    <!-- Green Buttons -->
    <div v-if="color === 'green'">
      <a class="btn btn--lg btn--green" v-if="size === 'lg'">{{ text }}</a>
      <a class="btn btn--df btn--green" v-if="size === 'df'">{{ text }}</a>
      <a class="btn btn--md btn--green" v-if="size === 'md'">{{ text }}</a>
      <a class="btn btn--sm btn--green" v-if="size === 'sm'">{{ text }}</a>
    </div>

    <!-- Red Buttons -->
    <div v-if="color === 'red'">
      <a class="btn btn--lg btn--red" v-if="size === 'lg'">{{ text }}</a>
      <a class="btn btn--df btn--red" v-if="size === 'df'">{{ text }}</a>
      <a class="btn btn--md btn--red" v-if="size === 'md'">{{ text }}</a>
      <a class="btn btn--sm btn--red" v-if="size === 'sm'">{{ text }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    size: {
      type: String,
      default: "sm", // lg df md sm
    },
    color: {
      type: String,
      default: "green", // red green  blue
    },
    text: {
      type: String,
      default: "BACK", // red green  blue
    },
  },
})
export default class LoveBtn extends Vue {}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:300,400");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900");
.btn {
  display: inline-block;
  border: none;
  border-radius: 0.3em;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1),
    inset 0 -0.25em 0 rgba(0, 0, 0, 0.25), 0 0.25em 0.25em rgba(0, 0, 0, 0.05);
  color: #fff;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 1px;
  padding: 0.5em 1.5em 0.75em;
  position: relative;
  text-decoration: none;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.25);
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn:active {
  outline: none;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2),
    inset 0 2px 0 rgba(255, 255, 255, 0.1),
    inset 0 0.25em 0.5em rgba(0, 0, 0, 0.05);
  margin-top: 0.25em;
  padding-bottom: 0.5em;
}
.btn--blue {
  background-color: #3498db;
}
.btn--green {
  background-color: #1abc9c;
}
.btn--red {
  background-color: #e65d4f;
}
.btn--lg {
  font-size: 1.5em;
}
.btn--df {
  font-size: 1.25em;
}
.btn--md {
  font-size: 1em;
}
.btn--sm {
  font-size: 0.75em;
}
</style>
