<template>
  <footer class="footer_guide">
    <span class="footer-item" :class="{on: '/site'===$route.path}" @click="goto('/site')">
        <i class="iconfont icon-waimai"></i>
        <span>外卖</span>
    </span>
    <span class="footer-item" :class="{on: '/search'===$route.path}" @click="goto('/search')">
        <i class="iconfont icon-search"></i>
        <span>外卖</span>
    </span>
    <span class="footer-item" :class="{on: '/order'===$route.path}" @click="goto('/order')">
        <i class="iconfont icon-dingdan"></i>
        <span>外卖</span>
    </span>
    <span class="footer-item" :class="{on: '/profile'===$route.path}" @click="goto('/profile')">
        <i class="iconfont icon-geren"></i>
        <span>外卖</span>
    </span>
  </footer>
</template>

<script>
export default {
  name: "Tabbar",
  methods: {
    goto(path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped lang="stylus">
@import "../stylus/mixins.styl"
.footer_guide
  top-border-1px(#e4e4e4)
  position: fixed
  bottom 0
  left 0
  width 100%
  height 50px
  display flex
  background-color white

  .footer-item
    display flex
    flex 1
    text-align center
    flex-direction column
    justify-content center
    align-items center
    color #999

    &.on
      color $green

    span
      font-size 12px
      margin-top 4px

      .iconfont
        font-size 25px
</style>
