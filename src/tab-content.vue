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
      console.log(this.EventBus, 'EventBus')
    }
  }
</script>

<style scoped>

</style>