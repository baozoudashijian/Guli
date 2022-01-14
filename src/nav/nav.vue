<template>
  <div class="g-nav">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "nav",
    provide() {
      return {
        root: this
      }
    },
    props: {
      selected: Array,
      default: () => []
    },
    data() {
      return {
        items: [],
        subNavItems: []
      }
    },
    mounted() {
      this.listenToChildren()
      this.updateChildren()
    },
    methods: {
      addItem(vm) {
        this.items.push(vm)
      },
      addSubNavItems(vm) {
        this.subNavItems.push(vm)
      },
      updateChildren() {
        this.items.forEach(vm => {
          if(this.selected.indexOf(vm.name) >=0 ) {
            vm.selected = true
          } else {
            vm.selected = false
          }
        })
        this.subNavItems.forEach(vm => {
          vm.open = false
        })
      },
      listenToChildren() {
        this.items.forEach(vm => {
          vm.$on('add:selected', (name) => {
            // if(this.selected.indexOf(name) < 0) {
            //   let copy = JSON.parse(JSON.stringify(this.selected))
            // }
            this.$emit('update:selected', [name])
          })
        })
      }
    },
    updated() {
      this.updateChildren()
    }
  }
</script>

<style scoped lang="sass">
  @import "../var"
  .g-nav
    display: flex
    background-color: $nav-background
    color: white
</style>