<!-- eslint-disable -->
<template>
  <section class="advantages" ref="advantages">
    <div class="app-wrapper">
      <div class="advantages__main">
        <div class="advantages__flex advantages__flex1">

          <figure class="advantage advantage1" ref="advantage1" @mouseenter="hover" @mouseleave="unhover">
            <figcaption class="advantage__title" ref="title1">Просторные колясочные <br/>и велосипедные зоны</figcaption>
            <div class="advantage__overlay">
              <div class="advantage__top">
                <span class="advantage__title-secondary">Просторные колясочные <br/>и велосипедные зоны</span>
                <span class="advantage__desc">В холлах ЖК «Бруклин» предусмотрено все для комфортной жизни. Коляску или велосипед Вы можете оставить в специальн о предусмотренном для этого месте на первом этаже.
                </span>
              </div>
            </div>
          </figure>

          <figure class="advantage advantage2" ref="advantage2" @mouseenter="hover" @mouseleave="unhover">
            <figcaption class="advantage__title" ref="title1">Благоустройство двора</figcaption>
            <div class="advantage__overlay">
              <div class="advantage__top">
                <span class="advantage__title-secondary">Благоустройство двора</span>
                <span class="advantage__desc">Игровые комплексы для детей разных возрастов и спортивные площадки создают единый ландшафт. Двор тихий и спокойный. В нём не слышно шума дорог, а жители будут чувствовать себя уединенно.
                </span>
              </div>
            </div>
          </figure>

        </div>
        <div class="advantages__flex advantages__flex2">

          <figure class="advantage advantage3" ref="advantage3" @mouseenter="hover" @mouseleave="unhover">
            <figcaption class="advantage__title" ref="title1">Уютные планировочные решения</figcaption>
            <div class="advantage__overlay">
              <div class="advantage__top">
                <span class="advantage__title-secondary">Уютные планировочные решения</span>
                <span class="advantage__desc">В ЖК «Бруклин» использованы современные продуманные планировки с европейским типом разделения пространства, здесь каждый найдет для себя функциональную и комфортную квартиру .
                </span>
              </div>
            </div>
          </figure>

        </div>
        <div class="advantages__flex advantages__flex3">
          <div class="advantage__flex3-inner">

            <figure class="advantage advantage4" ref="advantage4" @mouseenter="hover" @mouseleave="unhover">
              <figcaption class="advantage__title" ref="title1">Безопасная среда</figcaption>
              <div class="advantage__overlay">
                <div class="advantage__top">
                  <span class="advantage__title-secondary">Безопасная среда</span>
                  <span class="advantage__desc">Закрытая территория двора без доступа посторонних и автомобилей обеспечит безопасность Вашей семьи.
                  </span>
                </div>
              </div>
            </figure>

            <figure class="advantage advantage5" ref="advantage5" @mouseenter="hover" @mouseleave="unhover">
              <figcaption class="advantage__title" ref="title1">Витражное остекление</figcaption>
              <div class="advantage__overlay">
                <div class="advantage__top">
                  <span class="advantage__title-secondary">Витражное остекление</span>
                  <span class="advantage__desc">Добавит в квартиру больше света и позволит в полной мере наслаждаться видом из окна
                  </span>
                </div>
              </div>
            </figure>

          </div>

          <figure class="advantage advantage6" ref="advantage6" @mouseenter="hover" @mouseleave="unhover">
            <figcaption class="advantage__title" ref="title1">Дизайнерские холлы и коридоры</figcaption>
            <div class="advantage__overlay">
              <div class="advantage__top">
                <span class="advantage__title-secondary">Дизайнерские холлы и коридоры</span>
                <span class="advantage__desc">Авторский дизайн-проект выполнен из материалов премиум-класса и не оставит равнодушными ни жильцов, ни их гостей.
                </span>
              </div>
            </div>
          </figure>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import gsap, { Power2 } from 'gsap'

export default {
  name: 'HomeAdvantages',
  computed: mapGetters(['homeSlide']),
  watch: {
    homeSlide (homeSlide, prevHomeSlide) {
      if (homeSlide === 3) {
        gsap.to(this.$refs.advantages, { height: '100%', duration: 0 })
        if (prevHomeSlide === 2) {
          gsap.to(this.$refs.advantage1, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1 })
          gsap.to(this.$refs.advantage2, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.05 })
          gsap.to(this.$refs.advantage3, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.1 })
          gsap.to(this.$refs.advantage4, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.15 })
          gsap.to(this.$refs.advantage5, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.2 })
          gsap.to(this.$refs.advantage6, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.25 })
        } else {
          gsap.to(this.$refs.advantage1, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.25 })
          gsap.to(this.$refs.advantage2, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.2 })
          gsap.to(this.$refs.advantage3, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.15 })
          gsap.to(this.$refs.advantage4, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.1 })
          gsap.to(this.$refs.advantage5, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.05 })
          gsap.to(this.$refs.advantage6, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1 })
        }
      }
      if (prevHomeSlide === 3) {
        if (homeSlide === 4) {
          gsap.to(this.$refs.advantages, { height: 0, duration: 0, delay: 1 })
          gsap.to(this.$refs.advantage1, { opacity: 0, y: -100, duration: 1, ease: Power2.easeInOut })
          gsap.to(this.$refs.advantage2, { opacity: 0, y: -100, duration: 1, ease: Power2.easeInOut, delay: 0.05 })
          gsap.to(this.$refs.advantage3, { opacity: 0, y: -100, duration: 1, ease: Power2.easeInOut, delay: 0.1 })
          gsap.to(this.$refs.advantage4, { opacity: 0, y: -100, duration: 1, ease: Power2.easeInOut, delay: 0.15 })
          gsap.to(this.$refs.advantage5, { opacity: 0, y: -100, duration: 1, ease: Power2.easeInOut, delay: 0.2 })
          gsap.to(this.$refs.advantage6, { opacity: 0, y: -100, duration: 1, ease: Power2.easeInOut, delay: 0.25 })
        } else {
          gsap.to(this.$refs.advantages, { height: 0, duration: 0, delay: 1 })
          gsap.to(this.$refs.advantage1, { opacity: 0, y: 100, duration: 1, ease: Power2.easeInOut, delay: 0.25 })
          gsap.to(this.$refs.advantage2, { opacity: 0, y: 100, duration: 1, ease: Power2.easeInOut, delay: 0.2 })
          gsap.to(this.$refs.advantage3, { opacity: 0, y: 100, duration: 1, ease: Power2.easeInOut, delay: 0.15 })
          gsap.to(this.$refs.advantage4, { opacity: 0, y: 100, duration: 1, ease: Power2.easeInOut, delay: 0.1 })
          gsap.to(this.$refs.advantage5, { opacity: 0, y: 100, duration: 1, ease: Power2.easeInOut, delay: 0.05 })
          gsap.to(this.$refs.advantage6, { opacity: 0, y: 100, duration: 1, ease: Power2.easeInOut })
        }
      }
    }
  },
  mounted () {
    gsap.to(this.$refs.advantages, { height: 0, duration: 0 })
    gsap.to(this.$refs.advantage1, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.advantage2, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.advantage3, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.advantage4, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.advantage5, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.advantage6, { opacity: 0, y: 100, duration: 0 })
  },
  methods: {
    hover (e) {
      const card = e.target.closest('.advantage')
      const title = card.querySelector('.advantage__title')
      const overlay = card.querySelector('.advantage__overlay')
      const hoveredTitle = card.querySelector('.advantage__title-secondary')
      const hoveredDesc = card.querySelector('.advantage__desc')
      hoveredTitle.style.transitionDelay = '0.3s'
      hoveredDesc.style.transitionDelay = '0.4s'
      title.style.opacity = '0'
      title.style.transform = 'translateY(50px)'
      overlay.style.transform = 'translateY(0)'
      hoveredTitle.style.transform = 'translateY(0)'
      hoveredTitle.style.opacity = '1'
      hoveredDesc.style.transform = 'translateY(0)'
      hoveredDesc.style.opacity = '1'
    },
    unhover (e) {
      const card = e.target.closest('.advantage')
      const title = card.querySelector('.advantage__title')
      const overlay = card.querySelector('.advantage__overlay')
      const hoveredTitle = card.querySelector('.advantage__title-secondary')
      const hoveredDesc = card.querySelector('.advantage__desc')
      hoveredTitle.style.transitionDelay = '0'
      hoveredDesc.style.transitionDelay = '0'
      title.style.transitionDelay = '0.2s'
      title.style.opacity = '1'
      title.style.transform = 'translateY(0)'
      overlay.style.transform = 'translateY(100%)'
      hoveredTitle.style.transform = 'translateY(50px)'
      hoveredTitle.style.opacity = '0'
      hoveredDesc.style.transform = 'translateY(50px)'
      hoveredDesc.style.opacity = '0'
    }
  },
  data: () => ({
    isHovered1: false
  })
}
</script>

<style scoped>
.advantages{
  opacity:1;
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:0;
  padding:10.42vh 0 13.54vh 0;
  display:flex;
}

.app-wrapper, .advantages__main{
  height:100%;
}

.advantages__main{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:5.2vh 0;
}

.advantages__flex{
  height:100%;
}

.advantages__flex1{
  width:32.2%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.advantages__flex2{
  width:27.5%;
}

.advantages__flex3{
  width:37.3%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.advantage__flex3-inner{
  position:relative;
  width:100%;
  height:48.4%;
}

.advantage{
  position:relative;
  overflow:hidden;
}

.advantage1, .advantage2, .advantage6{
  height:48.4%;
}

.advantage3{
  height:100%;
}

.advantage4, .advantage5{
  width:48.4%;
  height:100%;
}

.advantage5{
  position:absolute;
  top:0;
  left:51.6%;
}

.advantage1{
  background: url('/img/mainPage/advantage1.png') center / cover;
}
.advantage2{
  background: url('/img/mainPage/advantage2.png') center / cover;
}
.advantage3{
  background: url('/img/mainPage/advantage3.png') center / cover;
}
.advantage4{
  background: url('/img/mainPage/advantage4.png') center / cover;
}
.advantage5{
  background: url('/img/mainPage/advantage5.png') center / cover;
}
.advantage6{
  background: url('/img/mainPage/advantage6.png') center / cover;
}

.advantage__title{
  position:absolute;
  font-weight: bold;
  font-size: 1.875vh;
  line-height: 160%;
  color: #FFFFFF;
  bottom:0;
  left:0;
  right:0;
  z-index:1;
  text-transform:uppercase;
  display:flex;
  align-items:center;
  padding:2vh 2.08vh;
  transition: 0.5s;
}

.advantage__top{
  position:absolute;
  top:0;
  right:0;
  left:0;
  padding:2vh 2.08vh;
  z-index:1;
}

.advantage__title-secondary{
  display:block;
  height:auto;
  text-transform:uppercase;
  opacity:0;
  margin-bottom:1vh;
  font-weight: bold;
  font-size: 1.875vh;
  line-height: 160%;
  color: #FFFFFF;
  transform:translateY(50px);
  transition:0.5s;
  transition-delay:0.3s;
}

.advantage__desc{
  font-weight: 400;
  font-size: 1.875vh;
  line-height: 160%;
  color: #FFFFFF;
  opacity:0;
  display:block;
  transform:translateY(50px);
  transition: 0.5s;
  transition-delay: 0.4s;
}

.advantage__overlay{
  position:absolute;
  z-index:0;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: rgba(36, 33, 53, 0.5);
  border-top:4px solid #242135;
  transform:translateY(100%);
  transition-timing-function:ease-in-out;
  transition:0.5s;
}

</style>
