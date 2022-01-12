<template>
  <div @click="btnClick" :class="navClass" class="tab-nav-item" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tab-nav-item",
    inject: ['EventBus'],
    props: {
      name: String,
      disabled: Boolean
    },
    data() {
      return {
        active: false
      }
    },
    computed: {
      navClass() {
        return {
          active: this.active,
          disabled: this.disabled
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
        if (!this.disabled) {
          this.EventBus.$emit('update:selected', this.name, this)
        }
      }
    }
  }
</script>

<style scoped lang="sass">

  .active
    color: rgb(24, 144, 255)

  .tab-nav-item
    padding: 12px 0
    margin-left: 32px
    cursor: pointer

    &:nth-child(1)
      margin-left: 0

  .disabled
    color: #00000040
    cursor: not-allowed
</style>