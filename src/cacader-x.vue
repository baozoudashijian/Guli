<template>
  <div class="cascaderX">
    {{sourceItem.name}}
    <div v-if="sourceItem.children">
      <cascader-x v-for="item in sourceItem.children" :source-item="item"></cascader-x>
    </div>
  </div>

</template>

<script>
  export default {
    name: "cascader-x",
    props: ['sourceItem']
  }
</script>

<style scoped lang="sass">
  .cascaderX
    border: 1px solid #cc0000

</style>