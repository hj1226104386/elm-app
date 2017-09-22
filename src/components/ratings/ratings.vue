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
    <div class="ratingListWrapper whiteBg">
      <ul class="selectRatingType">
        <li @click='showAllRatings'>全部<span>{{allRatings.length}}</span></li>
        <li @click='showGoodRatings'>满意<span>{{goodRatings.length}}</span></li>
        <li @click='showBadRatings'>不满意<span>{{badRatings.length}}</span></li>
      </ul>
      <div class="ratingsWithContent">
        <i class='iconfont icon-select' :class="{blueSelect:flag}" @click='showContentRatings'></i>
        <span>只看有内容的评价</span>
      </div>
      <ul id="ratingList">
        <li v-for='one in temRatings'>
          <div class="userAvatar">
            <img :src="one.avatar">
          </div>
          <div class="ratingDetail">
            <div class="userName">
              <i>{{one.username}}</i>
              <span>2016-07-13 20:33</span>
            </div>
            <div class="ratingStar">
              <v-star :score="one.score"></v-star>
              <span>{{one.deliveryTime}}分钟送达</span>
            </div>
            <p class="ratingContent">{{one.text}}</p>
            <div class="recommends" v-if='one.recommend.length>0'>
              <i class='iconfont icon-good'></i>
              <ul>
                <li v-for='item in one.recommend'>{{item}}</li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
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
        temRatings: '', // 临时保存数组信息
        allRatings: [], // 所有评论内容
        goodRatings: [], // 满意
        badRatings: [], // 不满意
        ratingsWidthContent: [], // 有内容的评价
        flag: false // 是否只显示有内容的评价
      }
    },
    created () {
      this.$http.get('/api/ratings').then((res) => {
        this.temRatings = this.allRatings = res.body.data
        console.log(res.body.data)
        this.allRatings.forEach((v, i) => {
          if (v.rateType === 0) { // 满意
            this.goodRatings.push(v)
          } else { // 不满意
            this.badRatings.push(v)
          }
          if (v.text) { // 有内容的评价
            this.ratingsWidthContent.push(v)
          }
        })
      })
    },
    methods: {
      showAllRatings () { // 所有评论内容
        this.temRatings = this.allRatings
      },
      showGoodRatings () { // 满意
        this.temRatings = this.goodRatings
      },
      showBadRatings () { // 不满意
        this.temRatings = this.badRatings
      },
      showContentRatings () {  // 有内容的评价
        if (this.flag) {
          this.flag = false
          this.temRatings = this.allRatings
        } else {
          this.flag = true
          this.temRatings = this.ratingsWidthContent
        }
      }
    }
  }
</script>
<style scoped>
  @import "../../common/iconfont/iconfont.css";

  .blueSelect {
    color: rgb(0, 160, 220) !important;
  }

  i.icon-good {
    color: rgb(0, 160, 220);
  }

  i.icon-notgood {
    color: rgb(147, 153, 159);
  }

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
    overflow-y: auto;
    overflow-x: hidden;
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

  .ratingListWrapper {
    border-bottom-width: 0;
    padding-top: 18px;
    margin-bottom: 0;
  }

  .selectRatingType {
    margin: 0 18px 0;
    padding-bottom: 18px;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
    overflow: hidden;
  }

  .selectRatingType > li {
    padding: 8px 12px;
    font-size: 12px;
    color: rgb(77, 85, 93);
    line-height: 16px;
    float: left;
    margin-right: 8px;
    border-radius: 2px;
  }

  .selectRatingType > li > span {
    font-size: 12px;
    margin-left: 3px;
  }

  .selectRatingType > li:first-child {
    color: #fff;
    background-color: rgb(0, 160, 220);
  }

  .selectRatingType > li:nth-child(2) {
    background-color: rgba(0, 160, 220, .2);
  }

  .selectRatingType > li:last-child {
    background-color: rgba(77, 85, 93, .2);
  }

  .ratingsWithContent {
    padding: 12px 18px;
    border-bottom: 1px solid rgba(7, 17, 27, .2);
  }

  .ratingsWithContent > i {
    font-size: 24px;
    color: rgb(147, 153, 159);
    vertical-align: middle;
  }

  .ratingsWithContent > span {
    font-size: 12px;
    color: rgb(147, 153, 159);
    line-height: 24px;
    vertical-align: middle;
  }

  #ratingList {
    padding: 0 18px;
  }

  #ratingList > li {
    display: flex;
    padding: 16px 0;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }

  .userAvatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    overflow: hidden;
    flex: 0 0 28px;
    margin-right: 12px;
  }

  .userAvatar > img {
    width: 100%;
    height: 100%;
  }

  .ratingDetail {
    flex: 1;
    height: 100%;
  }

  .ratingDetail > .userName {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    line-height: 12px;
  }

  .userName > i {
    color: rgb(7, 17, 27);
    font-style: normal;
  }

  .userName > span {
    font-weight: 200;
    color: rgb(147, 153, 159);
  }

  .ratingDetail > .ratingStar {
    margin: 4px 0 6px;
  }

  .ratingStar > span {
    font-size: 10px;
    font-weight: 200;
    color: rgb(147, 153, 159);
    line-height: 12px;
    margin-left: 6px;
  }

  .ratingContent {
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 18px;
  }

  .recommends {
    display: flex;
    margin-top: 8px;
  }

  .recommends > i {
    font-size: 12px;
    color: rgb(0, 160, 220);
    line-height: 16px;
    margin-right: 8px;
  }

  .recommends > ul {
    flex: 1;
  }

  .recommends > ul > li {
    float: left;
    font-size: 9px;
    color: rgb(147, 153, 159);
    line-height: 16px;
    padding: 0 6px;
    border: 1px solid rgba(7, 17, 27, .1);
    border-radius: 2px;
    margin-right: 8px;
    margin-bottom: 4px;
  }
</style>
