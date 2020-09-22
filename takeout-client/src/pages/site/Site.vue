<template>
  <section class="site">
    <Header title="首页">
      <router-link slot="left" class="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link slot="right" class="right" :to="userInfo._id?'/profile':'/login'">
        <span class="header_login_text" v-if="!userInfo._id">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
           <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </Header>

    <div class="site-container">
      <swiper class="swiper-container" :options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide" v-for="(cates, index) in categoryArray" :key="index">
          <a href="javascript:" class="link_to_food" v-for="(category, index) in cates" :key="index">
            <div class="food_container">
              <img :src="baseImageUrl+category.image_url">
            </div>
            <span>{{ category.title }}</span>
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>


      <div class="site_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>

        <ShopItem v-for="(shop, index) in shops" :key="index" :shop="shop"/>

      </div>
    </div>


  </section>
</template>

<script>
import Header from '../../components/NavigationBar'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
import ShopItem from "../../components/ShopItem";
import {getAddress, getShops, getCategories} from "../../api/request";
import state from "../../store/state";
import {mapState} from 'vuex';

export default {
  name: "Site",
  data() {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com',
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        loop: false
      },
      categories: [],
      shops: []
    }
  },
  components: {
    Header,
    Swiper,
    SwiperSlide,
    ShopItem
  },
  computed: {
    ...mapState(['userInfo']),
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
    categoryArray() {
      const {categories} = this
      const arr = []
      let minArr = []
      categories.forEach(c => {
        if (minArr.length === 8) {
          minArr = []
        }
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        minArr.push(c)
      })
      return arr
    }
  },
  created() {
    getShops(this.$store.state.longitude, this.$store.state.latitude).then(res => {
      this.shops = res.data
    })
    getCategories().then(res => {
      this.categories = res.data
    })
  }
}
</script>

<style scoped lang="stylus">
@import "../../stylus/mixins.styl"
.site
  width 100%
  padding-bottom 50px

  .site-header
    display flex
    align-items center
    background-color $green
    height 45px

  .site-container
    padding-top 45px
    width 100%

    .swiper-container
      width 100%
      height 250px
      --swiper-pagination-color: black;
      background-color white

      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap

        .link_to_food
          width 25%

          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0

            img
              display inline-block
              width 50px
              height 50px
              margin-top 15px

            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666

      .swiper-pagination
        > span.swiper-pagination-bullet-active
          background #02a774

    .site_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      width 100%

      .shop_header
        padding 10px 10px 0

        .shop_icon
          margin-left 5px
          color #999

        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>
