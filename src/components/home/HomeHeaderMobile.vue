<template>
  <div class="home-header">
    <CoolLightBox
      overlayColor="rgba(30, 30, 30, .9)"
      :zIndex="2"
      :style="{zIndex: 100}"
      :items="images"
      :index="index"
      effect="swipe"
      @close="index = null">
    </CoolLightBox>
    <div v-if="allInfo.length > 0">
      <slick
        class="slick"
        ref="slick"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
          <div
            class="slide"
            v-for="(image, imageIndex) in allInfo[0].homeslider"
            :key="imageIndex"
            @click="index = imageIndex"
          >
            <img :src="image.path" @load="onImageLoad">
          </div>
      </slick>
    </div>
    <div class="app-wrapper">
      <div class="slick-bottom">
        <div class="slider-arrows">
          <div class="arrow-left arrow dark-arrow" @click="prevSlide">
            <SliderArrowLeft width="8px" height="13px" fill="#242135"/>
          </div>
          <div class="arrow-right arrow pink-arrow" @click="nextSlide">
            <SliderArrowRight width="8px" height="13px" fill="#242135"/>
          </div>
        </div>
        <div class="zoom" @click="index = index2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.6892 2C17.9359 2 21.3785 5.36655 21.3785 9.51941C21.3785 11.4792 20.6118 13.264 19.3557 14.6024L21.826 17.0109C22.0576 17.2367 22.0581 17.6034 21.8271 17.8299C21.6171 18.0357 21.2882 18.0548 21.0561 17.8869L20.9896 17.8309L18.4902 15.3934C17.1745 16.4231 15.5054 17.0388 13.6892 17.0388C9.44259 17.0388 6 13.6723 6 9.51941C6 5.36655 9.44259 2 13.6892 2ZM13.6892 3.15819C10.0967 3.15819 7.18435 6.00621 7.18435 9.51941C7.18435 13.0326 10.0967 15.8806 13.6892 15.8806C17.2818 15.8806 20.1941 13.0326 20.1941 9.51941C20.1941 6.00621 17.2818 3.15819 13.6892 3.15819Z" fill="#242135"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="app-wrapper with-padding">
      <p class="home__text">
        <span class="white-text">{{ allInfo.length > 0 ? allInfo[0].hometitle1 : "" }}</span><br/>
        <span class="pink-text">{{ allInfo.length > 0 ? allInfo[0].hometitle2 : "" }}</span>
      </p>
      <div class="button" @click="goToApartmentsPage">
        <span>Выбор квартиры</span>
        <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5021 0L10.8026 0.00512006C14.9301 0.143932 18.6372 3.08222 20.7867 7.84724L20.9329 8.18023C21.0213 8.38142 21.0224 8.61049 20.936 8.81255C18.7643 13.8942 14.8459 17 10.4979 17L10.1974 16.9949C6.06422 16.8559 2.3587 13.9115 0.214451 9.15534L0.0639606 8.81255C-0.0213202 8.613 -0.0213202 8.387 0.0639606 8.18745C2.23573 3.10577 6.15413 0 10.5021 0ZM10.5094 1.58251C7.02605 1.58341 3.79173 4.00897 1.81291 8.14533L1.6485 8.49905L1.8261 8.88218C3.70269 12.7866 6.70185 15.1641 9.95464 15.3972L10.2343 15.4119L10.5042 15.4156L10.7718 15.4115C14.2348 15.2844 17.4286 12.7505 19.3407 8.52458L19.3505 8.49905C17.4852 4.36213 14.3978 1.84326 11.0407 1.60273L10.7603 1.58797L10.5094 1.58251ZM10.4995 4.37055C12.768 4.37055 14.6071 6.21908 14.6071 8.50021C14.6071 10.7805 12.7678 12.6288 10.4995 12.6288C8.23125 12.6288 6.39292 10.7806 6.39292 8.50021C6.39292 6.21895 8.23105 4.37055 10.4995 4.37055ZM10.4995 5.95401C9.10098 5.95401 7.96792 7.09339 7.96792 8.50021C7.96792 9.9061 9.1011 11.0454 10.4995 11.0454C11.8981 11.0454 13.0321 9.90582 13.0321 8.50021C13.0321 7.09367 11.8983 5.95401 10.4995 5.95401Z" fill="white"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import SliderArrowRight from '@/components/svg/SliderArrowRight'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import { loadImages } from '@/utils/utils'

export default {
  components: {
    Slick,
    SliderArrowRight,
    SliderArrowLeft,
    CoolLightBox
  },
  data: () => ({
    slickOptions: {
      slidesToShow: 1,
      arrows: false,
      dots: false
    },
    index: null,
    index2: 0,
    imagesLoaded: 0
  }),
  computed: {
    allInfo () {
      return this.$store.getters.allInfo
    },
    images () {
      if (this.allInfo.length < 1) return []
      return this.$store.getters.allInfo[0].homeslider.map(el => el.path)
    },
    imageArray () {
      return this.$store.getters.imageArray
    }
  },
  methods: {
    prevSlide () {
      this.$refs.slick.prev()
    },
    nextSlide () {
      this.$refs.slick.next()
    },
    goToApartmentsPage () {
      this.$router.push('/apartments/parameters/studios').then(() => window.scrollTo(0, 0))
    },
    handleAfterChange (event, slick, currentSlide) {
      this.index2 = currentSlide
    },
    onImageLoad () {
      this.imagesLoaded++
    }
  },
  watch: {
    imagesLoaded (count) {
      if (count >= this.images.length) {
        this.$store.commit('setHomePageShowed')
        loadImages(this.imageArray)
        const preloader = document.querySelector('.preloader')
        if (preloader) preloader.style.opacity = '0'
        setTimeout(() => {
          setTimeout(() => this.$store.commit('hideLoader'), 1000)
        })
      }
    }
  }
}
</script>

<style scoped>
.home-header{
  padding-top:57px;
  background:#242135;
}

.slick, .slide{
  height:320px;
}

.slide img {
  width:100%;
  height:100%;
  object-fit:cover;
}

.slick-bottom{
  display:flex;
  align-items:Center;
  justify-content:space-between;
  margin-top:-20px;
  position:relative;
  z-index:1;
}

.arrow{
  background:#fff;
  width:40px;
  height:40px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
}

.arrow-right{
  background:#EA8E79;
}

.slider-arrows{
  display:flex;
}

.zoom{
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(36, 33, 53, 0.2);
  border-radius: 2px;
  width:40px;
  height:40px;
  display:flex;
  justify-content:center;
}

.zoom svg{
  transform:translateY(9px)
}

.home__text{
  background:#242135;
  margin-top:-20px;
  padding:44px 0px 54px 0px;
  text-transform:uppercase;font-weight: bold;
  font-size: 18px;
  line-height: 22px;
}

.button{
  width:100%;
  height:60px;
  background: #EA8E79;
  border-radius: 2px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
}

.with-padding{
  padding-bottom:34px;
}

.button span {
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
  margin-right:15px;
}

</style>
