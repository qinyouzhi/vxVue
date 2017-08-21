<template>
  <div class="container">
      <Modify-header :title="title" :text="text"></Modify-header>
      <Modify-inputs v-for="values in placeholder" :key="placeholder.value" :placeholders="values.value"></Modify-inputs>
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
       title:"验证邮箱修改",
       text:"邮箱修改以后，旧邮箱将失效，相关消息将发送至新邮箱",
       placeholder:[
          { id:1,value:"旧邮箱"},
          { id:1,value:"新邮箱"}
       ]
    }
  },
  methods: {
    greet () {
      console.log(0)
    }
  },
  created () {
    this.$store.commit("SET_HEAD","邮箱验证")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    padding:.4rem .4rem 0 .4rem;
    background:#fff;

  }
</style>
