<template>
  <div class="gallery-main">
    <div class="app-wrapper">
      <div class="gallery-top">
        <h1 class="gallery__title gallery-animated">Галерея ЖК Бруклин</h1>
        <div class="gallery-top__after gallery-animated"></div>
      </div>
      <div class="gallery__back gallery-animated" @click="goToMainPage">
        <svg width="1vh" height="1.667vh" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.7541 15.7589C9.05216 15.4667 9.07926 15.0095 8.83539 14.6873L8.7541 14.595L2.02658 8L8.7541 1.40503C9.05216 1.11283 9.07926 0.655583 8.83539 0.333375L8.7541 0.241064C8.45604 -0.0511349 7.98963 -0.0776984 7.66096 0.161374L7.56679 0.241064L0.245899 7.41802C-0.0521603 7.71022 -0.079257 8.16746 0.16461 8.48967L0.245899 8.58198L7.56679 15.7589C7.89466 16.0804 8.42624 16.0804 8.7541 15.7589Z" fill="#242135"/>
        </svg>
        <span>На главную</span>
      </div>
      <div class="gallery-bottom">
        <figure class="category-card gallery-animated" @click="goToGaleryCategory(1)">
          <div class="category-card__icon">
            <img src="/img/Vector-1.svg" alt="gallery">
          </div>
          <h2 class="category-card__title">
            Архитектура <br/>и двор
          </h2>
          <img src="/img/gallery/1.png" alt="" class="category-card__img">
        </figure>
        <figure class="category-card gallery-animated" @click="goToGaleryCategory(2)">
          <div class="category-card__icon">
            <img src="/img/Vector.svg" alt="gallery" class="second-icon">
          </div>
          <h2 class="category-card__title">
            Места общего <br/>пользования
          </h2>
          <img src="/img/gallery/2.png" alt="" class="category-card__img">
        </figure>
        <figure class="category-card gallery-animated" @click="goToGaleryCategory(3)">
          <div class="category-card__icon">
            <img src="/img/Vector-2.svg" alt="gallery">
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
import gsap, { Power2 } from 'gsap'

export default {
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
  flex-direction:column;
  justify-content:space-between;
  height:100%;
}

.gallery-top{
  width:100%;
  padding: 12.5vh 0 5.2vh 0;
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
  justify-content:flex-start;
}

.gallery__back span{
  font-weight: 500;
  font-size: 2.09vh;
  color: #242135;
  margin-left:2.5vh;
  transition:0.3s;
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
  transition:0.5s;
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
  width:35%;
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

.gallery__back:hover svg path{
  transition:0.5s;
}

@media (hover:hover){
  .category-card:hover .category-card__img{
    transform:scale(1.1);
  }
  .gallery__back:hover span{
    color:#EA8E79;
  }
  .gallery__back:hover svg path{
    fill:#EA8E79;
  }
}
</style>
