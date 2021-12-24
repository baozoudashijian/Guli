<template>
   <div class="cascader">
     <div class="trigger">
       <slot></slot>
     </div>
     <div class="popover">
       <div v-for="item in source">
         <cacader-x :source-item="item"></cacader-x>
       </div>
     </div>

   </div>

</template>

<script>
  import CascaderX from './cacader-x.vue'
  export default {
    name: "cascader",
    props: {
      source: Array
    },
    components: {
      'cacader-x': CascaderX
    },
    mounted() {
      console.log(this.source, 'source')
    }
  }
</script>

<style scoped lang="sass">
  .cascader
    display: flex
</style>