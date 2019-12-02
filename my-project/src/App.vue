<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div v-for="(item,index) of list" :key="index">
      <div class="img-box">
        <img v-for="(itemInner,indexInner) of item.pictlt" :key="indexInner" :src="itemInner" alt=""
          @click="handleImg(index,indexInner)">
      </div>
    </div>
    <md-image-viewer v-model="isViewerShow" :list="imgs" :has-dots="true" :initial-index="viewerIndex">
    </md-image-viewer>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import { ImageViewer } from "mand-mobile";
export default {
  name: "app",
  components: {
    // HelloWorld,
    // [ImageViewer.name]: ImageViewer
  },
  data() {
    return {
      isViewerShow: false,
      viewerIndex: 0,
      imgs: [],
      list: [
        {
          pictlt: [
            "https://testyht.cn/clinetfile/file/20191126/pipe_20191126111148701000001567897484.jpg",

            "https://testyht.cn/clinetfile/file/20191126/pipe_20191126111148701000000407761383.jpg",

            "https://testyht.cn/clinetfile/file/20191126/pipe_20191126111149701000001686016286.jpg",

            "https://testyht.cn/clinetfile/file/20191126/pipe_20191126111150701000000055109104.jpg",

            "https://testyht.cn/clinetfile/file/20191126/pipe_20191126111200701000001735073502.jpg"
          ]
        },
        {
          pictlt: [
            "https://testyht.cn/clinetfile/file/20191126/pipe_20191126111055701000000352264193.jpg"
          ]
        },
        {
          pictlt: [
            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141639701000001507224723.jpg",
            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141640701000001723354969.jpg",

            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141640701000001502382389.jpg",

            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141640701000001447128436.jpg",

            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141641701000001436615817.jpg"
          ]
        },
        {
          pictlt: [
            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141257701000001736238511.jpg",

            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141315701000001438908755.jpg",

            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141315701000001376575068.jpg",

            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141315701000000793360296.jpg",

            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141316701000001733266427.jpg"
          ]
        },
        {
          pictlt: [
            "https://testyht.cn/clinetfile/file/20191122/pipe_20191122141202701000001798810491.jpg"
          ]
        }
      ]
    };
  },
  created() {
    this.$floatBtn.showFloat();
  },
  methods: {
    handleImg(pIndex, index) {
      this.imgs = this.list[pIndex].pictlt;
      this.viewerIndex = index;
      this.isViewerShow = true;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.img-box img {
  width: 50px;
  height: 50px;
}
</style>
