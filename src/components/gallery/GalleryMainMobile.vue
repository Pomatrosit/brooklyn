<template>
  <div class="gallery">
    <div class="app-wrapper">
      <h1 class="gallery__title">Галерея ЖК бруклин</h1>
      <div class="gallery__back" @click="goToHomePage">
        <SliderArrowLeft width="7px" height="12px" fill="#242135"/>
        <span>На главную</span>
      </div>
      <figure class="category-card gallery-animated" @click="goToGaleryCategory(1)">
        <div class="category-card__icon">
          <img src="/img/Vector-2.svg" alt="gallery">
        </div>
        <h2 class="category-card__title">
          Архитектура <br/>и двор
        </h2>
        <img src="/img/gallery/1.png" alt="" class="category-card__img">
      </figure>
      <figure class="category-card gallery-animated" @click="goToGaleryCategory(2)">
        <div class="category-card__icon">
          <img src="/img/Vector.svg" alt="gallery">
        </div>
        <h2 class="category-card__title">
          Места общего <br/>пользования
        </h2>
        <img src="/img/gallery/2.png" alt="" class="category-card__img">
      </figure>
      <figure class="category-card gallery-animated" @click="goToGaleryCategory(3)">
        <div class="category-card__icon">
          <img src="/img/Vector-1.svg" alt="gallery">
        </div>
        <h2 class="category-card__title">
          Интерьеры <br/>квартир
        </h2>
        <img src="/img/gallery/3.png" alt="" class="category-card__img">
      </figure>
    </div>
  </div>
</template>

<script>
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'

export default {
  components: {
    SliderArrowLeft
  },
  methods: {
    goToHomePage () {
      this.$router.push('/').then(() => window.scrollTo(0, 0))
    },
    goToGaleryCategory (id) {
      this.$router.push('/gallery/' + id)
    }
  }
}
</script>

<style scoped>
.gallery{
  padding-top:57px;
  padding-bottom:35px;
}

.gallery__title{
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #242135;
  padding:40px 0;
  border-bottom:1px solid #C4C4C4;
}

.gallery__back{
  padding:25px 0;
}

.gallery__back span {
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #242135;
  margin-left:10px;
}

.category-card{
  height:210px;
  width:100%;
  border-radius:2px;
  cursor:pointer;
  display:flex;
  align-items:Center;
  justify-content:center;
  flex-direction:column;
  position:relative;
  overflow:hidden;
  border-radius:2px;
  margin-bottom:25px;
}

.category-card__img{
  width:100%;
  height:100%;
  object-fit:cover;
  position:absolute;
  z-index:-1;
}

.category-card__icon{
  width:60px;
  height:60px;
  display:flex;
  align-items:Center;
  justify-content:center;
  background:#fff;
  border-radius:50%;
  margin-bottom:25px;
  z-index:0;
  position:relative;
}

.category-card__icon img{
  width:50%;
}

.category-card__title{
  width:100%;
  text-align:center;
  font-weight: bold;
  font-size: 16px;
  line-height: 160%;
  text-transform: uppercase;
  color:#fff;
  z-index:0;
  position:relative;
}
</style>
