<script setup lang="ts">
</script>

<template>
  <div class="area_banner">
    <div class="box_img fade on">
      <img data-src="images/photo_intro.jpg" src="/images/photo_banner.jpg" class="lazy img_g" alt="">
    </div>
  </div>
</template>

<style scoped>
.area_banner {
  overflow: hidden;
  position: relative;
  height: 69vw;
  margin: 10.256vw 0 0;
}

.area_banner .box_img {
  position: relative;
  height: 100%
}

.area_banner .box_img .img_g {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 100%
}

@media screen and (min-width: 640px) {
  .area_banner {
    height: 614px
  }
}
</style>
