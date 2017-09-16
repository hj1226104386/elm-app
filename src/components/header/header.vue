<template>
  <div id="header">
    <div class="headTop">
      <div class="headImg">
        <img :src="headerData.avatar">
      </div>
      <div class="goodsDetail">
        <h2>
          <i></i>
          <span>{{headerData.name}}</span>
        </h2>
        <p class='express'>{{headerData.description}}/{{headerData.deliveryTime}}分钟送达</p>
        <p class='activity' v-if='headerData.supports'>
          <i></i>
          <span>{{headerData.supports[0].description}}</span>
        </p>
        <div>

        </div>
      </div>
      <div class="num" @click='showDetail'>
        <span>{{calcLength}}个</span>
        <i>></i>
      </div>
      <div class="background">
        <img :src="headerData.avatar">
      </div>
    </div>
    <div class="headBottom" @click='showDetail'>
      <i></i>
      <span>{{headerData.bulletin}}</span>
      <s>></s>
    </div>
    <!--蒙层-->
    <div class="sellerDetail animated bounceInRight" v-show='ifShowDetail'>
      <h2>{{headerData.name}}</h2>
      <div class="showStar"></div>
      <div class="discountMsg">
        <div class="discountTitle lineTitle">
          <h3>优惠信息</h3>
        </div>
        <ul class='discountList'>
          <li v-for='one in calcArray'>{{one.description}}</li>
        </ul>
      </div>
      <div class="sellerNotice">
        <div class="sellerNoticeTitle lineTitle">
          <h3>商家公告</h3>
        </div>
        <p>{{headerData.bulletin}}</p>
      </div>
      <div class="closeDetail">
        <span class='iconfont icon-delete' @click='closeDetail'></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: '我来自data数据模型',
        ifShowDetail: false
      }
    },
    props: ['headerData'],
    methods: {
      closeDetail: function () {
        this.ifShowDetail = false
      },
      showDetail: function () {
        this.ifShowDetail = true
      }
    },
    computed: {
      calcLength: function () {
        if (this.headerData.supports) {
          return this.headerData.supports.length
        }
      },
      calcArray: function () {
        if (this.headerData.supports) {
          return this.headerData.supports
        } else {
          return []
        }
      }
    }
  }
</script>
<style scoped>
  @import "../../common/iconfont/iconfont.css";

  .headTop {
    height: 106px;
    position: relative;
    background-color: rgba(7, 17, 27, .5);
  }

  .headImg {
    width: 64px;
    height: 64px;
    border-radius: 5px;
    float: left;
    margin: 24px 16px 18px 24px;
    overflow: hidden;
  }

  .headImg > img {
    width: 100%;
    height: 100%;
  }

  .goodsDetail {
    width: auto;
    float: left;
    margin-top: 26px;
  }

  .goodsDetail > h2 {
    font-size: 16px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    line-height: 18px;
  }

  .goodsDetail > h2 > i {
    display: inline-block;
    width: 30px;
    height: 18px;
    background: url("./brand@3x.png") no-repeat;
    background-size: cover;
    vertical-align: middle;
  }

  .goodsDetail > .express {
    font-size: 12px;
    color: #fff;
    font-weight: 200;
    line-height: 12px;
    margin-top: 4px;
  }

  .activity {
    margin-top: 5px;
  }

  .activity > i {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("./decrease_2@3x.png") no-repeat;
    background-size: cover;
    vertical-align: middle;
  }

  .activity > span {
    font-size: 10px;
    color: #fff;
    font-weight: 200;
    line-height: 12px;
  }

  .num {
    width: 48px;
    height: 24px;
    border-radius: 16px;
    line-height: 24px;
    color: #fff;
    font-weight: 200;
    font-size: 10px;
    background-color: rgba(0, 0, 0, .2);
    padding: 0 8px;
    position: absolute;
    bottom: 14px;
    right: 12px;
  }
  .background{
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: -1;
    filter:blur(10px);/*滤镜：模糊*/
  }
  .background>img{
    width: 100%;
    height: 100%;
  }
  .headBottom {
    height: 28px;
    background-color: rgba(0, 0, 0, .5);
    font-size: 10px;
    color: #fff;
    position: relative;
    padding-left: 42px;
    padding-right: 26px;
  }

  .headBottom > i {
    display: block;
    width: 22px;
    height: 12px;
    background: url("./bulletin@2x.png") no-repeat;
    background-size: cover;
    position: absolute;
    top: 8px;
    left: 12px;
  }

  .headBottom > s {
    position: absolute;
    top: 7px;
    right: 12px;
  }

  .headBottom > span {
    display: block;
    line-height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .sellerDetail {
    width: 100%;
    height: 100%;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(7, 17, 27, .8);
    padding: 64px 36px 32px;
  }

  .sellerDetail > h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    margin-bottom: 16px;
  }

  .sellerDetail > .showStar {
    width: 100%;
    height: 24px;
    background-color: orange;
  }

  .discountMsg {
    width: 100%;
    height: auto;
  }

  .lineTitle {
    height: 14px;
    width: 100%;
    margin-top: 28px;
    position: relative;
    margin-bottom: 24px;
  }

  .lineTitle:before,
  .lineTitle:after {
    content: '';
    display: block;
    width: calc(50% - 40px);
    height: 2px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, .2);
  }

  .lineTitle:before {
    left: 0;
  }

  .lineTitle:after {
    right: 0;
  }

  .lineTitle > h3 {
    width: auto;
    padding: 0 12px;
    font-size: 14px;
    font-weight: bold;
    line-height: 14px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }

  .discountList {
    padding-left: 12px;
    height: auto;
  }

  .discountList > li {
    font-size: 12px;
    font-weight: 200;
    line-height: 12px;
    margin-bottom: 12px;
  }

  .sellerNotice {
    margin-top: 28px;
  }

  .sellerNotice > p {
    padding: 0 12px;
    font-size: 12px;
    font-weight: 200;
    line-height: 24px;
  }

  .closeDetail {
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
  }

  .closeDetail > span {
    font-size: 20px;
  }
</style>
