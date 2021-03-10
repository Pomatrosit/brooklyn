<template>
  <div class="news">
    <h1 class="news__title">Открытие офиса продаж</h1>
    <div class="slider">
      <div class="slider-main">
        <slick
          ref="slick"
          :options="slickOptions"
        >
            <div class="slide"><img src="/img/mainPage/contacts.jpg" alt=""></div>
            <div class="slide"><img src="/img/mainPage/contacts.jpg" alt=""></div>
            <div class="slide"><img src="/img/mainPage/contacts.jpg" alt=""></div>
        </slick>
      </div>
      <div class="slider-arrows">
        <div class="arrow-left arrow" @click="prev">
          <SliderArrowLeft width="0.83vh" height="1.45vh" fill="#fff"/>
        </div>
        <div class="arrow-right arrow" @click="next">
          <SliderArrowRight width="0.83vh" height="1.45vh" fill="#242135"/>
        </div>
      </div>
    </div>
    <div class="slider-description">
      <p>Первый день работы офиса</p>
      <p>21/01/21</p>
    </div>
    <h2 class="news__subtitle">Концептуальный жилой комплекс в Астрахани (H2)</h2>
    <p class="news__text">Благородство и достоинство архитектурного проекта столь же гармоничны, сколь удобно его внутреннее устройство. Все: от особенностей отделки до обустройства придомовой территории — продумано и функционально.
       Отличный выбор для тех, кто хочет совместить жизнь в тихом районе и максимальную доступность объектов инфраструктуры
     </p>
    <p class="news__text">Жилой Квартал «Бруклин» - отличный выбор для тех, кто хочет совместить жизнь в тихом районе и
      максимальную доступность объектов инфраструктуры. Все: от особенностей отделки до обустройства придомовой
      территории — продумано и функционально.
    </p>
    <div class="quote">
      <p class="quote__text">Благородство и достоинство архитектурного проекта столь же гармоничны, сколь удобно его внутреннее
        устройство. Все: от особенностей отделки до обустройства придомовой территории — продумано и функционально. Отличный выбор для тех,
        кто хочет совместить жизнь в тихом районе и максимальную доступность объектов инфраструктуры.
      </p>
      <img src="/img/news/comma.png" alt="comma" class="quote__comma">
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import SliderArrowRight from '@/components/svg/SliderArrowRight'

export default {
  components: {
    Slick,
    SliderArrowLeft,
    SliderArrowRight
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      arrows: false
    }
  }),
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    }
  }
}
</script>

<style scoped>
.news{
  margin-top:8.3vh;
}

.news__title{
  font-weight: bold;
  font-size: 3.125vh;
  line-height: 37px;
  text-transform: uppercase;
  color: #242135;
  margin-bottom:3.64vh;
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

.arrow{
  background:#242135;
  width:6.25vh;
  height:6.25vh;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
}

.arrow-right{
  background:#fff;
}

.slider-arrows{
  display:flex;
  position:Absolute;
  bottom:0;
  right:0;
}

.slider{
  position:relative;
}

.slider-main{
  font-size:0;
}

.slider-description{
  display:flex;
  align-items:Center;
  justify-content:space-between;
  margin-top:1.5vh;
  font-size: 1.5vh;
  color: #242135;
  margin-bottom:5vh;
}

.news__subtitle{
  font-weight: 600;
  font-size: 2.5vh;
  line-height: 160%;
  color: #242135;
  margin-bottom: 3vh;
}

.news__text{
  font-weight: 400;
  font-size: 1.667vh;
  line-height: 160%;
  color: #242135;
  margin-bottom:3vh;
  max-width:800px;
}

.quote{
  max-width:800px;
  border: 1px solid #242135;
  padding:6.25vh 12.5vh 6.25vh 6.25vh;
  margin-left:15px;
  position:relative;
  font-style: italic;
  font-weight: 500;
  font-size: 1.667vh;
  line-height: 150%;
  color: #242135;
  margin-top:8vh;
  margin-bottom:6vh;
}

.quote:after{
  content:"";
  position:absolute;
  width:5px;
  height:calc(100% + 2px);
  left:-15px;
  top:-1px;
  background:#242135;
}

.quote__comma{
  position:absolute;
  width:10vh;
  right:-2.5vh;
  top:-4vh;
}

</style>
