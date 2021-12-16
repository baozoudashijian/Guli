<template>
  <div>
    <slot></slot>
    <div>{{this.foo}}</div>
  </div>
</template>

<script>
  export default {
    name: "tab-nav-item",
    inject: ['foo'],
    created() {
      console.log(this.foo, 'foo')
    },
  }
</script>

<style scoped>

</style>