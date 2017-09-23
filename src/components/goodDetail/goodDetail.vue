<template>
  <div id="goodDetail">
    <div class="goodPic">
      <img :src="detailMsg.image">
    </div>
    <div class="goodOperation whiteBg">
      <h4>{{detailMsg.name}}</h4>
      <div class="goodRating">
        <span>月售{{detailMsg.sellCount}}份</span>
        <span>好评率{{detailMsg.rating}}%</span>
      </div>
      <div class="operation">
        <div class="goodPrice">
          <span>$ <strong>{{detailMsg.price}}</strong></span>
          <s v-if='detailMsg.oldPrice'>$ {{detailMsg.oldPrice}}</s>
        </div>
        <div class="buyBtn">
          <button>加入购物车</button>
        </div>
      </div>
    </div>
    <div class="goodDescription whiteBg">
      <h4>商品介绍</h4>
      <p>{{detailMsg.description}}</p>
    </div>

    <div class="ratingListWrapper whiteBg">
      <ul class="selectRatingType">
        <li @click='showAllRatings'>全部<span>{{allRatings.length}}</span></li>
        <li @click='showGoodRatings'>满意<span>{{goodRatings.length}}</span></li>
        <li @click='showBadRatings'>不满意<span>{{badRatings.length}}</span></li>
      </ul>
      <div class="ratingsWithContent" v-if='getRatings.length>0'>
        <i class='iconfont icon-select' :class="{blueSelect:flag}" @click='showContentRatings'></i>
        <span>只看有内容的评价</span>
      </div>
      <ul class="ratingList" v-if='getRatings.length>=1'>
        <li v-for='one in temRatings'>
          <div class="ratingTimeAndUser">
            <span>2016-07-07 12:34</span>
            <div class="ratingUser">
              <span>{{one.username}}</span>
              <div class="userAvatar">
                <img :src="one.avatar" alt="">
              </div>
            </div>
          </div>
          <div class="ratingContent">
            <i class='iconfont' :class="[{'icon-good':one.rateType===0},{'icon-notgood':one.rateType===1}]"></i>
            <span>{{one.text}}</span>
          </div>
        </li>
      </ul>
      <div class="showTip" v-if='temRatings.length<1'>暂无评论</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    props: ['detailMsg'],
    data () {
      return {
        showFlag: false, // 是否显示商品详情
        temRatings: '', // 临时保存数组信息
        allRatings: [], // 所有评论内容
        goodRatings: [], // 满意
        badRatings: [], // 不满意
        ratingsWidthContent: [], // 有内容的评价
        flag: false // 是否只显示有内容的评价
      }
    },
    created () {
      this.temRatings = this.allRatings = this.getRatings
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
      console.dir(this.detailMsg)
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
    },
    computed: {
      getRatings () { // 获取用户评价
        let ratings = this.detailMsg.ratings
        if (ratings && ratings.length > 0) {
          return ratings
        } else {
          return []
        }
      }
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

  .blueSelect {
    color: rgb(0, 160, 220) !important;
  }

  i.icon-good {
    color: rgb(0, 160, 220);
  }

  i.icon-notgood {
    color: rgb(147, 153, 159);
  }

  #goodDetail {
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 46px;
    background-color: #f3f5f7;
    z-index: 99;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .goodPic {
    width: 100%;
    height: 375px;
  }

  .goodPic > img {
    width: 100%;
    height: 100%;
  }

  .goodOperation {
    padding: 18px;
  }

  .goodOperation > h4 {
    font-size: 14px;
    font-weight: bold;
    color: rgb(7, 17, 27);
    line-height: 14px;
  }

  .goodRating {
    margin: 8px 0 18px;
  }

  .goodRating > span {
    font-size: 10px;
    color: rgb(147, 158, 159);
    line-height: 10px;
  }

  .goodRating > span:first-child {
    margin-right: 12px;
  }

  .operation {
    display: flex;
    justify-content: space-between;
  }

  .goodPrice {
    font-size: 10px;
    color: rgb(240, 20, 20);
    line-height: 24px;
  }

  .goodPrice strong {
    font-size: 14px;
  }

  .goodPrice > s {
    color: rgb(147, 153, 159);
    margin-left: 12px;
  }

  .buyBtn > button {
    width: 74px;
    height: 24px;
    line-height: 24px;
    border: none;
    padding: 0;
    border-radius: 12px;
    font-size: 10px;
    color: #fff;
    background-color: rgb(0, 160, 220);
  }

  .goodDescription {
    padding: 18px;
  }

  .goodDescription > h4 {
    font-size: 14px;
    color: rgb(7, 17, 27);
    font-weight: 700;
    line-height: 14px;
    margin-bottom: 6px;
  }

  .goodDescription > p {
    padding: 0 8px;
    font-size: 12px;
    font-weight: 200;
    color: rgb(77, 85, 93);
    line-height: 24px;
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

  .ratingList {
    padding: 0 18px;
    margin-bottom: 0;
  }

  .ratingList > li {
    padding: 16px 0;
    border-bottom: 1px solid rgba(7, 17, 27, .1);
  }

  .ratingTimeAndUser {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .ratingTimeAndUser > span {
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 12px;
  }

  .ratingUser > span {
    font-size: 10px;
    color: rgb(147, 153, 159);
    line-height: 12px;
  }

  .ratingUser > .userAvatar {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: orange;
    overflow: hidden;
  }

  .userAvatar > img {
    width: 100%;
    height: 100%;
  }

  .ratingContent {
    margin-top: 6px;
  }

  .ratingContent > i {
    font-size: 12px;
    line-height: 24px;
  }

  .ratingContent > span {
    font-size: 12px;
    color: rgb(7, 17, 27);
    line-height: 16px;
  }

  .showTip {
    padding: 18px;
  }

  i.icon-good {
    color: rgb(0, 160, 220);
  }

  i.icon-notgood {
    color: rgb(147, 153, 159);
  }
</style>
