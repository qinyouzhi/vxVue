<template>
    <div class="selectCompany">
        <div class="header">
          <h2>选择公司</h2>
          <router-link :to="'SelectMechanism'">跳过 >></router-link>
        </div>
        <div class="content">
           <ul>
              <li><img src="../../../static/images/companyLogo_09.png" /></li>
              <li><img src="../../../static/images/companyLogo_06.png" /></li>
              <li><img src="../../../static/images/companyLogo_03.png" /></li>
           </ul>
           <ul>
               <li><img src="../../../static/images/companyLogo_09.png" /></li>
               <li><img src="../../../static/images/companyLogo_06.png" /></li>
               <li><img src="../../../static/images/companyLogo_03.png" /></li>
           </ul>
           <ul>
              <li><img src="../../../static/images/companyLogo_09.png" /></li>
              <li><img src="../../../static/images/companyLogo_06.png" /></li>
              <li><img src="../../../static/images/companyLogo_03.png" /></li>
           </ul>
        </div>
    </div>
</template>

<script>
import api from "../../store/fetch/api"
import Router from "vue-router"
import { mapGetters } from 'vuex'

export default {
  props: {

  },
  components: {

  },
  data () {
    return{

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .selectCompany{
     position:absolute;
     background:#fff;
     width:100%;
     height:100%;
     top:0;
     .header{
       width:100%;
       height:1.44rem;
       border-bottom:1px solid #e5e5e5;
       position:relative;
       h2{
        color:#424242;
        font-size:.54rem;
        text-align:center;
        line-height:1.44rem;
        font-weight:bold;
       }
       a{
        color:#757575;
        font-size:.5rem;
        position:absolute;
        right:.68rem;
        top:0;
        line-height:1.44rem;
        font-weight:bold;
       }
     }
     .content{
       padding:0 1.3rem;
       ul{
        display:flex;
        justify-content:space-between;
        margin-top:1.3rem;
        li{
          width:1.96rem;
          height:1.96rem;
          img{
            width:100%;
            height:100%;
            display:block;
          }
        }
       }
     }
   }
</style>
