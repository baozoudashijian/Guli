<template>
  <div>
    <!--  <div class="component-group">-->
    <!--        <div class="section">-->
    <!--            <g-button>按钮</g-button>-->
    <!--            <g-button icon="setting">按钮</g-button>-->
    <!--            <g-button icon="setting" iconPosition="left">按钮</g-button>-->
    <!--            <g-button icon="setting" iconPosition="right">按钮</g-button>-->
    <!--            <g-button icon="setting" iconPosition="right" :loading="loading" @click="btnClick">按钮</g-button>-->
    <!--        </div>-->
    <!--        <div class="section">-->
    <!--            <g-button-group>-->
    <!--                <g-button icon="arrow-left">上一页</g-button>-->
    <!--                <g-button icon="loading" @click="btnClick">全部</g-button>-->
    <!--                <g-button icon="arrow-right" :loading="loading" icon-position="right">下一页</g-button>-->
    <!--            </g-button-group>-->
    <!--        </div>-->
    <!--        <div class="section">-->
    <!--            <g-button>-->
    <!--                <g-icon icon="setting"></g-icon>-->
    <!--            </g-button>-->
    <!--        </div>-->
    <!--        <div class="section">-->
    <!--            <g-button type="primary">Primary</g-button>-->
    <!--            <g-button type="success">Success</g-button>-->
    <!--            <g-button type="info">Info</g-button>-->
    <!--            <g-button type="warning">Warning</g-button>-->
    <!--            <g-button type="danger">Danger</g-button>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--        <div class="section">-->
    <!--            <g-input :value="message"-->
    <!--                     :error="errMsg"-->
    <!--                     @input="handleInput"-->
    <!--                     @change="handleChange"-->
    <!--                     @focus="handleFocus"-->
    <!--                     @blur="handleBlur"-->
    <!--            ></g-input>-->
    <!--            <g-input value="只读" readonly ></g-input>-->
    <!--            <g-input value="disabled" disabled ></g-input>-->
    <!--        </div>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--      <g-row class="row">-->
    <!--        <g-col span="8" class="jay">8</g-col>-->
    <!--        <g-col span="8" class="jay">8</g-col>-->
    <!--        <g-col span="8" class="jay">8</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span="6" class="jay">6</g-col>-->
    <!--        <g-col span="6" class="jay">6</g-col>-->
    <!--        <g-col span="6" class="jay">6</g-col>-->
    <!--        <g-col span="6" class="jay">6</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span="12" class="jay">12</g-col>-->
    <!--        <g-col span="12" class="jay">12</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span="20" class="jay">20</g-col>-->
    <!--        <g-col span="4" class="jay">4</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span="7" class="jay">7</g-col>-->
    <!--        <g-col span="3" class="jay">3</g-col>-->
    <!--        <g-col span="14" class="jay">13</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row gutter="20">-->
    <!--          <g-col span="6" offset="6" class="jay">-->
    <!--            <div style="width: 100%;height: 100%; border: 1px solid green"></div>-->
    <!--          </g-col>-->
    <!--          <g-col span="6" offset="6" class="jay">-->
    <!--            <div style="width: 100%;height: 100%; border: 1px solid green"></div>-->
    <!--          </g-col>-->
    <!--      </g-row>-->
    <!--      <g-row justify="start">-->
    <!--        <g-col span='8' class="jay">7</g-col>-->
    <!--        <g-col span='4' class="jay">3</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row justify="end">-->
    <!--        <g-col span='8' class="jay">7</g-col>-->
    <!--        <g-col span='4' class="jay">3</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row justify="center">-->
    <!--        <g-col span='8' class="jay">7</g-col>-->
    <!--        <g-col span='4' class="jay">3</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span='24' :ipad="{span: 20}"  class="jay">7</g-col>-->
    <!--        <g-col span='24' :ipad="{span:20, offset: 2}" class="jay">3</g-col>-->
    <!--      </g-row>-->
    <!--      <g-row>-->
    <!--        <g-col span='20' offset='2' :ipad="{span: 10, offset: 2}" :narrowPc="{span: 6, offset: 2}" :pc="{span: 2, offset: 2}" :widePc="{span: 2, offset: 2}" class="jay">7</g-col>-->
    <!--        <g-col span='20' offset='2' :ipad="{span: 20, offset: 2}" :narrowPc="{span: 12, offset: 2}" :pc="{span: 18, offset: 2}" :widePc="{span: 18, offset: 2}" class="jay">3</g-col>-->
    <!--      </g-row>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--      <g-layout>-->
    <!--        <g-header>header</g-header>-->
    <!--        <g-content>content</g-content>-->
    <!--        <g-footer>footer</g-footer>-->
    <!--      </g-layout>-->
    <!--      <g-layout>-->
    <!--        <g-slider>sldier</g-slider>-->
    <!--        <g-layout>-->
    <!--          <g-header>header</g-header>-->
    <!--          <g-content>content</g-content>-->
    <!--          <g-footer>footer</g-footer>-->
    <!--        </g-layout>-->
    <!--      </g-layout>-->
    <!--      <g-layout>-->
    <!--        <g-layout>-->
    <!--          <g-header>header</g-header>-->
    <!--          <g-content>content</g-content>-->
    <!--          <g-footer>footer</g-footer>-->
    <!--        </g-layout>-->
    <!--        <g-slider>sldier</g-slider>-->
    <!--      </g-layout>-->
    <!--      <g-layout>-->
    <!--        <g-layout>-->
    <!--          <g-header>header</g-header>-->
    <!--          <g-layout>-->
    <!--            <g-slider>sldier</g-slider>-->
    <!--            <g-content>content</g-content>-->
    <!--          </g-layout>-->
    <!--        </g-layout>-->
    <!--        <g-footer>footer</g-footer>-->
    <!--      </g-layout>-->
    <!--    </div>-->
    <!--    <div class="component-group">-->
    <!--      <g-button @click="clickHandle" type="success">success</g-button>-->
    <!--      <g-button @click="clickHandle2" type="error">error</g-button>-->
    <!--      <g-button @click="clickHandle3" type="warning">warning</g-button>-->
    <!--    </div>-->
    <div class="component-group">
      <g-tabs :selected.sync="selectedTab" @update:selected="yyy">
        <g-tab-nav>
          <g-tab-nav-item name="user">用户管理</g-tab-nav-item>
          <g-tab-nav-item name="setting">配置管理</g-tab-nav-item>
        </g-tab-nav>
        <g-tab-content>
          <g-tab-content-panel name="user">用户管理</g-tab-content-panel>
          <g-tab-content-panel name="setting">配置管理</g-tab-content-panel>
        </g-tab-content>
      </g-tabs>
    </div>

  </div>

</template>

<script>

  import Button from './button.vue'
  import ButtonGroup from './button-group.vue'
  import Icon from './icon.vue'
  import Input from './input.vue'
  import Col from './col.vue'
  import Row from './row.vue'
  import Layout from './layout.vue'
  import Header from './header.vue'
  import Content from './content.vue'
  import Footer from './footer.vue'
  import Slider from './slider.vue'
  import Tabs from './tabs.vue'
  import TabNav from './tab-nav.vue'
  import TabNavItem from './tab-nav-item.vue'
  import TabContent from './tab-content.vue'
  import TabContentPanel from './tab-content-panel.vue'

  export default {
    name: "App",
    data() {
      return {
        loading: false,
        message: '',
        message2: '',
        errMsg: '',
        selectedTab: 'setting'
      }
    },
    methods: {
      yyy(value) {
        console.log(value)
      },
      btnClick() {
        this.loading = !this.loading
      },
      clickHandle() {
        console.log(123)
        this.$toast('hello world', {
          autoClose: false,
          duration: 3,
          closeButtonText: 'exit',
          status: 'success',
          onClose() {
            console.log('你success关闭了toast')
          }
        })
      },
      clickHandle2() {
        this.$toast('error', {
          autoClose: true,
          duration: 3,
          closeButtonText: '关闭',
          status: 'error',
          onClose() {
            console.log('你error关闭了toast')
          }
        })
      },
      clickHandle3() {
        this.$toast('close', {
          autoClose: false,
          duration: 3,
          status: 'warning',
          onClose() {
            console.log('你warning关闭了toast')
          }
        })
      },
      handleInput(value) {
        if (value && Number(value) > 100) {
          this.errMsg = '你填写的信息有误'
        } else {
          this.errMsg = ''
        }
        this.message = value
      },
      handleChange(value) {
        console.log(value)
      },
      handleFocus(value) {
        console.log(value)
      },
      handleBlur(value) {
        console.log(value)
      }
    },
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup,
      'g-icon': Icon,
      'g-input': Input,
      'g-row': Row,
      'g-col': Col,
      'g-layout': Layout,
      'g-header': Header,
      'g-content': Content,
      'g-footer': Footer,
      'g-slider': Slider,
      'g-tabs': Tabs,
      'g-tab-nav': TabNav,
      'g-tab-nav-item': TabNavItem,
      'g-tab-content': TabContent,
      'g-tab-content-panel': TabContentPanel,
    }
  }

</script>

<style scoped lang="sass">
  $col-height: 40px
  $background-even: rgba(0, 146, 255, .75)
  $background-odd: rgba(0, 0, 0, .2)

  .component-group
    margin-bottom: 100px

    &:last-child
      margin-bottom: 0

    .section
      margin-bottom: 10px

    .row
      margin-bottom: 20px

    .jay
      height: $col-height
      line-height: $col-height
      color: white
      text-align: center
      border: 1px solid $background-even

    .g-layout-header
      border: 1px solid pink
      line-height: 64px
      text-align: center

    .g-layout-content
      border: 1px solid slateblue
      text-align: center

    .g-layout-footer
      border: 1px solid greenyellow
      text-align: center

    .g-layout-slider
      display: flex
      align-items: center
      justify-content: center
      border: 1px solid cyan

</style>