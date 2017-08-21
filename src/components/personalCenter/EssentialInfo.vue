<template>
  <div class="container">
      <div class="nameAuthentication">
          <h3>实名认证信息</h3>
          <ul>
             <li>姓氏<input type="text" placeholder="请输入您的姓氏" /></li>
             <li>名字<input type="text" placeholder="请输入您的名字" /></li>
             <li>生日<input type="text" placeholder="请输入您的出生年月" /></li>
             <li>性别<input type="text" placeholder="请输入您的姓别" /></li>
          </ul>
      </div>
      <div class="authenticationInfo">
          <h3>验证信息</h3>
          <ul>
             <li>电话<span><router-link :to="'/ModifyPhone'">手机绑定</router-link></span></li>
             <li>邮箱<span><router-link :to="'/ModifyEmail'">邮箱验证</router-link></span></li>
          </ul>
      </div>
      <div class="modifyInfo">
          <h3>可随时修改信息</h3>
          <ul>
             <li>Q Q<input type="text" placeholder="点击输入QQ号码" /></li>
             <li>地址<input type="text" placeholder="点击输入您的地址" /></li>
             <li>签名<input type="text" placeholder="点击输入您的个性签名" /></li>
          </ul>
      </div>
      <button type="primary" class="xButton">保存</button>
  </div>
</template>

<script>
export default {

  data () {
    return  {
       dataJson : [

       ]
    }
  },
  created () {
    this.$store.commit("SET_HEAD","基本信息")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    padding:.4rem .4rem 0 .4rem;
    background:#fff;
    .xButton{
      width:11.42rem;
      height:1.68rem;
      border:none;
      margin-top:.6rem;
      background:#004884;
      border-radius:.1rem;
      color:#fff;
      display:block;
      margin:0 auto;
      margin-top:.6rem;
      font-size:.5rem;
    }
    .nameAuthentication,.authenticationInfo,.modifyInfo{
      padding-bottom:.5rem;
      h3{
        font-size:.62rem;
        color:#424242;
        font-weight:bold;
      }
      ul{
        li{
          height:1.2rem;
          position:relative;
          line-height:1.2rem;
          color:#757575;
          font-size:.5rem;
          line-height:1.2rem;
          border-bottom:1px solid #e0e0e0;
          input{
            width:8.9rem;
            height:100%;
            position:absolute;
            top:0;
            right:0;
            outline:none;
            text-align:left;
            color:#424242;
            font-size:.5rem;
            border:none;
          }
        }
      }
    }
    .authenticationInfo{
      ul{
        li{
          span{
            position:absolute;
            right:7.04rem;
            a{
              color:#004884;
              font-size:.46rem;
            }
          }
        }
      }
    }
    .modifyInfo{
      ul{
        li{
          &:nth-of-type(1){
            font-family: "Microsoft YaHei";
          }
        }
      }
    }
  }
</style>
