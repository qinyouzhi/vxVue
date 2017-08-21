<template>

     <button type="primary" class="xButton">确认</button>

</template>

<script>
export default {
  props:{
    title: String,
    text: String
  },
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
    position:absolute;
    bottom:.16rem;
    left:0;
    right:0;
  }
</style>
