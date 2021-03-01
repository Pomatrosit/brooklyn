<template>
  <section class="apartments-visual-first">
    <div class="app-wrapper">
      <div class="titles">
        <span class="title title1">Первый подъезд</span>
        <span class="title title2">Второй подъезд</span>
        <span class="title title3">Третий подъезд</span>
      </div>
      <div class="sections">
        <div class="section section1">
          <img src="/img/apartments/section1.png" alt="first entrance">
          <div class="section-after">
            <span>Подробнее</span>
            <WhiteArrow />
          </div>
        </div>
        <div class="section section2">
          <img src="/img/apartments/section1.png" alt="first entrance">
          <div class="section-after">
            <span>Подробнее</span>
            <WhiteArrow />
          </div>
        </div>
        <div class="section section3">
          <img src="/img/apartments/section1.png" alt="first entrance">
          <div class="section-after">
            <span>Подробнее</span>
            <WhiteArrow />
          </div>
        </div>
      </div>
      <div class="count-titles">
        <span class="count-title count-title1">Количество квартир</span>
        <span class="count-title count-title2">Количество квартир</span>
        <span class="count-title count-title3">Количество квартир</span>
      </div>
      <div class="counts">
        <span class="count count1">16</span>
        <span class="count count2">21</span>
        <span class="count count3">7</span>
      </div>
    </div>
  </section>
</template>

<script>
import WhiteArrow from '@/components/svg/WhiteArrow'

export default {
  name: 'ApartmentsFirst',
  components: {
    WhiteArrow
  }
}
</script>

<style scoped>
.apartments-visual-first{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:0;
  padding:10.42vh 0 13.54vh 0;
}

.app-wrapper{
  padding:14.58vh 6.25vh 0 calc(67.55vh - 5vw);
  height:100%;
  background: rgba(36, 33, 53, 0.02);
}

.sections, .titles, .count-titles, .counts{
  display:flex;
  align-items:center;
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
  width:30.6%;
}

.section3, .title3, .count-title3, .count3{
  width:34.4%;
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

@media screen and (max-width:1620px){
  .app-wrapper{
    padding:14.58vh 6.25vh 0 calc(67.55vh - 2.5vw);
  }
}

</style>
