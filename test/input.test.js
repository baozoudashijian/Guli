import {use} from "chai/index";

const expect = chai.expect;
import Vue from 'vue';
import Input from '../src/input/input.vue';

describe('Input', () => {

  it('存在.', () => {
    expect(Input).to.exist
  })

  //  测试属性
  describe('props.', () => {
    it('设置Value', () => {
      const Construct = Vue.extend(Input)
      const vm = new Construct({
        propsData: {
          value: 'Leborn'
        }
      }).$mount()
      const uesElement = vm.$el.querySelector('input')
      // input的value值怎么是直接获取
      expect(uesElement.value).to.equal('Leborn')
      vm.$destroy()
    })

    it('设置disabled', () => {
      const Construct = Vue.extend(Input)
      const vm = new Construct({
        propsData: {
          disabled: 'disabled'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.getAttribute('disabled')).to.equal('disabled')
      vm.$destroy()
    })

    it('设置readonly', () => {
      const Construct = Vue.extend(Input);
      const vm = new Construct({
        propsData: {
          readonly: 'readonly'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('input')
      expect(useElement.getAttribute('readonly')).to.equal('readonly')
      vm.$destroy()
    })
    it('设置error',() => {
      const Construct = Vue.extend(Input)
      const vm = new Construct({
        propsData: {
          error: '请输入合法内容'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('.errorMessage')
      expect(useElement).to.exist
      expect(useElement.innerHTML).to.equal('请输入合法内容')
      vm.$destroy()
    })

  })

  // 测试事件
  describe('func', () => {
    const Construct = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['change', 'input', 'blur', 'focus'].forEach((eventName, index) => {
        vm = new Construct({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // change/input/focus/blur 事件对象
        let event = new Event(eventName)
        // 更改事件对象中target的属性
        Object.defineProperty(
          event, 'target', {
            value: {value: 'hello'}, enumerable: true
          }
        )
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hello')
      })
    })
  })


})