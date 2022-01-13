<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "nav"
  }
</script>

<style scoped lang="sass">
  @import "../var"
  .g-nav
    display: flex
    background-color: $nav-background
    color: white
</style>