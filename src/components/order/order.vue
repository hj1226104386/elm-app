<template>
  <div class="buyBtn">
    <i class='iconfont icon-reduce' v-show='one.count' @click.stop='reduce(one)'></i>
    <span v-show='one.count>0'>{{one.count}}</span>
    <i class='iconfont icon-add' @click.stop="add(one)"></i>
  </div>
</template>

<script>
  export default {
    name: 'order',
    props: ['one'],
    data () {
      return {
        totalMoney: 0, // 计算订单总额
        selectFoods: []
      }
    },
    created () {},
    methods: {
      add (one) { // 添加订单
        if (!one.count) {
          this.$set(one, 'count', 1)
        } else {
          one.count++
        }
        this.totalMoney += one.price
        // 请求计算总金额
        this.$store.commit('currentTotalMoney', this.totalMoney)
        // 重新汇总所有的订单
        this.calcSelectFoods(one, true)
        console.log(this.one)
      },
      reduce (one) {
        if (one.count === 1) {
          one.count = ''
        } else {
          one.count--
        }
        this.totalMoney -= one.price
        // 请求计算总金额
        this.$store.commit('currentTotalMoney', this.totalMoney)
        // 重新汇总所有的订单
        this.calcSelectFoods(one, false)
      },
      calcSelectFoods (one, add) { // 重新整理所有订单
        /**
         * 1、判断是否有相同订单，有，则更新count
         * 2、无相同订单，再判断是增加订单还是减少订单
         * 3、添加订单，则push进去
         * 4、移除订单，则slice掉
         */
          // 1、遍历判断是否有相同订单
        let sameFlag = false // 默认数组中没有相同订单
        var that = this
        for (let i = 0; i < this.selectFoods.length; i++) {
          let v = that.selectFoods[i]
          if (v.name === one.name) { // 已有相同订单
            v.count = one.count // 更新count
            sameFlag = true
          }
        }
        // 2、添加新订单
        if (!sameFlag && add) { // 没有相同订单
          this.selectFoods.push(one)
        }
        // 3、移除掉count为0的订单
        this.selectFoods.forEach(function (v, i) {
          if (!v.count) {
            that.selectFoods.splice(i, 1)
          }
        })
        // 4、通知vuex更新数据
        this.$store.commit('resetSelectFoods', this.selectFoods)
        this.$store.commit('refreshAllFoods', this.foods)
      }
    }
  }
</script>


<style scoped>
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
