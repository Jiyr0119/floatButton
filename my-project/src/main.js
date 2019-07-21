import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
// 还要在mainjs里面
import FloatBtn from '@/components/floatBtn/floatBtn';
Vue.use(FloatBtn); // 增加 悬浮按钮
new Vue({
  render: h => h(App)
}).$mount('#app');
