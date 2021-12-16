<template>
  <div>
    <slot></slot>
    <div>{{this.foo}}</div>
  </div>
</template>

<script>
  import Button from'./button.vue'
  export default {
    name: "tab-content-panel",
    inject: ['foo'],
    created() {
      console.log(this.foo, 'foo')
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>