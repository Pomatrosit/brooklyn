<template>
  <div>
    <CoolLightBox
      overlayColor="rgba(30, 30, 30, .9)"
      :zIndex="2"
      :style="{zIndex: 100}"
      :items="imagesComputed"
      :index="index"
      effect="fade"
      @close="index = null">
    </CoolLightBox>
    <div class="gallery-main">
      <div class="app-wrapper">
        <div class="gallery-top">
          <h1 class="gallery__title gallery-animated">{{ gallery.title }}</h1>
          <div class="gallery-top__after gallery-animated"></div>
        </div>
        <div class="gallery__back gallery-animated" @click="goBack">
          <svg width="1vh" height="1.667vh" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.7541 15.7589C9.05216 15.4667 9.07926 15.0095 8.83539 14.6873L8.7541 14.595L2.02658 8L8.7541 1.40503C9.05216 1.11283 9.07926 0.655583 8.83539 0.333375L8.7541 0.241064C8.45604 -0.0511349 7.98963 -0.0776984 7.66096 0.161374L7.56679 0.241064L0.245899 7.41802C-0.0521603 7.71022 -0.079257 8.16746 0.16461 8.48967L0.245899 8.58198L7.56679 15.7589C7.89466 16.0804 8.42624 16.0804 8.7541 15.7589Z" fill="#242135"/>
          </svg>
          <span>Назад</span>
        </div>
        <div class="gallery-bottom">

          <div
            class="gallery-img gallery-animated"
            v-for="(image, imageIndex) in gallery.secondary_image"
            :key="imageIndex"
            @click="index = imageIndex"
          >
            <img :src="image.path">
            <SearchIcon />
          </div>

        </div>
      </div>
    </div>
 </div>
</template>

<script>
import SearchIcon from '@/components/svg/SearchIcon'
import gsap, { Power2 } from 'gsap'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    SearchIcon,
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
      this.$router.push('/gallery')
    }
  },
  data: () => ({
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
  flex-direction:column;
  justify-content:space-between;
  height:100%;
}

.gallery-top{
  display:flex;
  align-items:Center;
  justify-content:space-between;
  width:100%;
  padding: 12.5vh 0 5.2vh 0;
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
  margin-left:2.5vh;
  transition:0.3s;
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

.gallery__back:hover svg path{
  transition:0.5s;
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
  .gallery__back:hover span{
    color:#EA8E79;
  }
  .gallery__back:hover svg path{
    fill:#EA8E79;
  }
}
</style>
