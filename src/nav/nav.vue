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
          
            this.$nextTick(() => {
              this.loopParentSetStyle(vm)
            });
          } else {
            vm.selected = false
            // 没选中就全部清除，没必要调用loopParentSetStyle
            vm.$parent.selectedStyle = false
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
      },
      loopParentSetStyle(vm) {
        if(vm.$parent) {
          vm.$parent.selectedStyle = true
          this.loopParentSetStyle(vm.$parent)
        } else {
          return false
        }
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