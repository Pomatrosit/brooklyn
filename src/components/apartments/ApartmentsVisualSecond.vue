<template>
  <div>
        <p class="title apartments-visual-second-animated">Выбран {{id}}й подъезд</p>
        <BackBtn />
        <div class="sections apartments-visual-second-animated">
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
        <p class="subtitle apartments-visual-second-animated">Выберите планировку</p>
        <div class="entrance-and-legend">
          <div v-if="id === 1" class="entrance entrance1 apartments-visual-second-animated">
            <svg viewBox="0 0 805 386" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                v-for="path in flats[0]"
                :key="path.id"
                :d="path.d"
                :fill="path.fill"
                fill-opacity="0.1"
                @click="$router.push('/flat/' + path.id)"
              />
            </svg>
          </div>
          <div v-else-if="id === 2" class="entrance entrance2 apartments-visual-second-animated">
            <svg viewBox="0 0 691 386" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                v-for="path in flats[1]"
                :key="path.id"
                :d="path.d"
                :fill="path.fill"
                fill-opacity="0.1"
                @click="$router.push('/flat/' + path.id)"
              />
            </svg>
          </div>
          <div v-else-if="id === 3" class="entrance entrance3 apartments-visual-second-animated">
            <svg viewBox="0 0 805 386" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                v-for="path in flats[2]"
                :key="path.id"
                :d="path.d"
                :fill="path.fill"
                fill-opacity="0.1"
                @click="$router.push('/flat/' + path.id)"
              />
            </svg>
          </div>
          <MapLegend class="apartments-visual-second-animated"/>
        </div>
  </div>
</template>

<script>
import CheckMark from '@/components/svg/CheckMark'
import MapLegend from './MapLegend'
import BackBtn from './BackBtn'
import gsap, { Power2 } from 'gsap'

export default {
  name: 'ApartmentsVisualSecond',
  components: {
    CheckMark,
    MapLegend,
    BackBtn
  },
  computed: {
    id () {
      return +this.$route.params.id
    }
  },
  data: () => ({
    flats: [
      [
        { id: 1, d: 'M495 384.5H630V180.5H549.5V173.5H495V384.5Z', fill: '#A0A2AB' },
        { id: 2, d: 'M266 136.5V1H0V235H89.5V209V186H128.5V131.5H198V136.5H266Z', fill: '#F7BFB3' },
        { id: 3, d: 'M1.5 234H85V185H130V179.5H268V173.5H316V385H1.5V234Z', fill: '#F7BFB3' },
        { id: 4, d: 'M717.5 129H644V180.5H630V384.5H806V0.5H717.5V129Z', fill: '#F7BFB3' },
        { id: 5, d: 'M544 0.5H717.5V129.5H544V0.5Z', fill: '#A0A2AB' },
        { id: 6, d: 'M316 385V173.5H343V180H447V173.5H495V385H316Z', fill: '#DFE0E0' }
      ],
      [
        { id: 6, d: 'M209 131.5V0H0.5V385.5H89V185.5H153V131.5H209Z', fill: '#F7BFB3' },
        { id: 7, d: 'M153 185.5H89V386H258V173.5H153V185.5Z', fill: '#DFE0E0' },
        { id: 8, d: 'M485 131.5V0H690.5V385.5H605V185.5H541V131.5H485Z', fill: '#F7BFB3' },
        { id: 9, d: 'M541 185.5H605V386H436V173.5H541V185.5Z', fill: '#DFE0E0' },
        { id: 10, d: 'M436 173.5H258V385.5H436V173.5Z', fill: '#DFE0E0' }
      ],
      [
        { id: 11, d: 'M0.5 385.5V0.5H262.5V137.5H194.5V130H177V385.5H0.5Z', fill: '#C5D2BD' },
        { id: 12, d: 'M805 235V0.5H543V131H611H628.5H678.5V186H723.5V235H805Z', fill: '#F7BFB3' },
        { id: 13, d: 'M177 385.5V180H284.5V174H312V385.5H177Z', fill: '#A6A7AF' },
        { id: 14, d: 'M492 385.5V180V174H544.5V180H592V385.5H492Z', fill: '#A6A7AF' },
        { id: 15, d: 'M492 385.5H312V174H360V180H464.5V174H492V385.5Z', fill: '#DFE0E0' },
        { id: 16, d: 'M805 385.5H592V174H618.5V180H678.5V186H723.5V235H805V385.5Z', fill: '#DFE0E0' }
      ]
    ]
  }),
  methods: {
    changeEntrance (id) {
      if (id !== this.id) this.$router.push(`/apartments/visual/${id}`)
    },
    goBack () {
      this.$router.push('/apartments/visual')
    }
  },
  mounted () {
    gsap.to('.apartments-visual-second-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to('.apartments-visual-second-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: Power2.easeInOut })
  },
  updated () {
    gsap.to('.entrance', { opacity: 0, duration: 0 })
    gsap.to('.entrance', { opacity: 1, duration: 1, ease: Power2.easeInOut })
  }
}
</script>

<style scoped>
.title{
  font-weight: 500;
  font-size: 1.667vh;
  color: #242135;
  margin-bottom:1.5vh;
  padding-top:7.9vh;
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

.entrance-and-legend{
  display:Flex;
  justify-content:space-between;
  align-items:flex-start;
  padding-bottom:6.25vh;
}

.entrance{
  width:72%;
}

.entrance2{
  width:61%;
}

.entrance svg{
  width:100%;
  height:100%;
}

.entrance path{
  transition:0.3s;
}

.entrance1{
  background:url('/img/apartments/ent1.png') center / cover;
}
.entrance2{
  background:url('/img/apartments/ent2.png') center / cover;
}
.entrance3{
  background:url('/img/apartments/ent3.png') center / cover;
}

@media (hover:hover){
  .entrance path:hover{
    fill-opacity:0.3;
    cursor:pointer;
  }
}
</style>
