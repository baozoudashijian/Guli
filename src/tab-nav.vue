<template>
  <div class="tab-nav">
    <slot></slot>
    <div class="action">
      <slot name="action"></slot>
    </div>
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

<style scoped lang="sass">
  .tab-nav
    display: flex
    justify-content: flex-start
    align-items: center
    margin-bottom: 16px
  .action
    margin-left: auto
</style>