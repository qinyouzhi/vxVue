<template>
  <input type="text" :placeholder=placeholders />
</template>

<script>
export default {
  props:{
    placeholders: String
  },
  data () {
    return  {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    input{
      width:100%;
      height:1.16rem;
      outline:none;
      margin-bottom:.2rem;
      border:none;
      border-bottom:1px solid #e0e0e0;
      border-radius:0;
      color:#757575;
      font-size:.49rem;
    }
</style>
