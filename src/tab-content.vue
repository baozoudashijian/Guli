<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tab-content",
    inject: ['EventBus'],
    created() {
    }
  }
</script>

<style scoped>

</style>