<template>
  <div ref="tabs">
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
      // 第一次设置触发设置样式类active
      this.EventBus.$emit('update:selected', this.selected)
      this.$nextTick(() => {
        this.$children.forEach((vm) => {
          if(vm.$options.name === "tab-nav") {
            vm.$children.forEach((vm) => {
              if(vm.$el.classList.contains('active')) {
                // 第二次设置触发根据哪个item有active
                this.EventBus.$emit('update:selected', this.selected, vm)
              }
            })
          }
        })
      })
      // 当前Vue实例的update:seleted事件
      this.$emit('update:selected', this.selected)
    },
    methods: {}
  }
</script>

<style scoped lang="sass">

</style>