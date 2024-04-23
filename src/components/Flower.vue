<script setup lang="ts">
</script>

<template>
  <div class="order_flower">
    <div class="wrap_tit">
      <strong class="tit_flower fade on">🕊 축하 화환 선물</strong>
    </div>
    <div class="txt_flower fade on">
      여러분의 축복과 사랑을 담아<br>축하 화환을 전해보세요.<br>
      예식일에 맞춰 빠르게 배송해드립니다.
    </div>
    <div class="wrap_btn">
      <a href="https://www.1660-0666.com/shop/list1.php?ca_id=20&amp;id=smallsquare_c&amp;num=1"
         class="link_flower fade on" target="_blank">축하 화환 보내기</a>
    </div>
  </div>
</template>

<style scoped>

.order_flower {
  margin: 3vw 6vw 14vw;
  padding-top: 10vw;
  font-family: 'Noto Serif KR', serif;
  border-top: 1px dashed rgba(0, 0, 0, 0.07)
}

.order_flower .wrap_tit {
  padding: 3vw 0 1vw;
  text-align: center
}

.order_flower .tit_flower {
  display: inline-block;
  font-weight: normal;
  color: #000;
  font-size: 3.73vw;
  line-height: 1.5em;
  vertical-align: top;
  letter-spacing: 0.02em
}

.order_flower .txt_flower {
  padding-top: 6vw;
  font-size: 3.67vw;
  color: #666;
  line-height: 1.6em;
  text-align: center
}

.order_flower .wrap_btn {
  display: block;
  padding-top: 4vw;
  text-align: center
}

.order_flower .wrap_btn .link_flower {
  display: inline-block;
  padding: 3vw 0 0;
  font-size: 3.66vw;
  color: #2d2206;
  border-bottom: 1px solid #2d2206;
  vertical-align: top
}

@media screen and (min-width: 640px) {
  .order_flower {
    margin: 19px 38px 89px;
    padding-top: 64px
  }

  .order_flower .wrap_tit {
    padding: 19px 0 6px
  }

  .order_flower .tit_flower {
    font-size: 24px
  }

  .order_flower .txt_flower {
    padding-top: 38px;
    font-size: 24px
  }

  .order_flower .wrap_btn {
    padding-top: 25px
  }

  .order_flower .wrap_btn .link_flower {
    padding: 19px 0 0;
    font-size: 23px
  }
}
</style>
