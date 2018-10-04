<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
       <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
         <div class="item-info">
           <p class="item-title">{{item.title}}</p>
           <p class="item-desc">{{item.desc}}</p>
           <button class="item-button">查看详情</button>
         </div>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/c3/c3bab91d3c90e073a3.img.jpg_200x200_484b5664.jpg',
        title: '安月潭温泉',
        desc: '这里最近很火哦，好多人都在点评它呢！'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/c3/c3bab91d3c90e073a3.img.jpg_200x200_484b5664.jpg',
        title: '安月潭温泉',
        desc: '这里最近很火哦，好多人都在点评它呢！'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1803/c3/c3bab91d3c90e073a3.img.jpg_200x200_484b5664.jpg',
        title: '安月潭温泉',
        desc: '这里最近很火哦，好多人都在点评它呢！'
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
  .item
    overflow:hidden
    display:flex
    height:1.9rem
    .item-img
      width:1.7rem
      height:1.7rem
      padding:0.1rem
    .item-info
      flex:1
      padding:.1rem
      min-width:0
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
      .item-button
        line-height:.44rem
        margin-top:.16rem
        background:#ff9300
        padding:0 .2rem
        border-radius:.06rem
        color:#fff
</style>
