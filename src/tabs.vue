<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "tabs",
    props: {
      selected: String
    },
    data() {
      return {
        EventBus: new Vue()
      }
    },
    provide() {
      // 传一个对象才能inject
      return {EventBus: this.EventBus}
    },
    mounted() {
      // EventBus上的update:seleted事件
      this.EventBus.$emit('update:selected', this.selected)
      // 当前Vue实例的update:seleted事件
      this.$emit('update:selected', this.selected)
    },
    methods: {}
  }
</script>

<style scoped>

</style>