<template>
  <ul id="star">
    <li v-for="(one,index) in 5"
        :class="{starOn:index<onNum,starHalf:index>=onNum&&index<(onNum+halfNum),starOff:index>=(onNum+halfNum)}"></li>
  </ul>
</template>

<script>
  export default {
    name: 'star',
    props: ['score'],
    data () {
      return {
        onNum: 0, // 全星
        halfNum: 0, // 半星
        offNum: 0 // 置灰星
      }
    },
    created () {
      console.log(this.score)
      this.calcStars(this.score)
    },
    methods: {
      calcStars (score) { // 计算star三种状态个数
        let integer = Math.floor(score) // 整数部分
        let redundant = score % integer // 余数部分
        if (redundant === 0) { // 余数为0
          this.onNum = integer
          this.halfNum = 0
          this.offNum = 5 - integer
        } else if (redundant > 0 && redundant <= 0.5) {
          this.onNum = integer
          this.halfNum = 1
          this.offNum = 5 - integer - 1
        } else if (redundant > 0.5) {
          this.onNum = integer + 1
          this.halfNum = 0
          this.offNum = 5 - integer - 1
        }
      }
    }
  }
</script>


<style scoped>

  /*评分星星*/
  .starOn {
    background: url("./star24_on@2x.png") no-repeat;
  }

  .starHalf {
    background: url("./star24_half@2x.png") no-repeat;
  }

  .starOff {
    background: url("./star24_off@2x.png") no-repeat;
  }

  #star {
    display: inline-block!important;
    font-size: 12px;
    display: inline-block;
    width: 100px;
    height: 18px;
    vertical-align: top;
  }

  #star > li {
    float: left;
    height: 18px;
    width: 18px;
    background-size: cover;
    margin-right: 2px;
  }
</style>
