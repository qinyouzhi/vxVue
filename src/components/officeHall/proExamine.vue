<template>
  <div id="proExamine">
    <ul class="examine_boxs_khan">
      <li class="examine_box">
        <div class="examine_khan">
          <div class="title">
            <h5 class="department">【省畜牧业管理局】</h5>
            <i class="iconfont icon-xia"></i>
          </div>
          <div class="content">
            <i class="iconfont icon-jilu-copy"></i>
            <a href="javascript:void(0);">
              草种检验员资格认定
            </a>
          </div>
          <ul class="detail_list_khan" v-bind:class="">
            <li class="detail_khan">
              <div class="d_top">
                <div class="detail_title">
                  <i class="iconfont icon-zuoyoug01"></i>
                  <p>颁发施工企业安全生产许可证</p>
                </div>
                <div class="stars">
                  <i class="iconfont icon-starfull"></i>
                  <i class="iconfont icon-starfull"></i>
                  <i class="iconfont icon-starfull"></i>
                  <i class="iconfont icon-star-empty"></i>
                  <i class="iconfont icon-star-empty"></i>
                </div>
              </div>
              <div class="d_bot">
                <button><i class="iconfont icon-zhinan"></i><span>指南</span></button>
                <button><i class="iconfont icon-shenbao"></i><span>申报</span></button>
                <button><i class="iconfont icon-yushen"></i><span>预审</span></button>
                <button><i class="iconfont icon-jinrongtubiao_jieguo"></i><span>结果公示</span></button>
              </div>
            </li>
            <li class="detail_khan">
              <div class="d_top">
                <div class="detail_title">
                  <i class="iconfont icon-zuoyoug01"></i>
                  <p>颁发施工企业安全生产许可证</p>
                </div>
                <div class="stars">
                  <i class="iconfont icon-starfull"></i>
                  <i class="iconfont icon-starfull"></i>
                  <i class="iconfont icon-starfull"></i>
                  <i class="iconfont icon-star-empty"></i>
                  <i class="iconfont icon-star-empty"></i>
                </div>
              </div>
              <div class="d_bot">
                <button><i class="iconfont icon-zhinan"></i><span>指南</span></button>
                <button><i class="iconfont icon-shenbao"></i><span>申报</span></button>
                <button><i class="iconfont icon-yushen"></i><span>预审</span></button>
                <button><i class="iconfont icon-jinrongtubiao_jieguo"></i><span>结果公示</span></button>
              </div>
            </li>
          </ul>
        </div>
      </li>
      <li class="examine_box">
        <div class="examine_khan">
          <ul class="detail_list_khan">
            <li class="detail_khan">
              <div class="d_top">
                <div class="detail_title">
                  <i class="iconfont icon-zuoyoug01"></i>
                  <p>颁发施工企业安全生产许可证</p>
                </div>
                <div class="stars">
                  <i class="iconfont icon-starfull"></i>
                  <i class="iconfont icon-starfull"></i>
                  <i class="iconfont icon-starfull"></i>
                  <i class="iconfont icon-star-empty"></i>
                  <i class="iconfont icon-star-empty"></i>
                </div>
              </div>
              <div class="d_bot">
                <button><i class="iconfont icon-zhinan"></i><span>指南</span></button>
                <button><i class="iconfont icon-shenbao"></i><span>申报</span></button>
                <button><i class="iconfont icon-yushen"></i><span>预审</span></button>
                <button><i class="iconfont icon-jinrongtubiao_jieguo"></i><span>结果公示</span></button>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="scss" rel="stylesheet/scss">
  @import "./iconfont/iconfont.css";

  #proExamine {
    .disNone{
      display: none;
    }
    .examine_boxs_khan {
      background: #fff;
      display: flex;
      flex-direction: column;
      padding: 0 .5rem;
      .examine_box {
        display: flex;
        flex-direction: column;
        border-bottom: solid 1px #e7e7e7;
        .title {
          display: flex;
          justify-content: space-between;
          h5 {
            font-size: .5rem;
            color: #5c5c5c;
          }
          i{
            font-size: .5rem;
          }
          padding: .3rem 0;
        }
        .content {
          display: flex;
          a {
            font-size: .5rem;
            color: #5585ad;
            margin-bottom: .5rem;
          }
          > i {
            font-size: .7rem;
            color:#b5b5b5;
          }
        }
        .detail_list_khan {
          .detail_khan {
            padding-bottom: .5rem;
            .d_top {
              display: flex;
              height: 1.5rem;
              line-height: 1.5rem;
              justify-content: space-between;
              .detail_title {
                display: flex;
                i {
                  color: #004884;
                  font-size: .5rem;
                }
                p {
                  font-size: .5rem;
                  color: #a6a6a6;
                }
              }
              .stars {
                display: flex;
                i {
                  font-size: .5rem;
                  &.icon-star-empty {
                    position: relative;
                    top: .07rem;
                    color: #777;
                  }
                  &.icon-starfull {
                    color: #fcbf2b;
                  }
                }
              }
            }
            .d_bot {
              display: flex;
              button{
                border:1px #999 solid;
                padding: .2rem;
                background: #fff;
                border-radius: 3px;
                margin: .2rem;
                font-size: .4rem;
              }
            }
          }
        }
      }
    }
  }
</style>
