import {describe} from "mocha";
const expect = chai.expect;
import Vue from'vue'
import TabNavItem from '../src/tab-nav-item.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabNavItem', () => {

  it('存在.', () => {
    expect(TabNavItem).to.exist
  })

  it('接受name属性', () => {
    // 这里created报$on的错误,我这里重写created
    // console.log(TabNavItem)
    const Constructor = Vue.extend({...TabNavItem, created() {
      }})
    const vm = new Constructor({
      propsData: {
        name: 'user'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('user')
  })

  it('接受disabled属性', () => {
    // 这里created报$on的错误,我这里重写created
    const Constructor = Vue.extend({...TabNavItem, created() {
      }})
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    // 不能被点击行为测试
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })

})