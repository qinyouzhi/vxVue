<template>
  <div class="container">
      <div class="PLS"></div>
      <p>您的个人信息已经提交，等待您去现场核验！</p>
  </div>
</template>

<script>
export default {
  data () {
    return  {
       dataJson : [

       ]
    }
  }
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
      background:url("../../../static/images/PCLS.png") no-repeat;
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
  }
</style>
