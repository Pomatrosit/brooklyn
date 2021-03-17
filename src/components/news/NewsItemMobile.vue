<template>
  <div class="news-item" @click="$router.push('/news/1')">
    <div class="img">
      <img src="/img/mainPage/contacts.jpg" alt="">
    </div>
    <p class="title">Открытие офиса продаж в центре города Архангельска</p>
  </div>
</template>

<style scoped>
.img{
  width:100%;
  height:190px;
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

.title{
  padding:27px 30px 35px 30px;
  background:#fff;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #242135;
}
</style>
