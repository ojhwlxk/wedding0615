<script setup lang="ts">
import Intro from './components/Intro.vue'
import Invite from './components/Invite.vue'
import Name from './components/Name.vue'
import Call from './components/Call.vue'
import Date from './components/Date.vue'
import Photo from './components/Photo.vue'
import Location from './components/Location.vue'
import Account from './components/Account.vue'
import Flower from './components/Flower.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <main class="wrap_main">
    <Intro/>
    <Invite/>
    <Name/>
    <Call/>
    <Photo/>
    <Date/>
    <Location/>
    <Account/>
  </main>
  <Footer/>
</template>

<style>
.wrap_main {
  display: block;
  min-width: 320px
}

@media screen and (min-width: 640px) {
  .wrap_main, .wrap_footer {
    width: 640px;
    margin: 0 auto;
    box-sizing: border-box;
  }
}
</style>
