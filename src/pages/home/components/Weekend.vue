<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
       <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
         <div class="item-img-warpper">
          <img class="item-img" :src="item.imgUrl" />
         </div>
         <div class="item-info">
           <p class="item-title">{{item.title}}</p>
           <p class="item-desc">{{item.desc}}</p>
         </div>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/79/e3036d299610f8.jpg_r_640x214_ac8d495d.jpg',
        title: '石家庄的秋天',
        desc: '金秋时节无限美，层林尽染好风光'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/79/e3036d299610f8.jpg_r_640x214_ac8d495d.jpg',
        title: '石家庄的秋天',
        desc: '金秋时节无限美，层林尽染好风光'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/79/e3036d299610f8.jpg_r_640x214_ac8d495d.jpg',
        title: '石家庄的秋天',
        desc: '金秋时节无限美，层林尽染好风光'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommend-title
    margin-top:.2rem
    line-height:.8rem
    background:#eee
    text-indent:.2rem
  .item-img-warpper
    overflow:hidden
    height:0
    padding-bottom:33.0%
    .item-img
      width:100%
  .item-info
    padding:.1rem
    .item-title
      line-height:.54rem
      font-size:.32rem
      overflow:hidden
      white-space:nowrap
      text-overflow:ellipsis
    .item-desc
      line-height:.4rem
      color:#ccc
      overflow:hidden
      white-space:nowrap
      text-overflow:ellipsis
</style>
