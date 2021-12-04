/*
 * @Author: your name
 * @Date: 2021-12-03 21:11:40
 * @LastEditTime: 2021-12-04 00:03:38
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Guli/src/app.js
 */
import Vue from 'vue';
import App from "./App.vue"; // 不写全路径会报错
import Button from './button.vue'
import ButtonGroup from './button-group.vue'
import Icon  from './icon.vue'

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