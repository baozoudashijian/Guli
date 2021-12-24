<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div class="content">
        <div class="menu">
          <div class="layer1" v-for="item in source" @click="layer1Click(item)">
            <!--         <cacader-x :source-item="item"></cacader-x>-->
            <div>
              {{item.name}}
            </div>
          </div>
        </div>
        <div class="menu" v-if="layer2.children">
            <div class="layer2" v-for="item in layer2.children" @click="layer2Click(item)">
              <div>{{item.name}}</div>
            </div>
        </div>
        <div class="menu" v-if="layer3.children">
          <div class="layer2" v-for="item in layer3.children">
            <div>{{item.name}}</div>
          </div>
        </div>

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
    data() {
      return {
        layer2: {},
        layer3: {}
      }
    },
    components: {
      'cacader-x': CascaderX
    },
    methods: {
      layer1Click(item) {
        this.layer2 = item
      },
      layer2Click(item) {
        this.layer3 = item
      }
    },
    mounted() {
      console.log(this.source, 'source')
    }
  }
</script>

<style scoped lang="sass">
  .cascader
    .popover
      .content
        display: flex
        .menu
          border: 1px solid #3eaf7c

</style>