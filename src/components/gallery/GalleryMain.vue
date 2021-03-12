<template>
  <div class="gallery-main">
    <div class="app-wrapper">
      <div class="gallery-top">
        <h1 class="gallery__title gallery-animated">Галерея ЖК Бруклин</h1>
        <div class="gallery__back gallery-animated" @click="goToMainPage">
          <SliderArrowLeft fill="#242135" width="1vh" height="1.667vh"/>
          <span>На главную</span>
        </div>
        <div class="gallery-top__after gallery-animated"></div>
      </div>
      <div class="gallery-bottom">
        <figure class="category-card gallery-animated" @click="goToGaleryCategory(1)">
          <div class="category-card__icon">
            <img src="/img/icons/house.png" alt="gallery">
          </div>
          <h2 class="category-card__title">
            Архитектура <br/>и двор
          </h2>
          <img src="/img/gallery/1.png" alt="" class="category-card__img">
        </figure>
        <figure class="category-card gallery-animated" @click="goToGaleryCategory(2)">
          <div class="category-card__icon">
            <img src="/img/icons/people.png" alt="gallery">
          </div>
          <h2 class="category-card__title">
            Места общего <br/>пользования
          </h2>
          <img src="/img/gallery/2.png" alt="" class="category-card__img">
        </figure>
        <figure class="category-card gallery-animated" @click="goToGaleryCategory(3)">
          <div class="category-card__icon">
            <img src="/img/icons/scene.png" alt="gallery">
          </div>
          <h2 class="category-card__title">
            Интерьеры <br/>квартир
          </h2>
          <img src="/img/gallery/3.png" alt="" class="category-card__img">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import gsap, { Power2 } from 'gsap'

export default {
  components: {
    SliderArrowLeft
  },
  methods: {
    goToMainPage () {
      this.$router.push('/')
    },
    goToGaleryCategory (id) {
      this.$router.push('/gallery/' + id)
    }
  },
  mounted () {
    gsap.to('.gallery-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to('.gallery-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: Power2.easeInOut })
  }
}
</script>

<style scoped>
.app-wrapper{
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:space-between;
  height:100%;
}

.gallery-top{
  display:flex;
  align-items:Center;
  justify-content:space-between;
  width:100%;
  padding: 12.5vh 0 7.29vh 0;
  position:relative;
}

.gallery-top__after{
  position:absolute;
  background:#C4C4C4;
  width:100%;
  height:1px;
  left:0;
  bottom:0;
}

.gallery__title{
  font-weight: bold;
  font-size: 3.125vh;
  color: #242135;
}

.gallery__back{
  cursor:pointer;
  display:flex;
  align-items:Center;
}

.gallery__back span{
  font-weight: 500;
  font-size: 2.09vh;
  color: #242135;
  margin-left:2.5vh
}

.gallery-bottom{
  width:100%;
  display:flex;
  justify-content:space-between;
}

.category-card{
  height:41.6vh;
  width:32%;
  border-radius:2px;
  cursor:pointer;
  display:flex;
  align-items:Center;
  justify-content:center;
  flex-direction:column;
  position:relative;
  overflow:hidden;
}

.category-card__img{
  width:100%;
  height:100%;
  object-fit:cover;
  position:absolute;
  z-index:-1;
  transition:0.7s;
  transition-timing-function:ease-in-out;
}

.category-card__icon{
  width:10.4vh;
  height:10.4vh;
  display:flex;
  align-items:Center;
  justify-content:center;
  background:#fff;
  border-radius:50%;
  margin-bottom:5vh;
  z-index:0;
  position:relative;
}

.category-card__icon img{
  width:60%;
}

.category-card__title{
  width:100%;
  text-align:center;
  font-weight: bold;
  font-size: 3.125vh;
  line-height: 160%;
  text-transform: uppercase;
  color:#fff;
  z-index:0;
  position:relative;
}

@media (hover:hover){
  .category-card:hover .category-card__img{
    transform:scale(1.2);
  }
}
</style>
