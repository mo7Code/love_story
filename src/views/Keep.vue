<template>
  <div class="keep-wrapper">
    <transition name="fade">
      <div v-if="pageShow">
        <LoveTree />
      </div>
    </transition>

    <transition name="fade">
      <div v-if="clickAnimate" class="keep-cont">
        <div class="keep-cont__textbox">
          我们认识距今
          <ShowTime :timeStep="timeObj.know" />
        </div>
        <div class="keep-cont__textbox">
          我们再次相遇至今
          <ShowTime :timeStep="timeObj.meet" />
        </div>
        <div class="keep-cont__des">往后的每一天，都会有我</div>
        <div class="keep-cont__tip">
          以下功能开发中： 时间轴，相册，留言板，事件提醒器，音乐播放器
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="!pageShow" class="pagezhe"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { getSaveTime, getTime, timeElapse } from "@/utils/utils";
import ShowTime from "@/components/ShowTime";
import LoveTree from "@/components/LoveTree";
import { setPC, timeOut } from "@/utils/utils";
setPC();
@Options({
  data() {
    return {
      pageShow: false,
      reset: 0,
      know: 0,
      meet: 0,
      now: 0,
      timer: null,
      clickAnimate: false,
    };
  },
  components: { ShowTime, LoveTree },
  mounted() {
    const _this = this;
    _this.pageShow = true;
    _this.getNow();
    _this.getTime();
    function receiveMessage(e: any) {
      if (e.data.data === 123) {
        _this.handleTree();
      }
    }
    window.addEventListener("message", receiveMessage);
  },
  computed: {
    timeObj() {
      const resetRe = timeElapse(this.reset, this.now);
      const knowRe = timeElapse(this.know, this.now);
      const meetRe = timeElapse(this.meet, this.now);
      this.setDomTime(resetRe);
      return {
        reset: resetRe,
        know: knowRe,
        meet: meetRe,
      };
    },
  },
  methods: {
    getTime() {
      getSaveTime().then((res: any) => {
        const reset = res;
        this.reset = reset;
      });
      const { know, meet } = getTime();
      this.know = know;
      this.meet = meet;
    },
    getNow() {
      const now = new Date().getTime();
      this.now = now;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getNow();
      }, 1000);
    },
    setDomTime(resetRe: any) {
      localStorage.setItem("resetTime", JSON.stringify(resetRe));
    },
    handleTree() {
      const _this = this;
      timeOut({
        func() {
          _this.clickAnimate = true;
        },
        time: 12000,
      });
    },
  },
})
export default class Meet extends Vue {}
</script>

<style lang="scss">
@import url("~@/assets/view.scss");
.keep-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ffe;
  font-size: 1rem;
  overflow-y: scroll;
  .pagezhe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: #000;
    z-index: 999;
  }
}

.keep-cont {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.6rem;
  .show-time {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .show-time__number {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  .show-time__text {
    font-size: 0.8rem;
  }
  .show-time {
    margin-top: 0.3rem;
  }

  .year {
    .show-time__number {
      color: #ff6666;
    }
  }
  .month {
    .show-time__number {
      color: #ff9966;
    }
  }
  .day {
    .show-time__number {
      color: #ff9900;
    }
  }
  .hours {
    .show-time__number {
      color: #cc6699;
    }
  }
}
.keep-cont__textbox {
  margin-top: 1rem;
}
.keep-cont__des {
  margin-top: 0.9rem;
  font-size: 0.7rem;
  padding: 0 0.8rem;
}
.keep-cont__tip {
  margin-top: 3rem;
  font-size: 0.4rem;
  padding: 0 0.8rem;
  text-align: right;
  color: #ff9999;
}
</style>
