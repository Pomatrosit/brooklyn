<template>
  <div class="gallery">
    <div class="app-wrapper">
      <h1 class="gallery__title">{{ gallery.title }}</h1>
      <div class="gallery__back" @click="goBack">
        <SliderArrowLeft width="7px" height="12px" fill="#242135"/>
        <span>К категориям</span>
      </div>
      <div
        class="gallery-img"
        v-for="(image, imageIndex) in gallery.secondary_image"
        :key="imageIndex"
        @click="index = imageIndex"
      >
        <img :src="image.path">
      </div>
      <CoolLightBox
        overlayColor="rgba(30, 30, 30, .9)"
        :zIndex="2"
        :style="{zIndex: 100}"
        :items="imagesComputed"
        :index="index"
        effect="swipe"
        @close="index = null">
      </CoolLightBox>
      <p v-if="imagesComputed.length < 1" class="in-progress-title gallery-animated">Страница находится в разработке</p>
      <div v-if="imagesComputed.length > 0" class="gallery__back" @click="goBack">
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
    },
    gallery () {
      return this.$store.getters.gallery.find(el => +el.id === +this.id)
    },
    imagesComputed () {
      return this.gallery.secondary_image.map(el => el.path)
    }
  },
  methods: {
    goBack () {
      this.$router.push('/gallery').then(() => window.scrollTo(0, 0))
    }
  },
  data: () => ({
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

.in-progress-title{
  font-size:20px;
  font-weight:500;
  padding:30px 0;
}
</style>
