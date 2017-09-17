<template>
  <div id="goods">
    <div class="sideMenu menuWrapper" ref='menuWrapper'>
      <ul class='content'>
        <li v-for='item in goods'>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="contentMenu foodsWrapper" ref='foodsWrapper'>
      <ul class='typeList'>
        <li v-for='item in goods'>
          <h2 class='foodTitle'>{{item.name}}</h2>
          <ul class="foodList">
            <li v-for='one in item.foods'>
              <div class="goodPic">
                <img :src="one.image">
              </div>
              <div class="goodDetail">
                <h2>皮蛋瘦肉粥配包子套餐</h2>
                <p class='desc'>{{one.description}}</p>
                <p class='sellNum'>
                  <span>月售{{one.sellCount}}份</span>
                  <span>好评率{{one.rating}}%</span>
                </p>
                <div class='price'>
                  <p class="goodPrice">
                    <span><i>¥</i>{{one.price}}</span>
                    <s v-if='one.oldPrice'>¥{{one.oldPrice}}</s>
                  </p>
                  <div class="buyBtn">
                    <i class='iconfont icon-reduce'></i>
                    <span>1</span>
                    <i class='iconfont icon-add'></i>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'goods',
    props: ['headerData'],
    data () {
      return {
        goods: '',
        menuScroll: '',
        foodsScroll: ''
      }
    },
    created () {
      this.$http.get('/api/goods').then((res) => {
        console.log(res.body.data)
        if (res.body.errNum === 0) {
          this.goods = res.body.data
          this.$nextTick(() => {
            this.menuScroll = new BScroll(this.$refs.menuWrapper, {})
            this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {})
          })
        }
      })
    }
  }
</script>
<style scoped>
  #goods {
    width: 100%;
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    overflow: hidden;
  }

  .sideMenu {
    flex: 0 0 80px;
    width: 80px;
  }

  .sideMenu li {
    height: 54px;
    line-height: 54px;
    width: 100%;
    background-color: #f3f5f7;
    text-align: center;
    padding: 0 12px;
    position: relative;
  }

  .sideMenu li:after {
    content: '';
    display: block;
    width: 56px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    position: absolute;
    left: 12px;
    bottom: 0;
  }

  .sideMenu li > span {
    display: inline-block;
    font-size: 12px;
    color: #000;
    font-weight: 200;
    line-height: 14px;

  }

  .contentMenu {
    flex: 1;
  }

  .contentMenu > .typeList {
    width: 100%;
    height: auto;
  }

  .typeList > li > h2 {
    width: 100%;
    height: 26px;
    line-height: 26px;
    padding-left: 14px;
    background-color: #f3f5f7;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
  }

  .foodList {
    padding: 0 18px;
  }

  .foodList > li {
    height: 112px;
    width: 100%;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    padding: 18px 0;
    display: flex;
  }

  .foodList > li:last-child {
    border: none;
  }

  .goodPic {
    width: 76px;
    height: 76px;
    flex: 0 0 76px;
  }

  .goodPic > img {
    width: 100%;
    height: 100%;
  }

  .goodDetail {
    margin-left: 10px;
    flex: 1;
  }

  .goodDetail > h2 {
    font-size: 14px;
    color: rgb(7, 17, 27);
    line-height: 14px;
    margin-top: 2px;
  }

  .goodDetail > .desc {
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 10px;
    margin: 8px 0;
  }

  .goodDetail > .sellNum {
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 10px;
    margin: 8px 0;
  }

  .price {
    overflow: hidden;
  }

  .goodPrice {
    line-height: 24px;
    float: left;
  }

  .goodPrice > span {
    fotn-size: 14px;
    color: red;
    font-weight: 700;
    line-height: 24px;
    margin-right: 8px;
  }

  .goodPrice > span > i {
    font-size: 10px;
    font-style: normal;
  }

  .goodPrice > s {
    font-size: 10px;
    color: rgb(147, 153, 159);
    font-weight: normal;
    line-height: 24px;
    vertical-align: top;
  }

  .buyBtn {
    float: right;
    line-height: 24px;
  }

  .buyBtn > i {
    font-size: 23px;
    color: rgb(0, 160, 220);
    vertical-align: middle;
  }

  .buyBtn > i:first-child {
    font-size: 21px;
  }

  .buyBtn > span {
    font-size: 10px;
    color: #ccc;
    vertical-align: middle;
    margin: 0 2px;
  }
</style>
