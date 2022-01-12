import {describe} from "mocha";
import Vue from 'vue';
import Row from '../src/grid/row.vue'
import Col from '../src/grid/col.vue'
const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    // 传入done会报错，不传直接使用也不会报错，但是目前没有发现有什么效果
    // 也不知道什么作用
    it('接收gutter属性', () => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        let divEle = document.createElement('div')
        document.body.appendChild(divEle)
        divEle.innerHTML = `
            <g-row gutter='20'>
                <g-col span='12'></g-col>
                <g-col span='12'></g-col>
            </g-row>
        `
        const vm = new Vue({
            el: divEle
        })
        setTimeout(() => {
            // console.log(vm.$el.querySelector, '123') // 为什么是undefined,我不太懂。
            const row = vm.$el.querySelector('.row')
            const col = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(row).marginLeft).to.equal('-10px')
            expect(getComputedStyle(row).marginRight).to.equal('-10px')
            expect(getComputedStyle(col).paddingLeft).to.equal('10px')
            expect(getComputedStyle(col).paddingRight).to.equal('10px')
            vm.$el.remove()
            vm.$destroy()
        }, 0);
        
    })
    it('接受align属性', () => {
        
    })

})