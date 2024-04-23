<script setup lang="ts">
</script>

<template>
  <div class="area_name">
    <ul class="info_people">
      <li>이성현 · 윤정화의<span class="txt_related">아들</span>창훈</li>
      <li>오윤옥 · 김미옥의<span class="txt_related">딸</span>지혜</li>
    </ul>
  </div>
</template>

<style scoped>
.area_name {
  padding-top: 7.8vw;
  text-align: center;
}

.area_name .info_people {
  font-size: 3.733vw;
  line-height: 5.867vw
}

.area_name .info_people .txt_related {
  display: inline-block;
  width: 7vw;
  margin: 0 1.6vw;
  font-size: 3.2vw;
  vertical-align: top;
  text-align: center
}

.area_name .info_people li + li {
  padding-top: 1.067vw
}

@media screen and (min-width: 640px) {
  .area_name {
    padding-top: 50px
  }

  .area_name .info_people {
    font-size: 24px;
    line-height: 38px
  }

  .area_name .info_people li {
    font-size: 24px
  }

  .area_name .info_people .txt_related {
    width: 50px;
    margin: 0 10px;
    font-size: 20px
  }
}
</style>
