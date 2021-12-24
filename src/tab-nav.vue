<template>
  <div class="tab-nav">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-nav",
    inject: ['EventBus'],
    created() {

    },
    mounted() {
      this.EventBus.$on('update:selected', (name, vm) => {
        if (vm) {
          let position = vm.$el.getBoundingClientRect()
          let parentPosition = vm.$parent.$el.getBoundingClientRect()
          this.$refs.line.style.width = position.width + 'px'
          this.$refs.line.style.left = position.left - parentPosition.left + 'px'
        }
      })
    }
  }
</script>

<style scoped lang="sass">
  .tab-nav
    display: flex
    justify-content: flex-start
    align-items: center
    margin-bottom: 16px
    position: relative

    &:before
      content: ""
      position: absolute
      right: 0
      left: 0
      bottom: 0
      border-bottom: 1px solid #f0f0f0

    .line
      position: absolute
      bottom: 0
      height: 1px
      background: #40a9ff
      transition: all 500ms

    .action
      margin-left: auto
</style>