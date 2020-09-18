<template>
  <div id="app">
    <router-view/>
    <Tabbar v-show="$route.meta.showFooter==true"/>
  </div>
</template>

<script>
import Tabbar from "./components/Tabbar";
export default {
  name: 'App',
  components: {
    Tabbar
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
