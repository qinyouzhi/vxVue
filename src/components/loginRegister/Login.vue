<template>
    <div class="login">
       <div class="close"><img src="../../../static/images/close_03.png" /></div>
       <div class="logo_box">
          <div class="logo"><img src="../../../static/images/logo_07.png" /></div>
          <p>吉林市网上政务大厅</p>
       </div>
       <div class="inputs">
          <input type="text" placeholder="输入手机号" v-model="username" />
          <div class='pwd'>
            <input type="text" placeholder="输入验证码" v-model="password" />
            <button @click="sendCode" ref="sendCode" :disabled="disabled || time > 0">{{text}}</button>
          </div>
       </div>
       <button class="btn" @click="login">登录</button>
       <div>
         <alert v-model="show" :title=title></alert>
       </div>
    </div>
</template>

<script>
import api from "../../store/fetch/api"
import Router from "vue-router"
import { mapGetters } from 'vuex'
import { Alert } from 'vux'

export default {
  props: {
     second: {
       type: Number,
       default: 60
     },
     disabled: {
       type: Boolean,
       default: false
     }
  },
  components: {
      Alert
  },
  data () {
    return{
       time: 0,
       username:'',
       password:'',
       show:false,
       title:''
    }
  },
  computed: {
    text () {
      return this.time > 0 ? this.time + 's 后重新获取' : '获取验证码';
    }
  },
  methods: {
    start () {
      this.time = this.second;
      this.timer();
    },
    timer: function () {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
      }else{
       this.disabled = false;
      }
    },
    sendCode () {
      this.start()
    },
    login () {
       api.post('/login',{
                 username:this.username,
                 password:this.password
              })
              .then(res => {
                  if(res.return_code === 0){
                     const router = new Router({})
                     router.push('/SelectCompany')
                  }else if(res.return_code === -100012 || -100048){
                     this.show = true
                     this.title = res.return_message
                  }
              })
              .catch(res => {
                  this.show = true
                  this.title = '请求失败'
              })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
   .login{
      width:100%;
      height:100%;
      background:#fff;
      position:absolute;
      top:0;
      padding:0 .82rem;
      .close{
        position:absolute;
        width:.38rem;
        height:.38rem;
        right:.82rem;
        top:.58rem;
        img{
          width:100%;
          height:100%;
          display:block;
        }
      }
      .logo_box{
        margin-top:2.9rem;
        .logo{
          width:2.5rem;
          height:2.1rem;
          margin:0 auto;
          img{
            width:100%;
            height:100%;
            display:block;
          }
        }
        p{
          color:#333;
          font-size:.74rem;
          text-align:center;
          line-height:1.9rem;
          font-weight:bold;
        }
      }
      .inputs{
        width:100%;
        margin-top:1.7rem;
        input{
          width:100%;
          height:1.02rem;
          border:none;
          border-radius:0;
          outline:none;
          color:#5d5d5d;
          font-size:.48rem;
          border-bottom:1px solid #c4c4c4;
        }
        .pwd{
          display:flex;
          width:100%;
          margin-top:1.54rem;
          input{
            width:70%;
            height:1.02rem;
          }
          button{
            width:30%;
            height:1.02rem;
            color:#1493fc;
            font-size:.46rem;
            line-height:1.02rem;
            text-align:right;
            border:none;
            padding:0;
            background:#fff;
            &:disabled{
              color:#515151;
              font-size:.4rem;
            }
          }
        }
      }
      .btn{
        width:100%;
        height:1.34rem;
        color:#fff;
        background:#0d90fc;
        font-size:.46rem;
        border:none;
        border-radius:.1rem;
        margin-top:1.34rem;
      }
   }
</style>
