<template>
  <div class="gallery">
    <div class="app-wrapper">
      <h1 class="gallery__title">Галерея ЖК бруклин</h1>
      <div class="gallery__back" @click="goToHomePage">
        <SliderArrowLeft width="7px" height="12px" fill="#242135"/>
        <span>На главную</span>
      </div>
      <figure
        v-for="galleryItem in gallery"
        :key="galleryItem.id"
        class="category-card"
        @click="goToGaleryCategory(galleryItem.id)"
      >
        <div class="category-card__icon">
          <img :src="galleryItem.icon.path" alt="gallery">
        </div>
        <h2 class="category-card__title">
          {{ galleryItem.title }}
        </h2>
        <img :src="galleryItem.primary_image.path" alt="" class="category-card__img">
      </figure>
    </div>
  </div>
</template>

<script>
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'

export default {
  components: {
    SliderArrowLeft
  },
  methods: {
    goToHomePage () {
      this.$router.push('/').then(() => window.scrollTo(0, 0))
    },
    goToGaleryCategory (id) {
      this.$router.push('/gallery/' + id).then(window.scrollTo(0, 0))
    }
  },
  computed: {
    gallery () {
      return this.$store.getters.gallery
    }
  }
}
</script>

<style scoped>
.gallery{
  padding-top:57px;
  padding-bottom:35px;
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

.category-card{
  height:210px;
  width:100%;
  border-radius:2px;
  cursor:pointer;
  display:flex;
  align-items:Center;
  justify-content:center;
  flex-direction:column;
  position:relative;
  overflow:hidden;
  border-radius:2px;
  margin-bottom:25px;
}

.category-card__img{
  width:100%;
  height:100%;
  object-fit:cover;
  position:absolute;
  z-index:-1;
}

.category-card__icon{
  width:60px;
  height:60px;
  display:flex;
  align-items:Center;
  justify-content:center;
  background:#fff;
  border-radius:50%;
  margin-bottom:25px;
  z-index:0;
  position:relative;
}

.category-card__icon img{
  width:40%;
}

.category-card__title{
  width:100%;
  text-align:center;
  font-weight: bold;
  font-size: 16px;
  line-height: 160%;
  text-transform: uppercase;
  color:#fff;
  z-index:0;
  position:relative;
  width:80%;
}
</style>
