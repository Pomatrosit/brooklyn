<template>
  <div class="list">
    <NewsItem />
    <NewsItem />
    <NewsItem />
    <NewsItem />
  </div>
</template>

<script>
import NewsItem from './NewsItem'

export default {
  components: {
    NewsItem
  }
}
</script>

<style>
.list{
  padding:8.5vh 0 3.5vh 0;
}
</style>
