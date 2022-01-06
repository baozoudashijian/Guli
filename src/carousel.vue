<template>
  <div class="g-carousel">
    <slot></slot>
    <div>{{count}}</div>
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
      },
      playCarousel() {
        let len = this.name.length

        setInterval(() => {
          if(this.count < len) {
            console.log(123)
            this.count++
          } else {
            this.count = 0
            // this.$children.forEach((item) => {
            //   item.xname = this.name[count]
            // })
          }
        },1000)
      }
    },
    updated(count) {
      console.log(this.count)
    }
  }
</script>

<style scoped>

</style>