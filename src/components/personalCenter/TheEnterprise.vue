<template>
  <div class="container">
      <div class="map">
        <img src="../../../static/images/map.png" />
        <div class="info">
          <h3><i></i><span>吉林市城市信息技术有限公司</span></h3>
          <ul>
            <li v-for="item of information" :key="information.info"><span></span>{{ item.info }}</li>
          </ul>
        </div>
      </div>
      <div v-for="cityes of city">
        <h4>切换城市</h4>
        <div class="city" v-for="items of cityes.enterprises">
            <img :src="items.iconSrc" />
            <span>{{items.enterprise}}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return  {
       information:[
         {info:"13433881786"},
         {info:"jlc888888@sina.com"},
         {info:"北京市朝阳区光华路soho"}
       ],
       city:[
          {
            cityName:"吉林",
            enterprises:[
              {id:1,enterprise:"吉林市城市信息技术有限公司",iconSrc:"../../static/images/small.png"},
              {id:2,enterprise:"吉林市城市信息技术有限公司",iconSrc:"../../static/images/small.png"},
              {id:3,enterprise:"吉林市城市信息技术有限公司",iconSrc:"../../static/images/small.png"},
              {id:4,enterprise:"吉林市城市信息技术有限公司",iconSrc:"../../static/images/small.png"},
              {id:5,enterprise:"吉林市城市信息技术有限公司",iconSrc:"../../static/images/small.png"},
              {id:6,enterprise:"吉林市城市信息技术有限公司",iconSrc:"../../static/images/small.png"}
            ]
          }
       ]
    }
  },
  created () {
     this.$store.commit("SET_HEAD","所属企业")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    padding:.4rem .4rem 0 .4rem;
    background:#ebebeb;
    h4{
      color:#757575;
      font-size:.46rem;
      line-height:1.08rem;
      padding-top:.4rem;
      font-weight:bold;
    }
    .map{
      background:#fff;
      padding-bottom:.4rem;
      img{
        width:100%;
        display:block;
      }
      .info{
        padding-left:.73rem;
        h3{
          color:#424242;
          font-size:.64rem;
          line-height:2.16rem;
          padding-left:1.14rem;
          position:relative;
        }
        i{
          width:1rem;
          height:1.03rem;
          position:absolute;
          background:url("../../../static/images/big.png") no-repeat;
          background-size:cover;
          top:-.1rem;;
          bottom:0;
          left:0;
          margin:auto 0;
        }
        ul{
          li{
            font-size:.43rem;
            color:#434343;
            line-height:1.2rem;
            position:relative;
            text-indent:.96rem;
            span{
              width:.48rem;
              height:.49rem;
              display:inline-block;
              position:absolute;
              top:0;
              bottom:0;
              margin:auto 0;
              left:0;
            }
            &:nth-of-type(1){
              span{
                background:url("../../../static/images/phone_07.png") no-repeat;
                background-size:cover;
              }
            }
            &:nth-of-type(2){
              span{
                background:url("../../../static/images/mail_07.png") no-repeat;
                background-size:cover;
              }
            }
            &:nth-of-type(3){
              span{
                background:url("../../../static/images/position_07.png") no-repeat;
                background-size:cover;
              }
            }
          }
        }
      }
    }
    .city{
      position:relative;
      background:#fff;
      margin-bottom:.3rem;
      img{
        width:.72rem;
        display:block;
        position:absolute;
        top:-.1rem;;
        bottom:0;
        left:.87rem;
        margin:auto 0;
      }
      span{
        color:#424242;
        font-size:.5rem;
        line-height:2.18rem;
        padding-left:1.86rem;
      }
    }
  }
</style>
