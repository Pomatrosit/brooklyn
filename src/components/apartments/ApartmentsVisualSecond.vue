<template>
  <div>
    <section class="apartments-visual-second">
      <div class="app-wrapper">
        <p class="title">Выбран {{id}}й подъезд</p>
        <div class="sections">
          <div class="section section1" @click="changeEntrance(1)">
            <img src="/img/apartments/section1.png" alt="first entrance">
            <div v-if="+id === 1" class="section-after"><CheckMark /></div>
          </div>
          <div class="section section2" @click="changeEntrance(2)">
            <img src="/img/apartments/section1.png" alt="first entrance">
            <div v-if="+id === 2" class="section-after"><CheckMark /></div>
          </div>
          <div class="section section3" @click="changeEntrance(3)">
            <img src="/img/apartments/section1.png" alt="first entrance">
            <div v-if="+id === 3" class="section-after"><CheckMark /></div>
          </div>
        </div>

        <p class="subtitle">Выберите планировку</p>

        <div class="back" @click="goBack">
          <span class="back__label">Вернуться обратно</span>
          <span class="back__btn"><SliderArrowLeft fill="#EFEFEF" width="50vh" height="2.08vh"/></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CheckMark from '@/components/svg/CheckMark'
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'

export default {
  name: 'ApartmentsVisualSecond',
  components: {
    CheckMark,
    SliderArrowLeft
  },
  computed: {
    id () {
      return +this.$route.params.id
    }
  },
  methods: {
    changeEntrance (id) {
      if (id !== this.id) this.$router.push(`/apartments/visual/${id}`)
    },
    goBack () {
      this.$router.push('/apartments/visual')
    }
  }
}
</script>

<style scoped>
.apartments-visual-second{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:0;
  padding:10.42vh 0 13.54vh 0;
}

.app-wrapper{
  padding:7.8vh 6.25vh 0 calc(67.55vh - 5vw);
  height:100%;
  background: rgba(36, 33, 53, 0.02);
  position:relative;
}

.title{
  font-weight: 500;
  font-size: 1.667vh;
  color: #242135;
  margin-bottom:1.5vh;
}

.sections{
  display:flex;
  width:37.5vh;
  height:6.5vh;
  margin-bottom: 5.2vh;
}

.section-after{
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  background: rgba(36, 33, 53, 0.38);
  display:flex;
  align-items:center;
  justify-content:center;
}

.section{
  border: 2px solid #242135;
  cursor:pointer;
  position:relative;
}

.section1{
  width:35%;
}

.section2{
  width:30.6%;
}

.section3{
  width:34.4%;
}

.section img{
  width:100%;
  height:100%;
}

.section2, .section3{
  border-left:none;
}

.subtitle{
  font-weight: 500;
  font-size: 1.667vh;
  color: #242135;
  margin-bottom:1.5625vh;
}

.back{
  position:absolute;
  top:0;
  right:0;
  display:flex;
  align-items:center;
}

.back__label{
  font-weight: 500;
  font-size: 2.1vh;
  color: #242135;
  margin-right:3.54vh;
}

.back__btn{
  display:flex;
  align-items:center;
  justify-content:center;
  width:8.3vh;
  height:8.3vh;
  background:#242135;
  cursor:pointer;
}

@media screen and (max-width:1620px){
  .app-wrapper{
    padding:7.8vh 6.25vh 0 calc(67.55vh - 2.5vw);
  }
}
</style>
