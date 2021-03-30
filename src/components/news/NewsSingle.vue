<template>
  <div class="news">
    <h1 class="news__title news-single-animated">{{ newsItem.title }}</h1>
    <div class="news__content news-single-animated">
      <div class="news__text" v-html="newsItem.text"></div>
    </div>
    <div class="slider">
      <div class="slider-main news-single-animated">
        <slick
          ref="slick"
          :options="slickOptions"
        >
          <div
            v-for="img in newsItem.image"
            :key="img.path"
            class="slide"
          >
            <img :src="img.path" alt="">
          </div>
        </slick>
      </div>
      <div v-if="newsItem.image.length > 1" class="arrow-left arrow dark-arrow news-single-animated" @click="prev">
        <SliderArrowLeft width="0.83vh" height="1.45vh" fill="#fff"/>
      </div>
      <div v-if="newsItem.image.length > 1" class="arrow-right arrow pink-arrow news-single-animated" @click="next">
        <SliderArrowRight width="0.83vh" height="1.45vh" fill="#fff"/>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import SliderArrowRight from '@/components/svg/SliderArrowRight'
import gsap, { Power2 } from 'gsap'

export default {
  components: {
    Slick,
    SliderArrowLeft,
    SliderArrowRight
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      arrows: false,
      dots: false
    }
  }),
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    }
  },
  mounted () {
    gsap.to('.news-single-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to('.news-single-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: Power2.easeInOut })
    document.title = this.newsItem.title
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    newsItem () {
      return this.$store.getters.news.find(el => +el.id === +this.id)
    }
  }
}
</script>

<style scoped>
.news{
  margin-top:7.5vh;
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
  height:70vh;
}

.slide img{
  display:block;
  width:100%;
  height:100%;
  object-fit:contain;
}

.arrow{
  position:absolute;
  background:#242135;
  width:6.25vh;
  height:6.25vh;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  top:calc(50% - 4vh);
  left:0;
}

.arrow-right{
  background:#EA8E79;
  left:calc(100% - 6.25vh);
}

.slider{
  position:relative;
  margin-bottom:5vh;
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

.news__content{
  width:70%;
  margin-top:4vh;
  margin-bottom:4vh;
}

.news__text{
  font-weight: 400;
  font-size: 2vh;
  line-height: 160%;
  color: #242135;
  margin-bottom:3vh;
}

ol {
  padding-left:20px;
  list-style-position: inside;
  border:1px solid red;
}

li::marker{
  display:none;
}

.youtube{
  margin-bottom:5vh;
}

.arrow-left, .arrow-right{
  transition:0.3s;
}

@media(hover:hover){
  .arrow-left:hover{
    background:#615e71;
  }
  .arrow-left:hover svg{
    transform:translateX(-50%);
  }
  .arrow-right:hover{
    background:#eba393;
  }
  .arrow-right:hover svg{
    transform:translateX(50%);
  }
}

@media screen and (max-width:1620px){
  .news__content{
    width:100%;
  }
}

</style>
