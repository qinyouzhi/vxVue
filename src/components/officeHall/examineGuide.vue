<template>
  <div id="examineGuide">
    <div class="eGuide_khan">
      <ul class="eGuide_list">
        <li class="eGuide_item">
          <div class="focus_title">
            <h5 class="title">食品生产许可（含食品添加剂许可）</h5>
            <i class="iconfont icon-xia" @click="eGuideTable"></i>
          </div>
          <ul class="eGuide_table" v-bind:class="flag?'':'disNone'">
            <li>
              <span>流程类型：</span>
              <p>行政许可类</p>
            </li>
            <li>
              <span>办理主题：</span>
              <p>法定机关</p>
            </li>
            <li>
              <span>受理部门：</span>
              <p>吉林市药监局行政审批办</p>
            </li>
            <li>
              <span>流程编号：</span>
              <p>LC03</p>
            </li>
            <li>
              <span>服务对象：</span>
              <p>企业</p>
            </li>
            <li>
              <span>办理地点：</span>
              <p>吉林市政务服务中心</p>
            </li>
            <li>
              <span>实现依据：</span>
              <p>国家《食品经营许可管理办法》</p>
            </li>
            <li>
              <span>法定期限：</span>
              <p>30个工作日</p>
            </li>
            <li>
              <span>承诺期限：</span>
              <p>20个工作日</p>
            </li>
            <li>
              <span>咨询电话：</span>
              <p>0432-64820256</p>
            </li>
            <li>
              <span>监督投诉热线：</span>
              <p>0432-64820256</p>
            </li>
            <li>
              <span>办件类型：</span>
              <p>限时办结</p>
            </li>
            <li>
              <span>办理时间：</span>
              <p>上午08:30-11:30,下午13:30-16:30  （节假日不对外办公）</p>
            </li>
            <li>
              <span>审批流程：</span>
              <p>第一步 但我确定我瞧得起我的期望我去打球</p>
            </li>
          </ul>
        </li>
        <li class="eGuide_item">
          <div class="focus_title">
            <h5 class="title">受理条件</h5>
            <i class="iconfont icon-xia" @click="eGuideTable()"></i>
          </div>
          <ul class="eGuide_table disNone">
            <li>
              <span>流程类型：</span>
              <p>行政许可类</p>
            </li>
            <li>
              <span>办理主题：</span>
              <p>法定机关</p>
            </li>
            <li>
              <span>受理部门：</span>
              <p>吉林市药监局行政审批办</p>
            </li>
            <li>
              <span>流程编号：</span>
              <p>LC03</p>
            </li>
            <li>
              <span>服务对象：</span>
              <p>企业</p>
            </li>
            <li>
              <span>办理地点：</span>
              <p>吉林市政务服务中心</p>
            </li>
            <li>
              <span>实现依据：</span>
              <p>国家《食品经营许可管理办法》</p>
            </li>
            <li>
              <span>法定期限：</span>
              <p>30个工作日</p>
            </li>
            <li>
              <span>承诺期限：</span>
              <p>20个工作日</p>
            </li>
            <li>
              <span>咨询电话：</span>
              <p>0432-64820256</p>
            </li>
            <li>
              <span>监督投诉热线：</span>
              <p>0432-64820256</p>
            </li>
            <li>
              <span>办件类型：</span>
              <p>限时办结</p>
            </li>
            <li>
              <span>办理时间：</span>
              <p>上午08:30-11:30,下午13:30-16:30  （节假日不对外办公）</p>
            </li>
            <li>
              <span>审批流程：</span>
              <p>第一步 但我确定我瞧得起我的期望我去打球</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="userBtns">
      <button>
        <i class="iconfont icon-zixun"></i>
        <span>我要咨询</span>
      </button>
      <button>
        <i class="iconfont icon-shenbao"></i>
        <span>网上申报</span>
      </button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
      data(){
          return {
              flag:true
          }
      },
    computed:{

    },
    methods:{
      eGuideTable(){
        this.flag = !this.flag;
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./iconfont/iconfont.css";

  #examineGuide {
    .disNone {
      display: none !important;
    }
    .eGuide_khan {
      ul.eGuide_list {
        background: white;
        display: flex;
        flex-direction: column;
        margin-top: .7rem;
        li.eGuide_item {
          border-bottom: 1px solid #eee;
          display: flex;
          flex-direction: column;
          .focus_title {
            display: flex;
            justify-content: space-between;
            i {
              font-size: .5rem;
              padding: .3rem;
            }
          }
          .title {
            line-height: 1rem;
            font-size: .5rem;
            color: #5585ad;
            border-left: .1rem solid #004884;
            padding-left: .3rem;
          }
          .eGuide_table {
            margin: 10px;
            border: 1px #e7e7e7 solid;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            font-size: .5rem;
            li {
              display: flex;
              border-bottom: #e7e7e7 solid 1px;
              padding: 3px;
              span {
                width: 35%;
              }
              &:nth-last-of-type(1) {
                border: 0;
              }
            }
          }
        }
      }
    }
    .userBtns {
      width: 100%;
      display: flex;
      position: fixed;
      bottom: 0;
      button {
        &:nth-of-type(1) {
          background: #fff;
          color: #004884;
        }
        &:nth-of-type(2) {
          background: #004884;
          color: white;
        }
        border: 0;
        width: 50%;
        text-align: center;
        padding: .5rem 1rem;
        display: block;
        font-size: .5rem;
      }
    }
  }
</style>
