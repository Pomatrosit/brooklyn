<template>
  <div class="infrastructure">
    <div class="app-wrapper">
      <div class="mobile-toggler" @click="toggleOpen">
        <span>
          Инфраструктура
        </span>
        <svg ref="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="9" width="20" height="2" rx="1" fill="white"/>
          <rect x="11" width="20" height="2" rx="1" transform="rotate(90 11 0)" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="mobile-content" ref="content">
      <div class="app-wrapper">
        <p class="infrastructure__title">Рядом с ЖК Бруклин находится всё необходимое для комфортной жизни</p>
        <div class="nav-rows">
        <div class="nav__row"
          v-for="el in nav"
          :key="el.id"
          @click="changeNavHandler(el.id)"
          :class="{active_nav_item : currentNavItem === el.id}"
        >
          <div class="nav__img">
            <svg width="19" v-if="el.id === 1" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 0V8H19C19 3.58 15.42 0 11 0ZM17.32 13.89C18.4094 12.4928 19.0007 10.7717 19 9H4.44L3.49 7H0V9H2.22C2.22 9 4.11 13.07 4.34 13.42C3.24 14.01 2.5 15.17 2.5 16.5C2.5 18.43 4.07 20 6 20C7.76 20 9.22 18.7 9.46 17H11.54C11.78 18.7 13.24 20 15 20C16.93 20 18.5 18.43 18.5 16.5C18.5 15.46 18.04 14.53 17.32 13.89ZM6 18C5.17 18 4.5 17.33 4.5 16.5C4.5 15.67 5.17 15 6 15C6.83 15 7.5 15.67 7.5 16.5C7.5 17.33 6.83 18 6 18ZM15 18C14.17 18 13.5 17.33 13.5 16.5C13.5 15.67 14.17 15 15 15C15.83 15 16.5 15.67 16.5 16.5C16.5 17.33 15.83 18 15 18Z"
              :style="{fill: currentNavItem === 1 ? 'white' : '#4C4A56'}"/>
            </svg>
            <svg v-else-if="el.id === 2" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 12.3149L4 8.80029V12.5836L10 16.0003L16 12.5836V8.80029L10 12.3149Z"
              :style="{fill: currentNavItem === 2 ? 'white' : '#4C4A56'}"/>
              <path d="M20 5.5382L10 0L0 5.5382L10 11.0764L18.1171 6.58094V12.7999H19.9902V5.5435L20 5.5382Z"
              :style="{fill: currentNavItem === 2 ? 'white' : '#4C4A56'}"/>
            </svg>
            <svg v-else-if="el.id === 3" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.7778 0.0703125H2.22222C1 0.0703125 0.0111111 1.07031 0.0111111 2.29253L0 17.8481C0 19.0703 1 20.0703 2.22222 20.0703H17.7778C19 20.0703 20 19.0703 20 17.8481V2.29253C20 1.07031 19 0.0703125 17.7778 0.0703125ZM16.6667 12.2925H12.2222V16.737H7.77778V12.2925H3.33333V7.84809H7.77778V3.40365H12.2222V7.84809H16.6667V12.2925Z"
              :style="{fill: currentNavItem === 3 ? 'white' : '#4C4A56'}"/>
            </svg>
            <svg v-else-if="el.id === 4" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.26144 6.63281L7.22822 0.0703125H2.2L0.099 5.69531C0.0342222 5.89531 0 6.10281 0 6.32031C0 7.70031 1.40556 8.82031 3.14233 8.82031C4.74344 8.82031 6.06711 7.86531 6.26144 6.63281ZM11 8.82031C12.7356 8.82031 14.1423 7.70031 14.1423 6.32031C14.1423 6.26906 14.1387 6.21781 14.1362 6.16906L13.5141 0.0703125H8.48589L7.86256 6.16406C7.86011 6.21531 7.85767 6.26656 7.85767 6.32031C7.85767 7.70031 9.26444 8.82031 11 8.82031ZM17.1111 10.1278V15.0703H4.88889V10.1353C4.35356 10.3328 3.76444 10.4453 3.14233 10.4453C2.904 10.4453 2.673 10.4166 2.44444 10.3841V18.3203C2.44444 19.2828 3.21322 20.0703 4.15311 20.0703H17.8444C18.7856 20.0703 19.5556 19.2816 19.5556 18.3203V10.3853C19.3245 10.4216 19.0914 10.4421 18.8577 10.4466C18.2617 10.4459 17.6705 10.3381 17.1111 10.1278ZM21.9022 5.69531L19.7988 0.0703125H14.7718L15.7373 6.62281C15.9256 7.86031 17.2492 8.82031 18.8577 8.82031C20.5932 8.82031 22 7.70031 22 6.32031C22 6.10281 21.9658 5.89531 21.9022 5.69531Z" :style="{fill: currentNavItem === 4 ? 'white' : '#4C4A56'}"/>
            </svg>
            <svg v-else-if="el.id === 5" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.81 4.35034C0.67 5.97034 0 7.94034 0 10.0703C0 12.2003 0.67 14.1703 1.81 15.7903C4.23 15.0203 6 12.7503 6 10.0703C6 7.39034 4.23 5.12034 1.81 4.35034ZM18.19 4.35034C15.77 5.12034 14 7.39034 14 10.0703C14 12.7503 15.77 15.0203 18.19 15.7903C19.33 14.1703 20 12.2003 20 10.0703C20 7.94034 19.33 5.97034 18.19 4.35034Z"
              :style="{fill: currentNavItem === 5 ? 'white' : '#4C4A56'}"/>
              <path d="M12 10.0703C12 6.79031 13.97 3.98031 16.79 2.74031C15.01 1.09031 12.63 0.0703125 9.99996 0.0703125C7.36996 0.0703125 4.98996 1.09031 3.20996 2.74031C6.02996 3.98031 7.99996 6.79031 7.99996 10.0703C7.99996 13.3503 6.02996 16.1603 3.20996 17.4003C4.98996 19.0503 7.36996 20.0703 9.99996 20.0703C12.63 20.0703 15.01 19.0503 16.79 17.4003C15.3657 16.7761 14.1541 15.7504 13.3034 14.4486C12.4527 13.1468 11.9998 11.6254 12 10.0703Z"
              :style="{fill: currentNavItem === 5 ? 'white' : '#4C4A56'}"/>
            </svg>
            <svg v-else width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15.4636L5 11.0703V15.7995L12.5 20.0703L20 15.7995V11.0703L12.5 15.4636Z"
              :style="{fill: currentNavItem === 6 ? 'white' : '#4C4A56'}"/>
              <path d="M25 6.9931L12.5 0.0703125L0 6.9931L12.5 13.9159L22.6463 8.29653V16.0703H24.9878V6.99972L25 6.9931Z"
              :style="{fill: currentNavItem === 6 ? 'white' : '#4C4A56'}"/>
            </svg>
          </div>
          <p class="nav__title">{{ el.label }}</p>
          <div class="nav__checkbox">
            <div class="nav__checkbox-inner"></div>
          </div>
        </div>
        </div>
      </div>

        <div @wheel.stop
          id="infrastructure__map"
          class="infrastructure__map"
          ref="map"
        >
        <yandex-map
          :settings="settings"
          :coords="centerCoords"
          :zoom="14"
         >
           <div ref="mapInner">
             <ymap-marker
               marker-id="1"
               :coords="brooklynCoords"
               :icon="{ color: 'red', content: 'ЖК Бруклин'}"
             />

             <ymap-marker
               v-for="(coords, idx) in nav[currentNavItem - 1].coords"
               :key="idx"
               marker-id="2"
               :coords="coords"
             />
         </div>
        </yandex-map>
        </div>

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  components: {
    yandexMap,
    ymapMarker
  },
  data: () => ({
    isOpen: false,
    nav: [
      { id: 1, label: 'Детские сады', coords: [[46.32726207445324, 48.02318049999988], [46.32789707445488, 48.01947949999993], [46.32349707444354, 48.03649349999998]] },
      { id: 2, label: 'Школы', coords: [[46.32409407444506, 48.02444699999997], [46.332103574439515, 48.02516549999994], [46.32515207444783, 48.03575699999998]] },
      { id: 3, label: 'Здравоохранение', coords: [[46.3329245046788, 48.026279999999915], [46.33629757445034, 48.02255149999996], [46.33608550467928, 48.034868], [46.33071557443597, 48.04165], [46.32326007444297, 48.0226505], [46.325820974448544, 48.02168049999995], [46.327015434295596, 48.02284374306107]] },
      { id: 4, label: 'Супермаркеты', coords: [[46.3200365744608, 48.0195425], [46.338288574455454, 48.02316249999991], [46.33097707446277, 48.048279499999964], [46.340528074435035, 48.02300099999997], [46.323596074443785, 48.02294699999999], [46.32650307445132, 48.021536499999996], [46.32739307445355, 48.02124899999994], [46.32538257447455, 48.032594999999944]] }
      // { id: 5, label: 'Спорт', coords: [] },
      // { id: 6, label: 'Транспорт', coords: [] }
    ],
    currentNavItem: 4,
    centerCoords: [
      46.329099, 48.028477
    ],
    brooklynCoords: [
      46.324099, 48.026477
    ],
    settings: {
      apiKey: 'dbdccdc4-2977-40f2-9cc3-07dc75ba9931',
      lang: 'ru_RU',
      coordorder: 'latlong',
      version: '2.1'
    },
    map: null
  }),
  methods: {
    toggleOpen () {
      $(this.$refs.content).slideToggle(1000)
      $(this.$refs.plus).toggleClass('rotate')
    },
    changeNavHandler (id) {
      this.currentNavItem = id
    }
  },
  mounted () {
    $(this.$refs.content).slideToggle(0)
  }
}
</script>

<style scoped>
.infrastructure{
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

.infrastructure__title{
  font-weight: normal;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: #242135;
  margin-top:39px;
  padding-bottom:35px;
  border-bottom:1px solid #242135;
  margin-bottom:43px;
}

.mobile-content{
  position:relative;
  overflow:hidden;
  background:#fff;
}

.infrastructure__back2{
  position:absolute;
  top:390px;
  right:20px;
}

.nav__row{
  display:flex;
  align-items:center;
  margin-bottom:15px;
  cursor:pointer;
}

.nav-rows{
  margin-bottom:40px;
}

.nav__title{
  font-size: 13px;
  color: #424242;
  flex-grow:1;
}

.nav__checkbox{
  width: 15px;
  height: 15px;
  min-width:15px;
  border-radius:50%;
  border: 3px solid #D1D1D1;
  display:flex;
  align-items:center;
  justify-content:center;
}

.nav__checkbox-inner{
  background:#EA8E79;
  width:5px;
  height:5px;
  border-radius:50%;
  opacity:0;
}

.active_nav_item .nav__img{
  background:#EA8E79;
}

.active_nav_item .nav__checkbox-inner{
  opacity:1;
}

.nav__img{
  width: 35px;
  height: 35px;
  min-width:35px;
  border-radius:50%;
  background: #EBEBEB;
  margin-right:12px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.infrastructure__map{
  height:430px;
  position:relative;
  overflow:hidden;
}
</style>
