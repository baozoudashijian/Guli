<template>
  <div class="g-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "layout",
    data() {
      return {
        layoutClass: {
          hasSlider: false
        }
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'slider') {
          this.layoutClass.hasSlider = true
        }
      })
    }
  }
</script>

<style lang="sass" scoped>
  .g-layout
    display: flex
    flex-direction: column
    flex: 1 1 auto

    .hasSlider
      flex-direction: row
</style>