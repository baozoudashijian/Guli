<template>
    <div>
        <div class="section">
            <g-button>按钮</g-button>
            <g-button icon="setting">按钮</g-button>
            <g-button icon="setting" iconPosition="left">按钮</g-button>
            <g-button icon="setting" iconPosition="right">按钮</g-button>
            <g-button icon="setting" iconPosition="right" :loading="loading" @click="btnClick">按钮</g-button>
        </div>
        <div class="section">
            <g-button-group>
                <g-button icon="arrow-left">上一页</g-button>
                <g-button icon="loading" @click="btnClick">全部</g-button>
                <g-button icon="arrow-right" :loading="loading" icon-position="right">下一页</g-button>
            </g-button-group>
        </div>
        <div class="section">
            <g-button>
                <g-icon icon="setting"></g-icon>
            </g-button>
        </div>
        <div class="section">
            <g-button type="primary">Primary</g-button>
            <g-button type="success">Success</g-button>
            <g-button type="info">Info</g-button>
            <g-button type="warning">Warning</g-button>
            <g-button type="danger">Danger</g-button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
  import Button from './button.vue'
  import ButtonGroup from './button-group.vue'
  import Icon  from './icon.vue'
  import chai from 'chai'
  export default {
    name: "App",
    data() {
      return {
        loading: false
      }
    },
    methods: {
      btnClick() {
        this.loading = !this.loading
      }
    },
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup,
      'g-icon': Icon
    }
  }

  /*
  * 单元测试
  * */
  const expect = chai.expect

  try {
    {
      const Constructor = Vue.extend(Button)
      const vm = new Constructor({
        propsData: {
          icon: 'setting'
        }
      })
      vm.$mount()
      let useElement = vm.$el.querySelector('use')
      let href = useElement.getAttribute('xlink:href')
      expect(href).to.eq('#i-setting')
      vm.$el.remove()
      vm.$destroy()
    }

  }catch (err) {
    window.errors = [err]
  } finally {
    window.errors && window.errors.forEach(err => {
      console.error(err.message);
    })
  }

</script>

<style scoped lang="sass">
    .section
        margin-bottom: 10px

</style>