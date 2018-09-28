<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
           输入城市/景点/游玩主题
    </div>
    <div class="header-right">
           城市
      <span class="iconfont arrow-icon">&#xe61c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Homeheader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display:flex
    line-height:.88rem
    background:#00bcd4
    color:#fff
    .header-left
      width:.64rem
      text-align:center
      .back-icon
        font-size:.36rem
        font-weight:bold
    .header-input
      flex:1
      height:.6rem
      line-height:.6rem
      background:#fff
      border-radius:.1rem
      margin-top:.14rem
      margin-left:.2rem
      color:#ccc
      padding-left:.2rem;
    .header-right
      width: 1.24rem
      text-align:center
      .arrow-icon
        font-size:.20rem
        margin-left:-.02rem
</style>
