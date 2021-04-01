<template>
  <footer>
    <div class="app-wrapper">

      <p class="footer__screen-description">
        <span class = "screen_desc" ref="screen2_desc">01 — О комплексе</span>
        <span class = "screen_desc" ref="screen3_desc">02 — Преимущества</span>
        <span class = "screen_desc" ref="screen4_desc">03 — Инфраструктура</span>
        <span class = "screen_desc" ref="screen5_desc">04 — Контакты</span>
      </p>

      <div class="footer__main">

      <FooterMain />

      <div class="scroll-trigger"
        v-if="homeSlide < 5"
        :class="{red_trigger : homeSlide >= 3}"
        @click="onScrollTrigger"
      >
        <svg class="scroll-trigger__mouse" width="21" height="34" viewBox="0 0 21 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="19" height="32" rx="9.5" stroke="#EFEFEF" stroke-width="2"/>
          <circle class="scroll-trigger__mouse-point" r="2.5" transform="matrix(-1 0 0 1 10.5 11.5)" fill="#EFEFEF"/>
        </svg>
        <svg class="scroll-trigger__arrow" width="11" height="46" viewBox="0 0 11 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.75181 45.3775L5.68874 45.4363C5.68813 45.4367 5.68751 45.4372 5.6869 45.4376C5.67573 45.445 5.66776 45.4501 5.66118 45.4541L5.65477 45.4579L5.64887 45.4617L5.75181 45.3775ZM5.75181 45.3775L10.3729 40.4178L10.4304 40.3463C10.536 40.1816 10.5197 39.952 10.3939 39.8079L10.331 39.7501C10.2014 39.6564 10.0275 39.6677 9.9059 39.7982C9.90587 39.7982 9.90585 39.7983 9.90582 39.7983L6.72121 43.2177L5.85534 44.1475L5.85532 42.877L5.85456 0.92854L5.84891 0.83891C5.81559 0.622155 5.64964 0.5 5.50013 0.5C5.335 0.5 5.1457 0.65318 5.1457 0.9128L5.14646 42.8782L5.14648 44.1486L4.2806 43.219L1.10667 39.8117L1.04123 39.7511C0.911845 39.6566 0.7379 39.6673 0.615902 39.797C0.461944 39.9607 0.461205 40.2398 0.614686 40.4045L5.2477 45.377L5.31067 45.4353M5.75181 45.3775L5.31067 45.4353M5.31067 45.4353L5.3123 45.4364L5.32054 45.4421C5.32684 45.4464 5.33257 45.4502 5.3436 45.4574C5.34417 45.4578 5.34476 45.4582 5.34537 45.4586L5.31067 45.4353ZM5.64664 45.463C5.63491 45.4685 5.62756 45.4719 5.62123 45.4746L5.62118 45.4745L5.61058 45.4793C5.60949 45.4798 5.60683 45.4809 5.60206 45.4826C5.59953 45.4834 5.59736 45.484 5.59544 45.4846C5.58866 45.4865 5.58492 45.4876 5.57949 45.4891L5.57946 45.489L5.56852 45.4922C5.5673 45.4925 5.5647 45.4932 5.56025 45.4942C5.55614 45.4947 5.55321 45.4951 5.55079 45.4955C5.54612 45.4961 5.54336 45.4965 5.5376 45.4972L5.53758 45.4971L5.52557 45.4988C5.52432 45.499 5.52179 45.4993 5.51784 45.4996L5.51576 45.4996L5.45528 45.4962C5.45286 45.4959 5.45046 45.4955 5.44806 45.4951L5.44809 45.4949L5.43562 45.4931C5.43504 45.493 5.43241 45.4926 5.42741 45.4914C5.42431 45.4904 5.42176 45.4897 5.41954 45.489C5.41327 45.487 5.40971 45.4859 5.40416 45.4841L5.40421 45.4839L5.3914 45.4801C5.39095 45.4799 5.38901 45.4793 5.38511 45.4778C5.38492 45.4777 5.38473 45.4776 5.38455 45.4775C5.37302 45.4721 5.36711 45.4693 5.36064 45.466L5.35273 45.462L5.34594 45.4589C5.34516 45.4584 5.34283 45.4572 5.3387 45.4547L5.64664 45.463Z" fill="white" stroke="#EFEFEF"/>
        </svg>
      </div>

    </div>
  </div>
  </footer>
</template>

<script>
import gsap, { Power2 } from 'gsap'
import { mapGetters } from 'vuex'
import FooterMain from '@/components/FooterMain'

export default {
  name: 'Footer',
  components: {
    FooterMain
  },
  computed: {
    isWheelAvailable () {
      return this.$store.getters.isWheelAvailable
    },
    ...mapGetters(['homeSlide'])
  },
  watch: {
    homeSlide (homeSlide, prevHomeSlide) {
      switch (homeSlide) {
        case 2 : gsap.to(this.$refs.screen2_desc, { x: 0, opacity: 1, duration: 1, ease: Power2.easeInOut, delay: 1 })
          break
        case 3 : gsap.to(this.$refs.screen3_desc, { x: 0, opacity: 1, duration: 1, ease: Power2.easeInOut, delay: 1 })
          break
        case 4 : gsap.to(this.$refs.screen4_desc, { x: 0, opacity: 1, duration: 1, ease: Power2.easeInOut, delay: 1 })
          break
        case 5 : gsap.to(this.$refs.screen5_desc, { x: 0, opacity: 1, duration: 1, ease: Power2.easeInOut, delay: 1 })
          break
        default:
          break
      }
      switch (prevHomeSlide) {
        case 2 : gsap.to(this.$refs.screen2_desc, { x: -50, opacity: 0, duration: 1, ease: Power2.easeInOut })
          break
        case 3 : gsap.to(this.$refs.screen3_desc, { x: -50, opacity: 0, duration: 1, ease: Power2.easeInOut })
          break
        case 4 : gsap.to(this.$refs.screen4_desc, { x: -50, opacity: 0, duration: 1, ease: Power2.easeInOut })
          break
        case 5 : gsap.to(this.$refs.screen5_desc, { x: -50, opacity: 0, duration: 1, ease: Power2.easeInOut })
          break
        default:
          break
      }
    }
  },
  mounted () {
    gsap.to('.screen_desc', { x: -100, opacity: 0, duration: 0 })
  },
  methods: {
    setScrollUnavailable () {
      this.$store.dispatch('setWheelUnavailable')
    },
    onScrollTrigger () {
      const homeSlide = this.$store.getters.homeSlide
      const lastHomeSlide = this.$store.getters.lastHomeSlide
      if (this.isWheelAvailable) {
        if (homeSlide < lastHomeSlide) {
          this.$store.commit('slideDown')
          this.setScrollUnavailable()
        }
      }
    }
  }
}
</script>

<style scoped>
footer{
  background:#fff;
  position:fixed;
  bottom:0;
  right:0;
  width:100%;
  z-index:1;
}

.app-wrapper{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.footer__main{
  height:13.54vh;
  display:flex;
  align-items:center;
}

.footer__text{
  font-weight: 500;
  font-size: 1.25vh;
  color: #000000;
  margin-right:1vh;
}

.footer__text span{
  color:#EA8E79;
}

.footer__social a{
  margin-left:2.08vh;
}

.scroll-trigger{
  display:flex;
  flex-direction:column;
  align-items:center;
  position:fixed;
  right:3vh;
  bottom:23.958vh;
  cursor:pointer;
}

.scroll-trigger__mouse{
  margin-bottom:3.125vh;
}

.footer__screen-description{
  font-size: 2.08vh;
  color: #242135;
  position:relative;
  width:31vh;
  height:3.125vh;
}

.footer__screen-description span{
  position:absolute;
  top:0;
  left:0;
}

.red_trigger rect, .red_trigger path{
  stroke:#EA8E79;
}

.red_trigger circle{
  fill:#EA8E79;
}

.footer__social svg{
  width:3.125vh;
  height:3.125vh;
}

.footer__social svg path{
  transition:0.2s;
}

.scroll-trigger__mouse{
  width:1.98vh;
  height:3.33vh;
  transition:0.2s;
  transition-timing-function:ease-in-out;
}

.scroll-trigger__arrow{
  width:1.14vh;
  height:4.8vh;
  transition:0.2s;
  transition-timing-function:ease-in-out;
  animation: arrow-animation 2s ease-in-out infinite;
}

@keyframes arrow-animation{
  0%{transform:translateY(0px)}
  50%{transform:translateY(10px)}
  100%{transform:translateY(0px)}
}

@media(hover:hover){
  .scroll-trigger:hover .scroll-trigger__arrow{
    transform:translateY(5px)
  }
  .footer__social svg:hover path{
    fill:#EA8E79;
    stroke:#EA8E79;
  }
}
</style>
