<template>
  <div class="container">
      <div class="upLoadBox">
        <h3>头像上传</h3>
        <div class="upLoadBg">
           <img src="../../../static/images/xiangji.png" alt="" />
        </div>
        <p>仅支持JPG、GIF、JPEG、BMP格式，文件小于2.5M</p>
      </div>
      <div class="upLoadBox">
        <h3>背景图上传</h3>
        <div class="upLoadBg">
           <img src="../../../static/images/xiangji.png" alt="" />
        </div>
        <p>仅支持JPG、GIF、JPEG、BMP格式，文件小于2.5M</p>
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
    this.$store.commit("SET_HEAD","背景头像")
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
      margin:.6rem auto;
      font-size:.5rem;
    }
    .upLoadBox{
       margin-top:.4rem;
       &:nth-of-type(2){
        .upLoadBg{
           width:10rem;
           height:5.9rem;
        }
       }
       h3{
        font-size:.64rem;
        color:#424242;
       }
      .upLoadBg{
        width:8rem;
        height:8rem;
        background:#ebebeb;
        margin:0 auto;
        position:relative;
        margin-top:.66rem;
        img{
          width:2.7rem;
          height:2.2rem;
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
        color:#757575;
        font-size:.44rem;
        text-align:center;
        padding-top:.3rem;
      }
    }
  }
</style>
