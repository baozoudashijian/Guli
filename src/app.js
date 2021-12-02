import Vue from 'vue';
import App from "./App.vue"; // 不写全路径会报错


// 在最顶层必须要调用render方法，不然渲染不出来.
new Vue({
  el: '#app',
  data: {

  },
  render:c=>c(App)
})