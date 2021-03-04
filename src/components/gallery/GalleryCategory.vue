<template>
  <div>
  <div class="gallery-main">
    <div class="app-wrapper">
      <div class="gallery-top">
        <h1 v-if="id ==='1'" class="gallery__title">Архитектура и двор</h1>
        <h1 v-else-if="id ==='2'" class="gallery__title">Места общего пользования</h1>
        <h1 v-else-if="id ==='3'" class="gallery__title">Интерьеры квартир</h1>
        <div class="gallery__back" @click="goBack">
          <SliderArrowLeft fill="#242135" width="1vh" height="1.667vh"/>
          <span>Назад</span>
        </div>
      </div>
      <div class="gallery-bottom">
        <div class="gallery-img" @click="openModal">
          <img src="/img/gallery/1.png" alt="">
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
    <img :src="modalImageSrc" class="modal-img" alt="">
  </ModalWindow>
</div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow'
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'
import SearchIcon from '@/components/svg/SearchIcon'

export default {
  components: {
    SliderArrowLeft,
    SearchIcon,
    ModalWindow
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
    openModal () {
      this.isModalOpen = true
    },
    closeModal () {
      this.isModalOpen = false
    }
  },
  data: () => ({
    isModalOpen: false,
    modalImageSrc: '/img/gallery/1.png'
  })
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
  border-bottom:1px solid #C4C4C4;
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
}

.modal-img{
  width:100%;
  height:100%;
  object-fit:cover;
}

@media (hover:hover){
  .gallery-img:hover:after{
    opacity:0.3;
  }
  .gallery-img:hover svg{
    opacity:1;
  }
}
</style>
