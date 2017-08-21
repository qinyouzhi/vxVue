<template>
  <div id="officeHallKinds">
    <div class="kindsSearch">
      <input type="text" placeholder="请输入事项名称">
      <button type="button"><i class="iconfont icon-search"></i></button>
    </div>
    <div class="kindsSelect_khan">
      <ul class="kinds_khan">
        <li class="active"><a href="javascript:void(0)">个人办事</a></li>
        <li><a href="javascript:void(0)">法人办事</a></li>
        <li><a href="javascript:void(0)">部门办事</a></li>
        <li><a href="javascript:void(0)">行政审批</a></li>
        <li><a href="javascript:void(0)">综合服务</a></li>
      </ul>
    </div>
    <div class="kind_list_khan">
      <ul>
        <li class="kind_khan"><a href="javascript:void(0)">职业资格</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">知识产权</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">出境入境</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">环境气象</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">交通运输</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">教育科研</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">文化体育</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">婚育收养</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">就业创业</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">纳税缴税</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">社会救助</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">证件办理</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">公积金</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">就医保健</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">房屋租售</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">场馆设施</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">司法公正</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">公共安全</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">三农服务</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">旅游服务</a></li>
        <li class="kind_khan"><a href="javascript:void(0)">其他</a></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./iconfont/iconfont.css";

  #officeHallKinds {
    a{
      color:#333333;
      font-size: .15rem;
    }
    .kindsSearch {
      display: flex;
      border-bottom: 1px solid #e1e1e1;
      input {
        width: 85%;
        text-align: center;
        padding: 0;
        margin: 0;
        height: 1rem;
        line-height: 1rem;
      }
      button {
        width: 15%;
        border: 0;
        background: white;
        height: 1rem;
        line-height: 1rem;
      }
    }
    .kindsSelect_khan {
      .kinds_khan {
        background: white;
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        li {
          width: 23%;
          padding: 0 1%;
          height:1rem;
          a {
            width: 100%;
            height:100%;
            text-align: center;
            display: block;
            line-height: 1rem;
          }
          &.active a{
            color: #004884;
            border-bottom: 2px solid #004884;
          }
        }
      }
    }
    .kind_list_khan{
      margin-top: .5rem;
      background: white;
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        li{
          width: 33%;
          text-align: center;
          a{
            display: block;
            width: 100%;
            margin: .5rem 0;
            border-right:1px solid #eee;
          }
        }
      }
    }
  }
</style>
