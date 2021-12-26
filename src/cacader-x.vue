<template>
  <div class="cascaderX" >
    <div class="left">
      <div v-for="(sourceItem,index) in items" :key="index" @click="leftSelected = sourceItem">
        {{sourceItem.name}}
        <div class="icon">
          <g-icon icon="arrow-right" v-if="sourceItem.children"></g-icon>
        </div>
      </div>
    </div>
    <div class="right" v-if="rightItems">
        <cascader-x  :items="rightItems"></cascader-x>
      </div>
  </div>

</template>

<script>
  import Icon from './icon.vue'
  export default {
    name: "cascader-x",
    props: ['items'],
    data() {
      return {
        leftSelected: null
      }
    },
    computed: {
      rightItems() {
        if(this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children
        } else {
          return null
        }
      }
    },
    components: {
      'g-icon': Icon
    }
  }
</script>

<style scoped lang="sass">
  .cascaderX
    display: flex
    .left 
      padding: 10px
      border: 1px solid #cc0000
      > div
        display: flex
        justify-content: center
        align-items: center
        .icon 
          display: flex
          justify-content: center
          align-items: center
    .right
      margin-left: -1px

</style>