<template>
  <div class="g-toast">
    <div class="g-toast-wrapper" ref="wrapper">
      <div v-if="status">
        <g-icon :icon="status" class="g-toast-icon"></g-icon>
      </div>
      <div class="g-toast-message">
        <slot></slot>
      </div>
      <div class="g-toast-line" ref="line" v-if="!autoClose"></div>
      <div class="g-toast-close" @click="closeToast" v-if="!autoClose">{{closeButtonText}}</div>
    </div>
  </div>
</template>

<script>
  import Icon from './icon.vue'

  export default {
    name: "toast",
    props: {
      duration: {
        type: Number,
        default: 3
      },
      autoClose: {
        type: Boolean,
        default: true
      },
      closeButtonText: {
        type: String,
        default: '关闭'
      },
      onClose: {
        type: Function
      },
      status: {
        type: String,
        default: undefined
      }
    },
    data() {
      return {
        isShow: false
      }
    },
    mounted() {
      // 测试Vue.use后
      this.execAutoClose()
      this.updateStyle()
    },
    methods: {
      updateStyle() {
        // 计算中间那根线的高度, 必须使用$nextTick才能获取这个值.
        this.$nextTick(() => {
          this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height + 'px'
          // console.log(this.$refs.wrapper.getBoundingClientRect())
        })
      },
      execAutoClose() {
        if (this.autoClose) {
          setTimeout(() => {
            this.close()
            if (typeof this.onClose === 'function') {
              this.onClose(this)
            }
          }, this.duration * 1000)
        }
      },
      closeToast() {
        this.close()
        if (this.closeButtonText && typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },
      close() {
        // 销毁组件
        this.$el.remove()
        this.$destroy()
      }
    },
    components: {
      'g-icon': Icon
    }
  }
</script>

<style lang="sass" scoped>
  @keyframes fade-in
    0%
      opacity: 0
      transform: translateY(100%)
    100%
      opacity: 1
      transform: translateY(0%)

  .g-toast
    /*animation: fade-in 1s*/
    z-index: 1010
    padding: 8px
    text-align: center
    transform: translateX(-50%)


    .g-toast-wrapper
      animation: fade-in 1s
      display: inline-flex
      justify-content: center
      align-items: center
      padding: 0px 16px
      background: #fff
      box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%)

      .g-toast-icon
        display: flex
        align-items: center
        margin-right: 6px

      .g-toast-line
        width: 1px
        height: 100%
        background: #eee
        margin: 0 12px

      .g-toast-message
        display: inline-block
        padding: 10px 0

      .g-toast-close
        cursor: pointer


</style>