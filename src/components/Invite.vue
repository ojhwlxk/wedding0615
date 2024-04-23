<script setup lang="ts">
</script>

<template>
  <div class="area_invite">
    <p class="txt_invite">
      만나면서<br/>
      감사가 넘쳐나고 작은 것들에도 행복을 느끼는<br/>
      우리의 모습이 보기 좋았습니다.
    </p>
    <p class="txt_invite">
      서로여서, 서로이기에 결혼을 결심했습니다.<br/>
      함께 믿음 안에서 따뜻한 가정을 꾸리려 합니다.
    </p>
    <p class="txt_invite">
      축복의 걸음하시는 귀한 순간들<br/>
      소중히 간직하겠습니다.
    </p>
  </div>
</template>

<style scoped>

.area_invite {
  display: block;
  margin: 0 6.410vw;
  padding-top: 10.256vw;
  font-size: 3.33vw;
  line-height: 5.128vw;
  color: #111;
  letter-spacing: -0.03em;
  text-align: center
}

.area_invite .emph_date {
  display: block;
  padding-top: 4.102vw;
  margin-bottom: 9.23vw;
  font-weight: 500;
  font-size: 4.102vw;
  line-height: 5.897vw;
  color: #121212;
  text-align: center
}

.area_invite .txt_invite {
  margin: 0 4.615vw;
  font-size: 3.89vw;
  line-height: 2;
  color: #000;
  letter-spacing: -0.04em;
  text-align: center
}

.area_invite .txt_invite + .txt_invite {
  padding-top: 4.102vw
}

@media screen and (min-width: 640px) {
  .area_invite {
    margin: 0 41px;
    padding-top: 65px;
    font-size: 21px;
    line-height: 33px
  }

  .area_invite .emph_date {
    padding-top: 26px;
    margin-bottom: 59px;
    font-size: 26px;
    line-height: 37px
  }

  .area_invite .txt_invite {
    margin: 0 29px;
    font-size: 23px;
  }

  .area_invite .txt_invite + .txt_invite {
    padding-top: 26px
  }
}
</style>
