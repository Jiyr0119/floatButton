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
            "http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a",
            "http://manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7",
            "http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/6ee5a0ba9340ca452cbc827902e76be0",
            "http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/d751dd4487e265de3b8587f504eee2c3"
          ]
        },
        {
          pictlt: [
            "http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a"
          ]
        },
        {
          pictlt: [
            "http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a",
            "http://manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7",
            "http://manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7",
            "http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/6ee5a0ba9340ca452cbc827902e76be0",
            "http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/d751dd4487e265de3b8587f504eee2c3"
          ]
        },
        {
          pictlt: [
            "http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/27fb7f097ca218d743f816836bc7ea4a",
            "http://manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7",
            "http://manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7",
            "http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/6ee5a0ba9340ca452cbc827902e76be0",
            "http://img-hxy021.didistatic.com/static/strategymis/insurancePlatform_spu/uploads/d751dd4487e265de3b8587f504eee2c3"
          ]
        },
        {
          pictlt: [
            "http://manhattan.didistatic.com/static/manhattan/insurancePlatform_spu/uploads/c2912793a222eb24b606a582fd849ab7"
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
      this.imgs = [];
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
