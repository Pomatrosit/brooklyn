<template>
<div>
  <section class="header" id="section1" ref="header">
      <slick
        class="slick"
        ref="slick"
        @beforeChange="handleBeforeChange"
        @lazyLoaded="handleLazyLoaded"
        :options="slickOptions"
      >
        <div
          class="header__slide"
          v-for="img in allInfo[0].homeslider"
          :key="img.id"
        >
          <img :src="img.path" @load="onImageLoad">
        </div>
      </slick>
  </section>

  <div class="nav" ref = "navigation">

    <div class="nav__arrow-left" @click="prevSlide">
      <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.68669 13.7229L13.8992 24.4397C13.8992 24.4397 13.8992 24.4397 13.8992 24.4397C14.0169 24.5522 14.0284 24.7066 13.9501 24.825L13.8804 24.9022C13.7425 25.0174 13.526 25.0338 13.368 24.9361L13.2759 24.8602L1.10079 13.2228C0.983105 13.1103 0.971626 12.956 1.04988 12.8376L1.12734 12.7518L13.3023 1.11462C13.4622 0.961793 13.7393 0.961793 13.8992 1.11462C14.0169 1.22711 14.0284 1.38145 13.9501 1.49988L13.8727 1.58564L2.68669 12.2771L1.93035 13L2.68669 13.7229Z" fill="#242135" stroke="#242135" stroke-width="2"/>
      </svg>
    </div>

    <div class="nav__main">

      <p class="nav__text">
        <span class="white-text">{{ allInfo.length > 0 ? allInfo[0].hometitle1 : "" }}</span><br/>
        <span class="pink-text">{{ allInfo.length > 0 ? allInfo[0].hometitle2 : "" }}</span>
      </p>

      <div class="nav__points">
        <div
          v-for="(_, idx) in allInfo[0].homeslider"
          class="nav__point"
          :class="{ 'nav__point-active': currentSlide === idx }"
          @click="pointClickHandler(idx)"
          :key="idx">
        </div>
      </div>

    </div>

    <div class="nav__arrow-right slider-arrow-hovered" @click="nextSlide">
      <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.755305 24.0783C0.448886 24.3712 0.420019 24.8173 0.659351 25.1386L0.767211 25.258C1.08334 25.5492 1.57722 25.5793 1.92916 25.3392L2.05638 25.2342L14.2447 13.5843C14.5511 13.2914 14.58 12.8452 14.3406 12.524L14.2314 12.403L2.04319 0.753175C1.69003 0.415608 1.10848 0.415608 0.755313 0.753175C0.448885 1.04607 0.420018 1.49225 0.659355 1.81347L0.76858 1.9344L11.9678 12.6385L12.346 13L11.9678 13.3615L0.755305 24.0783Z" fill="#EFEFEF" stroke="#EFEFEF"/>
      </svg>
    </div>

  </div>
</div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import gsap, { Power2 } from 'gsap'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  components: {
    Slick
  },
  data: () => ({
    currentSlide: 0,
    imagesLoaded: 0,
    slickOptions: {
      slidesToShow: 1,
      arrows: false,
      speed: 1000,
      cssEase: 'ease-in-out',
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false,
      fade: true
    }
  }),
  computed: {
    ...mapGetters(['homeSlide']),
    allInfo () {
      return this.$store.getters.allInfo
    }
  },
  watch: {
    homeSlide (homeSlide, prevHomeSlide) {
      if (homeSlide === 1) {
        gsap.to(this.$refs.header, { height: '100%', duration: 0 })
        gsap.to(this.$refs.header, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1 })
        gsap.to(this.$refs.navigation, { y: 0, duration: 0.8, ease: Power2.easeInOut, delay: 1.2 })
      }
      if (prevHomeSlide === 1) {
        gsap.to(this.$refs.header, { height: 0, duration: 0, delay: 1 })
        gsap.to(this.$refs.header, { opacity: 0, y: -100, duration: 1, ease: Power2.easeInOut })
        gsap.to(this.$refs.navigation, { y: '20vh', duration: 0.8, ease: Power2.easeInOut, delay: 0.2 })
      }
    },
    imagesLoaded (count) {
      if (count >= this.allInfo[0].homeslider.length) {
        console.log('images was loaded')
        const preloader = document.querySelector('.preloader')
        if (preloader) preloader.style.opacity = '0'
        setTimeout(() => {
          setTimeout(() => this.$store.commit('hideLoader'), 1000)
        })
      }
    }
  },
  mounted () {
    gsap.to(this.$refs.header, { height: '100%', duration: 0 })
    gsap.to(this.$refs.header, { opacity: 1, duration: 1, ease: Power2.easeInOut })
    gsap.to(this.$refs.navigation, { y: 0, duration: 0.8, ease: Power2.easeInOut })
  },
  methods: {
    onImageLoad () {
      this.imagesLoaded++
    },
    nextSlide () {
      this.$refs.slick.next()
    },
    prevSlide () {
      this.$refs.slick.prev()
    },
    pointClickHandler (idx) {
      this.$refs.slick.goTo(idx)
    },
    handleBeforeChange (e, slick, currentSlide, nextSlide) {
      this.currentSlide = nextSlide
    },
    handleLazyLoaded (event, slick, image, imageSource) {
      console.log('handleLazyLoaded', event, slick, image, imageSource)
    }
  }
}
</script>

<style scoped>
.header{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:0;
  height:0;
  opacity:0;
  padding:10.42vh 0 13.54vh 0;
}

.header__slide{
  height:76.5vh;
  width:100%;
  overflow:hidden;
  cursor:grab;
}

.header__slide img{
  width:100%;
  height:100%;
  object-fit:cover;
  pointer-events:none;
}

.header__slide1{
  z-index:-994;
  background:url('/img/mainPage/swooshed/1.jpg') center / cover;
}

.header__slide2{
  z-index:-995;
  background:url('/img/mainPage/swooshed/2.jpg') center / cover;
}

.header__slide3{
  z-index:-996;
  background:url('/img/mainPage/swooshed/3.jpg') center / cover;
}

.header__slide4{
  z-index:-997;
  background:url('/img/mainPage/swooshed/4.jpg') center / cover;
}

.header__slide5{
  z-index:-998;
  background:url('/img/mainPage/swooshed/5.jpg') center / cover;
}

.header__slide6{
  z-index:-999;
  background:url('/img/mainPage/swooshed/6.jpg') center / cover;
}

.header__slide img{
  width:100%;
  height:100%;
}

.nav{
  position:fixed;
  bottom:0;
  left:0;
  z-index:2;
  display:flex;
  transform:translateY(20vh)
}

.nav__arrow-right, .nav__arrow-left{
  width:13.54vh;
  height:13.54vh;
  background:#EA8E79;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
}

.nav__arrow-right svg, .nav__arrow-left svg{
  height:2.7vh;
  width:1.5625vh;
}

.nav__arrow-left{
  background:#fff;
}

.nav__main{
  /* width:calc(50vw - 13.5vh); */
  width:40vw;
  padding-left:3.125vw;
  height:13.54vh;
  background:#242135;
  display:flex;
  align-items:center;
  position:relative;
}

.nav__text{
  font-weight: bold;
  font-size: 2.5vh;
  line-height: 3vh;
  text-transform: uppercase;
}

.nav__points{
  position:absolute;
  top:-4.5vh;
  left:7.3vh;
  display:flex;
  align-items:center;
}

.nav__point{
  width:0.73vh;
  height:0.73vh;
  background:#fff;
  margin-right:4.167vh;
  border-radius:50%;
  cursor:pointer;
}

.nav__point-active{
  background:#EA8E79;
  width:1vh;
  height:1vh;
}

.nav__arrow-left, .nav__arrow-right{
  transition:0.3s;
}

.nav__arrow-left svg, .nav__arrow-right svg{
  transition:0.3s;
}

@media (hover:hover){
  .nav__arrow-right:hover{
    background:#eba393;
  }
  .nav__arrow-right:hover svg{
    transform:translateX(50%)
  }
  .nav__arrow-left:hover svg{
    transform:translateX(-50%)
  }
}
</style>
