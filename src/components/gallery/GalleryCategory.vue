<template>
  <div>
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
          v-for="(img, idx) in images"
          :key="img.id"
          class="gallery-img gallery-animated"
          @click="openModal(idx)"
        >
          <img :src="img.src" alt="">
          <SearchIcon />
        </div>
      </div>
    </div>
  </div>

  <ModalWindow
    v-if="isModalOpen"
    :closeModal="closeModal"
    padding="0"
    overflow="hidden"
    height="80vh"
    maxWidth="80vw"
  >
    <div class="slider-wrapper">
      <slick
        ref="slick"
        :options="slickOptions"
      >
          <div
            v-for="img in images"
            class="slide"
            :key="img.id"
          >
            <img class="slide-inner" :src="img.src" alt="">
          </div>
      </slick>
      <div class="arrow-left arrow" @click="prev">
        <SliderArrowLeft width="0.83vh" height="1.45vh" fill="#fff"/>
      </div>
      <div class="arrow-right arrow" @click="next">
        <SliderArrowRight width="0.83vh" height="1.45vh" fill="#fff"/>
      </div>
    </div>
  </ModalWindow>
</div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow'
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import SliderArrowRight from '@/components/svg/SliderArrowRight'
import SearchIcon from '@/components/svg/SearchIcon'
import gsap, { Power2 } from 'gsap'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css'

export default {
  components: {
    SliderArrowLeft,
    SliderArrowRight,
    SearchIcon,
    ModalWindow,
    Slick
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    goBack () {
      this.$router.push('/gallery')
    },
    openModal (idx) {
      this.isModalOpen = true
      this.slickOptions.initialSlide = idx
    },
    closeModal () {
      this.isModalOpen = false
    },
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    }
  },
  data: () => ({
    isModalOpen: false,
    images: [
      { id: 1, src: '/img/gallery/1.png' },
      { id: 2, src: '/img/gallery/2.png' },
      { id: 3, src: '/img/gallery/3.png' },
      { id: 4, src: '/img/gallery/2.png' },
      { id: 5, src: '/img/gallery/3.png' }
    ],
    slickOptions: {
      slidesToShow: 1,
      arrows: false,
      initialSlide: 1
    }
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

.slide-inner{
  width:100%;
  height:100%;
}

.gallery-img svg{
  position:relative;
  z-index:2;
  opacity:0;
  transition:0.5s;
  transform:translateY(20px);
}

.modal-img{
  width:100%;
  height:100%;
  object-fit:cover;
}

.slider-wrapper{
  width:100%;
  height:100%;
  position:relative;
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
