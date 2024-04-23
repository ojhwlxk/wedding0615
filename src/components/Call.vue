<script setup lang="ts">
</script>

<template>
  <div class="area_heart">
    <strong class="tit_g">(
      <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.3314 12.0474L12 20L19.6686 12.0474C20.5211 11.1633 21 9.96429 21 8.71405C21 6.11055 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12 6.66667L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5.03517 4 3 6.11055 3 8.71405C3 9.96429 3.47892 11.1633 4.3314 12.0474Z"
            stroke="#ff2020" stroke-width="0.7" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      )</strong>
    <div class="info_call">
      <ul class="list_call">
        <li>
          <span class="tit_call">신랑측 혼주</span>
          <div class="desc_call">
            <div class="wrap_call">
              <span class="mark_g">부</span><span class="txt_name">최성호</span>
              <a href="tel:010-0000-0000" class="link_call">
                <span class="txt_call">전화걸기</span>
              </a>
            </div>
            <div class="wrap_call">
              <span class="mark_g">모</span><span class="txt_name">이지영</span>
              <a href="tel:010-0000-0000" class="link_call">
                <span class="txt_call">전화걸기</span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <span class="tit_call">신부측 혼주</span>
          <div class="desc_call">
            <div class="wrap_call">
              <span class="mark_g">부</span><span class="txt_name">이현성</span>
              <a href="tel:010-0000-0000" class="link_call">
                <span class="txt_call">전화걸기</span>
              </a>
            </div>
            <div class="wrap_call">
              <span class="mark_g">모</span><span class="txt_name">박윤정</span>
              <a href="tel:010-0000-0000" class="link_call">
                <span class="txt_call">전화걸기</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!--    <div class="info_bank">-->
    <!--      <div class="group_bank">-->
    <!--        <strong class="head_bank">신랑측 계좌번호</strong>-->
    <!--        <div class="box_bank">-->
    <!--          <span class="txt_bank">[부] 최성호<span class="num_bank">123-45-6789</span>신한<a href="#none" class="link_copy">복사하기</a></span>-->
    <!--          <span class="txt_bank">최수현<span class="num_bank">123-45-6789</span>기업<a href="#none" class="link_copy">복사하기</a></span>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="group_bank">-->
    <!--        <strong class="head_bank">신부측 계좌번호</strong>-->
    <!--        <div class="box_bank">-->
    <!--          <span class="txt_bank">[부] 이현성<span class="num_bank">123-45-6789</span>국민<a href="#none" class="link_copy">복사하기</a></span>-->
    <!--          <span class="txt_bank">이나예<span class="num_bank">123-45-6789</span>카카오<a href="#none" class="link_copy">복사하기</a></span>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<style scoped>
.area_heart {
  margin: 0 6.410vw;
  padding-top: 30.769vw
}

.area_heart .tit_g {
  /*line-height: 7.692vw*/

}

.tit_g {
  display: block;
  font-weight: normal;
  font-size: 5.128vw;
  line-height: 6.153vw;
  color: #FF2020;
  text-align: center;
  font-family: 'Bolkit-Rayek', serif
}


.area_heart .tit_g svg {
  display: inline-block;
  vertical-align: top
}

.area_heart .info_call {
  margin-bottom: 13.33vw;
  padding: 13.33vw 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06)
}

.list_call li + li {
  margin-top: 7.692vw
}

.list_call .tit_call {
  display: block;
  margin-bottom: 3.33vw;
  font-size: 3.589vw;
  line-height: 5.384vw;
  letter-spacing: -0.02em
}

.list_call .desc_call {
  font-size: 0
}

.list_call .wrap_call {
  display: inline-block;
  width: 50%;
  font-size: 3.589vw;
  line-height: 6.66vw;
  letter-spacing: -0.02em;
  vertical-align: top
}

.list_call .wrap_call .mark_g {
  display: inline-block;
  width: 6.66vw;
  height: 6.66vw;
  margin-right: 6px;
  font-size: 3.589vw;
  text-align: center;
  border-radius: 50%;
  background-color: #f4f4f4;
  vertical-align: top
}

.list_call .txt_name {
  display: inline-block;
  font-size: 3.589vw;
  line-height: 6.66vw;
  vertical-align: top
}

.list_call .link_call {
  display: inline-block;
  padding-left: 2.564vw;
  line-height: 6.66vw;
  color: #333;
  vertical-align: top
}

.list_call .txt_call {
  display: inline-block;
  font-size: 3.33vw;
  text-decoration: underline;
  vertical-align: top
}

@media screen and (min-width: 640px) {
  .area_heart {
    margin: 0 41px;
    padding-top: 196px
  }

  .area_heart .tit_g {
    line-height: 49px
  }

  .area_heart .tit_g svg {
    width: 50px;
    height: 50px
  }

  .area_heart .info_call {
    margin-bottom: 85px;
    padding: 85px 0
  }

  .list_call li + li {
    margin-top: 49px
  }

  .list_call .tit_call {
    margin-bottom: 21px;
    font-size: 23px;
    line-height: 21px
  }

  .list_call .wrap_call {
    font-size: 23px;
    line-height: 42px
  }

  .list_call .wrap_call .mark_g {
    width: 42px;
    height: 42px;
    margin-right: 6px;
    font-size: 23px
  }

  .list_call .txt_name {
    font-size: 23px;
    line-height: 42px;
    vertical-align: top
  }

  .list_call .link_call {
    padding-left: 16px;
    line-height: 42px
  }

  .list_call .txt_call {
    font-size: 21px
  }
}
</style>
