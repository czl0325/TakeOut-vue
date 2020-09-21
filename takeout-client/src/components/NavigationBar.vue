<template>
  <header>
    <slot name="left" class="left"></slot>
    <span class="title ellipsis">{{ title }}</span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    title: String
  }
}
</script>

<style scoped lang="stylus">
@import "../stylus/mixins.styl"
header
  background-color $green
  width 100%
  height 45px
  display flex
  align-items center
  position fixed
  top 0
  left 0
  z-index 100
  .title
    position absolute
    left 50%
    top 50%
    z-index 100
    transform translate(-50%, -50%)
    font-size 18px
    font-weight bold
    max-width 60%
    color white
  .left
    position: absolute;
    left 10px
    top 50%
    transform translateY(-50%)
    color white
  .right
    position: absolute;
    right 10px
    top 50%
    transform translateY(-50%)
    color white
</style>
