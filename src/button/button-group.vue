<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "button-group"
  }
</script>

<style scoped lang="sass">
  @import "src/var"

  .g-button-group
    font-size: 0


    .g-button
      margin-left: -1px
      border-radius: 0

      &:first-child
        border-top-left-radius: $button-border-radius
        border-bottom-left-radius: $button-border-radius

      &:last-child
        border-top-right-radius: $button-border-radius
        border-bottom-right-radius: $button-border-radius

      &:hover
        position: relative
        z-index: 1

</style>