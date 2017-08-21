<template>
    <div class="selectCompany">
        <div class="header">
          <span @click="back"></span>
          <h2>选择机构</h2>
          <router-link :to="'PersonalIndex'">跳过 >></router-link>
        </div>
        <div class="content">
           <div class="companyLogo"><img src="../../../static/images/companyLogo_09.png" /></div>
           <div class="info">
              <h3>吉林市城市信息技术有限公司</h3>
              <ul>
                <li>web中心</li>
                <li>营销中心</li>
                <li>运维中心</li>
              </ul>
           </div>
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
    back () {
      const router = new Router({})
      router.go(-1)
    }
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
       span{
        width:.32rem;
        height:.56rem;
        position:absolute;
        left:.65rem;
        top:0;
        bottom:0;
        margin:auto 0;
        background:url("../../../static/images/back_03.png") no-repeat;
        background-size:cover;
       }
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
       padding:0 .9rem;
       .companyLogo{
        width:2.25rem;
        height:2.25rem;
        margin:.8rem auto;
        img{
          width:100%;
          height:100%;
          display:block;
        }
       }
       .info{
          h3{
            line-height:2.26rem;
            color:#424242;
            font-size:.54rem;
            text-align:center;
            border-bottom:1px solid #e7e7e7;
          }
          ul{
            li{
              line-height:2.16rem;
              padding-top:.3rem;
              color:#424242;
              font-size:.54rem;
              text-align:center;
              border-bottom:1px solid #e7e7e7;
            }
          }
       }
     }
   }
</style>
