<template>
  <div id="header">
    <div class="headTop">
      <div class="headImg">
        <img src="./good.jpg">
      </div>
      <div class="goodsDetail">
        <h2>
          <i></i>
          <span>粥品香坊（大运村）</span>
        </h2>
        <p class='express'>蜂鸟专送/38分钟送达</p>
        <p class='activity'>
          <i></i>
          <span>在线支付满28减5，满50减10</span>
        </p>
        <div>

        </div>
      </div>
      <div class="num">
        <span>5个</span>
        <i>></i>
      </div>
    </div>
    <div class="headBottom">
      <i></i>
      <span>我是粥我是粥我是我是粥我是粥我是粥</span>
      <s>></s>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: '我来自data数据模型'
      }
    }
  }
</script>


<style scoped>
  .headTop {
    height: 106px;
    position: relative;
    background-color: rgba(7,17,27,.5);
  }

  .headImg {
    width: 64px;
    height: 64px;
    border-radius: 5px;
    float: left;
    margin: 24px 16px 18px 24px;
    overflow: hidden;
  }
  .headImg>img{
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
    background-color: rgba(0,0,0,.2);
    padding:0 8px;
    position: absolute;
    bottom:14px;
    right:12px;
  }

  .headBottom {
    height: 28px;
    background-color:rgba(0,0,0,.5);
    font-size:10px;
    color:#fff;
    position: relative;
    padding-left: 42px;
    padding-right: 26px;
  }
  .headBottom>i{
    display: block;
    width: 22px;
    height: 12px;
    background: url("./bulletin@2x.png") no-repeat;
    background-size:cover;
    position: absolute;
    top:8px;
    left:12px;
  }
  .headBottom>s{
    position: absolute;
    top:7px;
    right:12px;
  }
  .headBottom>span{
    display: block;
    line-height:28px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
</style>
