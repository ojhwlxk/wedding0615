<script setup lang="ts">
</script>

<template>
  <div class="info_call">
    <ul class="list_call">
      <li>
        <span class="tit_call">신랑측 혼주</span>
        <div class="desc_call">
          <div class="wrap_call">
            <span class="mark_g">부</span><span class="txt_name">이성현</span>
            <div class="wrap_dot">
              <span class="ico_dot"></span>
              <span class="ico_dot"></span>
              <span class="ico_dot"></span>
            </div>
            <a href="tel:010-0000-0000" class="link_call">
              <img src="@/assets/images/ico_call.svg" />
            </a>
          </div>
          <div class="wrap_call">
            <span class="mark_g">모</span><span class="txt_name">윤정화</span>
            <div class="wrap_dot">
              <span class="ico_dot"></span>
              <span class="ico_dot"></span>
              <span class="ico_dot"></span>
            </div>
            <a href="tel:010-0000-0000" class="link_call">
              <img src="@/assets/images/ico_call.svg" />
            </a>
          </div>
        </div>
      </li>
      <li>
        <span class="tit_call">신부측 혼주</span>
        <div class="desc_call">
          <div class="wrap_call">
            <span class="mark_g">부</span><span class="txt_name">오윤옥</span>
            <div class="wrap_dot">
              <span class="ico_dot"></span>
              <span class="ico_dot"></span>
              <span class="ico_dot"></span>
            </div>
            <a href="tel:010-0000-0000" class="link_call">
              <img src="@/assets/images/ico_call.svg" />
            </a>
          </div>
          <div class="wrap_call">
            <span class="mark_g">모</span><span class="txt_name">김미옥</span>
            <div class="wrap_dot">
              <span class="ico_dot"></span>
              <span class="ico_dot"></span>
              <span class="ico_dot"></span>
            </div>
            <a href="tel:010-0000-0000" class="link_call">
              <img src="@/assets/images/ico_call.svg" />
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.info_call {
  margin: 10.667vw 10.667vw 0;
  padding: 6.667vw 3.2vw;
  line-height: 6.4vw;
  font-size: 3.733vw;
  font-family: Timeless, 'Noto Serif KR', serif;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08)
}

.info_call .tit_call {
  display: block;
  margin-bottom: 1.333vw;
  font-size: 3.467vw;
  color: #000
}

.info_call .desc_call {
  padding-top: 2.133vw;
  line-height: 5.867vw;
  font-size: 0
}

.info_call .wrap_call {
  display: inline-block;
  font-size: 0;
  line-height: 5.867vw;
  vertical-align: top
}

.info_call .wrap_call + .wrap_call {
  padding-left: 9vw
}

.info_call .mark_g {
  display: inline-block;
  width: 5.867vw;
  height: 5.867vw;
  margin-right: 1.333vw;
  font-size: 3.467vw;
  line-height: 5.867vw;
  font-size: 3.467vw;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  background-color: rgba(221, 206, 186, 0.7);
  vertical-align: top
}

.info_call .txt_name {
  display: inline-block;
  padding-right: 1.333vw;
  font-size: 3.467vw;
  vertical-align: top
}

.info_call .list_call li + li {
  padding-top: 6.4vw
}

.wrap_dot {
  display: inline-block;
  height: 3px;
  margin: 2.4vw 0;
  font-size: 0;
  vertical-align: top
}

.wrap_dot .ico_dot {
  display: inline-block;
  width: 2px;
  height: 2px;
  margin: 0 2px;
  border-radius: 50%;
  background-color: #ccc;
  vertical-align: top
}

.info_call .link_call {
  display: inline-block;
  height: 5.6vw;
  padding-left: 1.333vw;
  font-size: 3.467vw;
  vertical-align: top
}

.link_call img {
  width: 5.6vw;
  height: 5.6vw
}

@media screen and (min-width: 640px) {
  .info_call {
    margin: 68px 68px 0;
    padding: 43px 20px;
    line-height: 41px;
    font-size: 24px
  }

  .info_call .tit_call {
    margin-bottom: 9px;
    font-size: 22px
  }

  .info_call .desc_call {
    padding-top: 14px;
    line-height: 38px
  }

  .info_call .wrap_call {
    line-height: 38px
  }

  .info_call .mark_g {
    width: 38px;
    height: 38px;
    margin-right: 8px;
    line-height: 38px;
    font-size: 22px
  }

  .info_call .txt_name {
    padding-right: 9px;
    font-size: 22px
  }

  .wrap_dot {
    height: 3px;
    margin: 15px 0
  }

  .info_call .list_call li + li {
    padding-top: 41px
  }

  .info_call .link_call {
    height: 36px;
    padding-left: 9px;
    font-size: 22px
  }

  .link_call svg {
    width: 36px;
    height: 36px
  }

  .info_call .wrap_call + .wrap_call {
    padding-left: 56px
  }

  .link_call img {
    width: 32px;
    height: 32px;
    margin: 3px;
  }
}
</style>
