<script setup lang="ts">
</script>

<template>
  <footer class="wrap_footer">
    <ul class="list_share">
      <li>
        <a href="#none" class="link_share link_kakao" onclick="javascript:shareKakaotalk();">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 191.94">
            <g>
              <polygon class="cls-1" points="76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49"></polygon>
              <path class="cls-1"
                    d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z"></path>
            </g>
          </svg>
          <span class="txt_share">카카오톡으로 공유하기</span>
        </a>
      </li>
      <li>
        <a href="#none" class="link_share link_url">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title></title>
            <path
                d="M17.3,13.35a1,1,0,0,1-.7-.29,1,1,0,0,1,0-1.41l2.12-2.12a2,2,0,0,0,0-2.83L17.3,5.28a2.06,2.06,0,0,0-2.83,0L12.35,7.4A1,1,0,0,1,10.94,6l2.12-2.12a4.1,4.1,0,0,1,5.66,0l1.41,1.41a4,4,0,0,1,0,5.66L18,13.06A1,1,0,0,1,17.3,13.35Z"
                fill="#464646"></path>
            <path
                d="M8.11,21.3a4,4,0,0,1-2.83-1.17L3.87,18.72a4,4,0,0,1,0-5.66L6,10.94A1,1,0,0,1,7.4,12.35L5.28,14.47a2,2,0,0,0,0,2.83L6.7,18.72a2.06,2.06,0,0,0,2.83,0l2.12-2.12A1,1,0,1,1,13.06,18l-2.12,2.12A4,4,0,0,1,8.11,21.3Z"
                fill="#464646"></path>
            <path
                d="M8.82,16.18a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l6.37-6.36a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.42L9.52,15.89A1,1,0,0,1,8.82,16.18Z"
                fill="#464646"></path>
          </svg>
          <span class="txt_share">청첩장 링크 복사하기</span>
        </a>
      </li>
    </ul>
    <span class="info_square">copyright © <span class="txt_name">
      <a href="http://small-square.com" class="link_smallsquare" target="_blank">neohda</a>
    </span>. All rights reserved.</span>
  </footer>
</template>

<style scoped>
.wrap_footer {
  padding: 9.72vw 6.94vw 5.55vw;
  font-family: -apple-system, '맑은 고딕', 'malgun gothic', 'AppleGothicNeoSD', 'Apple SD 산돌고딕 Neo', serif, sans-serif;
  background-color: #e5e5e5;
  border-top: 1px solid rgba(0, 0, 0, 0.01)
}

.info_square {
  display: block;
  padding-top: 3.89vw;
  color: #767270;
  font-size: 3.05vw;
  line-height: 5.55vw;
  text-align: center
}

.info_square .txt_name {
  display: inline-block;
  line-height: 5.55vw;
  vertical-align: top
}

.list_share {
  font-size: 0
}

.list_share li + li {
  margin-top: 2.22vw
}

.list_share li {
  width: 41.05vw;
  margin: 0 auto
}

.list_share .link_share {
  display: inline-block;
  font-size: 0;
  vertical-align: top
}

.list_share .link_share svg {
  display: inline-block;
  width: 4.8vw;
  margin-top: 0.55vw;
  vertical-align: top
}

.list_share .txt_share {
  display: inline-block;
  padding-left: 0.83vw;
  font-size: 3.33vw;
  line-height: 5.83vw;
  vertical-align: top
}

@media screen and (min-width: 640px) {
  .wrap_footer {
    padding: 62px 44px 35px
  }

  .list_share .link_share svg {
    width: 30px;
    margin-top: 3px
  }

  .list_share .txt_share {
    padding-left: 5px;
    font-size: 19px;
    line-height: 37px
  }

  .list_share .link_share {
    font-size: 21px
  }

  .list_share li {
    width: 243px
  }

  .list_share li + li {
    margin-top: 14px
  }

  .info_square {
    padding-top: 25px;
    font-size: 19px;
    line-height: 35px
  }

  .info_square .txt_name {
    line-height: 35px
  }
}
</style>
