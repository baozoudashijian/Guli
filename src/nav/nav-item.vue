<template>
  <div class="g-nav-item" @click="updateSeleted" :class="{selected}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "nav-item",
    inject: ['root'],
    props: {
      name: {
        type: String
      }
    },
    data() {
      return {
        selected: false
      }
    },
    created() {
      this.root.addItem(this)
    },
    methods: {
      updateSeleted() {
        // console.log(this.$parent.selectedStyle)
        // this.$parent.selectedStyle = true
        this.$emit('add:selected', this.name)
        // this.root.addItem(this)
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "../var"
  .g-nav-item
    display: flex
    align-items: center
    justify-content: center
    padding: 0 20px
    height: $nav-item-height
    box-sizing: border-box
    border-bottom: 2px solid $nav-background
    cursor: pointer
    &:hover
      background-color: $nav-background-hover
    &.selected
      color: rgb(255, 208, 75)
      border-bottom: 2px solid $nav-item-border-active
</style>