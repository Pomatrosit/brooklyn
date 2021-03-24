<template>
  <div class="flat-wrapper">
    <div class="flat flat-animated">
      <img :src="flat.image.path" alt="flat">
    </div>
    <div class="flat-footer flat-animated">
      <div class="app-wrapper">
        <p class="plan-title">Планировка {{flat.title}}</p>
        <div class="flat-main">
          <div class="square">
            <p class="flat__title">Общая площадь:</p>
            <p class="flat__count">{{flat.square}} м&sup2;</p>
          </div>
          <div class="count">
            <p class="flat__title">Количество комнат:</p>
            <p class="flat__count">{{flatCountCaption}}</p>
          </div>
          <div class="flat-buttons">
            <Button
              text="Записаться на просмотр"
              background="transparent"
              width="33.3vh"
              height="6.25vh"
              fontSize="1.667vh"
              fontColor="#242135"
              border="1px solid #242135"
              type="light-btn"
              :clickHandler="openModal"
            >
              <svg width="3.3vh" height="3.3vh" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.6281 0L16.0753 0.0075295C22.2174 0.211665 27.734 4.53268 30.9326 11.5401L31.1502 12.0298C31.2816 12.3256 31.2833 12.6625 31.1548 12.9596C27.923 20.4327 22.0921 25 15.6219 25L15.1747 24.9925C9.02413 24.7881 3.50997 20.458 0.319123 13.4637L0.0951795 12.9596C-0.0317265 12.6662 -0.0317265 12.3338 0.0951795 12.0404C3.32697 4.56732 9.15793 0 15.6281 0ZM15.6391 2.32722C10.4554 2.32854 5.64246 5.89554 2.69778 11.9784L2.45312 12.4986L2.71741 13.062C5.50996 18.8038 9.97299 22.3001 14.8134 22.643L15.2296 22.6646L15.6312 22.67L16.0295 22.664C21.1827 22.477 25.9355 18.7507 28.7808 12.5361L28.7953 12.4986C26.0196 6.41489 21.4252 2.71068 16.4296 2.35695L16.0124 2.33525L15.6391 2.32722ZM15.6242 6.42729C19 6.42729 21.7367 9.1457 21.7367 12.5003C21.7367 15.8537 18.9997 18.5718 15.6242 18.5718C12.2489 18.5718 9.51328 15.8538 9.51328 12.5003C9.51328 9.14552 12.2486 6.42729 15.6242 6.42729ZM15.6242 8.7559C13.5431 8.7559 11.857 10.4315 11.857 12.5003C11.857 14.5678 13.5433 16.2432 15.6242 16.2432C17.7055 16.2432 19.393 14.5674 19.393 12.5003C19.393 10.4319 17.7057 8.7559 15.6242 8.7559Z" fill="#242135"/>
              </svg>
            </Button>
            <Button
              text="Скачать PDF"
              background="#242135"
              width="24vh"
              height="6.25vh"
              fontSize="1.667vh"
              fontColor="#fff"
              margin="0 0 0 3vh"
              type="dark-btn"
              :clickHandler="() => downloadPdf(flat.pdf.path)"
            >
              <svg class="svg-in-btn" width="3.3vh" height="3.3vh" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.32341 16.7354C6.3881 16.7354 4 14.3146 4 11.3378L4 5.40857C4 2.42692 6.3941 -1.88885e-06 9.33662 -1.6316e-06C9.84664 -1.58702e-06 10.2595 0.419693 10.2595 0.936707C10.2595 1.45372 9.84664 1.87341 9.33662 1.87341C7.41174 1.87341 5.84808 3.45973 5.84808 5.40857L5.84808 11.3378C5.84807 13.2818 7.40694 14.862 9.32341 14.862L10.4527 14.862C10.9627 14.862 11.3767 15.2817 11.3767 15.7987C11.3767 16.3157 10.9627 16.7354 10.4527 16.7354L9.32341 16.7354ZM21.5461 16.7357C21.0373 16.7357 20.6233 16.316 20.6233 15.799C20.6233 15.2819 21.0373 14.8623 21.5461 14.8623L22.6634 14.8623C24.5883 14.8623 26.1519 13.2759 26.1519 11.3259L26.1519 5.39787C26.1519 3.45389 24.5919 1.87366 22.6766 1.87366L13.5382 1.87366C13.0282 1.87366 12.6142 1.45396 12.6142 0.936951C12.6142 0.419938 13.0282 0.000242832 13.5382 0.000242876L22.6766 0.000243675C25.6119 0.000243932 28 2.42108 28 5.39787L28 11.3259C28 14.3087 25.6059 16.7357 22.6634 16.7357L21.5461 16.7357ZM16.3526 23.9292C16.007 24.0739 15.6085 23.9924 15.3445 23.7248L11.8536 20.1702C11.6748 19.9865 11.5836 19.748 11.5836 19.5084C11.5836 19.2687 11.6748 19.0279 11.856 18.8454C12.2184 18.4804 12.8028 18.4804 13.1628 18.8478L15.0757 20.7955L15.0757 8.44795C15.0757 7.93094 15.4897 7.51003 15.9998 7.51003C16.5098 7.51003 16.925 7.93094 16.925 8.44795L16.925 23.063C16.925 23.4426 16.6994 23.7844 16.3526 23.9292ZM19.2734 21.0631C18.9134 21.4317 18.3289 21.4341 17.9665 21.0704C17.7841 20.8867 17.6917 20.6458 17.6917 20.405C17.6917 20.1665 17.7817 19.9281 17.9593 19.7456L18.8342 18.849C19.193 18.4817 19.7786 18.4792 20.1398 18.843C20.5046 19.2079 20.507 19.7991 20.147 20.1677L19.2734 21.0631Z" fill="white"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
    <BackBtn />
  </div>
</template>

<script>
import BackBtn from './BackBtn'
import Button from '@/components/Button'
import gsap, { Power2 } from 'gsap'

export default {
  components: {
    BackBtn,
    Button
  },
  mounted () {
    gsap.to('.flat-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to('.flat-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: Power2.easeInOut })
  },
  methods: {
    openModal () {
      this.$store.commit('toggleModal', 1)
    },
    downloadPdf (src) {
      window.open(src, '_blank')
    }
  },
  computed: {
    id () {
      return +this.$route.params.id
    },
    flat () {
      return this.$store.getters.apartmentList.find(el => +el.id === +this.id)
    },
    flatCountCaption () {
      switch (this.flat.count) {
        case 'one' : return 1
        case 'two' : return 2
        case 'three' : return 3
        case 'studio' : return 'Студия'
        default: return 0
      }
    }
  }
}
</script>

<style scoped>
.flat-wrapper{
  height:100%;
}
.flat{
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10vh 0 1vh 0;
  height:100%;
  position:relative;
  overflow:hidden;
}

.flat img {
  width:100%;
  height:100%;
  object-fit:contain;
}

.flat-footer{
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  height:13.54vh;
  z-index:2;
}

.app-wrapper{
  display:flex;
  height:100%;
  align-items:Center;
  justify-content:space-between;
}

.flat-main{
  flex:1;
  display:flex;
  align-items:Center;
  justify-content:space-between;
}

.plan-title{
  width:25.3vw;
  border-right:1px solid #242135;
  font-size: 2.1vh;
  padding:1.5vh 0;
  color: #242135;
  margin-right:6.5vw;
}

.flat__title{
  font-weight: 500;
  font-size: 1.667vh;
  color: #242135;
  text-align:center;
}

.flat__count{
  font-weight: 600;
  font-size: 3.75vh;
  color: #242135;
  text-align:center;
}

.flat-buttons{
  display:Flex;
}

@media screen and (max-width:1620px){
  .plan-title{
    width:27.8vw;
  }
}

@media screen and (min-height:1200px){
  .flat img {
    width:80%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .plan-title{
    width:auto;
    border-right:none;
  }
}
</style>
