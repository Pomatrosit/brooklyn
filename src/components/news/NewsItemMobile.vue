<template>
  <div class="news-item" @click="goToSingleNews(newsItem.id)">
    <div class="img">
      <img :src="newsItem.image[0].path" alt="">
    </div>
    <div class="title-and-date">
      <p class="title">{{ newsItem.title }}</p>
      <p class="date">{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToSingleNews (id) {
      this.$router.push('/news/' + id).then(window.scrollTo(0, 0))
    }
  },
  props: ['newsItem'],
  computed: {
    date () {
      return this.newsItem.created_at.split(' ')[0]
    }
  }
}
</script>

<style scoped>
.img{
  width:100%;
  height:500px;
}

.img img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.news-item{
  border-radius:2px;
  margin-bottom:23px;
  border: 1px solid #EFEFEF;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.title-and-date{
  padding:27px 30px 35px 30px;
  background:#fff;
}

.title{
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #242135;
  margin-bottom:26px;
}

.date{
  font-size:14px;
  font-weight:600;
  color:#242135;
}
</style>
