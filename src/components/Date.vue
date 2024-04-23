<script setup lang="ts">
</script>

<template>
  <div class="area_date">
    <div class="wrap_tit">
      <strong class="tit_g">wedding day</strong>
    </div>

    <div class="area_calendar fade on">
      <span class="txt_month">6월</span>
      <div class="wrap_calendar">
        <table class="tbl_month">
          <thead>
          <tr>
            <th scope="col" class="emph_sun">일</th>
            <th scope="col">월</th>
            <th scope="col">화</th>
            <th scope="col">수</th>
            <th scope="col">목</th>
            <th scope="col">금</th>
            <th scope="col">토</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
          </tr>
          <tr>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td class="emph_day">15</td>
          </tr>
          <tr>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
          </tr>
          <tr>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
          </tr>
          <tr>
            <td>30</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="desc_date">
      2024년 6월 15일 토요일 오후 2시<br/>
      부암제일교회 2층
    </div>
  </div>
</template>

<style scoped>
.area_calendar {
  padding-top: 15.55vw;
  text-align: center
}

.area_calendar .txt_month {
  display: inline-block;
  font-weight: 500;
  font-size: 4.64vw;
  line-height: 6.66vw;
  color: #333;
  vertical-align: top
}

.area_calendar .wrap_calendar {
  padding: 3.33vw 0 0
}

.tbl_month {
  table-layout: fixed;
  width: 83.33vw;
  margin: 0 auto
}

.tbl_month tr th {
  font-weight: normal;
  font-size: 3.7vw;
  padding: 5.11vw 1.94vw
}

.tbl_month tr td {
  font-size: 3.89vw;
  padding: 2.5vw 1.94vw
}

.tbl_month .emph_sun {
  color: #B53939
}

.tbl_month .emph_day {
  position: relative
}

.tbl_month .emph_day:before {
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  width: 8.33vw;
  height: 8.33vw;
  border-radius: 50%;
  border: 1px solid #000;
  transform: translate(-50%, -50%);
  content: ''
}

.area_date .desc_date {
  width: 70.33vw;
  margin: 7.467vw auto 0;
  padding: 5.867vw 0;
  font-size: 3.733vw;
  line-height: 6.133vw;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08)
}


@media screen and (min-width: 640px) {

  .area_calendar {
    padding-top: 99px
  }

  .area_calendar .txt_month {
    font-size: 28px;
    line-height: 42px
  }

  .area_calendar .wrap_calendar {
    padding-top: 21px
  }

  .tbl_month {
    width: 533px
  }

  .tbl_month tr th {
    font-size: 25px;
    padding: 39px 12px
  }

  .tbl_month tr td {
    font-size: 25px;
    padding: 16px 12px
  }

  .tbl_month .emph_day:before {
    width: 53px;
    height: 53px
  }

  .tbl_month .emph_day:before {
    width: 53px;
    height: 53px
  }

  .area_date .desc_date {
    width: 450px;
    margin: 48px auto 0;
    padding: 37px 0;
    font-size: 24px;
    line-height: 39px
  }
}
</style>
