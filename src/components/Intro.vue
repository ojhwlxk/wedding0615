<script setup lang="ts">
</script>

<template>
  <div class="area_intro">
    <span class="txt_date">6월 15일 토요일 오후 2시</span>
    <div class="thumb_img">
      <div class="wrap_img">
        <img src="/images/photo_main.jpg" class="img_g" alt="">
        <div class="couple_name">
          <span class="item_txt">이</span>
          <span class="item_txt">창</span>
          <span class="item_txt">훈</span>
          <span class="item_txt txt_and">&amp;</span>
          <span class="item_txt">오</span>
          <span class="item_txt">지</span>
          <span class="item_txt">혜</span>
        </div>
      </div>
    </div>
    <span class="txt_intro fade on">we are getting<br>married!</span>
  </div>
</template>

<style scoped>
.area_intro {
  position: relative;
  padding-bottom: 8.33vw
}

.area_intro .img_g {
  width: 100%
}

.area_intro .thumb_img {
  display: block;
  position: relative;
  padding: 12.22vw 11.11vw 11.11vw
}

.area_intro .thumb_img:after {
  position: absolute;
  left: 11.11vw;
  right: 11.11vw;
  top: 12.22vw;
  bottom: 11.11vw;
  background-color: rgba(0, 0, 0, 0.02);
  content: ''
}

.area_intro .txt_date {
  position: absolute;
  top: 7.5vw;
  right: 11.11vw;
  font-size: 3vw;
  line-height: 1.08;
  color: #1A1818;
}

.area_intro .txt_intro {
  position: absolute;
  right: 11vw;
  bottom: 6.2vw;
  font-size: 14.3vw;
  line-height: 14vw;
  color: #1A1818;
  font-family: "Oooh Baby", cursive;
  font-weight: 400;
  font-style: normal;
  text-align: right;
  letter-spacing: 0.78vw;
}

.area_intro .wrap_img {
  position: relative
}

.couple_name {
  position: absolute;
  right: -6.94vw;
  top: 50%;
  font-size: 3.33vw;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%)
}

.couple_name .item_txt {
  display: block;
  padding: 0.55vw 0;
  text-align: center
}

.couple_name .txt_and {
  padding: 2.7vw 0
}

@media screen and (min-width: 640px) {
  .area_intro {
    padding-bottom: 53px;
  }

  .area_intro .txt_date {
    top: 48px;
    right: 71px;
    font-size: 20px;
  }

  .couple_name {
    right: -44px;
    font-size: 21px
  }

  .couple_name .item_txt {
    padding: 3px 0
  }

  .couple_name .txt_and {
    padding: 16px 0
  }

  .area_intro .thumb_img {
    padding: 78px 71px 71px
  }

  .area_intro .thumb_img:after {
    left: 71px;
    right: 71px;
    top: 78px;
    bottom: 71px
  }

  .area_intro .txt_intro {
    right: 50px;
    bottom: 40px;
    font-size: 93px;
    line-height: 106px
  }
}
</style>
