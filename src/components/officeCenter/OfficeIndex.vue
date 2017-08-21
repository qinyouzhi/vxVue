<template>
  <div class="container">
    <OfficeAlert
    :show.sync="show"
    :options.sync="options"></OfficeAlert>
    <form class="form">
      <i></i><input type="search" placeholder="请输入您要搜索的事项名称或申报主体" />
    </form>
    <v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" id="loadmore">
     <div>
        <div class="content" v-for="( data, index ) in dataJson">
          <h3><span>[{{ data.approvalType }}]</span>{{ data.approvalName }}</h3>
          <div class="info">
            <h4>办事主体</h4>
            <p>{{ data.approvalBody }}</p>
          </div>
          <div class="info">
            <h4>法定代表人（负责人）</h4>
            <p>{{ data.approvaler }}</p>
          </div>
          <div class="info">
            <h4>提交时间</h4>
            <p>{{ data.createTime | data }}</p>
          </div>
          <div class="contentFoot">
            <span v-bind:class="{ completeColor: data.status == 4 }">{{ data.approvalStatus }}</span>
            <i @click="SeeDetails(index)"><router-link :to="'/OfficeDetails'">查看详情</router-link></i>
            <i>
              <span v-if="data.status == 4">需PC端补正材料</span>
              <a @click="notice($event,index)" v-if="data.status == 1">预约</a>
              <a @click="notice($event,index)" v-else-if="data.status == 3">评价</a>
            </i>
          </div>
        </div>
       </div>
    </v-loadmore>
  </div>
</template>

<script>

import api from "../../store/fetch/api"
import OfficeAlert from "./OfficeAlert"
import { mapActions, mapGetters } from 'vuex'
import { Loadmore } from 'mint-ui';

export default {
  props:{
    makeID :{
      type:String,
      default: ""
    }
  },
  components: {
    OfficeAlert,
    'v-loadmore':Loadmore
  },
  data () {
    return  {
       options: {},
       evaluate:{
         title:"评价",
         content:"请对此次服务进行评分并给出评价意见，谢谢您的合作！",
         star:1,
         text:"请填写评价意见",
         confirm:"确定",
         cancel:"取消"
       },
       bespeak:{
         title:"预约",
         content:"您的预审提交材料已通过审核，请预约到大厅办理时间",
         text:"预约日期",
         confirm:"确定",
         cancel:"取消"
       },
       dataJson:[],
       pageNo:1,
       pageSize:10,
       allLoaded: false,
       scrollMode:"auto",
       totalpage:0,
       loading:false,
       bottomText: '',
    }
  },
  mounted(){
      this.loadPageList();
  },
  computed: {
     ...mapGetters({
       show: "GET_SHOW"
     })
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
     this.$store.commit("SET_HEAD","办件中心")
  },
  methods: {
    loadTop () {
       setTimeout( () => {
          this.loadPageList()
          this.$refs.loadmore.onTopLoaded();
       },1000)
    },
    loadBottom () {
       setTimeout( () => {
         this.more();
         this.$refs.loadmore.onBottomLoaded();
       },1000)
    },
    loadPageList () {
       api.post('/officeCenter',{
                     page:this.pageNo,
                     pageSize:this.pageSize
                  })
                  .then(res => {
                      if(res.return_code === 0){
                         this.dataJson = res.data.list;
                         this.totalpage = Math.ceil(res.data.totalCount/this.pageSize);
                         if(this.totalpage == 1){
                           this.allLoaded = true;
                         }
                         this.$nextTick(function () {
                           this.scrollMode = "touch";
                           this.isHaveMore();
                         });
                      }
                  })
                  .catch(res => {
                      alert("请求失败")
                  })
    },
    more (){
      if(this.totalpage == 1){
        this.pageNo = 1;
        this.allLoaded = true;
      }else{
        this.pageNo = parseInt(this.pageNo) + 1;
        this.allLoaded = false;
      }
      api.post('/officeCenter',{
                                page:this.pageNo,
                                pageSize:this.pageSize
                               })
                               .then(res=>{
        this.dataJson = this.dataJson.concat(res.data.list);
        this.isHaveMore();
      });
    },
    isHaveMore () {
      if(this.pageNo == this.totalpage){
        this.allLoaded = true;
      }
    },
    notice (event,index) {
      if(event.srcElement.text === "评价"){
         this.options = this.evaluate
      }else if(event.srcElement.text === "预约"){
         this.options = this.bespeak
      }
      this.$store.commit('IS_SHOW', true)
      this.SeeDetails(index)
    },
    SeeDetails (index) {
      let id = this.dataJson[index].id
      this.$store.commit('SET_MSG', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container{
    padding-top:.4rem;
    .completeColor{
      color:#cc0000;
    }
  }
  .form{
    position:relative;
    input{
      width:11.62rem;
      height:.9rem;
      border:none;
      margin:0 auto;
      display:block;
      border-radius:.45rem;
      outline: none;
      font-size:.36rem;
      color:#9f9f9f;
      padding-left:.92rem;
    }
    i{
      width:.36rem;
      height:.36rem;
      background:url("../../../static/images/seach.png");
      position:absolute;
      background-size:cover;
      top:0;
      bottom:0;
      left:.8rem;
      margin:auto 0;
    }
  }
  #loadmore{
  .content{
      width:11.62rem;
      padding:.42rem;
      background:#fff;
      margin:0 auto;
      border-radius:.1rem;
      margin-top:.4rem;
      &:last-child{
        margin-bottom:.4rem;
      }
      h3{
        font-size:.48rem;
        font-weight: bold;
        color:#3f3f3f;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        span{
          color:#145082;
        }
      }
      .info{
        padding-top:.6rem;
        h4{
          color:#757575;
          font-size:.4rem;
          font-weight: bold;
        }
        p{
          color:#767676;
          font-size:.4rem;
        }
      }
  }
  }
  .contentFoot{
    position:relative;
    margin-top:.3rem;
    span{
       font-size:.4rem;
       color:#00477c;
    }
    i{
       font-style:normal;
       position:absolute;
       right:0;
       bottom:0;
       text-align: center;
       line-height:.92rem;
       font-size:.4rem;
       a{
         width:2.66rem;
         height:.92rem;
         color:#00477c;
         display:block;
         border: 1px solid #00477c;
       }
       &:nth-of-type(2){
         right:3.06rem;
       }
    }
  }
</style>
