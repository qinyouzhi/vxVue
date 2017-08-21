<template>
  <div class="container">
      <h4>该用户未进行个人认证请</h4>
      <div class="info">
        <Modify-inputs v-for="values of placeholder" :key="placeholder.value" :placeholders="values.value"></Modify-inputs>
      </div>
      <div class="ID">
          <div class="IDFront"><img src="../../../static/images/camera.png" /></div>
          <p>身份证扫描件（正）</p>
      </div>
      <div class="ID">
          <div class="IDFront"><img src="../../../static/images/camera.png" /></div>
          <p>身份证扫描件（反）</p>
      </div>
      <button type="primary" class="xButton">认证</button>
  </div>
</template>

<script>
import ModifyInputs from "./modules/ModifyInputs"
export default {
  components: {
    ModifyInputs
  },
  data () {
    return  {
       placeholder:[
          { id:1,value:"姓氏"},
          { id:1,value:"名字"},
          { id:1,value:"身份证号"},
       ]
    }
  },
  created () {
    this.$store.commit("SET_HEAD","个人认证")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    padding:.4rem .4rem 0 .4rem;
    background:#fff;
    h4{
      font-size:.44rem;
      color:#004884;
    }
    .info{
      input{
        height:1.18rem;
        width:100%;
        border:none;
        border-bottom:1px solid #e0e0e0;
        outline:none;
        &:last-child{
          margin-bottom:1.3rem;
        }
      }
    }
    .ID{
      p{
        font-size:.34rem;
        color:#b4b4b4;
        text-align:center;
        line-height:1.6rem;
      }
      &:nth-of-type(3){
        .IDFront{
          background:url("../../../static/images/IDAfter.png") no-repeat;
          background-size:cover;
        }
      }
    }
    .IDFront{
      width:8.77rem;
      height:5.64rem;
      background:url("../../../static/images/IDFront.png") no-repeat;
      background-size:cover;
      margin:0 auto;
      position:relative;
      border:1px dashed #8e8e8e;
      border-radius:.3rem;

      img{
        width:1.93;
        height:1.51rem;
        display:block;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
      }

    }
    .xButton{
      width:11.42rem;
      height:1.68rem;
      border:none;
      margin-top:.6rem;
      background:#004884;
      border-radius:.1rem;
      color:#fff;
      display:block;
      margin:.6rem auto;
      font-size:.5rem;
    }
  }
</style>
