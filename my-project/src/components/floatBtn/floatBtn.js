// import Vue from 'vue';
import Float from './floatBtn.vue';
let dom;
const FloatBtn = {}; // 定义插件对象
FloatBtn.install = function(Vue, options) {
  // vue的install方法，用于定义vue插件
  if (document.getElementsByClassName('yht-float-btn').length) {
    return;
  }
  let Instance = Vue.extend(Float);
  const initInstance = () => {
    // 实例化vue实例
    dom = new Instance();
    dom.vm = dom.$mount();
    let boxEl = dom.$mount().$el;
    document.body.appendChild(boxEl);
  };
  Vue.prototype.$floatBtn = {
    showFloat(options) {
      if (!dom) {
        initInstance();
      }
      dom.vm.showBtn = true; // 显示toast
    },
    hideFloat(options = 0) {
      if (!dom) {
        initInstance();
      }
      dom.vm.showBtn = false; // 显示整体
    }
  };
};

export default FloatBtn;
