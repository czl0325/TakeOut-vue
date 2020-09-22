<template>
  <div id="app">
    <router-view/>
    <Tabbar v-show="$route.meta.showFooter==true"/>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar";
import {getUserInfo} from './api/request'

export default {
  name: 'App',
  components: {
    Tabbar
  },
  created() {
  },
  mounted() {
    getUserInfo().then(res => {
      if (res.code === 0) {
        this.$store.dispatch('reloadUserInfo', res.data)
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
}
</style>
