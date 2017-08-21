<template>
  <div class="container">
    <div class="content">
      <div class="head" v-for="items of dataJson">
          <h3><span>[新办]</span>{{ tit }}</h3>
          <h4>提交时间</h4>
          <p v-for="item of opts">{{item.createTime | data}}</p>
          <h4>办理状态</h4>
          <p class="state" v-for="item of opts" v-bind:class="{ completeColor: item.status == 4 }">{{ item.wfStatus }}</p>
      </div>
      <div class="info">
          <h2>基本信息</h2>
          <ul>
            <li v-for="( infoData,index ) of info.fields"><span>{{ infoData.text }}</span><em>{{ infoName[index] }}</em></li>
          </ul>
      </div>
      <div class="info">
        <h2>办理材料</h2>
        <ul>
          <li v-for="( materials, index ) of material"><span>{{ materials.text }}</span><a @click="downLoad(index)" value="Download">查看</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import api from "../../store/fetch/api"
import {mapGetters} from 'vuex'

export default {
  data () {
    return  {
       tit:"",
       dataJson : [],
       opts : [],
       info : {},
       infoText : [],
       infoName : [],
       material : [],
       imageSrc : ""
    }
  },
  filters: {
       data (val) {
         let d = new Date(val);
         let year = d.getFullYear();
         let month = d.getMonth() + 1;
         let day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
         let hour = d.getHours();
         let minutes = d.getMinutes();
         let seconds = d.getSeconds();
         return  year+ '-' + month + '-' + day + ' ' + hour + ' : ' + minutes;
       }
  },
  created() {
     setTimeout( () => {
        api.get('/officeCenter/'+this.id+'/detail')
                .then(res => {
                    if(res.return_code === 0){
                      this.tit = res.data.subject
                      this.dataJson.push(JSON.parse(res.data.content))
                      this.opts.push(res.data)
                      this.infoText.push(JSON.parse(res.data.content))
                    }
                })
        api.get('/officeCenter/'+this.id+'/confModel')
                .then(res => {
                    if(res.return_code === 0){
                      this.info = JSON.parse(res.data.content).forms[0]
                      this.material = JSON.parse(res.data.content).forms[1].fields
                    }
                })
     },0)
     this.$store.commit("SET_HEAD","办件详情")
     this.infoTextName
  },
  methods: {
    downLoad (index) {
       let name = this.material[index].name
       let imgSrc = this.dataJson[0][name]
       this.imageSrc = "http://7xlcuy.com1.z0.glb.clouddn.com/"+imgSrc
       window.location.href = this.imageSrc
    }
  },
  computed:{
    ...mapGetters({
      id:'GET_MSG'
    }),
    infoTextName () {
      setTimeout( () => {
         let name = ''
         let len = this.info.fields.length
         let i = 0
         for(i;i<len;i++){
           name = this.info.fields[i].name
           this.infoName.push(this.infoText[0][name])
         }
      },300)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    padding:.35rem .4rem .4rem .4rem;
    .content{
      width:100%;
      background:#fff;
      border-radius:.1rem;
      .head{
        padding:.42rem;
        border-bottom:1px solid #e0e0e0;
        h3{
          font-size:.48rem;
          font-weight: bold;
          color:#3f3f3f;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          padding-bottom:.3rem;
          span{
            color:#145082;
          }
        }
        h4{
          font-size:.38rem;
          color:#727272;
          padding-top:.2rem;
          font-weight: bold;
          line-height:.88rem;
        }
        p{
          font-size:.32rem;
          color:#7b7b7b;
        }
        .state{
          font-size:.38rem;
          color:#004276;
        }
        .completeColor{
          color:#cc0000;
        }
      }
      .info{
        padding:.42rem .42rem 0 .42rem;
        border-bottom:1px solid #e0e0e0;
        &:nth-of-type(3){
          ul{
            li{
              position:relative;
              span{
                width:90%;
                display:inline-block;
              }
              a{
                position:absolute;
                right:0;
                bottom:0;
                width:10%;
                text-align:center;
              }
            }
          }
        }
        h2{
          font-size:.42rem;
          color:#454545;
          line-height:.82rem;
          font-weight: bold;
        }
        ul{
          li{
            color:#797979;
            font-size:.38rem;
            line-height:.92rem;
            padding-top:.15rem;
            border-bottom:1px solid #e0e0e0;
            &:last-child{
              border:none;
            }
            span{
              width:40%;
              display:inline-block;
            }
            em{
              font-style:normal;
              text-align:right;
              width:60%;
              display:inline-block;
            }
            a{
              font-style:normal;
              text-align:right;
              width:60%;
              display:inline-block;
              color:#044984;
            }
          }
        }
      }
    }
  }
</style>
