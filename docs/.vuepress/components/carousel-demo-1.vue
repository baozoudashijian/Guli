<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>基础组件</p>
    <g-carousel>
      <g-carousel-item name="1">
        <div class="box">1</div>
      </g-carousel-item>
      <g-carousel-item name="2">
        <div class="box">2</div>
      </g-carousel-item>
      <g-carousel-item name="3">
        <div class="box">3</div>
      </g-carousel-item>
    </g-carousel>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>

  import Carousel from "../../../src/carousel/carousel.vue";
  import CarouselItem from "../../../src/carousel/carousel-item";

  export default {
    components: {
      'g-carousel': Carousel,
      'g-carousel-item': CarouselItem,
    },
    data() {
      return {
        content: `
          <g-carousel>
            <g-carousel-item name="1">
              <div class="box">1</div>
            </g-carousel-item>
            <g-carousel-item name="2">
              <div class="box">2</div>
            </g-carousel-item>
            <g-carousel-item name="3">
              <div class="box">3</div>
            </g-carousel-item>
          </g-carousel>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style lang="sass">
  .box
    width: 100%
    height: 150px
    background-color: rgb(54, 77, 121)
</style>