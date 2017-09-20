<template>
  <div id="seller">
    <div class="sellerMsg whiteBg">
      <div class="sellerMsgTop">
        <div class="titleMsg">
          <h4>{{sellerMsg.name}}</h4>
          <div class="stars">
            <ul class="starDetail">
              <li></li>
            </ul>
            <span class='selected'>（{{sellerMsg.ratingCount}}）</span>
            <span class='orderNum'>月售{{sellerMsg.sellCount}}单</span>
          </div>
          <dl class="collectThis">
            <dt class='iconfont icon-collection' :class='{redHeart:collect}' @click='collectThis'></dt>
            <dd>{{collectText}}收藏</dd>
          </dl>
        </div>
      </div>
      <div class="sellerMsgBottom">
        <dl class='rightBorder'>
          <dt>起送价</dt>
          <dd>{{sellerMsg.minPrice}}元</dd>
        </dl>
        <dl class='rightBorder'>
          <dt>商家配送</dt>
          <dd>{{sellerMsg.deliveryPrice}}元</dd>
        </dl>
        <dl>
          <dt>平均配送时间</dt>
          <dd>{{sellerMsg.deliveryTime}}分钟</dd>
        </dl>
      </div>
    </div>
    <div class="activities whiteBg">
      <h4>公告与活动</h4>
      <p class='description'>{{sellerMsg.bulletin}}</p>
      <ul class="activityList">
        <li v-for='one in sellerMsg.supports'>
          <i :class="classMap[one.type]"></i>
          <span>{{one.description}}</span>
        </li>
      </ul>
    </div>
    <div class="outdoorScene whiteBg">
      <h4>商家实景</h4>
      <div class="imgList" ref='imgsWrapper'>
        <div class="imgWrapper">
          <img v-for='one in sellerMsg.pics' :src="one">
        </div>
      </div>
    </div>
    <div class="shopMsg whiteBg">
      <h4>商家信息</h4>
      <ul class="shopDetail">
        <li v-for='one in sellerMsg.infos'>
          <span>{{one}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'seller',
    data () {
      return {
        sellerMsg: '',
        classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special'], // 类型
        collect: false,  // 未收藏
        collectText: '' // 是否显示‘已’
      }
    },
    created () {
      this.$http.get('/api/seller').then((res) => {
        this.sellerMsg = res.body.data
        // 确保DOM渲染完了再执行初始化
        this.$nextTick(function () {
          this.initBScroll()
        })
        console.log(res.body.data)
      })
    },
    methods: {
      initBScroll () { // 初始化BScroll
        this.scroll = new BScroll(this.$refs.imgsWrapper, {
          scrollX: true
        })
      },
      collectThis () { // 收藏当前店铺
        if (!this.collect) {
          this.collect = !this.collect
          this.sellerMsg.ratingCount += 1
          this.collectText = '已'
        } else {
          this.collect = !this.collect
          this.sellerMsg.ratingCount -= 1
          this.collectText = ''
        }
      }
    }
  }
</script>


<style scoped>
  @import "../../common/iconfont/iconfont.css";
  /*公共变量*/
  .redHeart {
    color: rgb(240, 20, 20) !important;
  }

  .decrease {
    background: url("./decrease_4@2x.png") no-repeat;
  }

  .discount {
    background: url("./discount_4@2x.png") no-repeat;
  }

  .guarantee {
    background: url("./guarantee_4@2x.png") no-repeat;
  }

  .invoice {
    background: url("./invoice_4@2x.png") no-repeat;
  }

  .special {
    background: url("./special_4@2x.png") no-repeat;
  }

  .whiteBg {
    background-color: #fff;
    border-top: 1px solid rgba(7, 17, 27, .1);
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    margin-bottom: 16px;
  }

  /*页面样式*/
  #seller {
    width: 100%;
    background-color: rgba(7, 17, 27, .1);
    position: absolute;
    top: 174px;
    bottom: 46px;
    overflow: auto;
  }

  .sellerMsg {
    width: 100%;
    height: 148px;
    padding: 0 18px;
    border-top-width: 0;
  }

  .sellerMsg > .sellerMsgTop {
    height: 74px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }

  .sellerMsgTop > .titleMsg {
    height: 100%;
    padding: 18px 0;
    position: relative;
  }

  .titleMsg > h4 {
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    font-weight: bold;
  }

  .stars {
    font-size: 10px;
    color: rgb(77, 85, 93);
    line-height: 18px;
    margin-top: 8px;
  }

  .stars > .starDetail {
    display: inline-block;
    width: 100px;
    height: 20px;
    background-color: orange;
    vertical-align: middle;
  }

  .stars > span {
    vertical-align: middle;
  }

  .stars > .selected {
    margin: 0 12px 0 8px;
  }

  .collectThis {
    text-align: center;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .collectThis > dt {
    font-size: 24px;
    margin-bottom: 4px;
  }

  .collectThis > dd {
    font-size: 10px;
    color: rgb(77, 85, 93);
    line-height: 10px;
  }

  .sellerMsgBottom {
    height: 74px;
    display: flex;
    padding: 18px 0;
  }

  .sellerMsgBottom > dl {
    flex: 1;
    text-align: center;
  }

  .rightBorder {
    border-right: 1px solid rgba(7, 17, 271, .1);
  }

  .sellerMsgBottom > dl > dt {
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 10px;
    margin-bottom: 4px;
  }

  .sellerMsgBottom > dl > dd {
    font-size: 24px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 24px;
  }

  .activities {
    padding: 18px 18px 0;
  }

  .activities > h4 {
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    font-weight: bold;
  }

  .activities > p {
    font-size: 12px;
    font-weight: 200;
    color: rgb(240, 20, 20);
    line-height: 24px;
    padding: 0 12px;
    margin: 8px 0 16px;
  }

  .activityList > li {
    height: 48px;
    line-height: 48px;
    border-top: 1px solid rgba(7, 17, 27, .1);
    padding: 0 12px;
  }

  .activityList > li > i {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 6px;
    background-size:cover;
  }

  .activityList > li > span {
    font-size: 12px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 16px;
    vertical-align: middle;
  }

  .outdoorScene {
    padding: 18px;
  }

  .outdoorScene > h4 {
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    font-weight: bold;
  }

  .imgWrapper {
    height: 90px;
    width: 504px;
    padding-right: 16px;
    margin-top: 12px;
    white-space: nowrap;
    overflow: hidden;
  }

  .imgList {
    width: 372px;
    height: 100%;
  }

  .imgWrapper > img {
    width: 120px;
    height: 90px;
    margin-right: 6px;
  }

  .shopMsg {
    padding: 18px 18px 0;
    margin-bottom: 0;
  }

  .shopMsg > h4 {
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .shopDetail > li {
    min-height: 48px;
    border-top: 1px solid rgba(7, 17, 27, .1);
    padding: 16px 12px;
  }

  .shopDetail > li > span {
    font-size: 12px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 16px;
  }
</style>
