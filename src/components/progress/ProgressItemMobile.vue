<template>
  <div class="progress-item">
    <CoolLightBox
      overlayColor="rgba(30, 30, 30, .9)"
      :zIndex="2"
      :style="{zIndex: 100}"
      :items="images"
      :index="index"
      effect="swipe"
      @close="index = null">
    </CoolLightBox>
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
    <h3 class="subtitle">{{title}}</h3>
    <p class="text">Продолжаем монтаж системы электроснабжения, вентиляции, водоснабжения и водоотведения. </p>
    <p class="text">Выполняем устройство слаботочных сетей. Идут работы черновой отделки. Монтируем витражи и окна.</p>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import SliderArrowRight from '@/components/svg/SliderArrowRight'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    SliderArrowRight,
    SliderArrowLeft,
    Slick,
    CoolLightBox
  },
  props: ['title'],
  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      arrows: false,
      dots: false
    },
    images: [
      '/img/mainPage/swooshed/1.jpg',
      '/img/mainPage/swooshed/2.jpg',
      '/img/mainPage/swooshed/3.jpg'
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
.progress-item{
  padding-top:30px;
  border-top:1px solid #242135;
  margin-top:30px;
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

.subtitle{
  font-weight: bold;
  font-size: 16px;
  line-height: 150.4%;
  color: #242135;
  margin-top:-30px;
  margin-bottom:29px;
}

.text{
  list-style:none;
  line-height: 150%;
  color: #000000;
  font-size: 16px;
  margin-bottom:30px;
  padding-left:25px;
  position:relative;
}

.text:after{
  content:"";
  position:absolute;
  top:1vh;
  left:0;
  width:5px;
  height:5px;
  background:#EA8E79;
  border-radius:50%;
}
</style>
