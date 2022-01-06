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
        count: -1
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
      },
      playCarousel() {
        let len = this.name.length - 1

        setInterval(() => {
          if(this.count < len) {
            this.count++
          } else {
            this.count = 0
            // this.$children.forEach((item) => {
            //   item.xname = this.name[count]
            // })
          }
        },3000)
      }
    },
    updated() {
      console.log(this.count)
      this.$children.forEach((item) => {
        item.xname = this.name[this.count]
      })
    }
  }
</script>

<style scoped>

</style>