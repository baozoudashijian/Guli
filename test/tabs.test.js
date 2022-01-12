import {describe} from "mocha";
const expect = chai.expect;
import Vue from'vue'
import Tabs from '../src/tab/tabs.vue'
import TabNav from '../src/tab/tab-nav.vue'
import TabNavItem from '../src/tab/tab-nav-item.vue'
import TabContent from '../src/tab/tab-content.vue'
import TabContentPanel from '../src/tab/tab-content-panel.vue'

Vue.component('g-tabs', Tabs)
Vue.component('g-tab-nav', TabNav)
Vue.component('g-tab-nav-item', TabNavItem)
Vue.component('g-tab-content', TabContent)
Vue.component('g-tab-content-panel', TabContentPanel)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受selected属性', () => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.innerHTML = `
      <g-tabs :selected="about">
        <g-tab-nav>
          <g-tab-nav-item name="user">用户管理</g-tab-nav-item>
          <g-tab-nav-item name="setting">配置管理</g-tab-nav-item>
          <g-tab-nav-item name="about" disabled>关于我们</g-tab-nav-item>
          <template v-slot:action>
            Header content
          </template>
        </g-tab-nav>
        <g-tab-content>
          <g-tab-content-panel name="user">用户管理</g-tab-content-panel>
          <g-tab-content-panel name="setting">配置管理</g-tab-content-panel>
          <g-tab-content-panel name="about">关于我们</g-tab-content-panel>
        </g-tab-content>
      </g-tabs>
    `
    let vm = new Vue({
      el: div
    })
    setTimeout(() => {
      // console.log(vm.$el.querySelector) // 为什么是undefined,我不太懂。
      let x = vm.$el.querySelector(`.tab-nav-item[data-name=about]`)
      expect(x.classList.contains('active')).to.be.true
    }, 0)

  })
})