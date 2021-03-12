<template>
  <div class="list">
    <NewsItem class="newslist-animated"/>
    <NewsItem class="newslist-animated"/>
    <NewsItem class="newslist-animated"/>
    <NewsItem class="newslist-animated"/>
  </div>
</template>

<script>
import NewsItem from './NewsItem'
import gsap, { Power2 } from 'gsap'

export default {
  components: {
    NewsItem
  },
  mounted () {
    gsap.to('.newslist-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to('.newslist-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: Power2.easeInOut, delay: 2 })
  }
}
</script>

<style>
.list{
  padding:8vh 0 3.5vh 0;
}
</style>
