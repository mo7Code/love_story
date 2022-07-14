<template>
  <div class="animat">
    <div class="nav">
      <button
        plain
        size="mini"
        type="primary"
        v-for="(item, index) in animateName"
        :key="item.key"
        @click="switchAnimate(item)"
      >
        动画{{ index }}:{{ item.name }}
      </button>
    </div>
    <Parallax v-if="activeAnimate === 'Parallax'" />
    <Trees v-if="activeAnimate === 'Trees'" />
    <Lightning v-if="activeAnimate === 'Lightning'" />
    <WavesBtn v-if="activeAnimate === 'WavesBtn'" />
    <Rain v-if="activeAnimate === 'Rain'" />
    <JumpHeart v-if="activeAnimate === 'JumpHeart'" />
    <GoldFish v-if="activeAnimate === 'GoldFish'" />
    <SkyStart v-if="activeAnimate === 'SkyStart'" />
    <Sun v-if="activeAnimate === 'Sun'" />
    <Morning v-if="activeAnimate === 'Morning'" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Parallax from "@/components/Parallax";
import Trees from "@/components/Trees";
import Lightning from "@/components/Lightning";
import WavesBtn from "@/components/WavesBtn";
import Rain from "@/components/Rain";
import JumpHeart from "@/components/JumpHeart";
import GoldFish from "@/components/GoldFish";
import SkyStart from "@/components/SkyStart";
import Sun from "@/components/Sun";
import Morning from "@/components/Morning";
import { setMobile } from "@/utils/utils";
setMobile();

const animateName = [
  {
    name: "视差高楼",
    key: "Parallax",
  },
  {
    name: "树木疯长",
    key: "Trees",
  },
  {
    name: "黑夜闪电",
    key: "Lightning",
  },
  {
    name: "水波按钮",
    key: "WavesBtn",
  },
  {
    name: "下雨",
    key: "Rain",
  },
  {
    name: "心跳",
    key: "JumpHeart",
  },
  {
    name: "金鱼",
    key: "GoldFish",
  },
  {
    name: "星空",
    key: "SkyStart",
  },
  {
    name: "日落",
    key: "Sun",
  },
  {
    name: "早上好",
    key: "Morning",
  },
];

@Options({
  components: {
    Parallax,
    Trees,
    Lightning,
    WavesBtn,
    Rain,
    JumpHeart,
    GoldFish,
    SkyStart,
    Sun,
    Morning,
  },
  data() {
    return {
      animateName,
      activeAnimate: "Parallax",
    };
  },
  methods: {
    switchAnimate(item: Record<string, string>) {
      this.activeAnimate = item.key;
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.animat {
  width: 100%;
  height: 100%;
}
.nav {
  position: fixed;
  z-index: 99999;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
}
</style>
