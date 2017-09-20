<template>
  <div id="seller">
    <div class="sellerMsg">
      <div class="sellerMsgTop">
        <div class="titleMsg">
          <h4>香港中文大学（大运村）</h4>
          <div class="stars">
            <ul class="starDetail">
              <li></li>
            </ul>
            <span class='selected'>（661）</span>
            <span class='orderNum'>月售690单</span>
          </div>
          <dl class="collectThis">
            <dt class='iconfont icon-cart'></dt>
            <dd>sdf</dd>
          </dl>
        </div>
        <div class="selection"></div>
      </div>
      <div class="sellerMsgBottom"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'seller'
  }
</script>


<style scoped>
  #seller {
    width: 100%;
    background-color: lightblue;
    position: absolute;
    top: 174px;
    bottom: 46px;
  }

  .sellerMsg {
    width: 100%;
    height: 148px;
    padding: 0 18px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }

  .sellerMsg > .sellerMsgTop {
    height: 74px;
    background-color: pink;
  }

  .sellerMsgTop > .titleMsg {
    height: 100%;
    padding: 18px 0;
    position: relative;
  }
  .titleMsg>h4{
    font-size:14px;
    color:rgb(7,17,27);
    line-height:14px;
    font-weight:bold;
  }
  .stars{
    font-size:10px;
    color:rgb(77,85,93);
    line-height:18px;
    margin-top: 8px;
  }
  .stars>.starDetail{
    display: inline-block;
    width: 100px;
    height: 20px;
    background-color: orange;
    vertical-align: middle;
  }
  .stars>span{
    vertical-align: middle;
  }
  .stars>.selected{
    margin:0 12px 0 8px;
  }
  .sellerMsgTop > .selection {

  }
</style>
