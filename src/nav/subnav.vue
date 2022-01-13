<template>
  <div class="g-subnav">
    <slot name="title"></slot>
    <div class="g-subnav-content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "subnav"
  }
</script>

<style scoped lang="sass">
  @import "../var"
  .g-subnav
    position: relative
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
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
</style>