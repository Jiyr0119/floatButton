<template>
  <div class="yht-float-btn pos-r" v-show="showBtn"
    :style="{'width':itemWidth+'px','height':itemHeight+'px','left':left+'px','top':top+'px'}" ref="floatDiv">
    <div class="top-icon pos-a">
      <transition name="slide-fade">
        <div class="float-box text-center hide-box" v-show="show" @click="handleClickItem(0)">
          <!-- 问题 -->
          <img src="@/assets/yht/icon_question.png" alt="">
        </div>
      </transition>
      <transition name="slide-fade">
        <div class="float-box text-center hide-box" v-show="show" @click="handleClickItem(1)">
          <img src="@/assets/yht/icon_home.png" alt="">
          <!-- 首页 -->
        </div>
      </transition>
    </div>
    <div class="float-box text-center pos-a bottom-icon" @click="handleClickMenu">
      <div>
        <img v-if="show" src="@/assets/yht/icon_close.png" alt="">
        <img v-else src="@/assets/yht/icon_shortcut.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "drag",
  components: {},
  props: {
    text: {
      type: String,
      default: "默认文字"
    },
    itemWidth: {
      type: Number,
      default: 66
    },
    itemHeight: {
      type: Number,
      default: 66
    },
    gapWidth: {
      type: Number,
      default: 10
    },
    coefficientHeight: {
      type: Number,
      default: 0.8
    },
    showBtn: {
      // 是否显示此toast
      default: false
    }
  },
  data() {
    return {
      timer: null,
      currentTop: 0,
      clientWidth: 0,
      clientHeight: 0,
      left: 0,
      top: 0,
      show: false
    };
  },
  created() {
    this.clientWidth = document.documentElement.clientWidth;
    this.clientHeight = document.documentElement.clientHeight;
    this.left = this.clientWidth - this.itemWidth - this.gapWidth;
    this.top = this.clientHeight * this.coefficientHeight - 140;
    this.currentTop = this.top; // 这里处理拖拽按钮往上滑的问题
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollStart);
    this.$nextTick(() => {
      const div = this.$refs.floatDiv;
      div.addEventListener("touchstart", e => {
        div.style.transition = "none";
      });
      div.addEventListener("touchmove", e => {
        e.preventDefault();
        if (e.targetTouches.length === 1) {
          let touch = event.targetTouches[0];
          this.left = touch.clientX - this.itemWidth / 2;
          this.top = touch.clientY - this.itemHeight / 2;
        }
      });
      div.addEventListener("touchend", e => {
        div.style.transition = "all 0.3s";
        if (this.left > this.clientWidth / 2) {
          // 浮动靠右边
          this.left = this.clientWidth - this.itemWidth - this.gapWidth;
        } else {
          // 靠左边
          this.left = this.gapWidth;
        }
        if (this.top < 0) {
          // 防止滑到上方被隐藏
          this.top = this.clientHeight * this.coefficientHeight - 140;
        }
      });
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScrollStart);
  },
  methods: {
    handleScrollStart() {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.handleScrollEnd();
      }, 300);
      this.currentTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.left > this.clientWidth / 2) {
        this.left = this.clientWidth - this.itemWidth / 2;
      } else {
        this.left = -this.itemWidth / 2;
      }
    },
    handleScrollEnd() {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop === this.currentTop) {
        if (this.left > this.clientWidth / 2) {
          this.left = this.clientWidth - this.itemWidth - this.gapWidth;
        } else {
          this.left = this.gapWidth;
        }
        clearTimeout(this.timer);
      }
    },
    handleClickMenu() {
      this.show = !this.show;
    },
    handleClickItem() {}
  }
};
</script>

<style lang="less" scoped>
.yht-float-btn {
  z-index: 99999;
  transition: all 0.3s;
  position: fixed;
  bottom: 20vw;

  img {
    width: 66px;
    height: 66px;
    object-fit: contain;
    margin-bottom: 3px;
  }

  p {
    font-size: 7px;
  }
}
.float-box {
  width: 66px;
  height: 66px;
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.top-icon {
  left: 0;
  bottom: 66px;
}
.bottom-icon {
  bottom: 0;
  left: 0;
}
.pos-a {
  position: absolute;
}
</style>

