<template>
  <div class="advantages">
    <div class="app-wrapper">
      <div class="mobile-toggler" @click="toggleOpen">
        <span>
          Преимущества
        </span>
        <svg ref="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="9" width="20" height="2" rx="1" fill="white"/>
          <rect x="11" width="20" height="2" rx="1" transform="rotate(90 11 0)" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="mobile-content" ref="content">
      <img class="advantages-img" src="/img/mainPage/advantage1.png" alt="">
      <h3 class="advantage-title">Просторные колясочные и велосипедные зоны</h3>
      <p class="advantage-text">В холлах ЖК «Бруклин» предусмотрено все для комфортной жизни. Коляску или велосипед Вы можете оставить
        в специальн о предусмотренном для этого месте на первом этаже.
      </p>
      <img class="advantages-img" src="/img/mainPage/advantage2.png" alt="">
      <h3 class="advantage-title">Благоустройство двора</h3>
      <p class="advantage-text">Игровые комплексы для детей разных возрастов и спортивные площадки создают единый ландшафт.
        Двор тихий и спокойный. В нём не слышно шума дорог
      </p>
      <img class="advantages-img" src="/img/mainPage/advantage3.png" alt="">
      <h3 class="advantage-title">Уютные планировочные решения</h3>
      <p class="advantage-text">В ЖК «Бруклин» использованы современные продуманные планировки с европейским типом разделения
        пространства, здесь каждый найдет для себя функциональную квартиру
      </p>
      <img class="advantages-img" src="/img/mainPage/advantage4.png" alt="">
      <h3 class="advantage-title">Безопасная среда</h3>
      <p class="advantage-text">Закрытая территория двора без доступа посторонних и автомобилей обеспечит безопасность Вашей семьи.
      </p>
      <img class="advantages-img" src="/img/mainPage/advantage5.png" alt="">
      <h3 class="advantage-title">Витражное остекление</h3>
      <p class="advantage-text">Добавит в квартиру больше света и позволит в полной мере наслаждаться видом из окна
      </p>
      <img class="advantages-img" src="/img/mainPage/advantage6.png" alt="">
      <h3 class="advantage-title">Дизайнерские холлы и коридоры</h3>
      <p class="advantage-text">Авторский дизайн-проект выполнен из материалов премиум-класса и не оставит
        равнодушными ни жильцов, ни их гостей.
      </p>
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
.advantages{
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

.advantages-img{
  width:100%;
  height:180px;
  object-fit:cover;
  display:block;
  border-top:3px solid #EA8E79;
  border-bottom:3px solid #EA8E79;
  margin-bottom:37px;
}

.mobile-content{
  position:relative;
  overflow:hidden;
  background:#fff;
}

.advantage-title{
  font-weight: bold;
  font-size: 16px;
  line-height: 160%;
  text-transform: uppercase;
  color: #242135;
  text-align:center;
  padding:0 20px;
  margin-bottom:18px;
}

.advantage-text{
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: #242135;
  padding:0 20px;
  margin-bottom:75px;
}
</style>
