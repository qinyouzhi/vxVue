<template>
    <div class="wx_mark" v-if="show">
       <div class="wx_content">
           <h3>{{options.title}}</h3>
           <p>{{options.content}}</p>
           <div class="star" v-if="options.star">
             <p><i v-for="( oStar,index ) of 5" @click="starEvent(index)"></i></p>
             <p class="starBg"><span @click="starEvent(index)" v-for="( stars,index ) of star" :key="star"></span></p>
           </div>
           <div class="wx_opinion">
              <h4>{{options.text}}</h4>
              <input type="text" v-model="text" />
           </div>
           <button class="off" @click="close()">{{options.cancel}}</button>
           <button class="confirm" @click="confirm()">{{options.confirm}}</button>
       </div>
       <div>
          <alert v-model="bShow" :title=title @on-hide="onHide"></alert>
       </div>
    </div>
</template>

<script>
import api from "../../store/fetch/api"
import { mapGetters } from 'vuex'
import { Alert } from 'vux'
export default {
  props: {
    options: {
      type: Object,
      default: () => {
       return {}
      }
    }
  },
  components: {
    Alert
  },
  data () {
    return  {
       star:0,
       text:'',
       bShow:false,
       title:''
    }
  },
  computed: {
     ...mapGetters({
       show: "GET_SHOW",
       id:'GET_MSG'
     })
  },
  methods: {
    close () {
      this.$store.commit('IS_SHOW', false)
    },
    starEvent (index) {
      this.star = index+1
    },
    confirm () {
      if(!this.text){
        this.bShow = true
        if(this.options.title === "预约"){
          this.title = "请输入预约日期"
        }else if(this.options.title === "评价"){
          this.title = "请输入您宝贵的意见"
        }
      }else{
        if(this.options.title === "预约"){
          if(this.isDate(this.text)){
            api.get('/materialCheck/'+this.id+'/Rservation',{
                    reservationTime: this.text
                    })
                    .then(res => {
                        if(res.return_code === 0){
                           this.bShow = true
                           this.title = "预约成功"
                           this.text = ''
                        }
                    })
          }
        }else if(this.options.title === "评价"){
          if(this.star !== 0){
             api.get('/temporary/'+this.id+'/evaluate',{
                            points: this.star,
                            memo: this.text
                            })
                            .then(res => {
                                if(res.return_code === 0){
                                   this.bShow = true
                                   this.title = "评价成功"
                                   this.text = ''
                                }
                            })
          }else if(this.star == 0){
              this.bShow = true
              this.title = "请补全星级"
              this.text = ''
          }
        }
      }
    },
    onHide () {
       this.close()
    },
    isDate (value) {
      var tmpStr = "";
      var strReturn = "";

      var iIdNo = this.trim(value);

      var v = value.match(/^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/);

      if (iIdNo.length == 0) {
          return false;
      }

      if (iIdNo.length == 8) {
          tmpStr = iIdNo.substring(0, 8);
          tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6, 8)
          value = tmpStr
      }

      if ((iIdNo.length != 8) && !v) {
          strReturn = "日期格式错误，提示：19990101或1999-01-01"
          this.bShow = true
          this.title = strReturn
          this.text = ''
          return false
      }
      return true
    },
    trim (str) {
        return str.replace(/(^\s*)|(\s*$)/g, "")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .wx_mark{
      width:100%;
      height:100%;
      background:rgba(204,204,204,.3);
      position:absolute;
      top:46px;
      z-index:99;
      .wx_content{
        width:10rem;
        height:9.96rem;
        background:#fff;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        margin:auto;
        z-index:999;
        padding:.62rem;
        h3{
          font-size:.48rem;
          color:#404040;
          font-weight:bold;
          padding-bottom:.1rem;
        }
        p{
          font-size:.46rem;
          color:#757575;
          line-height:.8rem;
          padding-bottom:.7rem;
        }
        .star{
            position:relative;
            padding-bottom:.4rem;
          p{
            height:1rem;
            i{
              width:.78rem;
              height:.72rem;
              display:inline-block;
              background:url("../../../static/images/star.png");
              background-size:cover;
              margin-right:.1rem;
            }
          }
          .starBg{
            position:absolute;
            top:0;
            left:0;
            span{
              width:.78rem;
              height:.72rem;
              display:inline-block;
              background:url("../../../static/images/star_bg.png");
              background-size:cover;
              margin-right:.1rem;
            }
          }
        }
        .wx_opinion{
          h4{
            color:#757575;
            font-size:.45rem;
            padding-top:.4rem;
          }
          input{
            width:100%;
            height:.8rem;
            border:none;
            border-radius:0;
            border-bottom:1px solid #cccccc;
            outline:none;
            display:block;
            margin-top:.2rem;
          }
        }
        button{
          width:2.64rem;
          height:.9rem;
          border:1px solid #004884;
          text-align:center;
          background:none;
          padding:0;
          position:absolute;
          bottom:.62rem;
        }
        .confirm{
          background:#004884;
          color:#fff;
          right:.62rem;
        }
        .off{
          color:#004884;
          right:3.88rem;
        }
      }
    }
</style>
