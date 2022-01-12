<template>
  <div :class="colClass">
    <div class="content" :style="gutterClass">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  let validator = (value) => {
    let keys = Object.keys(value)
    let valid = true
    keys.forEach(key => {
      if (!['span', 'offset'].includes(key)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
      ipad: {
        type: [Object],
        validator
      },
      narrowPc: {
        type: [Object],
        validator
      },
      pc: {
        type: [Object],
        validator
      },
      widePc: {
        type: [Object],
        validator
      }
    },
    data() {
      return {
        gutter: 0
      }
    },
    methods: {
      createClasses() {
        let classArray = []
        let plateform = ['ipad', 'narrowPc', 'pc', 'widePc']
        plateform.map((item) => {
          if (this[item]) {
            this[item].span && classArray.push(`col-${item}-${this[item].span}`)
            this[item].offset && classArray.push(`col-${item}-offset-${this[item].offset}`)
          }
        })
        return classArray;
      }
    },
    computed: {
      colClass() {
        const {span, offset} = this
        return [
          span && `col-${span}`,
          offset && `col-offset-${offset}`,
          ...this.createClasses()
        ]
      },
      gutterClass() {
        const {gutter} = this
        return {
          paddingLeft: gutter ? gutter / 2 + 'px' : 0,
          paddingRight: gutter ? gutter / 2 + 'px' : 0
        }
      }
    },
    created() {
    },
    mounted() {
    }
  }
</script>
<style lang="sass" scoped>

  .content
    width: 100%
    height: 100%
</style>