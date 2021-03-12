<template>
    <div>
      <div class="titles apartments-visual-first-animated" >
        <span class="title title1">Первый подъезд</span>
        <span class="title title2">Второй подъезд</span>
        <span class="title title3">Третий подъезд</span>
      </div>
      <div class="sections apartments-visual-first-animated">
        <div class="section section1" @click = "nextStep(1)">
          <img src="/img/apartments/section1.png" alt="first entrance">
          <div class="section-after">
            <span>Подробнее</span>
            <WhiteArrow />
          </div>
        </div>
        <div class="section section2" @click = "nextStep(2)">
          <img src="/img/apartments/section1.png" alt="first entrance">
          <div class="section-after">
            <span>Подробнее</span>
            <WhiteArrow />
          </div>
        </div>
        <div class="section section3" @click = "nextStep(3)">
          <img src="/img/apartments/section1.png" alt="first entrance">
          <div class="section-after">
            <span>Подробнее</span>
            <WhiteArrow />
          </div>
        </div>
      </div>
      <div class="count-titles apartments-visual-first-animated">
        <span class="count-title count-title1">Количество квартир</span>
        <span class="count-title count-title2">Количество квартир</span>
        <span class="count-title count-title3">Количество квартир</span>
      </div>
      <div class="counts apartments-visual-first-animated">
        <span class="count count1">16</span>
        <span class="count count2">21</span>
        <span class="count count3">7</span>
      </div>
    </div>
</template>

<script>
import WhiteArrow from '@/components/svg/WhiteArrow'
import gsap, { Power2 } from 'gsap'

export default {
  name: 'ApartmentsVisualFirst',
  components: {
    WhiteArrow
  },
  methods: {
    nextStep (id) {
      this.$router.push(`/apartments/visual/${id}`)
    }
  },
  mounted () {
    gsap.to('.apartments-visual-first-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to('.apartments-visual-first-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: Power2.easeInOut, delay: 2 })
  }
}
</script>

<style scoped>
.sections, .titles, .count-titles, .counts{
  display:flex;
  align-items:center;
}

.titles{
  padding-top:14.5vh;
}

.sections{
  margin-bottom: 5.416vh;
  align-items:stretch;
}

.section{
  cursor:pointer;
  position:relative;
  display:block;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  border:0.52vh solid #242135;
}

.section2, .section3{
  border-left:none;
}

.section img{
  width:100%;
}

.section2 img{
  height:100%;
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
  transition:0.3s;
  opacity:0;
}

.section-after span{
  font-weight: 600;
  font-size:2.5vh;
  margin-right:2.8vh;
  color: #FFFFFF;
}

.section1, .title1, .count-title1, .count1{
  width:35%;
}

.section2, .title2, .count-title2, .count2{
  width:30.5%;
}

.section3, .title3, .count-title3, .count3{
  width:34.5%;
}

.titles{
  margin-bottom: 3.125vh;
}

.title{
  font-weight: 500;
  font-size: 2.08vh;
  color: #242135;
  text-align:center;
}

.count-titles{
  margin-bottom:4.15vh;
}

.count-title{
  font-size: 1.875vh;
  color: #242135;
  text-align:center;
}

.count{
  font-weight: bold;
  font-size: 5.8vh;
  color: #242135;
  text-align:center;
}

@media(hover:hover){
  .section:hover .section-after{
    opacity:1;
  }
}

</style>
