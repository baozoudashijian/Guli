<template>
  <div class="g-subnav">
    <span @click="toggle">
      <slot name="title"></slot>
    </span>
    <div class="g-subnav-content" v-show="open">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "subnav",
    data() {
      return {
        open: false
      }
    },
    methods: {
      toggle() {
        this.open = !this.open
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "../var"
  .g-subnav
    position: relative
    display: flex
    align-items: center
    justify-content: center
    padding: 0 10px
    cursor: pointer
    &:hover
     background-color: $nav-background-hover
    &-content
      position: absolute
      top: 100%
      left: 0
      min-width: 200px
      margin-top: 1px
      background-color: $nav-background
      border-radius: 2px
      & > .g-nav-item
        justify-content: flex-start
        padding: 0 10px
        height: $subnav-item-height
        border-bottom: none
</style>