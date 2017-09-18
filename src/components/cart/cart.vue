<template>
  <div id="footer">
    <div class="cartIcon">
      <i class='iconfont icon-cart'></i>
      <span class='orderNum'>66</span>
    </div>
    <h4 class=price>￥66</h4>
    <p class='description'>另需配送费￥4元</p>
    <div class="toPay">
      ￥20起送
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  export default {
    name: 'cart',
    data () {
      return {}
    }
  }

</script>

<style scoped>
  @import "../../common/iconfont/iconfont.css";
  #footer {
    height: 46px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #141d27;
    padding-left: 12px;
    color:#fff;
  }
  .cartIcon{
    width: 56px;
    height: 56px;
    line-height:56px;
    border-radius:50%;
    background-color:#141d27;
    text-align: center;
    float: left;
    margin-top: -12px;
    position: relative;
  }
  .cartIcon:after{
    content: '';
    display: block;
    width: 44px;
    height: 44px;
    border-radius:50%;
    background-color: rgba(255,255,255,.2);
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    z-index: 1;
  }
  .cartIcon>i{
    font-size:24px;
    color:rgba(255,255,255,.4);
    position: relative;
    z-index: 2;
  }
  .orderNum{
    display: block;
    height: 16px;
    min-width:24px;
    font-size:9px;
    fong-weight:700;
    color:#fff;
    line-height:16px;
    text-align: center;
    position: absolute;
    top:0;
    left:33px;
    padding: 0 6px;
    border-radius:10px;
    background-color: red;
  }
  .price{
    float: left;
    height: 32px;
    line-height:32px;
    margin-top: 8px;
    font-size:16px;
    color:rgba(255,255,255,.4);
    border-right:1px solid rgba(255,255,255,.1);
    padding: 0 12px;
  }
  .description{
    float: left;
    font-size:14px;
    color:rgba(255,255,255,.4);
    font-weight:500;
    line-height:46px;
    padding-left: 12px;
  }
  .toPay{
    float: right;
    width: 105px;
    height:100%;
    padding:0 8px;
    text-align: center;
    line-height:46px;
    font-size:16px;
    color:rgba(255,255,255,.4);
    font-weight:bold;
    background-color: rgba(255,255,255,.2);
  }
</style>
