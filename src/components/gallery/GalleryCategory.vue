<template>
  <div>
    <CoolLightBox
      overlayColor="rgba(30, 30, 30, .9)"
      :zIndex="2"
      :style="{zIndex: 100}"
      :items="images"
      :index="index"
      @close="index = null">
    </CoolLightBox>
    <div class="gallery-main">
      <div class="app-wrapper">
        <div class="gallery-top">
          <h1 v-if="id ==='1'" class="gallery__title gallery-animated">Архитектура и двор</h1>
          <h1 v-else-if="id ==='2'" class="gallery__title gallery-animated">Места общего пользования</h1>
          <h1 v-else-if="id ==='3'" class="gallery__title gallery-animated">Интерьеры квартир</h1>
          <div class="gallery__back gallery-animated" @click="goBack">
            <SliderArrowLeft fill="#242135" width="1vh" height="1.667vh"/>
            <span>Назад</span>
          </div>
          <div class="gallery-top__after gallery-animated"></div>
        </div>
        <div class="gallery-bottom">
          <div
            class="gallery-img gallery-animated"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
          >
            <img :src="image">
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
 </div>
</template>

<script>
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import SearchIcon from '@/components/svg/SearchIcon'
import gsap, { Power2 } from 'gsap'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    SliderArrowLeft,
    SearchIcon,
    CoolLightBox
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    goBack () {
      this.$router.push('/gallery')
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
  }),
  mounted () {
    gsap.to('.gallery-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to('.gallery-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: Power2.easeInOut })
  }
}
</script>

<style scoped>
.app-wrapper{
  display:flex;
  align-items:center;
  flex-direction:column;
  justify-content:space-between;
  height:100%;
}

.gallery-top{
  display:flex;
  align-items:Center;
  justify-content:space-between;
  width:100%;
  padding: 12.5vh 0 7.29vh 0;
  position:relative;
}

.gallery-top__after{
  position:absolute;
  background:#C4C4C4;
  width:100%;
  height:1px;
  left:0;
  bottom:0;
}

.gallery__title{
  font-weight: bold;
  font-size: 3.125vh;
  color: #242135;
}

.gallery__back{
  cursor:pointer;
  display:flex;
  align-items:Center;
}

.gallery__back span{
  font-weight: 500;
  font-size: 2.09vh;
  color: #242135;
  margin-left:2.5vh
}

.gallery-bottom{
  width:100%;
  display:flex;
  flex-wrap:wrap;
  height:41.6vh;
  position:relative;
  overflow-y:scroll;
}

.gallery-bottom::-webkit-scrollbar {
    width: 4px;
    background-color: #fff;
}

.gallery-bottom::-webkit-scrollbar-thumb {
    background-color: #242135;
}

.gallery-img{
  width:24%;
  height:41.6vh;
  border-radius: 2px;
  margin-right:1%;
  margin-bottom:2vh;
  cursor:pointer;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
}

.gallery-img:after{
  content:"";
  position:Absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  background:#242135;
  opacity:0;
  transition:0.5s;
  z-index:1;
}

.gallery-img img{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  object-fit:cover;
  z-index:1;
}

.gallery-img svg{
  position:relative;
  z-index:2;
  opacity:0;
  transition:0.5s;
  transform:translateY(20px);
}

.arrow{
  position:absolute;
  top:0;
  left:0;
}

.arrow{
  background:#242135;
  width:6.25vh;
  height:6.25vh;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  top:50%;
  transform:translateY(-50%);
  left:2vh;
  transition:0.3s;
}

.arrow-right{
  background:#EA8E79;
  left:calc(100% - 8.25vh);
}

@media (hover:hover){
  .gallery-img:hover:after{
    opacity:0.3;
  }
  .gallery-img:hover svg{
    opacity:1;
    transform:translateY(0);
  }
  .arrow-right:hover{
    background:#eba393;
  }
  .arrow-left:hover{
    background:#615e71;
  }
  .arrow-right:hover svg{
    transform:translateX(50%)
  }
  .arrow-left:hover svg{
    transform:translateX(-50%)
  }
}
</style>
