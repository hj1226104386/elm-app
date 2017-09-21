<template>
  <div id="ratings">
    <div class="shopRating whiteBg">
      <div class="ratingLeft">
        <h4>{{headerData.score}}</h4>
        <span>综合评分</span>
        <p>高于周边商家{{headerData.rankRate}}%</p>
      </div>
      <div class="ratingRight">
        <div class="ratingWrapper">
          <div class="foodRate">
            <span class='rateTitle'>商品评分</span>
            <v-star :score="headerData.foodScore"></v-star>
            <i>{{headerData.foodScore}}</i>
          </div>
          <div class="serviceRate">
            <span class='rateTitle'>服务态度</span>
            <v-star :score="headerData.serviceScore"></v-star>
            <i>{{headerData.serviceScore}}</i>
          </div>
          <div class="expressTime">
            <span class='rateTitle'>送达时间</span>
            <i>{{headerData.deliveryTime}}分钟</i>
          </div>
        </div>
      </div>
    </div>
    <div class="ratingList whiteBg">
        <ul class="selectRatingType">
          <li>全部<span>57</span></li>
          <li>满意<span>47</span></li>
          <li>不满意<span>10</span></li>
        </ul>
      <div class="ratingsWithContent">
        <i></i>
        <span>只看有内容的评价</span>
      </div>
    </div>
  </div>
</template>

<script>
  import star from '../star/star.vue'
  export default {
    name: 'ratings',
    props: ['headerData'],
    components: {
      'v-star': star
    },
    data () {
      return {
        allRatings: '' // 所有评论内容
      }
    },
    created () {
      this.$http.get('/api/ratings').then((res) => {
        this.allRatings = res.body.data
        console.log(res.body.data)
        console.log(this.headerData)
      })
    }
  }
</script>
<style scoped>
  .whiteBg {
    background-color: #fff;
    border-top: 1px solid rgba(7, 17, 27, .1);
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    margin-bottom: 16px;
  }
  #ratings {
    width: 100%;
    background-color: rgba(7, 17, 27, .1);
    position: absolute;
    top: 174px;
    bottom: 46px;
  }
  .shopRating {
    width: 100%;
    padding: 18px 0;
    display: flex;
    margin-bottom: 18px;
  }
  .ratingLeft {
    width: 36.7%;
    text-align: center;
    border-right: 1px solid rgba(7, 17, 27, .1);
    flex: 0 0 36.7%;
  }
  .ratingLeft > h4 {
    font-size: 24px;
    color: rgb(255, 153, 0);
    line-height: 28px;
  }
  .ratingLeft > span {
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 12px;
    display: inline-block;
    margin: 6px 0 8px;
  }
  .ratingLeft > p {
    font-size: 10px;
    color: rgba(7, 17, 27, .5);
  }
  .ratingRight {
    text-align: center;
    padding: 0 24px;
    flex: 1;
    font-size: 0;
  }
  .ratingWrapper {
    display: inline-block;
    height: 100%;
    width: 190px;
  }
  .ratingWrapper > div {
    text-align: left;
  }
  .foodRate,
  .serviceRate {
    margin-bottom: 8px;
  }
  .rateTitle {
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 18px;
    margin-right: 12px;
  }
  .expressTime > i {
    font-style: normal;
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 18px;
    color: rgb(147, 153, 159);
  }
  .foodRate > i,
  .serviceRate > i {
    font-style: normal;
    font-size: 12px;
    color: rgb(255, 153, 0);
    line-height: 18px;
    margin-left: 12px;
  }
  .ratingList{
    border-bottom-width:0;
    padding:18px;
  }
</style>
