<template>
  <div class="g-layout-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "content"
  }
</script>

<style lang="sass" scoped>
  .g-layout-content
    flex: 1 1 auto
</style>