<template>
  <div>
    <div class="list">
      <NewsItem
        v-for="newsItem in newsOnPage"
        :key="newsItem.id"
        :newsItem="newsItem"
        class="newslist-animated"
      />
    </div>
    <div v-if="pagesCount > 1" class="pagination">
      <span
        v-for="idx in pagesCount"
        :key="idx"
        class="pagination-item"
        :class="{ 'active-pagination-item' : idx === currentPage }"
        @click="onPaginationClick(idx)"
      >{{idx}}
      </span>
    </div>
  </div>
</template>

<script>
import NewsItem from './NewsItem'
import gsap, { Power2 } from 'gsap'

export default {
  components: {
    NewsItem
  },
  data: () => ({
    currentPage: 1,
    itemsOnPage: 10
  }),
  computed: {
    news () {
      return this.$store.getters.news
    },
    newsOnPage () {
      const start = this.currentPage * this.itemsOnPage - this.itemsOnPage
      const end = start + this.itemsOnPage
      return this.news.slice(start, end)
    },
    pagesCount () {
      return Math.ceil(this.news.length / this.itemsOnPage)
    }
  },
  methods: {
    onPaginationClick (idx) {
      this.currentPage = idx
      document.querySelector('.content-wrapper-js').scrollTo(0, 0)
    }
  },
  mounted () {
    gsap.to('.newslist-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to('.newslist-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: Power2.easeInOut, delay: 2 })
  }
}
</script>

<style scoped>
.list{
  padding:8vh 0 3.5vh 0;
}

.pagination{
  margin-bottom:5vh;
  font-size:2.5vh;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  padding-right:2vh;
  flex-wrap:wrap;
}

.pagination-item{
  display:block;
  margin-bottom:1vh;
  margin-left:1vh;
  cursor:pointer;
  color:#212435;
  font-weight:500;
}

.active-pagination-item{
  font-weight:700;
  color:#ea8e79;
  text-decoration:underline;
}
</style>
