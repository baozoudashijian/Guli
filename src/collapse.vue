<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: "collapse",
    props: {
      accordion: Boolean
    },
    data() {
      return {
        selected: [],
        EventBus: new Vue()
      }
    },
    provide() {
      return {
        EventBus: this.EventBus
      }
    },
    mounted() {
      console.log(this.accordion)
      this.EventBus.$on('add:selected', (name) => {
        // !this.selected.includes(name) && this.selected.push(name)
        if(this.accordion) {
          this.selected = []
        }
        if(!this.selected.includes(name)) {
          this.selected.push(name)
        } else {
          this.selected.splice(this.selected.indexOf(name), 1)
        }
        this.EventBus.$emit('update:selected', this.selected)
        this.$emit('select', this.selected)
      })
    }
  }
</script>

<style scoped lang="sass">
  .collapse
    border: 1px solid #ccc
    padding: 10px
</style>