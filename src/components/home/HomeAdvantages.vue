<template>
  <section class="advantages" ref="advantages">
    <div class="app-wrapper">
      <div class="advantages__main">
        <div class="advantages__flex advantages__flex1">

          <figure class="advantage advantage1" ref="advantage1">
            <figcaption class="advantage__title" ref="title1">
              <span class="advantage__title-inner1">Просторные колясочные и велосипедные зоны</span>
              <span class="advantage__title-inner2">В холлах ЖК «Бруклин» предусмотрено все для комфортной жизни. Коляску или велосипед Вы можете оставить
                в специальн о предусмотренном для этого месте на первом этаже.
              </span>
            </figcaption>
          </figure>

          <figure class="advantage advantage2" ref="advantage2">
            <figcaption class="advantage__title" ref="title2">
              <span class="advantage__title-inner1">Благоустройство двора </span>
              <span class="advantage__title-inner2">Игровые комплексы для детей разных возрастов и спортивные площадки создают единый ландшафт.
                Двор тихий и спокойный. В нём не слышно шума дорог, а жители будут чувствовать себя уединенно.
              </span>
            </figcaption>
          </figure>

        </div>
        <div class="advantages__flex advantages__flex2">

          <figure class="advantage advantage3" ref="advantage3">
            <figcaption class="advantage__title advantage__title3" ref="title3">
              <span class="advantage__title-inner1">Уютные планировочные решения</span>
              <span class="advantage__title-inner2">В ЖК «Бруклин» использованы современные продуманные планировки с европейским
                типом разделения пространства, здесь каждый найдет для себя функциональную и комфортную квартиру .
              </span>
            </figcaption>
          </figure>

        </div>
        <div class="advantages__flex advantages__flex3">
          <div class="advantage__flex3-inner">

            <figure class="advantage advantage4" ref="advantage4">
              <figcaption class="advantage__title" ref="title4">
                <span class="advantage__title-inner1">Безопасная среда</span>
                <span class="advantage__title-inner2">Закрытая территория двора без доступа посторонних и автомобилей обеспечит безопасность Вашей семьи.
                </span>
              </figcaption>
            </figure>

            <figure class="advantage advantage5" ref="advantage5">
              <figcaption class="advantage__title" ref="title5">
                <span class="advantage__title-inner1">Витражное остекление</span>
                <span class="advantage__title-inner2">Добавит в квартиру больше света и позволит в полной мере наслаждаться видом из окна
                </span>
              </figcaption>
            </figure>

          </div>

          <figure class="advantage advantage6" ref="advantage6">
            <figcaption class="advantage__title" ref="title6">
              <span class="advantage__title-inner1">Дизайнерские холлы и коридоры</span>
              <span class="advantage__title-inner2">Авторский дизайн-проект выполнен из материалов премиум-класса и не оставит
                равнодушными ни жильцов, ни их гостей.
              </span>
            </figcaption>
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
        // gsap.to(this.$refs.advantages, { height: '100%', duration: 0 })
        // gsap.to(this.$refs.advantage1, { width: '100%', duration: 0.8, ease: Power2.easeInOut, delay: 1.2 })
        // gsap.to(this.$refs.advantage2, { width: '100%', duration: 1, ease: Power2.easeInOut, delay: 1 })
        // gsap.to(this.$refs.advantage3, { width: '100%', duration: 0.7, ease: Power2.easeInOut, delay: 1.3 })
        // gsap.to(this.$refs.advantage4, { width: '48.4%', duration: 1, ease: Power2.easeInOut, delay: 1 })
        // gsap.to(this.$refs.advantage5, { width: '48.4%', duration: 0.8, ease: Power2.easeInOut, delay: 1.2 })
        // gsap.to(this.$refs.advantage6, { width: '100%', duration: 1, ease: Power2.easeInOut, delay: 1 })
        // gsap.to('.advantage__title', { opacity: 1, duration: 0.2, delay: 2 })
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
        // gsap.to(this.$refs.advantages, { height: 0, duration: 0, delay: 1 })
        // gsap.to(this.$refs.advantage1, { width: 0, duration: 0.8, ease: Power2.easeInOut })
        // gsap.to(this.$refs.advantage2, { width: 0, duration: 1, ease: Power2.easeInOut })
        // gsap.to(this.$refs.advantage3, { width: 0, duration: 0.7, ease: Power2.easeInOut })
        // gsap.to(this.$refs.advantage4, { width: 0, duration: 1, ease: Power2.easeInOut })
        // gsap.to(this.$refs.advantage5, { width: 0, duration: 0.8, ease: Power2.easeInOut })
        // gsap.to(this.$refs.advantage6, { width: 0, duration: 1, ease: Power2.easeInOut })
        // gsap.to('.advantage__title', { opacity: 0, duration: 0 })
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
    // gsap.to(this.$refs.advantages, { height: 0, duration: 0 })
    // gsap.to('.advantage', { width: 0, duration: 0 })
    // gsap.to('.advantage__title', { opacity: 0 })
    gsap.to(this.$refs.advantages, { height: 0, duration: 0 })
    gsap.to(this.$refs.advantage1, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.advantage2, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.advantage3, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.advantage4, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.advantage5, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.advantage6, { opacity: 0, y: 100, duration: 0 })
  }
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
  font-size: 1.667vh;
  line-height: 160%;
  color: #FFFFFF;
  bottom:0;
  left:0;
  right:0;
  z-index:1;
  height:25%;
  transition:0.5s;
  display:flex;
  align-items:center;
  padding:0 2.08vh;
}

.advantage__title3{
  height:12.5%;
}

.advantage__title-inner1{
  text-transform:uppercase;
}

.advantage__title-inner2{
  font-weight: 500;
  font-size: 1.5625vh;
  line-height: 160%;
  color: #FFFFFF;
  display:block;
  position:absolute;
  width:100%;
  top:100%;
  left:0;
  padding:0 2.08vh;
  opacity:0;
  transition:0.5s;
}

.advantage:after{
  position:absolute;
  content:"";
  z-index:0;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background: rgba(36, 33, 53, 0.5);
  border-top:4px solid #242135;
  transform:translateY(100%);
  transition:0.3s;
  transition-timing-function:ease-in-out;
}

@media(hover:hover){
  .advantage:hover:after{
    transform:translateY(0);
  }
  .advantage:hover .advantage__title{
    transform:translateY(-300%);
  }
  .advantage:hover .advantage__title3{
    transform:translateY(-700%);
  }
  .advantage:hover .advantage__title-inner2{
    opacity:1;
  }
}
</style>
