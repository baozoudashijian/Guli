import {describe} from "mocha";
import Vue from 'vue';
import Col from '../src/col.vue'
const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('存在.', () => {
    expect(Col).to.exist
  })

  it('接受span属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span : 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接受offset属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        offset: 2
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-offset-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })

  it('接受pc属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData : {
        pc: {
          span: 12,
          offset: '12'
        }
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-pc-12')).to.eq(true)
    expect(vm.$el.classList.contains('col-pc-offset-12')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
})