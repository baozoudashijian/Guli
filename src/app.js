import Vue from 'vue';
import App from "./App.vue"; // 不写全路径会报错
import Button from './button.vue'
import ButtonGroup from './button-group.vue'
import Icon  from './icon.vue'
import { Toast } from './plugin.js'
// 注册组件是异步操作
Vue.use(Toast)

export {
  Button,
  ButtonGroup,
  Icon
}


// 在最顶层必须要调用render方法，不然渲染不出来.
new Vue({
  el: '#app',
  data: {

  },
  render:c=>c(App)
})