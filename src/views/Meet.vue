<template>
  <div class="Meet-wrapper">
    <transition name="fade">
      <div v-if="pageShow">
        <TextFade :text="textArr" @end="next2" />
        <TextFade :text="textArr2" v-if="textArr2Status" @end="nextBtn" />
        <GoldFish />
      </div>
    </transition>
    <transition name="fade">
      <div class="meet-btn" v-if="btnStatus">
        <div class="meet-ok" @click="agree">嗯，你好，我叫刘浠。</div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TextFade from "@/components/TextFade";
import GoldFish from "@/components/GoldFish";
import axios from "axios";
import { timeOut } from "@/utils/utils";
import { getSaveTime } from "@/utils/utils";
import { setMobile } from "@/utils/utils";
setMobile();
@Options({
  data() {
    return {
      pageShow: false,
      btnStatus: false,
      textArr: [
        {
          content: `嗨，刘浠。`,
        },
        {
          content: `<span class="longtime">好久不见。</span>`,
        },
      ],
      textArr2Status: false,
      textArr2: [
        {
          content: `我叫梅昌亮，`,
        },
        {
          content: `我，我<span class="like">喜欢你</span>很久了。`,
        },
        {
          content: `可以重新认识一下吗？`,
        },
      ],
    };
  },
  components: {
    TextFade,
    GoldFish,
  },
  mounted() {
    this.pageShow = true;
  },
  methods: {
    agree() {
      const _this = this;
      const str = new Date().getTime();
      getSaveTime().then((res: any) => {
        if (res) {
          _this.$router.push("/keep");
        } else {
          axios
            .get("https://api.meichangliang.com/save?data=" + str)
            .then(() => {
              _this.nextFunc();
            });
        }
      });
    },
    nextFunc() {
      const _this = this;

      _this.pageShow = false;
      _this.btnStatus = false;

      timeOut({
        func() {
          window.location.href = "/";
        },
        time: 3000,
      });
    },
    next2() {
      this.textArr2Status = true;
    },
    nextBtn() {
      this.btnStatus = true;
    },
  },
})
export default class Meet extends Vue {}
</script>

<style lang="scss">
.Meet-wrapper {
  .longtime {
    color: #99ccff;
  }
  .like {
    color: #ff6666;
  }
}
</style>

<style lang="scss" scoped>
@import url("~@/assets/view.scss");
.Meet-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #ffffff;
  left: 0;
  top: 0;
  text-align: center;
  font-size: 30px;
  .text-fade {
    margin-top: 40px;
  }
  .goldFish {
    position: absolute;
    right: 120px;
    bottom: 120px;
  }
}
.meet-btn {
  margin-top: 40px;
}

.btn {
  display: inline-block;
  padding: 4px 8px;
  font-size: 24px;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 4px;
  border-image: linear-gradient(#f80, #2ed) 20 20;
}
.meet-ok {
  margin-top: 60px;
  @extend .btn;
}
</style>
