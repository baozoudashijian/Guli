<template>
  <div class="popover" ref="triggerWrapper">
    <div v-show="visible"  ref="contentWrapper" class="popover-content" @click.stop="">
      <slot name="content"></slot>
    </div>
    <div class="btn" @click.stop="btnClick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "popover",
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['left','top','bottom','right'].includes(value)
        }
      }
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      eventHandle() {
        this.visible = false
        document.body.removeChild(this.$refs.contentWrapper)
        document.removeEventListener('click', this.eventHandle)
      },
      calcPosition() {
        this.$nextTick(() => {
let {left, top, width, height} = this.$refs.triggerWrapper.getBoundingClientRect()
        let _contentWrapper = this.$refs.contentWrapper
        let _margin = 16
        document.body.appendChild(_contentWrapper)
        let xheight = window.getComputedStyle(_contentWrapper,null).getPropertyValue("height")
        let _scrollTop = document.documentElement.scrollTop
        // 获取selfPosition全部是0 使用nextTick解决这个问题
        // let selfPosition = this.$refs.contentWrapper.getBoundingClientRect()
        // selfPosition.height 这个高度首次获取不对
        if (this.position === 'left') {
          console.log(left)
          _contentWrapper.style.left = left + window.scrollX - _margin + 'px'
          _contentWrapper.style.top = top + window.scrollY - Math.abs((height-parseInt(xheight))/2) + 'px'
          _contentWrapper.style.transform = `translateX(-100%)`
        } else if (this.position === 'right') {
          _contentWrapper.style.left = left + window.scrollX + width + _margin + 'px'
          console.log((height-parseInt(xheight))/2);
          _contentWrapper.style.top = top  + window.scrollY - Math.abs((height-parseInt(xheight))/2) + 'px'
        } else if (this.position === 'bottom') {
          _contentWrapper.style.left = left + window.scrollX + width/2 + 'px'
          console.log(top , height , window.scrollY , _margin)
          console.log(document.documentElement.scrollTop)
          _contentWrapper.style.top = top + height + _scrollTop + _margin + 'px'
          _contentWrapper.style.transform = `translateX(-50%)`
        } else {
          console.log(top , parseInt(xheight) , window.scrollY , _margin)
          console.log(_contentWrapper.getBoundingClientRect().height)
          _contentWrapper.style.left = left + window.scrollX  + 'px'
          _contentWrapper.style.top = top - parseInt(xheight) + window.scrollY - _margin + 'px'
          _contentWrapper.style.transform = `translateX(-50%)`
        }
        },0)
        
        
      },
      btnClick(e) {
        console.log(this.position, 'position')
        this.visible = !this.visible
        if (this.visible) {
          this.$nextTick(() => {
            this.calcPosition()
            document.addEventListener('click', this.eventHandle)
          })
        }
        // 解决点击按钮不删除dom
        if(this.$refs.triggerWrapper.contains(e.target) && !this.visible) {
          // 如果是triggerWrapper中的内容 且visable为false的情况下模拟点击一下triggerWrapper
          // triggerWrapper冒泡触发document点击事件来删除dom
          // 注: document.click没有这个事件
          // this.$refs.triggerWrapper.click()
          // console.log(this.$refs.triggerWrapper.click);
          // 触发doucument事件会删除所有的contentWrapper 这是不对的
          this.eventHandle()
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .popover
    display: inline-block
    position: relative
  .popover-content
    position: absolute
    padding: 12px 16px
    box-sizing: border-box
    overflow: hidden
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d
    border-radius: 2px

</style>