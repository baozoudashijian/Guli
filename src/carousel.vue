<template>
  <div class="g-carousel">
    <slot></slot>
    <input type="hidden" :value="count">
  </div>
</template>

<script>
  export default {
    name: "carousel",
    data() {
      return {
        name: [],
        count: 0,
        lastCount: -1
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
          // if (this.count < len - 1) {
          //   this.count++
          // } else {
          //   this.count = 0
          // }

          if(this.count === 0) {
            this.count = len - 1
          } else {
            this.count--
          }
          setTimeout(run, 3000)
        }

        setTimeout(run, 3000)
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
      }
    },
    updated() {
      console.log(this.lastCount , this.count)
      this.notificationChildren()
    }
  }
</script>

<style scoped lang="sass">
  .g-carousel
    position: relative

</style>