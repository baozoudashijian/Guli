<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tab-nav",
    inject: ['foo'],
    created() {
      console.log(this.foo, 'foo')
    }
  }
</script>

<style scoped>

</style>