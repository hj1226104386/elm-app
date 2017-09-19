<template>
  <div class="footerWrapper">
    <div class="footer">
      <div class="cartIcon" :class="{blueCircle:calcTotalMoney>0}">
        <i class='iconfont icon-cart'></i>
        <span class='orderNum' v-if='totalNum>0'>{{totalNum}}</span>
      </div>
      <h4 class='price'>￥{{calcTotalMoney}}</h4>
      <p class='description'>另需配送费￥{{headerData.deliveryPrice || 0}}元</p>
      <div class="toPay" :class="{greenBg:lessMoney}" @click='goToPay'>{{showText}}</div>
    </div>
    <div class="selectFoodList">
      <div class="cartList">
        <div class="listHeader">
          <h2>购物车</h2>
          <span class='emptyList'>清空</span>
        </div>
        <div class="listWrapper">
          <ul class='list' ref='foodList'>
            <li>
              <p class='foodName'>莲子核桃黑米粥</p>
              <div class="selectBtn">
                <span class="price">￥10</span>
                <div class="btns">
                  <i class='iconfont icon-reduce'></i>
                  <span>1</span>
                  <i class='iconfont icon-add'></i>
                </div>
              </div>
            </li>
            <li>
              <p class='foodName'>莲子核桃黑米粥</p>
              <div class="selectBtn">
                <span class="price">￥10</span>
                <div class="btns">
                  <i class='iconfont icon-reduce'></i>
                  <span>1</span>
                  <i class='iconfont icon-add'></i>
                </div>
              </div>
            </li>
            <li>
              <p class='foodName'>莲子核桃黑米粥</p>
              <div class="selectBtn">
                <span class="price">￥10</span>
                <div class="btns">
                  <i class='iconfont icon-reduce'></i>
                  <span>1</span>
                  <i class='iconfont icon-add'></i>
                </div>
              </div>
            </li>
            <li>
              <p class='foodName'>莲子核桃黑米粥</p>
              <div class="selectBtn">
                <span class="price">￥10</span>
                <div class="btns">
                  <i class='iconfont icon-reduce'></i>
                  <span>1</span>
                  <i class='iconfont icon-add'></i>
                </div>
              </div>
            </li>
            <li>
              <p class='foodName'>莲子核桃黑米粥</p>
              <div class="selectBtn">
                <span class="price">￥10</span>
                <div class="btns">
                  <i class='iconfont icon-reduce'></i>
                  <span>1</span>
                  <i class='iconfont icon-add'></i>
                </div>
              </div>
            </li>
            <li>
              <p class='foodName'>莲子核桃黑米粥</p>
              <div class="selectBtn">
                <span class="price">￥10</span>
                <div class="btns">
                  <i class='iconfont icon-reduce'></i>
                  <span>1</span>
                  <i class='iconfont icon-add'></i>
                </div>
              </div>
            </li>
            <li>
              <p class='foodName'>莲子核桃黑米粥</p>
              <div class="selectBtn">
                <span class="price">￥10</span>
                <div class="btns">
                  <i class='iconfont icon-reduce'></i>
                  <span>1</span>
                  <i class='iconfont icon-add'></i>
                </div>
              </div>
            </li>
            <li>
              <p class='foodName'>莲子核桃黑米粥</p>
              <div class="selectBtn">
                <span class="price">￥10</span>
                <div class="btns">
                  <i class='iconfont icon-reduce'></i>
                  <span>1</span>
                  <i class='iconfont icon-add'></i>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: 'cart',
    props: ['headerData'],
    data () {
      return {
        totalNum: 66,
        showText: ''
      }
    },
    methods: {
      goToPay () {
        alert('结算总金额：' + this.calcTotalMoney)
      }
    },
    computed: {
      calcTotalMoney () { // 计算订单总金额，要设置成计算属性
        return this.$store.state.totolMoney
      },
      lessMoney () {
        if (this.calcTotalMoney >= this.headerData.minPrice) { // 金额够了
          this.showText = '马上结算'
          return true
        } else {
          this.showText = '￥' + (this.headerData.minPrice || 0) + '起送'
          return false
        }
      }
    }
  }

</script>

<style scoped>

  @import "../../common/iconfont/iconfont.css";

  .blueCircle:after {
    background-color: #00a0dc !important;
  }

  .blueCircle > i {
    color: #fff !important;
  }

  .greenBg {
    color: #fff !important;
    background-color: lightgreen !important;
  }
  .footerWrapper{
    height: 46px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .footer {
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 51;
    background-color: #141d27;
    padding-left: 12px;
    color: #fff;
  }

  .cartIcon {
    width: 56px;
    height: 56px;
    line-height: 56px;
    border-radius: 50%;
    background-color: #141d27;
    text-align: center;
    float: left;
    margin-top: -12px;
    position: relative;
  }

  .cartIcon:after {
    content: '';
    display: block;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, .2);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  .cartIcon > i {
    font-size: 24px;
    color: rgba(255, 255, 255, .4);
    position: relative;
    z-index: 2;
  }

  .orderNum {
    display: block;
    height: 16px;
    min-width: 24px;
    font-size: 9px;
    fong-weight: 700;
    color: #fff;
    line-height: 16px;
    text-align: center;
    padding: 0 6px;
    border-radius: 10px;
    background-color: red;
    position: absolute;
    top: 0;
    left: 33px;
    z-index: 5;
  }

  .price {
    float: left;
    height: 46px;
    line-height: 46px;
    font-size: 16px;
    color: #fff;
    border-right: 1px solid rgba(255, 255, 255, .1);
    padding: 0 12px;
  }

  .description {
    float: left;
    font-size: 14px;
    color: rgba(255, 255, 255, .4);
    font-weight: 500;
    line-height: 46px;
    padding-left: 12px;
  }

  .toPay {
    float: right;
    width: 105px;
    height: 100%;
    padding: 0 8px;
    text-align: center;
    line-height: 46px;
    font-size: 16px;
    color: rgba(255, 255, 255, .4);
    font-weight: bold;
    background-color: rgba(255, 255, 255, .2);
  }

  /*选中的订单列表*/
  .selectFoodList {
    width: 100%;
    background-color: rgba(0,0,0,.7);
    blur: 10px;
    position: fixed;
    bottom: 46px;
    left: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
  }

  .cartList {
    width: 100%;
    height: 282px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }

  .cartList > .listHeader {
    height: 40px;
    width: 100%;
    background-color: #f3f5f7;
    border-bottom: 2px solid rgba(7, 17, 27, .1);
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    flex: 0 0 40px;
  }

  .listHeader > h2 {
    font-size: 14px;
    font-weight: 200;
    color: rgb(7, 17, 27);
    line-height: 40px;
  }

  .listHeader > span {
    font-size: 12px;
    color: rgb(0, 160, 220);
    line-height: 40px;
  }

  .listWrapper {
    flex: 1;
  }

  .listWrapper > ul {
    height: 100%;
    padding: 0 18px;
    overflow: hidden;
  }

  .list > li {
    height: 48px;
    width: 100%;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    display: flex;
    justify-content: space-between;
  }

  .foodName {
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 24px;
    margin-top: 12px;
    flex: 1;
  }

  .selectBtn > span {
    font-size: 14px;
    font-weight: bold;
    color: rgb(240, 20, 20);
    padding: 0 12px;
    line-height: 48px;
  }

  .selectBtn > .btns {
    display: inline-block;
  }

  .btns > i {
    font-size: 24px;
    color: rgb(0, 160, 220);
    vertical-align: middle;
  }

  .btns > i.icon-reduce {
    font-size: 22px;
  }

  .btns > span {
    font-size: 14px;
    color: rgb(147, 153, 159);
    line-height: 48px;
    padding: 0 6px;
  }
</style>
