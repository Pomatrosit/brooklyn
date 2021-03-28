<template>
  <div class="item">
    <div class="item-main">
      <h3 class="title">{{ newsItem.title }}</h3>
      <div class="read-btn-and-date">
        <a class="read-link" @click="goToSingleNews(newsItem.id)">Читать полностью</a>
        <span class="date">{{ date }}</span>
      </div>
    </div>
    <div class="item-img" :style="{ background: 'url('+ newsItem.image[0].path +') center /cover' }">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToSingleNews (id) {
      this.$router.push('/news/' + id)
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
.item{
  display:flex;
  margin-bottom:5.2vh;
}

.item-main{
  border:1px solid #242135;
  border-right:none;
  width:61%;
  padding:4.7vh 10% 6.2vh 4.7vh;
}

.item-img{
  width:39%;
}

.item-img img{
  height:100%;
  width:100%;
  object-fit:cover;
}

.title{
  font-weight: 600;
  font-size: 2.5vh;
  color: #242135;
  margin-bottom:3vh;
  margin-bottom:6vh;
}

.text{
  font-weight: 400;
  font-size: 1.667vh;
  line-height: 160%;
  color: #242135;
  margin-bottom:3.7vh;
}

.read-link{
  font-weight: 500;
  font-size: 1.5vh;
  text-decoration-line: underline;
  color: #EA8E79;
  cursor:pointer;
}

.read-btn-and-date{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.date{
  font-size:1.5vh;
  font-weight:600;
  color:#242135;
}
</style>
