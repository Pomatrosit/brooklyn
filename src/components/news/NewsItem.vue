<template>
  <div class="item">
    <div class="item-main">
      <h3 class="title">Открытие офиса продаж</h3>
      <p class="text">Жилой Квартал «Бруклин» - отличный выбор для тех, кто хочет совместить жизнь в тихом
        районе и максимальную доступность объектов инфраструктуры. </p>
      <a class="read-link" @click="goToSingleNews(1)">Читать полностью</a>
    </div>
    <div class="item-img" :style="{ background: 'url(/img/mainPage/contacts.jpg) center /cover' }">
      <!-- <img src="/img/mainPage/contacts.jpg" alt=""> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToSingleNews (id) {
      this.$router.push('/news/' + id)
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
</style>
