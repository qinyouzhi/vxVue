<template>
  <div class="container">
      <div class="PLS"></div>
      <p>您已通过实名认证</p>
      <div class="info">
          <h5>姓名：<span>何瑞敏</span></h5>
          <h6>身份证号：<span>1231236781278387812</span></h6>
      </div>
      <p class="SFZ">身份证扫描件（反）</p>
      <button type="primary" class="xButton">认证</button>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    padding:.4rem .4rem 0 .4rem;
    background:#fff;
    .PLS{
      width:5.55rem;
      height:6.34rem;
      background:url("../../../static/images/PCLSC.png") no-repeat;
      background-size:cover;
      margin:0 auto;
      margin-top:3.1rem;
    }
    p{
      line-height:1.7rem;
      color:#9e9e9e;
      font-size:.5rem;
      text-align:center;
    }
    .info{
      width:9.32rem;
      background:#ebf2f7;
      margin:0 auto;
      padding:.34rem 0;
      margin-top:.5rem;
      h5{
        color:#424242;
        font-size:.5rem;
        text-align:center;
        font-weight:bold;
      }
      h6{
        color:#424242;
        font-size:.5rem;
        text-align:center;
        font-weight:bold;
      }
    }
    .SFZ{
      color:#999999;
      font-size:.34rem;
      margin-top:6.5em;
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
