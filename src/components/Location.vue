<script setup lang="ts">
</script>

<template>
  <div class="area_location">
    <div class="wrap_tit">
      <strong class="tit_g fade on">오시는 길</strong>
    </div>
    <div class="box_map fade on">
      <!--      &lt;!&ndash; * 카카오맵 - 지도퍼가기 &ndash;&gt;-->
      <!--      &lt;!&ndash; 1. 지도 노드 &ndash;&gt;-->
      <!--      <div id="daumRoughmapContainer1642581428781" class="root_daum_roughmap root_daum_roughmap_landing"-->
      <!--           style="width: 640px;">-->
      <!--        <div class="wrap_map" style="height: 209px;">-->
      <!--          <div class="map"-->
      <!--               style="overflow: hidden; background: url(&quot;http://t1.daumcdn.net/mapjsapi/images/2x/bg_tile.png&quot;);">-->
      <!--            <div-->
      <!--                style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; touch-action: none; cursor: url(&quot;http://t1.daumcdn.net/mapjsapi/images/2x/cursor/openhand.cur.ico&quot;) 7 5, url(&quot;http://t1.daumcdn.net/mapjsapi/images/2x/cursor/openhand.cur.ico&quot;), default;">-->
      <!--              <div style="position: absolute;">-->
      <!--                <div style="position: absolute; z-index: 1; left: 0px; top: 0px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/5/495/216.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: -218px; top: 87px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/5/495/217.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 38px; top: 87px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/5/495/218.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 294px; top: 87px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/5/496/216.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: -218px; top: -169px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/5/496/217.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 38px; top: -169px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/5/496/218.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 294px; top: -169px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 256px; height: 256px;">-->
      <!--                </div>-->
      <!--                <div style="position: absolute; z-index: 0; left: 0px; top: 0px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/4/991/434.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 37.5px; top: 87px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 128px; height: 128px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/4/991/435.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 165.5px; top: 87px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 128px; height: 128px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/4/991/436.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 293.5px; top: 87px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 128px; height: 128px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/4/992/434.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 37.5px; top: -41px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 128px; height: 128px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/4/992/435.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 165.5px; top: -41px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 128px; height: 128px;"><img-->
      <!--                    src="http://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v28_znu9w/4/992/436.png" alt=""-->
      <!--                    role="presentation" draggable="false"-->
      <!--                    style="position: absolute; user-select: none; -webkit-user-drag: none; min-width: 0px; min-height: 0px; max-width: none; max-height: none; left: 293.5px; top: -41px; opacity: 1; transition-property: opacity; transition-duration: 0.2s; transition-timing-function: ease; width: 128px; height: 128px;">-->
      <!--                </div>-->
      <!--                <div style="position: absolute; z-index: 1;"></div>-->
      <!--                <div style="position: absolute; z-index: 1; width: 390px; height: 209px;"></div>-->
      <!--                <div style="position: absolute; z-index: 1;">-->
      <!--                  <svg version="1.1"-->
      <!--                       style="stroke: none; stroke-dashoffset: 0.5; stroke-linejoin: round; fill: none; transform: translateZ(0px); position: absolute; left: -780px; top: -418px; width: 1950px; height: 1045px;"-->
      <!--                       viewBox="0 0 1950 1045">-->
      <!--                    <defs></defs>-->
      <!--                  </svg>-->
      <!--                </div>-->
      <!--                <div style="position: absolute; z-index: 1; width: 100%; height: 0px; transform: translateZ(0px);">-->
      <!--                  <div-->
      <!--                      style="position: absolute; margin: -48px 0px 0px -18px; z-index: 2; left: 278px; top: 156px; display: block;">-->
      <!--                    <img draggable="false" src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/map/marker_map01.png"-->
      <!--                         alt="" role="presentation" title=""-->
      <!--                         style="min-width: 0px; min-height: 0px; max-width: 99999px; max-height: none; border: 0px; display: block; position: absolute; user-select: none; -webkit-user-drag: none; clip: rect(0px, 45px, 50px, 0px); top: 0px; left: 0px; width: 45px; height: 50px;">-->
      <!--                  </div>-->
      <!--                  <div-->
      <!--                      style="position: absolute; z-index: 3; white-space: nowrap; margin: -28px 0px 0px -45px; left: 278px; top: 156px;">-->
      <!--                    <div class="roughmap_maker_label" style="top: -57px; left: -2.25px;"><a-->
      <!--                        href="https://map.kakao.com/?urlX=482920.0&amp;urlY=1119076.0&amp;itemId=1485166493&amp;q=%EB%8D%94%ED%8C%8C%ED%8B%B0%EC%9B%80%20%EC%97%AC%EC%9D%98%EB%8F%84&amp;srcid=1485166493&amp;map_type=TYPE_MAP&amp;from=roughmap"-->
      <!--                        target="_blank"><span class="roughmap_lebel_text">더파티움 여의도</span></a></div>-->
      <!--                  </div>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--            <div-->
      <!--                style="position: absolute; cursor: default; z-index: 1; margin: 0px 6px; height: 19px; line-height: 14px; bottom: 0px; color: rgb(0, 0, 0); right: 0px;">-->
      <!--              <div style="color: rgb(0, 0, 0); text-align: center; font-size: 10px; float: right;">-->
      <!--                <div-->
      <!--                    style="float: left; margin: 2px 3px 0px 4px; height: 6px; transition: width 0.1s ease 0s; border-top: none rgb(0, 0, 0); border-right: 2px solid rgb(0, 0, 0); border-bottom: 2px solid rgb(0, 0, 0); border-left: 2px solid rgb(0, 0, 0); border-image: initial; width: 58px;"></div>-->
      <!--                <div-->
      <!--                  250m-->
      <!--                </div>-->
      <!--              </div>-->
      <!--              <div style="margin: 0px 4px; float: right;"><a target="_blank" href="http://map.kakao.com/"-->
      <!--                                                             title="Kakao 지도로 보시려면 클릭하세요."-->
      <!--                                                             style="float: left; width: 32px; height: 10px;"><img-->
      <!--                  src="http://t1.daumcdn.net/mapjsapi/images/2x/m_bi_b.png" alt="Kakao 지도로 이동"-->
      <!--                  style="float: left; width: 32px; height: 10px; border: none;"></a>-->
      <!--                <div style="font: 11px / 11px Arial, Tahoma, Dotum, sans-serif; float: left;"></div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--            <div style="cursor: auto; position: absolute; z-index: 2; left: 0px; top: 0px;"></div>-->
      <!--          </div>-->
      <!--          <span class="map_border border1"></span><span class="map_border border2"></span><span-->
      <!--            class="map_border border3"></span><span class="map_border border4"></span>-->
      <!--          <div class="wrap_btn_zoom">-->
      <!--            <button class="btn_zoom_in hide_text"><span class="img_zoom">확대</span></button>-->
      <!--            <button class="btn_zoom_out hide_text"><span class="img_zoom">축소</span></button>-->
      <!--            <button class="btn_zoom_reset hide_text"><span class="img_zoom">초기화</span></button>-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="wrap_controllers hide"><a class="tit_controllers" href="https://map.kakao.com" target="_blank"><img-->
      <!--            src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16"-->
      <!--            alt="카카오맵" style="display:block;width:72px;height:16px"></a>-->
      <!--          <div class="wrap_btn_roadview"><a class="txt" target="_blank"-->
      <!--                                            href="https://map.kakao.com/?from=roughmap&amp;srcid=1485166493&amp;confirmid=1485166493&amp;q=%EB%8D%94%ED%8C%8C%ED%8B%B0%EC%9B%80%20%EC%97%AC%EC%9D%98%EB%8F%84&amp;rv=on">로드뷰</a><span-->
      <!--              class="txt_bar"></span><a class="txt" target="_blank"-->
      <!--                                        href="https://map.kakao.com/?from=roughmap&amp;eName=%EB%8D%94%ED%8C%8C%ED%8B%B0%EC%9B%80%20%EC%97%AC%EC%9D%98%EB%8F%84&amp;eX=482920.0&amp;eY=1119076.0">길찾기</a><span-->
      <!--              class="txt_bar"></span><a class="txt" target="_blank"-->
      <!--                                        href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=1485166493&amp;itemId=1485166493&amp;q=%EB%8D%94%ED%8C%8C%ED%8B%B0%EC%9B%80%20%EC%97%AC%EC%9D%98%EB%8F%84&amp;urlX=482920.0&amp;urlY=1119076.0">지도-->
      <!--            크게 보기</a></div>-->
      <!--        </div>-->
      <!--      </div>-->
      <!--      &lt;!&ndash;-->
      <!--      2. 설치 스크립트-->
      <!--      * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.-->
      <!--      &ndash;&gt;-->
      <!--      <script charset="UTF-8" class="daum_roughmap_loader_script"-->
      <!--              src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>-->
      <!--      <script charset="UTF-8"-->
      <!--              src="http://t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/9148b03e/roughmapLander.js"></script>-->
      <!--      &lt;!&ndash; 3. 실행 스크립트 &ndash;&gt;-->
      <!--      <script charset="UTF-8">-->
      <!--        new daum.roughmap.Lander({-->
      <!--          "timestamp": "1642581428781",-->
      <!--          "key": "28uxm",-->
      <!--          "mapWidth": "640",-->
      <!--          "mapHeight": "209"-->
      <!--        }).render();-->
      <!--      </script>-->
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
            <span class="desc_info"><span class="info_stop">부암삼성래미안 정류장</span>17번, 23번, 44번, 88번, 141번, 169번 (도보 3분)</span>
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
