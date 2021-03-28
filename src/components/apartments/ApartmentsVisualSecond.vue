<template>
  <div>
        <p class="title apartments-visual-second-animated">Выбран {{id}}й подъезд</p>
        <BackBtn />
        <div class="sections apartments-visual-second-animated">
          <div class="section section1" @click="changeEntrance(1)">
            <img :src="sections[0].path" alt="first entrance">
            <div v-if="+id === 1" class="section-after"><CheckMark /></div>
          </div>
          <div class="section section2" @click="changeEntrance(2)">
            <img :src="sections[1].path" alt="first entrance">
            <div v-if="+id === 2" class="section-after"><CheckMark /></div>
          </div>
          <div class="section section3" @click="changeEntrance(3)">
            <img :src="sections[2].path" alt="first entrance">
            <div v-if="+id === 3" class="section-after"><CheckMark /></div>
          </div>
        </div>
        <p class="subtitle apartments-visual-second-animated">Выберите планировку</p>
        <div class="entrance-and-legend">
          <div v-if="id === 1" class="entrance entrance1 apartments-visual-second-animated"
            :style="{background: 'url(' + sections[3].path + ') center / cover'}"
          >
            <svg viewBox="0 0 805 386" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                v-for="path in apartmentList"
                :key="path.id"
                :d="path.path"
                :fill="path.fill"
                fill-opacity="0.1"
                @click="$router.push('/flat/' + path.id)"
              />
            </svg>
          </div>
          <div v-else-if="id === 2" class="entrance entrance2 apartments-visual-second-animated"
            :style="{background: 'url(' + sections[4].path + ') center / cover'}"
          >
            <svg viewBox="0 0 691 386" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                v-for="path in apartmentList"
                :key="path.id"
                :d="path.path"
                :fill="path.fill"
                fill-opacity="0.1"
                @click="$router.push('/flat/' + path.id)"
              />
            </svg>
          </div>
          <div v-else-if="id === 3" class="entrance entrance3 apartments-visual-second-animated"
            :style="{background: 'url(' + sections[5].path + ') center / cover'}"
          >
            <svg viewBox="0 0 805 386" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                v-for="path in apartmentList"
                :key="path.id"
                :d="path.path"
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
    },
    apartmentList () {
      return this.$store.getters.apartmentList.filter(el => +el.section === +this.id)
    },
    sections () {
      return this.$store.getters.allInfo[0].sections
    }
  },
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

/* .entrance1{
  background:url('/img/apartments/ent1.png') center / cover;
} */
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
