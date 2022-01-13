<template>
  <div class="g-nav-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "nav-item"
  }
</script>

<style scoped lang="sass">
  @import "../var"
  .g-nav-item
    display: flex
    align-items: center
    justify-content: center
    padding: 0 20px
    height: $nav-item-height
    cursor: pointer
    &:hover
      background-color: $nav-background-hover
</style>