<template>
  <div id="goods">
    <div class="sideMenu menuWrapper" ref='menuWrapper'>
      <ul class='content'>
        <li v-for='(item,index) in goods' :class="{'current' : calcIndex===index}" @click='checkFoodType(index)'>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="contentMenu foodsWrapper" ref='foodsWrapper'>
      <ul class='typeList'>
        <li v-for='item in goods' class='food-list-hook'>
          <h2 class='foodTitle'>{{item.name}}</h2>
          <ul class="foodList">
            <li v-for='one in item.foods' @click="showDetail(one)">
              <div class="goodPic">
                <img :src="one.image">
              </div>
              <div class="goodDetail">
                <h2>{{one.name}}</h2>
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
                  <v-order :one='one'></v-order>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <v-good-detail :detailMsg='selectThis' v-if='ifShowDetail'></v-good-detail>
  </div>
</template>
<script>
  import goodDetail from '../goodDetail/goodDetail.vue'
  import order from '../order/order.vue'
  import BScroll from 'better-scroll'

  export default {
    name: 'goods',
    props: ['headerData'],
    components: {
      'v-good-detail': goodDetail,
      'v-order': order
    },
    data () {
      return {
        goods: '',
        listHeight: [], // 每个分类的li元素高度
        scrollY: '', // 实时存放右侧的scrollTop值
        selectThis: '', // 点击单个商品，进入详情
        ifShowDetail: false // 是否显示详情
      }
    },
    created () {
      this.$http.get('/api/goods').then((res) => {
        if (res.body.errNum === 0) {
          this.goods = res.body.data
          // dom结构加载完成
          this.$nextTick(() => {
            // 初始化scroll
            this.initScroll()
            // 计算每个li的所在的高度
            this.calcHeight()
          })
        }
      })
    },
    methods: {
      initScroll () { // 初始化BSscroll
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true // 不阻止click事件
        })
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true, // 不阻止click事件
          probeType: 3 // 滑动过程中派发scroll事件
        })
        // 动态获取y值
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y)) // 实时保存y值
        })
      },
      calcHeight () { // 计算每个分类的li元素在页面的高度
        let liList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        let height = 0 // 初始高度
        this.listHeight.push(height) // 先加入初始高度，也就是第一个
        // 通过循环每个li的dom结构，将每一个li的高度依次累计，达到计算每个li所在页面的高度
        for (let i = 0; i < liList.length; i++) {
          let item = liList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      checkFoodType (index) {
        // 点击左侧，右侧同步滑动到对应位置
        // 使用better-scroll的方法，滚动到相应位置
        let liList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
        var currentLi = liList[index]
        this.foodsScroll.scrollToElement(currentLi, 300)
      },
      showDetail (msg) { // 点击商品进入详情
        this.selectThis = msg
        this.ifShowDetail = true
      }
    },
    computed: {
      calcIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          var item = this.listHeight[i]
          var item2 = this.listHeight[i + 1]
          // y的值在某个区间中
          if (!item2 || (this.scrollY >= item && this.scrollY < item2)) {
            return i
          }
        }
        return 0 // 都不符合，则说明在滚动到第一个了
      },
      selectFoods () { // 拿到已经选中的订单
        let foods = []
        this.foods.forEach((food) => {
          food.foreach((one) => {
            if (one.count) {
              foods.push(one)
            }
          })
        })
        return foods
      }
    }
  }
</script>
<style scoped>
  /*公共样式*/
  .current {
    background-color: #00a0dc !important;
  }

  .current > span {
    color: #fff !important;
  }

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
    line-height: 11px;
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
