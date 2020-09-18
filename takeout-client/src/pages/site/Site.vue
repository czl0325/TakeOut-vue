<template>
  <section class="site">
    <Header title="首页">
      <router-link slot="left" class="left" to="/search">
        <i class="iconfont icon-sousuo" ></i>
      </router-link>
      <router-link slot="right" class="right" :to="userInfo.id?'/userinfo':'/login'">
        <span class="header_login_text" v-if="!userInfo.id">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
           <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </Header>

    <div class="site-container">
      <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="slide">
          <div style="background-color: red; width: 100%;height: 100%"></div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div style="background-color: green; width: 100%;height: 100%"></div>
        </swiper-slide>
        <swiper-slide class="slide">
          <div style="background-color: blue; width: 100%;height: 100%"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import Header from '../../components/NavigationBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'

export default {
  name: "Site",
  data() {
    return {
      userInfo: {},
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        //滑动速度
        speed: 1000,
      }
    }
  },
  components: {
    Header,
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
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
  .site-container
    position: fixed;
    top 45px
    bottom 0
    width 100%
    .swiper-container
      width 100%
      height 250px
      --swiper-pagination-color: black;

</style>
