<template>
  <section class="site">
    <div class="site-header"></div>
  </section>
</template>

<script>
export default {
  name: "Site"
}
</script>

<style scoped lang="stylus">
@import "../../stylus/mixins.styl"
.site
  width 100%

  .site-header
    display flex
    align-items center
    background-color $green
    height 45px

</style>
