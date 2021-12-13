<template>
  <div class="g-layout-header">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "header"
  }
</script>

<style lang="sass" scoped>
  .g-layout-header
    height: 64px
</style>