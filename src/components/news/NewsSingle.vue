<template>
  <div class="news">
    <h1 class="news__title news-single-animated">{{ newsItem.title }}</h1>
    <div v-if="newsItem.youtube.length > 0" class="youtube news-single-animated">
      <iframe width="100%" height="400" :src="'https://www.youtube.com/embed/' + youtube"
        title="YouTube video player"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <div class="news__content news-single-animated">
      <div class="news__text" v-html="newsItem.text"></div>
      <div class="quote news-single-animated">
        <p class="quote__text">Благородство и достоинство архитектурного проекта столь же гармоничны, сколь удобно его внутреннее
          устройство. Все: от особенностей отделки до обустройства придомовой территории — продумано и функционально. Отличный выбор для тех,
          кто хочет совместить жизнь в тихом районе и максимальную доступность объектов инфраструктуры.
        </p>
        <img src="/img/news/comma.png" alt="comma" class="quote__comma">
      </div>
    </div>
    <div class="news__content news-single-animated">
      <div class="news__text" v-html="newsItem.text2"></div>
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
      <div class="slider-arrows news-single-animated">
        <div class="arrow-left arrow dark-arrow" @click="prev">
          <SliderArrowLeft width="0.83vh" height="1.45vh" fill="#fff"/>
        </div>
        <div class="arrow-right arrow pink-arrow" @click="next">
          <SliderArrowRight width="0.83vh" height="1.45vh" fill="#fff"/>
        </div>
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
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    newsItem () {
      return this.$store.getters.news.find(el => +el.id === +this.id)
    },
    youtube () {
      return this.newsItem.youtube.split('=').[1]
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
  background:#EA8E79;
}

.slider-arrows{
  display:flex;
  position:Absolute;
  bottom:0;
  right:0;
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

.quote{
  border: 1px solid #242135;
  padding:6.25vh 12.5vh 6.25vh 6.25vh;
  margin-left:15px;
  position:relative;
  font-style: italic;
  font-weight: 500;
  font-size: 1.8vh;
  line-height: 150%;
  color: #242135;
  margin-top:6vh;
  margin-bottom:8vh;
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
