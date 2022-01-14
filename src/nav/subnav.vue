<template>
  <div class="g-subnav">
    <div class="g-subnav-title" @click="toggle">
      <slot name="title"></slot>
    </div>
    <div class="g-subnav-content" v-show="open">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "subnav",
    inject: ['root'],
    data() {
      return {
        open: false
      }
    },
    created() {
      this.root.addSubNavItems(this)
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
    & > .g-subnav-title
      display: flex
      align-items: center
      height: 100%
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
        width: 100%
        height: $subnav-item-height
        border-bottom: none
      & > .g-subnav 
        display: flex
        justify-content: flex-start
        height: $subnav-item-height
        & > .g-subnav-title 
          width: 100%
        & > .g-subnav-content
          position: absolute
          left: 100%
          top: 0
</style>