<template>
<div>
  <section class="header" id="section1" ref="header"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mouseleave="onMouseLeave"
  >
    <div class="header__slide header__slide1" ref="slide1">
      <!-- <img src="/img/mainPage/swooshed/1.png" alt=""> -->
    </div>
    <div class="header__slide header__slide2" ref="slide2">
      <!-- <img src="/img/mainPage/swooshed/2.png" alt=""> -->
    </div>
    <div class="header__slide header__slide3" ref="slide3">
      <!-- <img src="/img/mainPage/swooshed/3.png" alt=""> -->
    </div>
    <div class="header__slide header__slide4" ref="slide4">
      <!-- <img src="/img/mainPage/swooshed/4.png" alt=""> -->
    </div>
    <div class="header__slide header__slide5" ref="slide5">
      <!-- <img src="/img/mainPage/swooshed/5.png" alt=""> -->
    </div>
    <div class="header__slide header__slide6" ref="slide6">
      <!-- <img src="/img/mainPage/swooshed/6.png" alt=""> -->
    </div>
  </section>

  <div class="nav" ref = "navigation">

    <div class="nav__arrow-left" @click="prevSlide">
      <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.68669 13.7229L13.8992 24.4397C13.8992 24.4397 13.8992 24.4397 13.8992 24.4397C14.0169 24.5522 14.0284 24.7066 13.9501 24.825L13.8804 24.9022C13.7425 25.0174 13.526 25.0338 13.368 24.9361L13.2759 24.8602L1.10079 13.2228C0.983105 13.1103 0.971626 12.956 1.04988 12.8376L1.12734 12.7518L13.3023 1.11462C13.4622 0.961793 13.7393 0.961793 13.8992 1.11462C14.0169 1.22711 14.0284 1.38145 13.9501 1.49988L13.8727 1.58564L2.68669 12.2771L1.93035 13L2.68669 13.7229Z" fill="#242135" stroke="#242135" stroke-width="2"/>
      </svg>
    </div>

    <div class="nav__main">

      <p class="nav__text">
        <span class="white-text">ЖК Бруклин - Ваш вклад </span><br/>
        <span class="pink-text">в счастливое будущее</span>
      </p>

      <div class="nav__points">
        <div
          v-for="(_, idx) in countOfSlides"
          class="nav__point"
          :class="{ 'nav__point-active': currentSlide === idx + 1 }"
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
// todo : Заменить в хуке mounted стартовые gsap анимации на css свойства
import gsap, { Power2 } from 'gsap'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeHeader',
  data: () => ({
    currentSlide: 1,
    countOfSlides: 6,
    currentZIndex: -1000,
    isSliderMoved: false,
    HEADER_SLIDE_ANIMATION_DURATION: 1.5,
    touchStart: 0,
    touchEnd: 0,
    interval: null
  }),
  computed: mapGetters(['homeSlide']),
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
    }
  },
  mounted () {
    gsap.to(this.$refs.header, { height: '100%', duration: 0 })
    gsap.to(this.$refs.header, { opacity: 1, duration: 1, ease: Power2.easeInOut })
    gsap.to(this.$refs.navigation, { y: 0, duration: 0.8, ease: Power2.easeInOut })
    this.interval = setInterval(this.autoChange, 7000)
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  methods: {
    autoChange () {
      this.nextSlide()
    },
    nextSlide () {
      if (!this.isSliderMoved) {
        this.setSliderMoved()
        this.changeSlideNext()
      }
    },
    prevSlide () {
      if (!this.isSliderMoved) {
        this.setSliderMoved()
        this.changeSlidePrev()
      }
    },
    changeSlideNext () {
      const currentSlide = `slide${this.currentSlide}`
      const tl = gsap.timeline()
      tl.to(this.$refs[currentSlide], { width: 0, duration: this.HEADER_SLIDE_ANIMATION_DURATION, ease: Power2.easeInOut })
      tl.to(this.$refs[currentSlide], { zIndex: this.currentZIndex, width: '100%', duration: 0 })
      if (this.currentSlide < this.countOfSlides) this.currentSlide++
      else this.currentSlide = 1
      this.currentZIndex--
    },
    changeSlidePrev () {
      if (this.currentSlide > 1) this.currentSlide--
      else this.currentSlide = this.countOfSlides
      this.currentZIndex++
      const currentSlide = `slide${this.currentSlide}`
      const tl = gsap.timeline()
      tl.to(this.$refs[currentSlide], { zIndex: this.currentZIndex + this.countOfSlides, width: 0, duration: 0 })
      tl.to(this.$refs[currentSlide], { width: '100%', duration: this.HEADER_SLIDE_ANIMATION_DURATION, ease: Power2.easeInOut })
    },
    setSliderMoved () {
      this.isSliderMoved = true
      setTimeout(() => { this.isSliderMoved = false }, this.HEADER_SLIDE_ANIMATION_DURATION * 1000)
    },
    pointClickHandler (idx) {
      if (!this.isSliderMoved) {
        const clickedSlide = idx + 1
        if (clickedSlide !== this.currentSlide) {
          if (clickedSlide > this.currentSlide) {
            const delta = clickedSlide - this.currentSlide
            this.setSliderMoved()
            for (let i = 1; i <= delta; i++) this.changeSlideNext()
          } else {
            const delta = this.currentSlide - clickedSlide
            this.setSliderMoved()
            for (let i = 1; i <= delta; i++) this.changeSlidePrev()
          }
        }
      }
    },
    onMouseDown (e) {
      this.touchStart = e.clientX
      document.body.style.cursor = 'grabbing'
    },
    onMouseUp (e) {
      this.touchEnd = e.clientX
      document.body.style.cursor = 'auto'
      if (this.touchStart - this.touchEnd > 150) this.nextSlide()
      if (this.touchStart - this.touchEnd < -150) this.prevSlide()
    },
    onMouseLeave () {
      document.body.style.cursor = 'auto'
      this.touchStart = 0
      this.touchEnd = 0
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
}

.header__slide{
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  overflow:hidden;
  cursor:grab;
}

.header__slide img{
  position:absolute;
  top:50vh;
  transform:translateY(-50%);
  left:0;
  width:100vw;
  height:auto;
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
