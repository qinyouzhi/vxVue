<template>

      <div class="inputs">
         <h3>{{ title }}</h3>
         <p>{{ text }}</p>
      </div>

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
  .inputs{
    h3{
      font-size:.6rem;
      color:#424242;
    }
    p{
      font-size:.4rem;
      color:#004884;
      line-height:1.2rem;
    }
  }
</style>
