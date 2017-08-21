<template>
  <div id="app">
    <loading  v-model="isLoad" class='loading'></loading>
    <x-header
    :right-options="{showMore: true}"
    @on-click-more="showMenus = true"
    >{{text_head}}</x-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { XHeader, Loading } from 'vux'
import { mapGetters } from 'vuex'

export default {
   name: 'app',
   components: {
      XHeader,
      Loading
   },
   data () {
      return{
        isLoad: false
      }
   },
   computed: {
     ...mapGetters({
       isLoading: "GET_LOADING_STATUS",
       text_head: "GET_HEAD"
     })
   },
   created () {
      this.$store.commit("SET_HEAD","个人中心")
   },
   beforeUpdate () {
      this.isLoad = this.isLoading
   }
}
</script>

<style scoped lang="scss">
#app {
  width: 100%;
  height: 100%;
  background:#ebebeb;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  display:flex;
  flex-direction: column;
  .vux-header{
     background:#38383c;
  }
  .container{
    flex:1 0;
    overflow:hidden;
    overflow-y:scroll;
  }
  .loading{
    position:relative;
    z-index:99999;
  }
}
</style>
