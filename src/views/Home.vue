<template>
  <div>
    <div class="home" v-if="isDesktop">
      <HomeHeader />
      <HomeAbout />
      <HomeAdvantages />
      <HomeInfrastructure />
      <HomeContacts />
      <HomeFooter />
    </div>
    <div class="home" v-if="!isDesktop">
      <HomeHeaderMobile />
      <HomeAboutMobile />
      <HomeAdvantagesMobile />
      <HomeInfrastructureMobile />
      <homeContactsMobile />
      <FooterMobile />
    </div>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader'
import HomeAbout from '@/components/home/HomeAbout'
import HomeAdvantages from '@/components/home/HomeAdvantages'
import HomeInfrastructure from '@/components/home/HomeInfrastructure'
import HomeContacts from '@/components/home/HomeContacts'
import HomeFooter from '@/components/home/HomeFooter'
import HomeHeaderMobile from '@/components/home/HomeHeaderMobile'
import HomeAboutMobile from '@/components/home/HomeAboutMobile'
import HomeAdvantagesMobile from '@/components/home/HomeAdvantagesMobile'
import HomeInfrastructureMobile from '@/components/home/HomeInfrastructureMobile'
import homeContactsMobile from '@/components/home/homeContactsMobile'
import FooterMobile from '@/components/FooterMobile'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeAbout,
    HomeAdvantages,
    HomeInfrastructure,
    HomeContacts,
    HomeFooter,
    HomeHeaderMobile,
    HomeAboutMobile,
    HomeAdvantagesMobile,
    HomeInfrastructureMobile,
    homeContactsMobile,
    FooterMobile
  },
  computed: {
    isDesktop () {
      return this.$store.getters.isDesktop
    }
  },
  data: () => ({
    isWheelAvailable: true
  }),
  methods: {
    onWheel (e) {
      const homeSlide = this.$store.getters.homeSlide
      const lastHomeSlide = this.$store.getters.lastHomeSlide
      if (this.isWheelAvailable) {
        if (e.deltaY > 0 && homeSlide < lastHomeSlide) {
          this.$store.commit('slideDown')
          this.setWheelUnavailable()
        } else if (e.deltaY < 0 && homeSlide > 1) {
          this.$store.commit('slideUp')
          this.setWheelUnavailable()
        }
      }
    },
    setWheelUnavailable () {
      this.isWheelAvailable = false
      setTimeout(() => {
        this.isWheelAvailable = true
      }, 3000)
    }
  },
  mounted () {
    this.$store.commit('setStartSlide')
    if (this.isDesktop) {
      this.setWheelUnavailable()
      window.addEventListener('wheel', this.onWheel)
    }
  },
  beforeDestroy () {
    window.removeEventListener('wheel', this.onWheel)
  }
}
</script>
