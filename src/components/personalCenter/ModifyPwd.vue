<template>
  <div class="container">
      <Modify-header :title="title" :text="text"></Modify-header>
      <Modify-inputs v-for="values in placeholder" :key="placeholder.value" :placeholders="values.value"></Modify-inputs>
      <Modify-buttons :type="button" @click.native="button()"></Modify-buttons>
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
       title:"登录密码修改",
       text:"密码修改以后，旧密码将失效，再次登录需要新密码",
       placeholder:[
          { id:1,value:"旧密码"},
          { id:1,value:"新密码"},
          { id:1,value:"确认密码"},
       ]
    }
  },
  methods: {
    button () {
      alert(9)
    }
  },
  created () {
    this.$store.commit("SET_HEAD","密码修改")
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
