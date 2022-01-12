import {describe} from "mocha";
import Vue from 'vue';
import Button from '../src/button/button.vue'
const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.exist
  })

  it('可以设置icon.', () => {
    const Construct = Vue.extend(Button)
    const vm = new Construct({
      propsData: {
        icon: 'setting'
      }
    }).$mount()
    // 我只是将这个icon放在了内存中，并没有放进document（页面中）
    // const useElement = document.querySelector('use')
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
    vm.$destroy()
  })
})