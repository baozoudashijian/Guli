<template>
  <div class="g-carousel-item">
    <transition name="slide-fade">
      <div v-if="name === xname">
        <slot></slot>
      </div>
    </transition>
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

<style lang="sass" scoped>
  .g-carousel-item
    position: absolute
  .slide-fade-enter-active
    transition: all .3s ease

  .slide-fade-leave-active
    transition: all .3s ease

  .slide-fade-enter
    transform: translateX(200px)
  .slide-fade-leave-to
    transform: translateX(-200px)
</style>