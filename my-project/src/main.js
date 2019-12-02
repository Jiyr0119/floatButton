import Vue from "vue";
import App from "./App.vue";
import mandMobile from "mand-mobile";
import "mand-mobile/lib/mand-mobile.css";
Vue.config.productionTip = false;
// 还要在mainjs里面
import FloatBtn from "@/components/floatBtn/floatBtn";
Vue.use(FloatBtn); // 增加 悬浮按钮

Vue.use(mandMobile);
new Vue({
  render: h => h(App)
}).$mount("#app");
