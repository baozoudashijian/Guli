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
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(200px)
    opacity: 0

</style>