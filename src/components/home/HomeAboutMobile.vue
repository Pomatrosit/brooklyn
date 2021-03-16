<template>
  <div class="about">
    <div class="app-wrapper">
      <div class="mobile-toggler" @click="toggleOpen">
        <span>
          О комплексе
        </span>
        <svg ref="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="9" width="20" height="2" rx="1" fill="white"/>
          <rect x="11" width="20" height="2" rx="1" transform="rotate(90 11 0)" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="mobile-content" ref="content">
      <img class="about-img" src="/img/mainPage/homeAboutBg.png" alt="">
      <div class="app-wrapper">
        <svg class="about__back2" width="263" height="219" viewBox="0 0 263 219" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M85.9058 219C69.2789 219 54.3968 214.591 41.2594 205.774C28.3274 196.956 18.1665 184.346 10.7767 167.941C3.59224 151.331 0 131.851 0 109.5C0 87.1489 3.59224 67.7711 10.7767 51.3666C18.1665 34.757 28.3274 22.0435 41.2594 13.2261C54.3968 4.4087 69.2789 0 85.9058 0C102.533 0 117.312 4.4087 130.244 13.2261C143.382 22.0435 153.645 34.757 161.035 51.3666C168.425 67.7711 172.12 87.1489 172.12 109.5C172.12 131.851 168.425 151.331 161.035 167.941C153.645 184.346 143.382 196.956 130.244 205.774C117.312 214.591 102.533 219 85.9058 219ZM85.9058 198.699C98.4274 198.699 109.409 195.213 118.852 188.242C128.5 181.27 135.992 171.119 141.329 157.791C146.666 144.462 149.335 128.365 149.335 109.5C149.335 90.6348 146.666 74.5379 141.329 61.2093C135.992 47.8806 128.5 37.7303 118.852 30.7584C109.409 23.7865 98.4274 20.3006 85.9058 20.3006C73.3843 20.3006 62.2997 23.7865 52.652 30.7584C43.2095 37.7303 35.8198 47.8806 30.4827 61.2093C25.1457 74.5379 22.4772 90.6348 22.4772 109.5C22.4772 128.365 25.1457 144.462 30.4827 157.791C35.8198 171.119 43.2095 181.27 52.652 188.242C62.2997 195.213 73.3843 198.699 85.9058 198.699Z" fill="white" fill-opacity="0.02"/>
          <path d="M263 1.8455V217.154H240.831V21.5309H190.026V1.8455H263Z" fill="white" fill-opacity="0.02"/>
        </svg>
        <h2 class="about__title" ref="aboutTitle">
          <span class="white-text">Новый концептуальный </span><br/>
          <span class="pink-text">жилой комплекс в Астрахани</span>
        </h2>
        <p class="about__text"><strong>Благородство и достоинство </strong> архитектурного проекта столь же гармоничны, сколь удобно его внутреннее устройство.
          Все: от особенностей отделки до обустройства придомовой территории — продумано и функционально.<br><br/>
          <strong>Жилой Квартал «Бруклин» </strong> - отличный выбор для тех, кто хочет совместить жизнь в тихом районе и максимальную доступность
          объектов инфраструктуры. Все: от особенностей отделки до обустройства придомовой территории — продумано и функционально.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data: () => ({
    isOpen: false
  }),
  methods: {
    toggleOpen () {
      $(this.$refs.content).slideToggle(1000)
      $(this.$refs.plus).toggleClass('rotate')
    }
  },
  mounted () {
    $(this.$refs.content).slideToggle(0)
  }
}
</script>

<style scoped>
.about{
  background:#242135;
}

.mobile-toggler{
  display:flex;
  align-items:Center;
  justify-content:space-between;
  padding:30px 0;
  border-top:1px solid #fff;
  cursor:pointer;
}

.mobile-toggler span{
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
}

.mobile-toggler svg{
  transition:0.5s;
}

.rotate{
  transform:rotate(45deg);
}

.about-img{
  width:100%;
  height:340px;
  object-fit:cover;
}

.about__title{
  margin-top:60px;
  font-size:18px;
  text-transform:uppercase;
  margin-bottom:30px;
}

.mobile-content{
  position:relative;
  overflow:hidden;
}

.about__back2{
  position:absolute;
  top:390px;
  right:20px;
}

.about__text{
  font-size: 16px;
  line-height: 160%;
  color: #FFFFFF;
  padding-bottom:80px;
}
</style>
