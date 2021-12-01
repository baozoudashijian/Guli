import Vue from 'vue';
import Button from './button.vue'

console.log(Button)

Vue.component('g-button', Button)

// 在最顶层必须要调用render方法，不然渲染不出来.
new Vue({
  el: '#app',
  data: {

  },
  render:c=>c(Button)
})