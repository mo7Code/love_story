<template>
  <div class="scenery-wrapper">
    <transition name="fade">
      <div class="textpage" v-if="pageShow">
        <div class="view-textBox">
          <div class="view-textContent">
            <TextShow :text="textArr" @end="textEnd" />
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div class="scenery-page" v-if="sceneryShow">
        <transition name="fade">
          <div class="wrapper-page animate-list" v-if="animateIndex === 0">
            <div class="love-btn-box">
              <LoveBtn type="black" text="Love" @handle="animateIndex = 1" />
            </div>

            <div class="love-btn-box">
              <LoveBtn type="white" text="Love" @handle="animateIndex = 2" />
            </div>

            <div class="love-btn-box">
              <LoveBtn type="black" text="Love" @handle="animateIndex = 3" />
            </div>
            <transition name="fade">
              <NextBtn v-if="clickNum > 5" @next="nextPage" />
            </transition>
          </div>
        </transition>

        <transition name="fade">
          <div
            class="animate-wrapper animate-start animate-1"
            v-if="animateIndex === 1"
          >
            <div class="animate-title">我想和你一起看流星雨，一起数星星</div>
            <SkyStart />
          </div>
        </transition>

        <transition name="fade">
          <div
            class="animate-wrapper animate-start animate-2"
            v-if="animateIndex === 2"
          >
            <div class="animate-title">
              我想跟你一起欣赏最美的黄昏。
              <br />
              <span class="animate-des">tip：点击太阳</span>
            </div>
            <Sun />
          </div>
        </transition>

        <transition name="fade">
          <div
            class="animate-wrapper animate-start animate-3"
            v-if="animateIndex === 3"
          >
            <Morning />
          </div>
        </transition>

        <transition name="fade">
          <div class="back-button" v-if="animateIndex !== 0">
            <TouchBtn class="touch-btn" @click="animateIndex = 0" />
          </div>
        </transition>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="isPageEnd" class="pageend"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TextShow from "@/components/TextShow";
import { timeOut } from "@/utils/utils";
import LoveBtn from "@/components/LoveBtn";
import TouchBtn from "@/components/TouchBtn";

import SkyStart from "@/components/SkyStart";
import Sun from "@/components/Sun";
import Morning from "@/components/Morning";
import NextBtn from "@/components/NextBtn";
import { getSaveTime } from "@/utils/utils";
import { setMobile } from "@/utils/utils";
setMobile();
@Options({
  data() {
    return {
      isPageEnd: false,
      clickNum: 0,
      pageShow: false,
      sceneryShow: false,
      animateIndex: 0,
      textArr: [
        {
          content: "“喂，西西，我喜欢你”",
        },
      ],
    };
  },
  components: {
    TextShow,
    LoveBtn,
    TouchBtn,
    SkyStart,
    Sun,
    Morning,
    NextBtn,
  },
  mounted() {
    this.pageShow = true;
  },
  watch: {
    animateIndex(val) {
      this.clickNum += val;
    },
  },
  methods: {
    textEnd() {
      const _this = this;
      _this.pageShow = false;
      timeOut({
        func() {
          _this.sceneryShow = true;
        },
        time: 2000,
      });
    },
    nextPage() {
      const _this = this;
      _this.isPageEnd = true;
      timeOut({
        func() {
          getSaveTime().then((res: any) => {
            if (res) {
              _this.$router.push("/keep");
            } else {
              _this.$router.push("/meet");
            }
          });
        },
        time: 3000,
      });
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.animate-2 {
  #info {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.scenery-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #ffffff;
  left: 0;
  top: 0;
}
.textpage {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #ffffff;
  left: 0;
  top: 0;
}
.scenery-page {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #000;
  left: 0;
  top: 0;
}
.wrapper-page {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.love-btn-box {
  display: flex;
  justify-content: center;
}
.animate-list {
  height: 60%;
  top: 20%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.back-button {
  position: fixed;
  left: 5px;
  top: 5px;
  .touch-btn {
    opacity: 0.5;
  }
}

.animate-wrapper {
  position: relative;

  .animate-title {
    text-align: right;
    opacity: 0.5;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 3;
    color: #fff;
    font-size: 20px;
  }
}

.animate-2 {
  #info {
    display: none;
  }
  .animate-des {
    font-size: 12px;
  }
}

.pageend {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>
