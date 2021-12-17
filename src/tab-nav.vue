<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tab-nav",
    inject: ['EventBus'],
    created() {
      console.log(this, 'EventBus')
    }
  }
</script>

<style scoped>

</style>