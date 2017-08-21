<template>
  <div class="container">
      <div class="portrait">
          <img src="../../../static/images/portraitBg.png" alt="">
          <div class="portraitImg"><img src="../../../static/images/portrait.png" alt=""></div>
      </div>
      <div class="portraitInfo" v-for="data of dataJson">
          <div class="nameBox">
             <h3>{{ data.name }}</h3>
             <div class="isAuthentication">
                <span></span>{{ data.isAuthentication }}
             </div>
             <p>{{ data.txt }}</p>
          </div>
          <ul>
            <li v-for="item of data.information"><span></span>{{ item.info }}</li>
          </ul>
      </div>
      <div class="list">
          <ul>
              <li v-for="list of lists" @click="clickMe($event)"><router-link :to="list.href">{{ list.text }}</router-link><span></span></li>
          </ul>
      </div>
  </div>
</template>

<script>
import api from "../../store/fetch/api"
export default {
  data () {
    return  {
       dataJson : [
          {
            id:"1",
            name:"何瑞敏",
            isAuthentication:"未认证",
            txt:"事能知足常心切，人到无求品自高，脆弱的心灵不敢凝视美丽，强壮的心灵敢于面对哀愁~ ~",
            information:[
              {info:"13433881786"},
              {info:"jlc888888@sina.com"},
              {info:"5988837465"},
              {info:"北京市朝阳区光华路soho"}
            ]
          }
       ],
       lists:[
         {
           href:"EssentialInfo",
           text:"基本信息"
         },{
           href:"bgUpLoad",
           text:"背景头像"
         },{
           href:"PersonalCertification",
           text:"个人认证"
         },{
           href:"ModifyPwd",
           text:"密码修改"
         },{
           href:"TheEnterprise",
           text:"所属企业"
         },{
           href:"OfficeIndex",
           text:"办件中心"
         }
       ]
    }
  },
  methods:{
    clickMe (ev) {
      let text = ev.srcElement.text
      this.$root.eventHub.$emit('YOUR_EVENT_NAME', text)
    }
  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    padding:.4rem;
    .portrait{
      width:100%;
      position:relative;
      img{
        width:100%;
        height:100%;
        display:block;
      }
      .portraitImg{
        width:3.6rem;
        height:3.6rem;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        img{
          width:100%;
          height:100%;
          display:block;
        }
      }
    }
    .portraitInfo{
      padding:0 .86rem .8rem .86rem;
      background:#fff;
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
              background:url("../../../static/images/qq_07.png") no-repeat;
              background-size:cover;
            }
          }
          &:nth-of-type(4){
            span{
              background:url("../../../static/images/position_07.png") no-repeat;
              background-size:cover;
            }
          }
        }
      }
      .nameBox{
        padding:.2rem 0;
        h3{
          width:2.4rem;
          font-size:.68rem;
          color:#434343;
          font-weight:bold;
          display:inline-block;
        }
        p{
          font-size:.5rem;
          color:#757575;
          padding-top:.2rem;
          line-height:.96rem;
        }
        .isAuthentication{
          width:2.34rem;
          height:.8rem;
          border:1px solid #d8d8d8;
          font-size:.37rem;
          line-height:.8rem;
          color:#cacaca;
          border-radius:.1rem;
          padding-left:.95rem;
          position:relative;
          display:inline-block;
          span{
             width:.53rem;
             height:.53rem;
             position:absolute;
             top:0;
             bottom:0;
             left:.2rem;
             margin:auto 0;
             background:url("../../../static/images/Authentication_03.png");
             background-size:cover;
          }
        }
      }
    }
    .list{
      background:#fff;
      margin-top:.4rem;
      ul{
        li{
          height:2rem;
          line-height:2rem;
          border-bottom:1px solid #d8d8d8;
          position:relative;
          &:last-child{
            border-bottom:none;
          }
          a{
            width:100%;
            height:100%;
            position:relative;
            color:#424242;
            font-size:.6rem;
            display:block;
            padding-left:.76rem;
          }
          span{
            width:.33rem;
            height:.52rem;
            position:absolute;
            top:0;
            bottom:0;
            right:.78rem;
            margin:auto 0;
            background:url("../../../static/images/right_11.png");
            background-size:cover;
          }
        }
      }
    }
  }
</style>
