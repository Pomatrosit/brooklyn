<template>
  <section class="infrastructure" ref="infrastructure">
    <div class="app-wrapper">
      <div class="infrastructure__first" ref="first">

        <div class="infrastructure__nav">
          <h2 class="infrastructure__title" ref="title">Объекты инфраструкруты</h2>
          <div class="nav__main">

            <div class="nav__row"
              v-for="el in nav"
              :key="el.id"
              @click="changeNavHandler(el.id)"
              :class="{'active_nav_item' : currentNavItem === el.id}"
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

        <svg ref="shapes" class="bg1" width="960" height="732" viewBox="0 0 960 732" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M482 1L959 366L482 731M241 1L718 366L241 731M361 1L839 366L361 731M120 1L598 366L120 731M421 1L898 366L421 731M180 1L657 366L180 731M301 1L778 366L301 731M60 1L537 366L60 731M462 1L939 366L462 731M221 1L698 366L221 731M342 1L819 366L342 731M101 1L578 366L101 731M401 1L878 366L401 731M160 1L637 366L160 731M281 1L758 366L281 731M40 1L517 366L40 731M442 1L919 366L442 731M201 1L678 366L201 731M322 1L799 366L322 731M81 1L558 366L81 731M381 1L858 366L381 731M140 1L617 366L140 731M261 1L738 366L261 731M20 1L497 366L20 731M0 1L477 366L0 731" stroke="#2C2B32" stroke-opacity="0.03"/>
        </svg>

        <svg ref="number" class="bg2" width="335" height="214" viewBox="0 0 335 214" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M83.7 213.6C67.5 213.6 53 209.3 40.2 200.7C27.6 192.1 17.7 179.8 10.5 163.8C3.5 147.6 0 128.6 0 106.8C0 85 3.5 66.1 10.5 50.1C17.7 33.9 27.6 21.5 40.2 12.9C53 4.3 67.5 0 83.7 0C99.9 0 114.3 4.3 126.9 12.9C139.7 21.5 149.7 33.9 156.9 50.1C164.1 66.1 167.7 85 167.7 106.8C167.7 128.6 164.1 147.6 156.9 163.8C149.7 179.8 139.7 192.1 126.9 200.7C114.3 209.3 99.9 213.6 83.7 213.6ZM83.7 193.8C95.9 193.8 106.6 190.4 115.8 183.6C125.2 176.8 132.5 166.9 137.7 153.9C142.9 140.9 145.5 125.2 145.5 106.8C145.5 88.4 142.9 72.7 137.7 59.7C132.5 46.7 125.2 36.8 115.8 30C106.6 23.2 95.9 19.8 83.7 19.8C71.5 19.8 60.7 23.2 51.3 30C42.1 36.8 34.9 46.7 29.7 59.7C24.5 72.7 21.9 88.4 21.9 106.8C21.9 125.2 24.5 140.9 29.7 153.9C34.9 166.9 42.1 176.8 51.3 183.6C60.7 190.4 71.5 193.8 83.7 193.8Z" fill="#FBFBFB"/>
          <path d="M267.103 91.8C289.103 93 305.803 99 317.203 109.8C328.803 120.4 334.603 134.3 334.603 151.5C334.603 163.5 331.703 174.2 325.903 183.6C320.103 192.8 311.503 200.1 300.103 205.5C288.703 210.9 274.803 213.6 258.403 213.6C243.203 213.6 228.803 211.2 215.203 206.4C201.803 201.4 191.003 194.8 182.803 186.6L193.303 169.5C200.303 176.7 209.603 182.6 221.203 187.2C232.803 191.6 245.203 193.8 258.403 193.8C275.603 193.8 288.903 190.1 298.303 182.7C307.703 175.1 312.403 164.7 312.403 151.5C312.403 138.5 307.703 128.3 298.303 120.9C288.903 113.5 274.703 109.8 255.703 109.8H240.703V93.9L298.903 21H191.503V1.8H326.503V17.1L267.103 91.8Z" fill="#FBFBFB"/>
        </svg>

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
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import gsap, { Power2 } from 'gsap'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: 'HomeInfrastructure',
  computed: mapGetters(['homeSlide']),
  components: {
    yandexMap,
    ymapMarker
  },
  watch: {
    homeSlide (homeSlide, prevHomeSlide) {
      if (homeSlide === 4) {
        gsap.to(this.$refs.infrastructure, { x: 0, padding: '10.42vh 0 13.54vh 0', duration: 0, delay: 1 })
        gsap.to(this.$refs.first, { y: 0, opacity: 1, duration: 1, ease: Power2.easeInOut, delay: 1 })
        gsap.to(this.$refs.map, { y: 0, opacity: 1, duration: 1, ease: Power2.easeInOut, delay: 1.2 })
        gsap.to(this.$refs.title, { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 2 })
        gsap.to(this.$refs.shapes, { opacity: 1, x: 0, duration: 1, ease: Power2.easeInOut, delay: 2.2 })
        gsap.to(this.$refs.number, { opacity: 1, x: 0, duration: 1, ease: Power2.easeInOut, delay: 2.6 })
        gsap.to('.nav__row', { opacity: 1, y: 0, duration: 1, ease: Power2.easeInOut, delay: 2.2, stagger: 0.1 })
      }
      if (prevHomeSlide === 4) {
        if (homeSlide === 5) {
          gsap.to(this.$refs.infrastructure, { x: '100%', padding: '0', duration: 0, delay: 1 })
          gsap.to(this.$refs.first, { y: -100, opacity: 0, duration: 1, ease: Power2.easeInOut })
          gsap.to(this.$refs.map, { y: -100, opacity: 0, duration: 1, ease: Power2.easeInOut, delay: 0.2 })
        } else {
          gsap.to(this.$refs.infrastructure, { x: '100%', padding: '0', duration: 0, delay: 1 })
          gsap.to(this.$refs.first, { y: 100, opacity: 0, duration: 1, ease: Power2.easeInOut })
          gsap.to(this.$refs.map, { y: 100, opacity: 0, duration: 1, ease: Power2.easeInOut, delay: 0.2 })
        }
        gsap.to(this.$refs.title, { opacity: 0, y: 100, duration: 0, delay: 1 })
        gsap.to(this.$refs.shapes, { opacity: 0, x: -200, duration: 0, delay: 1 })
        gsap.to(this.$refs.number, { opacity: 0, x: 100, duration: 0, delay: 1 })
        gsap.to('.nav__row', { opacity: 0, y: 100, duration: 0, delay: 1 })
      }
    }
  },
  mounted () {
    gsap.to(this.$refs.infrastructure, { x: '100%', padding: '0', duration: 0 })
    gsap.to(this.$refs.first, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.map, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.title, { opacity: 0, y: 100, duration: 0 })
    gsap.to(this.$refs.shapes, { opacity: 0, x: -200, duration: 0 })
    gsap.to(this.$refs.number, { opacity: 0, x: 100, duration: 0 })
    gsap.to('.nav__row', { opacity: 0, y: 100, duration: 0 })
  },
  data: () => ({
    nav: [
      { id: 1, label: 'Детские сады', coords: [[46.32726207445324, 48.02318049999988], [46.32789707445488, 48.01947949999993], [46.32349707444354, 48.03649349999998]] },
      { id: 2, label: 'Школы', coords: [[46.32409407444506, 48.02444699999997], [46.332103574439515, 48.02516549999994], [46.32515207444783, 48.03575699999998]] },
      { id: 3, label: 'Здравоохранение', coords: [[46.3329245046788, 48.026279999999915], [46.33629757445034, 48.02255149999996], [46.33608550467928, 48.034868], [46.33071557443597, 48.04165], [46.32326007444297, 48.0226505], [46.325820974448544, 48.02168049999995], [46.327015434295596, 48.02284374306107]] },
      { id: 4, label: 'Супермаркеты', coords: [[46.3200365744608, 48.0195425], [46.338288574455454, 48.02316249999991], [46.33097707446277, 48.048279499999964], [46.340528074435035, 48.02300099999997], [46.323596074443785, 48.02294699999999], [46.32650307445132, 48.021536499999996], [46.32739307445355, 48.02124899999994], [46.32538257447455, 48.032594999999944], [46.32623507445059, 48.02249749999998]] }
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
    changeNavHandler (id) {
      this.currentNavItem = id
    }
  }
}
</script>

<style scoped>
.infrastructure{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:#fff;
  padding:10.42vh 0 13.54vh 0;
  display:flex;
  z-index:0.5;
  background:#fff;
}

.app-wrapper{
  display:flex;
}

.infrastructure__first{
  height:100%;
  width:39%;
  padding-right:11.97vh;
  position:relative;
  overflow:hidden;
}

.infrastructure__map{
  height:100%;
  width:61%;
  position:relative;
  overflow:hidden;
}

.infrastructure__nav{
  margin-top:8.334vh;
  position:relative;
  z-index:1;
}

.infrastructure__title{
  font-weight: bold;
  font-size: 3.125vh;
  text-transform: uppercase;
  color: #EA8E79;
  margin-bottom:5.73vh;
}

.nav__img{
  width: 4.16vh;
  height: 4.16vh;
  min-width:4.16vh;
  border-radius:50%;
  background: #EBEBEB;
  margin-right:1.98vh;
  display:flex;
  align-items:center;
  justify-content:center;
}

.nav__row{
  display:flex;
  align-items:center;
  margin-bottom:2.6vh;
  cursor:pointer;
}

.nav__title{
  font-size: 1.875vh;
  color: #424242;
  flex-grow:1;
  transition:0.3s;
}

.nav__checkbox{
  width: 2.08vh;
  height: 2.08vh;
  min-width:2.08vh;
  border-radius:50%;
  border: 0.5vh solid #D1D1D1;
  display:flex;
  align-items:center;
  justify-content:center;
}

.nav__checkbox-inner{
  background:#EA8E79;
  width:0.625vh;
  height:0.625vh;
  border-radius:50%;
  opacity:0;
}

.active_nav_item .nav__img{
  background:#EA8E79;
}

.active_nav_item .nav__title{
  color:#ea8e79;
  text-decoration:underline;
  font-weight:bold;
}

.active_nav_item .nav__checkbox-inner{
  opacity:1;
}

.bg1{
  position:absolute;
  top:0;
  left:0;
  z-index:-1;
}

.bg2{
  position:absolute;
  top:5.2vh;
  right:9.8vh;
  z-index:0;
}

.nav__img svg{
  width:2.08vh;
  height:2.08vh;
}

@media (hover:hover){
  .nav__row:hover .nav__title{
    color:#ea8e79;
  }
  .nav__row:hover svg{
    color:#ea8e79;
  }
}

</style>
