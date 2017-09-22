<template>
  <ul id="ratingList">
    <li>
      <div class="ratingTimeAndUser">
        <span>2016-07-07 12:34</span>
        <div class="ratingUser">
          <span>3*****2</span>
          <div class="userAvatar">
            <img src="" alt="">
          </div>
        </div>
      </div>
      <div class="ratingContent">
        <i class='iconfont icon-good'></i>
        <span>太少了，不够一个人吃</span>
      </div>
    </li>
  </ul>
  <ul class="recommends">
    <li></li>
  </ul>
</template>

<script>

</script>


<style scoped>
  #ratingList{
    padding:0 18px;
  }
  #ratingList>li{
    padding:16px 0;
    border-bottom:1px solid rgba(7,17,27,.1);
  }
  .ratingTimeAndUser{
    width: 100%;
    display: flex;
    justify-content:space-between;
  }
  .ratingTimeAndUser>span{
    font-size:10px;
    color:rgb(147,153,159);
    line-height:12px;
  }
  .ratingUser>span{
    font-size:10px;
    color:rgb(147,153,159);
    line-height:12px;
  }
  .ratingUser>.userAvatar{
    display: inline-block;
    width: 12px;
    height: 12px;
    line-height:12px;
    border-radius:50%;
    background-color: orange;
    overflow: hidden;
  }
  .userAvatar>img{
    width: 100%;
    height: 100%;
  }
  .ratingContent{
    margin-top: 6px;
  }
  .ratingContent>i{
    font-size:12px;
    line-height:24px;
  }
  .ratingContent>span{
    font-size:12px;
    color:rgb(7,17,27);
    line-height:16px;
  }
  i.icon-good{
    color:rgb(0,160,220);
  }
  i.icon-notgood{
    color:rgb(147,153,159);
  }
</style>
