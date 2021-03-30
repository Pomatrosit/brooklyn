<template>
  <section class="progress progress-desktop" @wheel="onWheel">
    <div class="app-wrapper progress1-animated">
          <div class="progress__img progress-animated" ref="img">
            <div class="slick-wrapper">
              <slick
                class="slick"
                ref="slick"
                :options="slickOptions"
              >
                  <div v-for="img in progressItems[currentSlide].image" :key="img.id" class="slide">
                    <img :src="img.path" alt="">
                  </div>
              </slick>
              <div class="sl-arrow-left sl-arrow sl-dark-arrow" @click="innerSlidePrev">
                <SliderArrowLeft width="0.83vh" height="1.45vh" fill="#fff"/>
              </div>
              <div class="sl-arrow-right sl-arrow sl-pink-arrow" @click="innerSlideNext">
                <SliderArrowRight width="0.83vh" height="1.45vh" fill="#fff"/>
              </div>
            </div>
          </div>
            <div class="progress__main">
              <div class="text-block">
                <svg class="text-block__bg" ref="bg" width="836" height="710" viewBox="0 0 836 710" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M415.826 1L1 355L415.826 709M625.413 1L210.587 355L625.413 709M521.054 1L105.359 355L521.054 709M730.641 1L314.946 355L730.641 709M468.875 1L54.049 355L468.875 709M678.462 1L263.636 355L678.462 709M573.234 1L158.408 355L573.234 709M782.821 1L367.995 355L782.821 709M433.219 1L18.3931 355L433.219 709M642.806 1L227.98 355L642.806 709M537.578 1L122.752 355L537.578 709M747.165 1L332.339 355L747.165 709M486.268 1L71.4421 355L486.268 709M695.855 1L281.029 355L695.855 709M590.627 1L175.801 355L590.627 709M800.214 1L385.388 355L800.214 709M450.612 1L35.7862 355L450.612 709M660.199 1L245.373 355L660.199 709M554.971 1L140.145 355L554.971 709M764.558 1L349.732 355L764.558 709M503.661 1L88.8352 355L503.661 709M713.248 1L298.422 355L713.248 709M608.02 1L193.194 355L608.02 709M817.607 1L402.781 355L817.607 709M835 1L420.174 355L835 709" stroke="#242135" stroke-opacity="0.08"/>
                </svg>
                <div class="text-block__content">
                  <h2 class="text-block__title progress-animated progress-animated" ref="title">{{progressItems[currentSlide].title}}</h2>
                  <div
                    class="text-block__list progress-animated"
                    ref="list"
                    v-html="progressItems[currentSlide].text"
                  >
                  </div>
                </div>
              </div>
              <div class="slider-nav progress-animated" ref="navImages" v-if="progressItems.length >= 2">
                <div class="slider-nav__prev" @click="onNextArrow">
                  <p class="slider-nav__text">{{progressItems[nextSlide].title}}</p>
                  <img :src="progressItems[nextSlide].image[0].path" alt="">
                </div>
                <div v-if="progressItems.length >= 3" class="slider-nav__next" @click="onNextNextArrow">
                  <p class="slider-nav__text">{{progressItems[nextNextSlide].title}}</p>
                  <img :src="progressItems[nextNextSlide].image[0].path" alt="">
                </div>
              </div>
            </div>
            <div class="mouse progress-animated" v-if="progressItems.length >= 2" @click="onNextArrow">
              <svg :style="{ marginRight: '1vw' }" width="2.1vh" height="3.5vh" viewBox="0 0 21 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="19" height="32" rx="9.5" stroke="#EA8E79" stroke-width="2"/>
                <circle r="2.5" transform="matrix(-1 0 0 1 10.5 11.5)" fill="#EA8E79"/>
              </svg>
              <svg class="arrow-anim" width="4.8vh" height="1.15vh" viewBox="0 0 46 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M45.3775 5.24819L45.4363 5.31126C45.4367 5.31187 45.4372 5.31249 45.4376 5.3131C45.445 5.32427 45.4501 5.33224 45.4541 5.33882L45.4579 5.34523L45.4617 5.35113L45.3775 5.24819ZM45.3775 5.24819L40.4178 0.62708L40.3463 0.56957C40.1816 0.464038 39.952 0.480274 39.8079 0.606055L39.7501 0.669012C39.6564 0.798554 39.6677 0.97245 39.7982 1.0941C39.7982 1.09413 39.7983 1.09415 39.7983 1.09418L43.2177 4.27879L44.1475 5.14466L42.877 5.14468L0.92854 5.14544L0.83891 5.15109C0.622155 5.18441 0.500001 5.35036 0.500001 5.49987C0.500001 5.66501 0.65318 5.8543 0.912801 5.8543L42.8782 5.85354L44.1486 5.85352L43.219 6.7194L39.8117 9.89333L39.7511 9.95877C39.6566 10.0882 39.6673 10.2621 39.797 10.3841C39.9607 10.5381 40.2398 10.5388 40.4045 10.3853L45.377 5.7523L45.4353 5.68933M45.3775 5.24819L45.4353 5.68933M45.4353 5.68933L45.4364 5.6877L45.4421 5.67946C45.4464 5.67316 45.4502 5.66743 45.4574 5.6564C45.4578 5.65583 45.4582 5.65524 45.4586 5.65463L45.4353 5.68933ZM45.463 5.35336C45.4685 5.36509 45.4719 5.37244 45.4746 5.37877L45.4745 5.37882L45.4793 5.38942C45.4798 5.39051 45.4809 5.39317 45.4826 5.39794C45.4834 5.40047 45.484 5.40264 45.4846 5.40456C45.4865 5.41134 45.4876 5.41508 45.4891 5.42051L45.489 5.42054L45.4922 5.43148C45.4925 5.4327 45.4932 5.4353 45.4942 5.43975C45.4947 5.44386 45.4951 5.44679 45.4955 5.44921C45.4961 5.45388 45.4965 5.45664 45.4972 5.4624L45.4971 5.46242L45.4988 5.47443C45.499 5.47568 45.4993 5.47821 45.4996 5.48216L45.4996 5.48424L45.4962 5.54472C45.4959 5.54714 45.4955 5.54954 45.4951 5.55194L45.4949 5.55191L45.4931 5.56438C45.493 5.56496 45.4926 5.56759 45.4914 5.57259C45.4904 5.57569 45.4897 5.57824 45.489 5.58046C45.487 5.58673 45.4859 5.59029 45.4841 5.59584L45.4839 5.59579L45.4801 5.6086C45.4799 5.60905 45.4793 5.61099 45.4778 5.61489C45.4777 5.61508 45.4776 5.61527 45.4775 5.61545C45.4721 5.62698 45.4693 5.63289 45.466 5.63936L45.462 5.64727L45.4589 5.65406C45.4584 5.65484 45.4572 5.65717 45.4547 5.6613L45.463 5.35336Z" fill="white" stroke="#EA8E79"/>
              </svg>
            </div>

            <div class="slider-arrows progress-animated" v-if="progressItems.length >= 2" >
              <div class="arrow-left light-arrow" @click="onPrevArrow">
                <SliderArrowLeft width="1.25vh" height="2.08vh" fill="#242135"/>
              </div>
              <div class="arrow-right pink-arrow" @click="onNextArrow">
                <SliderArrowRight width="1.25vh" height="2.2vh" fill="#fff"/>
              </div>
            </div>

    </div>
  </section>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import SliderArrowRight from '@/components/svg/SliderArrowRight'
import gsap, { Power2 } from 'gsap'

export default {
  components: {
    SliderArrowLeft,
    SliderArrowRight,
    Slick
  },
  computed: {
    progressItems () {
      return this.$store.getters.progressItems
    }
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      arrows: false,
      speed: 800,
      cssEase: 'ease-in-out',
      centerPadding: '0'
    },
    currentSlide: 0,
    nextSlide: 1,
    nextNextSlide: 2,
    isWheelAvailable: true
  }),
  mounted () {
    this.currentSlide = 0
    if (this.progressItems.length >= 1) this.nextSlide = 1
    if (this.progressItems.length >= 2) this.nextNextSlide = 2
    gsap.to('.progress-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.bg, { x: 0, duration: 1, ease: Power2.easeInOut })
    gsap.to('.progress-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: Power2.easeInOut })
  },
  methods: {
    onWheel (e) {
      if (this.isWheelAvailable) {
        this.setWheelUnavailable()
        this.changeSlidesAnimation()
        if (e.deltaY > 0) this.goNextSlide()
        else this.goPrevSlide()
      }
    },
    goNextSlide () {
      const currentSlide = this.currentSlide
      setTimeout(() => {
        this.$refs.slick.destroy()
        this.currentSlide = (currentSlide + 1) % this.progressItems.length
        this.nextSlide = (currentSlide + 2) % this.progressItems.length
        this.nextNextSlide = (currentSlide + 3) % this.progressItems.length
      }, 800)
      setTimeout(() => {
        this.$refs.slick.create()
      }, 900)
    },
    goPrevSlide () {
      let currentSlide = this.currentSlide
      setTimeout(() => {
        this.$refs.slick.destroy()
        currentSlide = currentSlide === 0 ? this.progressItems.length - 1 : currentSlide - 1
        this.currentSlide = currentSlide
        this.nextSlide = (currentSlide + 1) % this.progressItems.length
        this.nextNextSlide = (currentSlide + 2) % this.progressItems.length
      }, 800)
      setTimeout(() => {
        this.$refs.slick.create()
      }, 900)
    },
    onNextArrow () {
      if (this.isWheelAvailable) {
        this.setWheelUnavailable()
        this.changeSlidesAnimation()
        this.goNextSlide()
      }
    },
    onNextNextArrow () {
      if (this.isWheelAvailable) {
        this.setWheelUnavailable()
        this.changeSlidesAnimation()
        const currentSlide = this.currentSlide
        setTimeout(() => {
          this.$refs.slick.destroy()
          this.currentSlide = (currentSlide + 2) % this.progressItems.length
          this.nextSlide = (currentSlide + 3) % this.progressItems.length
          this.nextNextSlide = (currentSlide + 4) % this.progressItems.length
        }, 800)
        setTimeout(() => {
          this.$refs.slick.create()
        }, 900)
      }
    },
    onPrevArrow () {
      if (this.isWheelAvailable) {
        this.setWheelUnavailable()
        this.changeSlidesAnimation()
        this.goPrevSlide()
      }
    },
    changeSlidesAnimation () {
      const tl1 = gsap.timeline()
      const tl2 = gsap.timeline()
      const tl3 = gsap.timeline()
      const tl4 = gsap.timeline()
      tl1.to(this.$refs.img, { opacity: 0, y: -50, duration: 0.7, ease: Power2.easeInOut })
        .to(this.$refs.img, { y: 50, duration: 0 })
        .to(this.$refs.img, { opacity: 1, y: 0, duration: 0.7, ease: Power2.easeInOut })
      tl2.to(this.$refs.title, { opacity: 0, y: -50, duration: 0.7, ease: Power2.easeInOut, delay: 0.1 })
        .to(this.$refs.title, { y: 50, duration: 0 })
        .to(this.$refs.title, { opacity: 1, y: 0, duration: 0.7, ease: Power2.easeInOut })
      tl3.to(this.$refs.list, { opacity: 0, y: -50, duration: 0.7, ease: Power2.easeInOut, delay: 0.2 })
        .to(this.$refs.list, { y: 50, duration: 0 })
        .to(this.$refs.list, { opacity: 1, y: 0, duration: 0.7, ease: Power2.easeInOut })
      tl4.to(this.$refs.navImages, { opacity: 0, y: -50, duration: 0.7, ease: Power2.easeInOut, delay: 0.3 })
        .to(this.$refs.navImages, { y: 50, duration: 0 })
        .to(this.$refs.navImages, { opacity: 1, y: 0, duration: 0.7, ease: Power2.easeInOut })
    },
    setWheelUnavailable () {
      this.isWheelAvailable = false
      setTimeout(() => {
        this.isWheelAvailable = true
      }, 1500)
    },
    innerSlideNext () {
      this.$refs.slick.next()
    },
    innerSlidePrev () {
      this.$refs.slick.prev()
    }
  }
}
</script>

<style scoped>
.progress{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:0;
  padding:10.42vh 0 13.54vh 0;
  display:Flex;
}

.app-wrapper{
  height:100%;
  position:relative;
  display:flex;
  width:100%;
}

.slick-wrapper{
  position:relative;
}

.sl-arrow{
  position:absolute;
  width:6.25vh;
  height:6.25vh;
  background:#242135;
  top:0;
  left:0;
  cursor:pointer;
  display:flex;
  align-items:Center;
  justify-content:center;
  top:calc(50% - 3.1vh);
  transition:0.5s;
}

.sl-arrow-left{
  left:2vh;
}
.sl-arrow-right{
  left:calc(100% - 8.25vh);
}

.sl-arrow-left svg, .sl-arrow-right svg{
  transition:0.3s;
}

.slick{
  height:100%;
}

.slide{
  height:76.5vh;
}

.slick-dots{
  border:100px solid red;
}

.progress__img{
  height:110%;
  width:55%;
}

.progress__img img{
  display:block;
  width:100%;
  height:100%;
  object-fit:contain;
}

.progress__main{
  width:45%;
  height:100%;
  position:relative;
}

.text-block{
  margin-top:2.6vh;
  height:80%;
  background: rgba(36, 33, 53, 0.02);
  position:relative;
  overflow:hidden;
}

.text-block__bg{
  height:100%;
  width:100%;
  position:Absolute;
  top:0;
  right:30%;
  z-index:-1;
  transform:translateX(200px)
}

.text-block__content{
  z-index:1;
  padding: 10vh 7vh 0 7vh;
}

.text-block__title{
  font-weight: bold;
  font-size: 3.125vh;
  text-transform: uppercase;
  color: #242135;
  margin-bottom:5.3vh;
}

.text-block__list{
  width:100%;
  max-width:30vw;
  line-height: 150%;
  color: #000000;
  font-size: 1.667vh;
  margin-bottom:3vh;
  padding-left:2.6vh;
  position:relative;
}

.text-block__item:after{
  content:"";
  position:absolute;
  top:1vh;
  left:0;
  width:0.52vh;
  height:0.52vh;
  background:#EA8E79;
  border-radius:50%;
}

.slider-nav{
  position:absolute;
  bottom:0;
  left:7vh;
  display:flex;
}

.slider-nav__prev img, .slider-nav__next img{
  display:block;
  width:12vw;
  height:15.625vh;
  object-fit:cover;
}

.slider-nav__text {
  font-weight: 500;
  font-size: 1.6vh;
  color: #000000;
  margin-bottom:1.3vh;
  position:relative;
}

.slider-nav__prev{
  margin-right:3.6vw;
}

.slider-nav__prev, .slider-nav__next{
  cursor:pointer;
}

.slider-nav__text:after{
  content:"";
  position:absolute;
  width:2.5vw;
  height:1px;
  background:#242135;
  right:0;
  top:50%;
}

.slider-arrows{
  display:flex;
  position:absolute;
  top:2.6vh;
  right:0;
  z-index:2;
}

.arrow-right, .arrow-left{
  width:8.3vh;
  height:8.3vh;
  background:#EA8E79;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
}

.arrow-left{
  background:#fff;
}

.arrow-right{
  background:#242135;
}

.mouse{
  position:absolute;
  bottom:5vh;
  right:1vh;
  display:flex;
  align-items:center;
  cursor:pointer;
}

.arrow-anim{
  animation: arrow-animation 2s ease-in-out infinite;
}

.arrow-left, .arrow-right{
  transition:0.3s;
}

@media(hover:hover){
  .arrow-left:hover svg{
    transform:translateX(-30%);
  }
  .arrow-right:hover{
    background:#615e71;
  }
  .arrow-right:hover svg{
    transform:translateX(30%);
  }
  .sl-arrow-left:hover svg{
    transform:translateX(-30%);
  }
  .sl-arrow-right:hover svg{
    transform:translateX(30%);
  }
}

@keyframes arrow-animation{
  0%{transform:translateX(0px)}
  50%{transform:translateX(-5px)}
  100%{transform:translateX(0px)}
}

@keyframes arrow-inner-animation{
  0%{opacity:0}
  100%{opacity:1}
}

@media (max-aspect-ratio: 16/9) {
  .text-block__list{
    max-width:100%;
  }
  .progress__img, .progress__main{
    width:50%;
  }
  .text-block__title{
    margin-bottom:3vh;
  }
  .text-block__item{
    margin-bottom:2vh;
  }
}
</style>
