<template>
  <div id="header">
    <div class="headTop">
        <div class="headImg">
          <img src="">
        </div>
      <div class="goodsDetail">
          <h2>
            <i></i>
            <span>粥品香坊（大运村）</span>
          </h2>
        <p>蜂鸟专送/38分钟送达</p>
        <div>

        </div>
      </div>
    </div>
    <div class="headBottom">

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
  #header{
    background-color: orange;
  }
  .headTop{
    height: 106px;
    background-color: lightblue;
  }
  .headImg{
    width: 64px;
    height: 64px;
    border-radius: 4px;
    float: left;
    margin:24px 16px 18px 24px;
    background-color: pink;
  }
  .goodsDetail{
    height: 64px;
    width:auto;
    float: left;
    background-color: orange;
  }
  .headBottom{
    height: 28px;
    background-color: gray;
  }
</style>
