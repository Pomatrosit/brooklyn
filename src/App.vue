<template>
  <div id="app">
    <PreLoader v-if="isApiLoading || (isLoading && route==='/')"/>
    <div v-if="!isApiLoading">
      <Navbar v-if="isDesktop"/>
      <NavbarMobile v-else/>
      <router-view/>
      <FooterMobile v-if="!isDesktop"/>
      <ModalWindow
        v-if="isModalOpen"
        :closeModal="toggleModal"
      >
        <Form />
      </ModalWindow>
      <CookieWarning v-if="!isCookieShowed" :toggleCookieWarning = "toggleCookieWarning"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import NavbarMobile from '@/components/NavbarMobile'
import ModalWindow from '@/components/ModalWindow'
import Form from '@/components/Form'
import PreLoader from '@/components/PreLoader'
import FooterMobile from '@/components/FooterMobile'
import CookieWarning from '@/components/CookieWarning'

export default {
  name: 'App',
  components: {
    ModalWindow,
    Navbar,
    Form,
    PreLoader,
    NavbarMobile,
    FooterMobile,
    CookieWarning
  },
  data: () => ({
    isCookieShowed: true
  }),
  computed: {
    isModalOpen () {
      return this.$store.getters.isModalOpen
    },
    isLoading () {
      return this.$store.getters.isLoading
    },
    isApiLoading () {
      return this.$store.getters.isApiLoading
    },
    isDesktop () {
      return this.$store.getters.isDesktop
    },
    route () {
      return this.$route.path
    }
  },
  methods: {
    toggleModal () {
      this.$store.commit('toggleModal')
    },
    onResize () {
      if (document.documentElement.clientWidth < 1120) this.$store.commit('setDesktop', false)
      else this.$store.commit('setDesktop', true)
    },
    toggleCookieWarning () {
      this.isCookieShowed = true
      localStorage.setItem('cookieWarning', true)
    }
  },
  beforeCreate () {
    this.$store.dispatch('loadData')
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
    setTimeout(() => {
      if (!localStorage.getItem('cookieWarning')) this.isCookieShowed = false
    }, 2000)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style>
#app {
    font-family: 'Montserrat', sans-serif;
}

*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
}

input, input:before, input:after {
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: initial;
}

.app-wrapper{
  margin:0 auto;
  width:90%;
}

.white-text{
  color: #FFFFFF;
}

.pink-text{
  color:#EA8E79;
}

.ymap-container{
  height:100%;
}

.svg-in-btn{
  transform:translateY(13%);
  width:3.334vh;
  min-width:3.334vh;
  height:3.334vh;
}

.gallery-main{
  position:fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  padding:10.42vh 0 13.54vh 0;
}

@media screen and (max-width:1620px){
  .app-wrapper{
    width:95%;
  }
}

@media screen and (max-width:1120px){
  .app-wrapper{
    width:100%;
    padding:0 20px;
  }
}

@media screen and (min-width:1121px){
  body::-webkit-scrollbar {
      width: 0px;
  }
}

</style>
