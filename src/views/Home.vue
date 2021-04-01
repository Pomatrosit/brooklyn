<template>
  <div>
    <div class="home" v-if="isDesktop">
      <HomeHeader />
      <div v-if="isHomePageShowed">
        <HomeAbout />
        <HomeAdvantages />
        <HomeInfrastructure />
        <HomeContacts />
      </div>
      <HomeFooter />
    </div>
    <div class="home" v-if="!isDesktop">
      <HomeHeaderMobile />
      <div v-if="isHomePageShowed">
        <HomeAboutMobile />
        <HomeAdvantagesMobile />
        <HomeInfrastructureMobile />
        <homeContactsMobile />
      </div>
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
    homeContactsMobile
  },
  computed: {
    isDesktop () {
      return this.$store.getters.isDesktop
    },
    isApiLoading () {
      return this.$store.getters.isApiLoading
    },
    titles () {
      return this.$store.getters.titles
    },
    isHomePageShowed () {
      return this.$store.getters.isHomePageShowed
    },
    isWheelAvailable () {
      return this.$store.getters.isWheelAvailable
    }
  },
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
    onKey (e) {
      if (this.isWheelAvailable) {
        if (e.keyCode === 40) {
          this.$store.commit('slideDown')
          this.setWheelUnavailable()
        } else if (e.keyCode === 38) {
          this.$store.commit('slideUp')
          this.setWheelUnavailable()
        }
      }
    },
    setWheelUnavailable () {
      this.$store.dispatch('setWheelUnavailable')
    }
  },
  mounted () {
    document.title = this.titles[0].hometitle
    document.querySelector('meta[name="description"]').setAttribute('content', this.titles[0].homedescription)
    this.$store.commit('setStartSlide')
    if (this.isDesktop) {
      this.setWheelUnavailable()
      window.addEventListener('wheel', this.onWheel)
      window.addEventListener('keyup', this.onKey)
    }
  },
  beforeDestroy () {
    window.removeEventListener('wheel', this.onWheel)
    window.removeEventListener('keyup', this.onKey)
  }
}
</script>
