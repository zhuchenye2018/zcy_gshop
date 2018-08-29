<template>
  <div id="app">
      <router-view></router-view>
     <footer-guide v-show="$route.meta.isShowFooter"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
    components:{
      FooterGuide
    }
}
</script>

<style>
  #app{
    height: 100%;
    width: 100%;
  }
</style>
