<template>
  <figure class="flat-card">
    <div class="flat-card__top">
      <div class="flat-card__count">
        <p class="flat-card__title">Количество комнат:</p>
        <p class="flat-card__text">Студия</p>
      </div>
      <div class="flat-card__square">
        <p class="flat-card__title">Общая площадь:</p>
        <p class="flat-card__text">56 м&sup2;</p>
      </div>
    </div>
    <div class="flat-card__img">
      <img src="/img/apartments/mini.png" alt="flat">
    </div>
    <div class="flat-card__buttons">
      <div class="flat-card__btn"><span>Скачать PDF</span></div>
      <div class="flat-card__btn light-btn" @click="openModal"><span>Записаться на просмотр</span></div>
    </div>
  </figure>
</template>

<script>
export default {
  methods: {
    goToFlat (id) {
      this.$router.push('/flat/' + id)
    },
    openModal () {
      this.$store.commit('toggleModal', 1)
    }
  }
}
</script>

<style scoped>
.flat-card{
  width:100%;
  margin-top:20px;
  padding:20px;
  background:#fff;
  cursor:pointer;
  margin-bottom:30px;
}

.flat-card__img{
  width:100%;
  display:flex;
  align-items:Center;
  justify-content:center;
  padding-top:3.5vh;
  border-top:1px solid #F9F9F9;
  margin-top:2.1vh;
}

.flat-card__img img {
  width:100%;
}

.flat-card__top{
  display:Flex;
  align-items:Center;
  justify-content:center;
  text-align:Center;
  margin-bottoM:20px;
}

.flat-card__count{
  width:50%;
  border-right:1px solid #F9F9F9;
}

.flat-card__square{
  width:50%;
}

.flat-card__title{
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  color: #242135;
  margin-top:12px;
}

.flat-card__text{
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #242135;
}

.flat-card__buttons{
  margin-top:40px;
}

.flat-card__btn{
  width:100%;
  height:60px;
  margin-bottom:17px;
  background:#242135;
  border-radius: 2px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align:center;
}

.flat-card__btn span{
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.03em;
  color: #FFFFFF;
}

.light-btn{
  border:1px solid #242135;
  background:#fff;
}

.light-btn span {
  color:#242135;
}
</style>
