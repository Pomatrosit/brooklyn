<template>
  <div class="gallery">
    <div class="app-wrapper">
      <h1 class="gallery__title" v-if="id === '1'">Архитектура и двор</h1>
      <h1 class="gallery__title" v-else-if="id === '2'">Места общего пользования</h1>
      <h1 class="gallery__title" v-else-if="id === '3'">Интерьеры квартир</h1>
      <div class="gallery__back" @click="goBack">
        <SliderArrowLeft width="7px" height="12px" fill="#242135"/>
        <span>К категориям</span>
      </div>
      <div
        class="gallery-img"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
      >
        <img :src="image">
      </div>
      <CoolLightBox
        overlayColor="rgba(30, 30, 30, .9)"
        :zIndex="2"
        :style="{zIndex: 100}"
        :items="images"
        :index="index"
        effect="swipe"
        @close="index = null">
      </CoolLightBox>
      <div class="gallery__back" @click="goBack">
        <SliderArrowLeft width="7px" height="12px" fill="#242135"/>
        <span>К категориям</span>
      </div>
    </div>
  </div>
</template>

<script>
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    SliderArrowLeft,
    CoolLightBox
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    goBack () {
      this.$router.push('/gallery').then(() => window.scrollTo(0, 0))
    }
  },
  data: () => ({
    images: [
      '/img/mainPage/swooshed/1.jpg',
      '/img/mainPage/swooshed/2.jpg',
      '/img/mainPage/swooshed/3.jpg',
      '/img/mainPage/swooshed/4.jpg',
      '/img/mainPage/swooshed/5.jpg'
    ],
    index: null
  })
}
</script>

<style scoped>
.gallery{
  padding-top:57px;
  padding-bottom:30px;
}

.gallery__title{
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #242135;
  padding:40px 0;
  border-bottom:1px solid #C4C4C4;
}

.gallery__back{
  padding:25px 0;
}

.gallery__back span {
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #242135;
  margin-left:10px;
}

.gallery-img{
  width:100%;
  height:280px;
  margin-bottom:15px;
}

.gallery-img img {
  width:100%;
  height:100%;
  object-fit:cover;
}
</style>
