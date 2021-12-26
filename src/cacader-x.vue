<template>
  <div class="cascaderX" >
    <div class="left">
      <div v-for="(sourceItem,index) in items" :key="index" @click="leftSelected = sourceItem">
        {{sourceItem.name}}
      </div>
    </div>
    <div class="right" v-if="rightItems">
        <cascader-x  :items="rightItems"></cascader-x>
      </div>
  </div>

</template>

<script>
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
    }
  }
</script>

<style scoped lang="sass">
  .cascaderX
    display: flex
    border: 1px solid #cc0000

</style>