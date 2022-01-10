<template>
  <div class="g-carousel-item" :class="{'g-carousel-item-active' :confirmName}">
    <transition name="slide-fade" >
      <div v-if="confirmName" :class="{reverse}">
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
        xname: '',
        reverse: false
      }
    },
    computed: {
      confirmName() {
        return this.name === this.xname
      }
    }
  }
</script>

<style lang="sass" scoped>

  .g-carousel-item
    display: inline-block
    position: absolute
  .g-carousel-item-active
    position: static
    .slide-fade-enter-active
      transition: all .3s ease

    .slide-fade-leave-active
      transition: all .3s ease

    .slide-fade-enter
      transform: translateX(200px)
    .slide-fade-leave-to
      transform: translateX(-200px)
    .slide-fade-enter.reverse
        transform: translateX(-200px)
    .slide-fade-leave-to.reverse
        transform: translateX(200px)
</style>