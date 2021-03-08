<template>
  <section class="about" id="section2" ref="about">

    <div class="about__img" ref="aboutImg"></div>

    <div class="about__main" ref="aboutMain">

      <div class="about__text-block">

        <h2 class="about__title">
          <span class="white-text">Новый концептуальный </span><br/>
          <span class="pink-text">жилой комплекс в Астрахани</span>
        </h2>

        <p class="about__text"><strong>Благородство и достоинство </strong> архитектурного проекта столь же гармоничны, сколь удобно его внутреннее устройство.
          Все: от особенностей отделки до обустройства придомовой территории — продумано и функционально.Отличный выбор для тех, кто хочет
          совместить жизнь в тихом районе и максимальную доступность объектов инфраструктуры.<br><br/>
          <strong>Жилой Квартал «Бруклин» </strong> - отличный выбор для тех, кто хочет совместить жизнь в тихом районе и максимальную доступность
          объектов инфраструктуры. Все: от особенностей отделки до обустройства придомовой территории — продумано и функционально.
        </p>

      </div>

      <svg class="about__back1" width="960" height="732" viewBox="0 0 960 732" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M478 1L1 366L478 731M719 1L242 366L719 731M599 1L121 366L599 731M840 1L362 366L840 731M539 1L62 366L539 731M780 1L303 366L780 731M659 1L182 366L659 731M900 1L423 366L900 731M498 1L21 366L498 731M739 1L262 366L739 731M618 1L141 366L618 731M859 1L382 366L859 731M559 1L82 366L559 731M800 1L323 366L800 731M679 1L202 366L679 731M920 1L443 366L920 731M518 1L41 366L518 731M759 1L282 366L759 731M638 1L161 366L638 731M879 1L402 366L879 731M579 1L102 366L579 731M820 1L343 366L820 731M699 1L222 366L699 731M940 1L463 366L940 731M960 1L483 366L960 731" stroke="#2C2B32"/>
      </svg>

      <svg class="about__back2" width="263" height="219" viewBox="0 0 263 219" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M85.9058 219C69.2789 219 54.3968 214.591 41.2594 205.774C28.3274 196.956 18.1665 184.346 10.7767 167.941C3.59224 151.331 0 131.851 0 109.5C0 87.1489 3.59224 67.7711 10.7767 51.3666C18.1665 34.757 28.3274 22.0435 41.2594 13.2261C54.3968 4.4087 69.2789 0 85.9058 0C102.533 0 117.312 4.4087 130.244 13.2261C143.382 22.0435 153.645 34.757 161.035 51.3666C168.425 67.7711 172.12 87.1489 172.12 109.5C172.12 131.851 168.425 151.331 161.035 167.941C153.645 184.346 143.382 196.956 130.244 205.774C117.312 214.591 102.533 219 85.9058 219ZM85.9058 198.699C98.4274 198.699 109.409 195.213 118.852 188.242C128.5 181.27 135.992 171.119 141.329 157.791C146.666 144.462 149.335 128.365 149.335 109.5C149.335 90.6348 146.666 74.5379 141.329 61.2093C135.992 47.8806 128.5 37.7303 118.852 30.7584C109.409 23.7865 98.4274 20.3006 85.9058 20.3006C73.3843 20.3006 62.2997 23.7865 52.652 30.7584C43.2095 37.7303 35.8198 47.8806 30.4827 61.2093C25.1457 74.5379 22.4772 90.6348 22.4772 109.5C22.4772 128.365 25.1457 144.462 30.4827 157.791C35.8198 171.119 43.2095 181.27 52.652 188.242C62.2997 195.213 73.3843 198.699 85.9058 198.699Z" fill="white" fill-opacity="0.02"/>
        <path d="M263 1.8455V217.154H240.831V21.5309H190.026V1.8455H263Z" fill="white" fill-opacity="0.02"/>
      </svg>

    </div>
  </section>
</template>

<script>
import gsap, { Power2 } from 'gsap'
import { mapGetters } from 'vuex'

export default {
  name: 'HomeAbout',
  computed: mapGetters(['homeSlide']),
  watch: {
    homeSlide (homeSlide, prevHomeSlide) {
      if (homeSlide === 2) {
        // gsap.to(this.$refs.about, { height: '100%', duration: 0 })
        // gsap.to(this.$refs.aboutImg, { height: '100%', duration: 1, ease: Power2.easeInOut, delay: 1 })
        // gsap.to(this.$refs.aboutMain, { y: 0, duration: 1, ease: Power2.easeInOut, delay: 1 })
        gsap.to(this.$refs.about, { height: '100%', duration: 0 })
        gsap.to(this.$refs.aboutImg, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1 })
        gsap.to(this.$refs.aboutMain, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 1.2 })
      }
      if (prevHomeSlide === 2) {
        // gsap.to(this.$refs.about, { height: 0, duration: 0, delay: 1 })
        // gsap.to(this.$refs.aboutImg, { height: 0, duration: 1, ease: Power2.easeInOut })
        // gsap.to(this.$refs.aboutMain, { y: '101%', duration: 1, ease: Power2.easeInOut })
        if (homeSlide === 3) {
          gsap.to(this.$refs.about, { height: 0, duration: 0, delay: 1 })
          gsap.to(this.$refs.aboutImg, { opacity: 0, y: -100, duration: 1, ease: Power2.easeInOut })
          gsap.to(this.$refs.aboutMain, { y: -100, opacity: 0, duration: 1, ease: Power2.easeInOut, delay: 0.2 })
        } else {
          gsap.to(this.$refs.about, { height: 0, duration: 0, delay: 1 })
          gsap.to(this.$refs.aboutImg, { opacity: 0, y: 100, duration: 1, ease: Power2.easeInOut })
          gsap.to(this.$refs.aboutMain, { y: 100, opacity: 0, duration: 1, ease: Power2.easeInOut, delay: 0.2 })
        }
      }
    }
  },
  mounted () {
    // gsap.to(this.$refs.about, { height: 0, duration: 0 })
    // gsap.to(this.$refs.aboutImg, { height: 0, duration: 0 })
    // gsap.to(this.$refs.aboutMain, { y: '101%', duration: 0 })
    gsap.to(this.$refs.about, { height: 0, duration: 0 })
    gsap.to(this.$refs.aboutImg, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.aboutMain, { y: 100, opacity: 0, duration: 0 })
  }
}
</script>

<style scoped>
.about{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:0;
  padding:10.42vh 0 13.54vh 0;
  display:flex;
}

.about__img{
  width:50%;
  height:100%;
  background:url('/img/mainPage/homeAboutBg.png') top / cover;
}

.about__main{
  background:#242135;
  width:50%;
  height:100%;
  position:Relative;
  overflow:hidden;
  display:flex;
  align-items:center;
}

.about__text-block{
  /* position:absolute;
  top:50%;
  left:100px;
  transform:translateY(-50%);
  z-index:1;
  overflow:hidden; */
  /* margin: 13.54vh 0 0 5.2vw; */
  margin-left:5.2vw;
  position:relative;
  z-index:1;
}

.about__title{
  font-weight: bold;
  font-size: 3.125vh;
  line-height: 3.854vh;
  text-transform:uppercase;
  width:calc(50vw - 20.8vh);
  margin-bottom: 5.2vh;
}

.about__text{
  padding:0 30% 0 3.75vh;
  position:relative;
  font-size: 1.667vh;
  line-height: 160%;
  color: #FFFFFF;
}

.about__text:after{
  position:absolute;
  content:"";
  width:2px;
  height:4.375vh;
  background:#efefef;
  top:0.5vh;
  left:0;
}

.about__back1{
  position:absolute;
  left:0;
  top:0;
  z-index:0;
}

.about__back2{
  position:absolute;
  right:8.3vh;
  top:10.4vh;
  z-index:0;
}

@media screen and (max-width:1620px){
  .about__text{
    font-size:1.8vh;
  }
}
</style>
