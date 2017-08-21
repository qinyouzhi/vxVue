<template>
  <div id="officeHall">
    <div class="hall_block">
      <h5 class="title">办事大厅</h5>
      <ul class="hallKinds">
        <li>
          <i class="iconfont icon-geren"></i>
          <p>个人办事</p>
        </li>
        <li>
          <i class="iconfont icon-faren"></i>
          <p>法人办事</p>
        </li>
        <li>
          <i class="iconfont icon-bumen"></i>
          <p>部门办事</p>
        </li>
        <li>
          <i class="iconfont icon-shenpi"></i>
          <p>行政审批</p>
        </li>
        <li>
          <i class="iconfont icon-gengduo"></i>
          <p>综合服务</p>
        </li>
      </ul>
    </div>
    <div class="hall_block">
      <h5 class="title">便民服务</h5>
      <ul class="convenience">
        <li>
          <i class="iconfont icon-shuidian"></i>
          <p>水电煤缴费</p>
        </li>
        <li>
          <i class="iconfont icon-shebaochaxun"></i>
          <p>社保查询</p>
        </li>
        <li>
          <i class="iconfont icon-jiuyi160yaofang"></i>
          <p>就医服务</p>
        </li>
        <li>
          <i class="iconfont icon-weizhang"></i>
          <p>交通违章</p>
        </li>
        <li>
          <i class="iconfont icon-yinhang"></i>
          <p>交通出行</p>
        </li>
        <li>
          <i class="iconfont icon-huanjing"></i>
          <p>环境气象</p>
        </li>
        <li>
          <i class="iconfont icon-gongjijin"></i>
          <p>公积金</p>
        </li>
        <li>
          <i class="iconfont icon-shenbao"></i>
          <p>申报纳税</p>
        </li>
        <li>
          <i class="iconfont icon-gengduo"></i>
          <p>更多</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import url(./iconfont/iconfont.css);
  #officeHall{
    background: #e7e7e7;
    .hall_block{
      h5{
        font-size: .13rem;
        color: #a6a6a6;
        padding: .17rem 0;
        border-left: .08rem solid #004884;
        padding-left: .2rem;
      }
      ul{
        i{
          font-size: .8rem;
        }
        &:nth-of-type(1){
          li{
            width: 2.45555555rem;
            height:2.5rem;
          }
          li:nth-of-type(1){
            i{
              color:#108ee9;
            }
          }
          li:nth-of-type(2){
            i{
              color:#f15a4a;
            }
          }
          li:nth-of-type(3){
            i{
              color:#f39826;
            }
          }
          li:nth-of-type(4){
            i{
              color:#29ab91;
            }
          }
          li:nth-of-type(5){
            i{
              color:#108ee9;
            }
          }
        }
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        li{
          text-align: center;
          p{
            font-size: .14rem;
          }
        }
      }
      margin:.5rem 0;
      background: #fff;
    }
    .hall_block:nth-of-type(2){
      ul{
        li{
          width: 3.1rem;
        }
        li:nth-of-type(1),li:nth-of-type(6){
          i{
            color:#108ee9;
          }
        }
        li:nth-of-type(2),li:nth-of-type(7){
          i{
            color:#f39826;
          }
        }
        li:nth-of-type(3),li:nth-of-type(8){
          i{
            color:#29ab91;
          }
        }
        li:nth-of-type(4){
          i{
            color:#f15a4a;
          }
        }
        li:nth-of-type(5){
          i{
            color:#29ab91;
          }
        }
      }
    }

  }
</style>
