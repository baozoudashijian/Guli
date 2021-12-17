<template>
  <div @click="btnClick" :class="navClass" class="tab-nav-item">
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
    data() {
      return {
        active: false
      }
    },
    computed: {
      navClass() {
        return {
          active: this.active
        }
      }
    },
    created() {
      this.EventBus.$on('update:selected', (name) => {
        this.active = this.name == name
      })
    },
    methods: {
      btnClick() {
        this.EventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>

<style scoped lang="sass">
  .active
    border: 1px solid green
    color: rgb(24, 144, 255)
  .tab-nav-item
    padding: 12px 0
    margin-left: 32px
    cursor: pointer
    &:nth-child(1)
      margin-left: 0
</style>