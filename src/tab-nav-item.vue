<template>
  <div @click="btnClick">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tab-nav-item",
    inject: ['EventBus'],
    props: {
      name: String
    },
    created() {

    },
    methods: {
      btnClick() {
        this.EventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style scoped>

</style>