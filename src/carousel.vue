<template>
  <div class="g-carousel" @mouseenter="carouselMouseenter" @mouseleave="carouselMouseleave">
    <slot></slot>
    <input type="hidden" :value="count">
    <div class="dots-cantainer">
      <div class="dot" :class="{active: count == n-1}" v-for="n in name.length" @click="clickDot(n)"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "carousel",
    data() {
      return {
        name: [],
        count: 0,
        lastCount: -1,
        duration: 2000,
        timer: null
      }
    },
    mounted() {
      this.getChildrenName()
      this.playCarousel()
    },
    methods: {
      getChildrenName() {
        let nameArr = []
        this.$children.forEach((item) => {
          nameArr.push(item.name)
        })
        this.name = nameArr
        this.notificationChildren()
      },
      playCarousel() {
        let len = this.name.length
        let run = () => {
          this.lastCount = this.count
          // 正向轮播
          if (this.count < len - 1) {
            this.count++
          } else {
            this.count = 0
          }
          // 反向轮播
          // if(this.count === 0) {
          //   this.count = len - 1
          // } else {
          //   this.count--
          // }
          this.timer = setTimeout(run, this.duration)
        }

        this.timer = setTimeout(run, this.duration)
      },
      notificationChildren() {
        this.$children.forEach((item) => {
          item.xname = this.name[this.count]
          let reverse = this.count > this.lastCount ? false : true
          if (this.lastCount === this.$children.length - 1 && this.count === 0) {
            reverse = false
          }
          if (this.lastCount === 0 && this.count === this.$children.length - 1) {
            reverse = true
          }
          console.log(reverse, 'reverse')
          item.reverse = reverse
          // if (this.lastCount > this.count || (this.lastCount === 0 && this.count === this.name.length - 1)) {
          //   item.reverse = true
          // } else if (this.lastCount < this.count || (this.lastCount === this.name.length - 1 && this.count === 0)) {
          //   item.reverse = false
          // }
        })
      },
      clickDot(n) {
        this.lastCount = this.count
        this.count = n - 1
      },
      carouselMouseenter() {
        if(this.timer) {
          clearTimeout(this.timer)
        }
      },
      carouselMouseleave() {
        this.playCarousel()
      }
    },
    updated() {
      console.log(this.lastCount , this.count)
      this.$nextTick(() => {
        this.notificationChildren()
      })
    }
  }
</script>

<style scoped lang="sass">
  .g-carousel
    position: relative
    .dots-cantainer
      position: absolute
      bottom: 0
      display: flex
      justify-content: center
      width: 100%
      .dot
        width: 10px
        height: 10px
        margin: 0 5px
        border-radius: 50%
        background-color: #eee
        cursor: pointer
      .active
        background-color: #40a9ff

</style>