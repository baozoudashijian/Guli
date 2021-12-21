<template>
  <div class="popover" ref="triggerWrapper">
    <div v-show="visible" ref="contentWrapper" class="popover-content" @click.stop="">
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
      btnClick() {
        this.visible = !this.visible
        if (this.visible) {
          this.$nextTick(() => {
            let {left, top} = this.$refs.triggerWrapper.getBoundingClientRect()
            document.body.appendChild(this.$refs.contentWrapper)
            // 获取selfPosition全部是0 使用nextTick解决这个问题
            let selfPosition = this.$refs.contentWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top - selfPosition.height + window.scrollY + 'px'
            document.addEventListener('click', this.eventHandle)
          })
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
</style>