<template>
  <svg class="g-icon">
    <use :xlink:href=`#icon-${icon}`></use>
  </svg>
</template>

<script>
  import '../svg'
  export default {
    name: "icon",
    props: {
      icon: {
        type: String
      }
    }
  }
</script>

<style scoped lang="sass">
  .g-icon
    width: 1em
    height: 1em
</style>