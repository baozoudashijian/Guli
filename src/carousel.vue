<template>
  <div class="g-carousel"
       @mouseenter="carouselMouseenter"
       @mouseleave="carouselMouseleave"
       @touchstart="touchStart"
       @touchmove="touchMove"
       @touchend="touchEnd"
  >
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
        timer: undefined,
        startTouch: null
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
        if (this.timerId) {
          return
        }
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
          // 如果是自动轮播的话，才会加上这个逻辑
          if (this.timer) {
            if (this.lastCount === this.$children.length - 1 && this.count === 0) {
              reverse = false
            }
            if (this.lastCount === 0 && this.count === this.$children.length - 1) {
              reverse = true
            }
          }
          item.reverse = reverse
        })
      },
      clickDot(n) {
        this.lastCount = this.count
        this.count = n - 1
      },
      pause() {
        if (this.timer) {
          clearTimeout(this.timer)
          this.timer = undefined
        }
      },
      carouselMouseenter() {
        this.pause()
      },
      carouselMouseleave() {
        this.playCarousel()
      },
      touchStart(e) {
        this.pause()
        console.log(e,'start')
        this.startTouch = e.touches[0]
      },
      touchMove() {
        console.log('move')
      },
      touchEnd(e) {
        console.log('end')
        let endTouch = e.changedTouches[0]
        let {clientX: x1, clientY: y1} = this.startTouch
        let {clientX: x2, clientY: y2} = endTouch

        //求斜边
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2- y1, 2))
        let deltaY = Math.abs(y2 - y1)
        let rate = distance / deltaY


        if(rate > 2) {
          this.lastCount = this.count
          if(x1 > x2) {
            this.count = this.lastCount === this.name.length - 1 ? this.lastCount = 0  : this.lastCount + 1
          } else {
            this.count = this.lastCount === 0 ? this.lastCount = this.name.length - 1 : this.lastCount - 1
          }
        }
        this.$nextTick(() => {
          this.playCarousel()
        })
      }
    },
    updated() {
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