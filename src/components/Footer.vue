<script setup lang="ts">
</script>

<template>
  <footer class="wrap_footer">
    <span class="info_copyright">copyright © <span class="txt_name">neohda</span>. All rights reserved.</span>
  </footer>
</template>

<style scoped>
.wrap_footer {
  font-family: -apple-system, '맑은 고딕', 'malgun gothic', 'AppleGothicNeoSD', 'Apple SD 산돌고딕 Neo', serif, sans-serif;
  padding: 5.55vw 0;
  background-color: #e5e5e5;
  border-top: 1px solid rgba(0, 0, 0, 0.01)
}

.info_copyright {
  display: block;
  color: #767270;
  font-size: 3.05vw;
  text-align: center;
  line-height: 1;
}

.info_copyright .txt_name {
  display: inline-block;
  color: #333;
  vertical-align: top;
}

@media screen and (min-width: 640px) {
  .wrap_footer {
    padding: 35px 0;
  }

  .info_copyright {
    font-size: 19px;
  }
}
</style>
