<template>
  <div class="g-carousel-item" v-if="name === xname">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "carousel-item",
    props: {
      name: String
    },
    data() {
      return {
        xname: ''
      }
    }
  }
</script>

<style scoped>

</style>