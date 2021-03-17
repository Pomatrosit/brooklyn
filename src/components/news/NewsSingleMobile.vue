<template>
  <div class="news-single">
    <div class="app-wrapper">
      <div class="news__back" @click="goBack">
        <SliderArrowLeft width="7px" height="12px" fill="#242135"/>
        <span>К списку новостей</span>
      </div>
      <h2 class="title">Открытие офиса продаж</h2>
      <div class="slick-wrapper">
        <slick
          ref="slick"
          :options="slickOptions"
          @afterChange="handleAfterChange"
        >
          <div
            class="slide"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
          >
            <img :src="image">
          </div>
        </slick>
        <div class="slider-arrows">
          <div class="arrow-left arrow dark-arrow" @click="prev">
            <SliderArrowLeft width="8px" height="13px" fill="#fff"/>
          </div>
          <div class="arrow-right arrow pink-arrow" @click="next">
            <SliderArrowRight width="8px" height="13px" fill="#fff"/>
          </div>
        </div>
        <div class="lightbox-btn" @click="index = index2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6892 2C17.9359 2 21.3785 5.36655 21.3785 9.51941C21.3785 11.4792 20.6118 13.264 19.3557 14.6024L21.826 17.0109C22.0576 17.2367 22.0581 17.6034 21.8271 17.8299C21.6171 18.0357 21.2882 18.0548 21.0561 17.8869L20.9896 17.8309L18.4902 15.3934C17.1745 16.4231 15.5054 17.0388 13.6892 17.0388C9.44259 17.0388 6 13.6723 6 9.51941C6 5.36655 9.44259 2 13.6892 2ZM13.6892 3.15819C10.0967 3.15819 7.18435 6.00621 7.18435 9.51941C7.18435 13.0326 10.0967 15.8806 13.6892 15.8806C17.2818 15.8806 20.1941 13.0326 20.1941 9.51941C20.1941 6.00621 17.2818 3.15819 13.6892 3.15819Z" fill="#242135"/>
          </svg>
        </div>
      </div>
      <CoolLightBox
        overlayColor="rgba(30, 30, 30, .9)"
        :zIndex="2"
        :style="{zIndex: 100}"
        :items="images"
        :index="index"
        effect="swipe"
        @close="index = null">
      </CoolLightBox>
      <h2 class="news__subtitle news-single-animated">Концептуальный жилой комплекс в Астрахани (H2)</h2>
      <div class="news__content">
        <p class="news__text news-single-animated"><strong>Благородство и достоинство </strong>архитектурного проекта столь же гармоничны, сколь удобно его внутреннее устройство. Все: от особенностей отделки до обустройства придомовой территории — продумано и функционально.
           Отличный выбор для тех, кто хочет совместить жизнь в тихом районе и максимальную доступность объектов инфраструктуры
         </p>
        <p class="news__text"><strong>Жилой Квартал «Бруклин» </strong>- отличный выбор для тех, кто хочет совместить жизнь в тихом районе и
          максимальную доступность объектов инфраструктуры. Все: от особенностей отделки до обустройства придомовой
          территории — продумано и функционально.
        </p>
        <div class="quote">
          <p class="quote__text"><strong>Благородство и достоинство </strong>архитектурного проекта столь же гармоничны, сколь удобно его внутреннее
            устройство. Все: от особенностей отделки до обустройства придомовой территории — продумано и функционально.
          </p>
          <img src="/img/news/comma.png" alt="comma" class="quote__comma">
        </div>
      </div>
      <div class="button" @click="$router.push('/')">
        <span>Вернуться на главную</span>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 12.9015C18 15.9648 15.8136 18 12.6756 18L5.3244 18C2.18966 18 0 15.9587 0 12.9015L0 5.0994C0 2.03599 2.18655 0 5.3244 0L12.6756 0C15.8134 0 18 2.03599 18 5.0994L18 12.9015ZM16.65 12.9015L16.65 5.0994C16.65 2.80395 15.0885 1.35 12.6756 1.35L5.3244 1.35C2.91147 1.35 1.35 2.80395 1.35 5.0994L1.35 12.9015C1.35 15.1911 2.9149 16.65 5.3244 16.65L12.6756 16.65C15.0888 16.65 16.65 15.1967 16.65 12.9015ZM13.3524 9C13.3524 9.34173 13.0985 9.62414 12.769 9.66884L12.6774 9.675H6.9579L9.18621 11.8949C9.42636 12.134 9.44894 12.509 9.25344 12.7736L9.18824 12.8495C8.94911 13.0896 8.57416 13.1122 8.3095 12.9167L8.23365 12.8515L4.84605 9.47831C4.82418 9.45618 4.80445 9.43366 4.78627 9.4099L4.84605 9.47831C4.8128 9.4452 4.78372 9.40949 4.75882 9.37183C4.75029 9.35843 4.74179 9.34451 4.73379 9.33028C4.72725 9.31923 4.72144 9.30815 4.71595 9.29695C4.70826 9.28069 4.70068 9.2635 4.69381 9.24595C4.68887 9.23393 4.68479 9.22254 4.68102 9.21107C4.67532 9.19308 4.66996 9.17408 4.66543 9.15477C4.6627 9.14403 4.66051 9.13353 4.65856 9.12298C4.6554 9.10473 4.65272 9.08576 4.65084 9.06654C4.64927 9.05302 4.64837 9.03978 4.64785 9.02654C4.64777 9.0178 4.6476 9.00892 4.6476 9L4.64781 8.97436C4.64834 8.96051 4.64929 8.94667 4.65066 8.93287L4.6476 9C4.6476 8.95784 4.65147 8.91658 4.65886 8.87656C4.66051 8.86647 4.6627 8.85597 4.66515 8.84551C4.66996 8.82592 4.67532 8.80692 4.68147 8.78829C4.68479 8.77746 4.68887 8.76607 4.69327 8.75477C4.70068 8.7365 4.70826 8.71931 4.71652 8.70251C4.72144 8.69185 4.72725 8.68077 4.7334 8.66982C4.74179 8.65549 4.75029 8.64157 4.75927 8.62801C4.76568 8.61779 4.77286 8.60756 4.78036 8.59749L4.78627 8.5901C4.80445 8.56634 4.82418 8.54383 4.8453 8.5227L4.84605 8.52169L8.23365 5.14849C8.49782 4.88545 8.9252 4.88636 9.18824 5.15052C9.42737 5.39067 9.44836 5.76571 9.25173 6.02955L9.18621 6.10511L6.9561 8.325H12.6774C13.0502 8.325 13.3524 8.62721 13.3524 9Z" fill="white"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import SliderArrowRight from '@/components/svg/SliderArrowRight'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    SliderArrowLeft,
    Slick,
    CoolLightBox,
    SliderArrowRight
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      arrows: false,
      dots: false
    },
    images: [
      '/img/mainPage/contacts.jpg',
      '/img/mainPage/contacts.jpg',
      '/img/mainPage/contacts.jpg'
    ],
    index: null,
    index2: 0
  }),
  methods: {
    goBack () {
      this.$router.push('/news')
    },
    prev () {
      this.$refs.slick.prev()
    },
    next () {
      this.$refs.slick.next()
    },
    handleAfterChange (event, slick, currentSlide) {
      this.index2 = currentSlide
    }
  }
}
</script>

<style scoped>
.news-single{
  padding-top:57px;
}

.news__back{
  padding:25px 0;
}

.news__back span {
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #242135;
  margin-left:10px;
}

.title{
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  padding:40px 0;
  color: #242135;
  border-top:1px solid #242135;
  text-align:center;
}

.slick, .slide{
  height:200px;
}

.slide{
  width:100%;
  height:50vh;
}

.slide img{
  display:block;
  width:100%;
  height:100%;
  object-fit:cover;
}

.slick-wrapper{
  position:relative;
  margin-bottom:50px;
}

.lightbox-btn{
  position:absolute;
  bottom:0;
  right:0;
  width:40px;
  height:40px;
  background:#fff;
  display:flex;
  align-items:Center;
  justify-content:center;
  transform:translateY(-4px);
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(36, 33, 53, 0.2);
  border-radius: 2px;
}

.lightbox-btn svg{
  transform:translateY(4px);
}

.arrow{
  background:#242135;
  width:40px;
  height:40px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
}

.arrow-right{
  background:#EA8E79;
}

.slider-arrows{
  display:flex;
  position:Absolute;
  bottom:4px;
  left:0;
}

.news__subtitle{
  font-weight: 600;
  font-size: 18px;
  line-height: 160%;
  color: #242135;
  margin-bottom:30px;
}

.news__text{
  font-size: 16px;
  line-height: 160%;
  color: #242135;
  margin-bottom:30px;
}

.quote{
  border: 1px solid #242135;
  padding:50px 10px 50px 35px;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #242135;
  margin-top:62px;
  margin-bottom:50px;
  border-left:5px solid #242135;
  position:relative;
}

.quote__comma{
  position:absolute;
  width:40px;
  right:0;
  top:-25px;
}

.button{
  width:100%;
  height:60px;
  background: #EA8E79;
  border-radius: 2px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  margin-top:52px;
  margin-bottom:60px;
}

.button span {
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  margin-right:15px;
}
</style>
