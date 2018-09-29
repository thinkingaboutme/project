<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/46/8f0ebedc269a6402.jpg_750x200_36765d6a.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background:#fff
  .wrapper
    width:100%
    height:0
    overflow:hidden
    padding-bottom:26.67%
    background:#eee
    .swiper-img
      width:100%
</style>
