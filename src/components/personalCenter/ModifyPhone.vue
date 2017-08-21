<template>
  <div class="container">
      <Modify-header :title="title" :text="text"></Modify-header>
      <Modify-inputs v-for="values of placeholder" :key="placeholder.value" :placeholders="values.value"></Modify-inputs>
      <div class="code">
        <div class="lock"><img src="../../../static/images/lock_03.png" /></div>
        <span>点击此处进行人机识别验证</span>
        <p><img src="../../../static/images/yanzheng_03.png" /></p>
      </div>
      <div class="code">
        <input type="text" placeholder="手机验证码" />
        <div>获取验证码</div>
      </div>
      <Modify-buttons></Modify-buttons>
  </div>
</template>

<script>
import ModifyInputs from "./modules/ModifyInputs"
import ModifyHeader from "./modules/ModifyHeader"
import ModifyButtons from "./modules/ModifyButtons"
export default {
  components: {
    ModifyInputs,
    ModifyHeader,
    ModifyButtons
  },
  data () {
    return  {
       title:"验证手机修改",
       text:"手机号修改以后，所有提示消息将发送至您的手机，请慎重修改",
       placeholder:[
          { id:1,value:"新手机号"}
       ]
    }
  },
  created () {
      this.$store.commit("SET_HEAD","手机绑定")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    padding:.4rem .4rem 0 .4rem;
    background:#fff;
    .code{
      position:relative;
      margin-bottom:.2rem;
      border-bottom:1px solid #e0e0e0;
      padding-bottom:1px;
      input{
        width:60%;
        height:1.16rem;
        outline:none;
        border:none;
        border-radius:0;
        color:#757575;
        font-size:.49rem;
      }
      span{
        width:60%;
        height:1.16rem;
        color:#a0a0a0;
        font-size:.49rem;
        display:block;
        line-height:1.16rem;
        text-indent:.88rem;
      }
      .lock{
        width:.58rem;
        height:.58rem;
        border:1px solid #a0a0a0;
        border-radius:50%;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        margin:auto 0;
        background:none;
        img{
          width:.22rem;
          height:.28rem;
          display:block;
          position:absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          margin:auto;
        }
      }
      p{
        width:.4rem;
        height:.46rem;
        position:absolute;
        right:0;
        top:0;
        bottom:0;
        margin:auto 0;
        img{
          width:100%;
          height:100%;
          display:block;
        }
      }
      div{
        width:2.17rem;
        height:.86rem;
        position:absolute;
        right:0;
        top:0;
        bottom:0;
        margin:auto 0;
        background:#004884;
        border-radius:.05rem;
        color:#fff;
        font-size:.3rem;
        line-height:.86rem;
        text-align:center;
      }
    }
  }
</style>
