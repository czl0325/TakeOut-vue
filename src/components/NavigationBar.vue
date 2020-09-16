<template>
  <header>
    <slot name="left"></slot>
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
  .title
    flex-grow 1
    font-size 24px
    font-weight bold
    color white
    max-width 60%
</style>
