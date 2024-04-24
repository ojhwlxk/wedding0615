<script setup>
import { NaverMap } from 'vue3-naver-maps'
import { NaverMarker } from 'vue3-naver-maps'

const mapOptions = {
  latitude: 35.16832604557611, // 지도 중앙 위도
  longitude: 129.03982964062922, // 지도 중앙 경도
  zoom: 18,
}
</script>


<template>
  <div class="area_location">
    <div class="wrap_tit">
      <strong class="tit_g fade on">오시는 길</strong>
    </div>
    <div class="box_map fade on">
      <naver-map
          style="width: 100%; height: 100%"
          :map-options="mapOptions"
      >
        <naver-marker
            :latitude="mapOptions.latitude"
            :longitude="mapOptions.longitude"
        />
      </naver-map>
    </div>
    <div class="info_transport">
      <div class="inner_transport">
        <ul class="list_transport">
          <li class="fade on">
            <strong class="tit_info">주소</strong>
            <span class="desc_info">부산 부산진구 백양순환로110번길 41<br/>(부암동 437-8)</span>
          </li>
          <li class="fade on">
            <strong class="tit_info">주차장</strong>
            <span class="desc_info">주차장 입구는 교회 안쪽에 있습니다<br/>(교회 앞에서 보이는 곳은 출구입니다)</span>
          </li>
          <li class="bus fade on">
            <strong class="tit_info">버스</strong>
            <span class="desc_info"><span class="info_stop">부암3동주민센터 정류장</span>169번 (도보 1분)</span>
            <span class="desc_info"><span
                class="info_stop">부암삼성래미안 정류장</span>17번, 23번, 44번, 88번, 141번, 169번 (도보 3분)</span>
            <span class="desc_info"><span class="info_stop">동평유치원 정류장</span>167번 (도보 3분)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.area_location {
  margin-top: 16vw;
  padding-bottom: 13.33vw;
  background-color: #f4f4f4;
}

.area_location .wrap_tit {
  padding-top: 16vw
}

.area_location .box_map {
  height: 240px;
  margin-top: 2.66vw
}

.info_transport {
  padding: 8vw 4.53vw 0
}

.info_transport .inner_transport {
  padding: 8vw 0 0;
  border-top: 1px solid #222
}

.list_transport {
  padding: 0 2.13vw
}

.list_transport li + li {
  padding-top: 8vw
}

.list_transport .tit_info {
  display: block;
  font-weight: 400;
  font-size: 3.8vw;
  line-height: 1.4;
  color: #1a1a1a;
  font-family: NotoSansKR;
}


.list_transport .desc_info {
  display: block;
  padding-top: 4vw;
  font-weight: 400;
  font-size: 3.46vw;
  line-height: 5.6vw;
  color: #111;
}

.list_transport .desc_info + .desc_info {
  padding-top: 2.13vw
}

.list_transport .desc_info .info_stop {
  display: block;
  padding-bottom: 1.06vw;
  color: #000
}

.list_transport .bus .desc_info + .desc_info {
  padding-top: 4vw
}

@media screen and (min-width: 640px) {
  .area_location {
    margin-top: 102px;
    padding-bottom: 85px
  }

  .area_location .wrap_tit {
    padding-top: 102px
  }

  .area_location .box_map {
    margin-top: 17px
  }

  .info_location {
    padding-top: 51px;
    font-size: 24px;
    line-height: 46px
  }

  .info_transport {
    padding: 51px 29px 0
  }

  .info_transport .inner_transport {
    padding: 51px 0 0
  }

  .list_transport {
    padding: 0 14px
  }

  .list_transport .tit_info {
    font-size: 23px;
  }

  .list_transport .desc_info {
    padding-top: 26px;
    font-size: 22px;
    line-height: 36px
  }

  .list_transport li + li {
    padding-top: 51px
  }

  .list_bank li {
    position: relative
  }

  .list_bank li + li {
    padding-top: 17px
  }

  .list_bank li + li:before {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 6px;
    background-color: #fff;
    content: ''
  }

  .list_share .link_share svg {
    width: 30px;
    margin-top: 3px
  }

  .list_share li {
    width: 243px
  }

  .list_share li + li {
    margin-top: 14px
  }
}
</style>
