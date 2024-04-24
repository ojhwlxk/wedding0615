<script>
export default {
  data() {
    return {
      account1: { bank: '신한은행', num: '123-45-6789' },
      account2: { bank: '신한은행', num: '123-45-6789' },
    }
  },
  methods: {
    copyAccount({ bank, num }) {
      window.navigator.clipboard.writeText(`${bank} ${num}`)
    }
  }
}
</script>

<template>
  <div class="area_account">
    <div class="wrap_tit">
      <strong class="tit_g fade on">마음 전하실 곳</strong>
    </div>
    <div class="info_bank">
      <div class="group_bank">
        <strong class="head_bank">신랑측 계좌번호</strong>
        <div class="box_bank">
          <div class="txt_bank">
            [부] 이성현<span class="num_bank">{{ account1.num }}</span>{{ account1.bank }}
            <span class="link_copy" @click="() => copyAccount(account1)">복사하기</span>
          </div>
        </div>
      </div>
      <div class="group_bank">
        <strong class="head_bank">신부측 계좌번호</strong>
        <div class="box_bank">
          <div class="txt_bank">
            [부] 오윤옥<span class="num_bank">{{ account2.num }}</span>{{ account2.bank }}
            <span class="link_copy" @click="() => copyAccount(account2)">복사하기</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.area_account {
  margin: 0 6.410vw;
}

.area_account .tit_g svg {
  display: inline-block;
  vertical-align: top
}

.info_bank .group_bank {
  margin-bottom: 6.410vw
}

.info_bank .head_bank {
  display: block;
  height: 10.256vw;
  padding: 0 4.615vw;
  font-weight: normal;
  font-size: 3.589vw;
  line-height: 10.256vw;
  background-color: #f4f4f4;
  border-radius: 5px
}

.info_bank .box_bank {
  padding: 5.128vw 4.615vw;
  border-radius: 0 0 5px 5px;
  background-color: #fff
}

.info_bank .box_bank .txt_bank {
  display: block;
  position: relative;
  margin-bottom: 2.82vw;
  font-size: 3.589vw;
  line-height: 4.871vw;
  letter-spacing: -0.02em
}

.info_bank .box_bank .num_bank {
  display: inline-block;
  margin: 0 6px 0 4px;
  vertical-align: top
}

.info_bank .link_copy {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 3.33vw;
  color: #333;
  line-height: 4.871vw;
  text-decoration: underline;
  vertical-align: top
}

@media screen and (min-width: 640px) {
  .area_account {
    margin: 0 41px;
  }

  .area_account .tit_g {
    line-height: 49px
  }

  .area_account .tit_g svg {
    width: 50px;
    height: 50px
  }

  .info_bank .group_bank {
    margin-bottom: 41px
  }

  .info_bank .head_bank {
    height: 65px;
    padding: 0 30px;
    font-weight: normal;
    font-size: 23px;
    line-height: 65px
  }

  .info_bank .box_bank {
    padding: 33px 30px
  }

  .info_bank .box_bank .txt_bank {
    margin-bottom: 18px;
    font-size: 23px;
    line-height: 32px
  }

  .info_bank .link_copy {
    font-size: 21px;
    line-height: 32px
  }

  .info_bank .box_bank .num_bank {
    margin: 0 12px 0 8px
  }
}
</style>
