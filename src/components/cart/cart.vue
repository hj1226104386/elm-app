<template>
  <div class="footerWrapper">
    <div class="footer">
      <div class="cartIcon" :class="{blueCircle:calcTotalMoney>0}" @click='toggleList'>
        <i class='iconfont icon-cart'></i>
        <span class='orderNum' v-if='calcSelectFoodsNum>0'>{{calcSelectFoodsNum}}</span>
      </div>
      <h4 class='price'>￥{{calcTotalMoney}}</h4>
      <p class='description'>另需配送费￥{{headerData.deliveryPrice || 0}}元</p>
      <div class="toPay" :class="{greenBg:lessMoney}" @click='goToPay'>{{showText}}</div>
    </div>
    <div class="selectFoodMask" v-if='show' @click='closeList'>
      <div class="cartList animated bounceInUp" @click.stop='showList'>
        <div class="listHeader">
          <h2>购物车</h2>
          <span class='emptyList' @click.stop='clearList'>清空</span>
        </div>
        <div class="listWrapper" ref='listsWrapper'>
          <ul class='list'>
            <li v-for='food in calcSelectFoods'>
              <p class='foodName'>{{food.name}}</p>
              <div class="selectBtn">
                <span class="price">￥{{food.price}}</span>
                <div class="btns">
                  <i class='iconfont icon-reduce' v-if='food.count'></i>
                  <span>{{food.count}}</span>
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
  import BScroll from 'better-scroll'

  export default {
    name: 'cart',
    props: ['headerData'],
    data () {
      return {
        showText: '',
        show: false // 是否显示订单列表
      }
    },
    methods: {
      goToPay () {
        alert('结算总金额：' + this.calcTotalMoney)
      },
      toggleList () {
        if (!this.show && this.calcSelectFoods.length > 0) {
          this.show = true // 这是个坑 一定要先让元素显示出来，再初始化
          this.$nextTick(function () {
            this.scroll = new BScroll(this.$refs.listsWrapper, {
              click: true // 不阻止click事件
            })
          })
        } else {
          this.show = false
        }
      },
      showList () {
        this.show = true
      },
      closeList () {
        this.show = false
      },
      clearList () { // 清空购物车
        this.$store.commit('clearSelectFodds')
        this.show = false
      }
    },
    computed: {
      calcTotalMoney () { // 计算订单总金额，要设置成计算属性
        return this.$store.state.totolMoney
      },
      calcSelectFoods () {
        return this.$store.state.selectFoods
      },
      calcSelectFoodsNum () {
        var num = 0
        let selectFoods = this.$store.state.selectFoods
        selectFoods.forEach(function (v, i) {
          num += v.count
        })
        return num
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

  .footerWrapper {
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
    top: 0;
    left: 0;
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
  .selectFoodMask {
    width: 100%;
    background-color: rgba(0, 0, 0, .7);
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
  }

  .cartList > .listHeader {
    height: 40px;
    width: 100%;
    background-color: #f3f5f7;
    border-bottom: 2px solid rgba(7, 17, 27, .1);
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
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
    height: 242px;
    overflow: hidden;
  }

  .listWrapper > ul {
    padding: 0 18px;
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
    width: 76px;
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
