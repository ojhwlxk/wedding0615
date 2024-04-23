<script setup lang="ts">
</script>

<template>
  <div class="area_photo">
    <div class="wrap_tit">
      <strong class="tit_g">photo</strong>
    </div>
    <div class="wrap_photo">
      <div class="thumb_photo w_250">
        <img src="/images/photo_list1.jpg" alt="" class="img_g lazy photo1">
      </div>
      <div class="thumb_photo">
        <img src="/images/photo_list2.jpg" alt="" class="img_g lazy photo2 float_l">
        <img src="/images/photo_list3.jpg" alt="" class="img_g lazy photo3 float_r">
      </div>
      <div class="thumb_photo">
        <img src="/images/photo_list4.jpg" alt="" class="img_g lazy photo4">
      </div>
      <div class="thumb_photo">
        <img src="/images/photo_list5.jpg" alt="" class="img_g lazy photo5 float_r">
      </div>
      <div class="thumb_photo">
        <img src="/images/photo_list6.jpg" alt="" class="img_g lazy photo6 float_l">
      </div>
      <div class="thumb_photo">
        <img src="/images/photo_list7.jpg" alt="" class="img_g lazy photo7">
      </div>
      <div class="thumb_photo">
        <img src="/images/photo_list8.jpg" alt="" class="img_g lazy photo8">
      </div>
    </div>
  </div>
</template>

<style scoped>
.area_photo .wrap_photo {
  padding-top: 12.53vw
}

.wrap_photo .thumb_photo {
  margin: 0 5.33vw
}

.wrap_photo .thumb_photo + .thumb_photo {
  padding-top: 9.6vw
}

.wrap_photo .thumb_photo.w_full {
  width: 100%;
  margin: 0
}

.wrap_photo .thumb_photo.w_250 {
  width: 66.6vw;
  margin: 0 auto
}

.wrap_photo .thumb_photo {
  overflow: hidden
}

.wrap_photo .thumb_photo .float_l {
  float: left
}

.wrap_photo .thumb_photo .float_r {
  float: right
}

.wrap_photo .photo2 {
  width: 41.6vw
}

.wrap_photo .photo3 {
  width: 41.6vw;
  margin-top: 20.26vw
}

.wrap_photo .photo5 {
  width: 59.73vw
}

.wrap_photo .photo6 {
  width: 41.6vw
}

.wrap_photo .photo7 {
  width: 78.4vw;
  margin: 0 auto
}

@media screen and (min-width: 640px) {
  .area_photo .wrap_tit {
    padding: 154px 0 51px;
  }

  .area_photo .wrap_photo {
    padding-top: 80px
  }

  .wrap_photo .thumb_photo {
    margin: 0 34px
  }

  .wrap_photo .thumb_photo + .thumb_photo {
    padding-top: 61px
  }

  .wrap_photo .thumb_photo.w_250 {
    width: 426px
  }

  .wrap_photo .photo2 {
    width: 266px
  }

  .wrap_photo .photo3 {
    width: 266px;
    margin-top: 130px
  }

  .wrap_photo .photo5 {
    width: 382px
  }

  .wrap_photo .photo6 {
    width: 266px
  }

  .wrap_photo .photo7 {
    width: 502px
  }
}
</style>
