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
        count: 0
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
          if(this.count < len - 1) {
            this.count++
          } else {
            this.count = 0
          }
          setTimeout(run, 2000)
        }

        setTimeout(run, 2000)
      },
      notificationChildren() {
        this.$children.forEach((item) => {
          item.xname = this.name[this.count]
        })
      }
    },
    updated() {
      console.log(this.count)
      this.notificationChildren()
    }
  }
</script>

<style scoped lang="sass">
  .g-carousel
    position: relative

</style>