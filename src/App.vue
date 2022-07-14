<template>
  <div>
    <audio
      id="music-wrzd"
      class="music-audio"
      :src="music.wrzd"
      preload
    ></audio>
    <audio id="music-pa" class="music-audio" :src="music.pa" preload></audio>
    <audio id="music-gym" class="music-audio" :src="music.gym" preload></audio>
    <audio id="music-dl" class="music-audio" :src="music.dl" preload></audio>
    <audio id="music-xy" class="music-audio" :src="music.xy" preload></audio>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getMusic } from "@/utils/utils";
@Options({
  data() {
    return {
      music: getMusic(),
    };
  },
  components: {},
  methods: {},
})
export default class Home extends Vue {}
</script>
<style lang="scss">
html,
body {
  overflow: hidden;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
