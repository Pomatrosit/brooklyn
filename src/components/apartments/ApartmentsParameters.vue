<template>
      <div class="parameters">
        <p class="parameters__title apartments-parameters-animated">Количество комнат</p>
        <div class="parameters__buttons apartments-parameters-animated">
          <div class="parameter-btn" :class="{'active-btn' : id === 'studios'}" @click="changeType('studios')">
            <span>C</span>
          </div>
          <div class="parameter-btn" :class="{'active-btn' : id === '1'}" @click="changeType('1')">
            <span>1</span>
          </div>
          <div class="parameter-btn" :class="{'active-btn' : id === '2'}" @click="changeType('2')">
            <span>2</span>
          </div>
          <div class="parameter-btn" :class="{'active-btn' : id === '3'}" @click="changeType('3')">
            <span>3</span>
          </div>
        </div>
        <p class="parameters__title apartments-parameters-animated">Найдено: {{ apartmentList.length }}</p>
        <div class="flat-cards apartments-parameters-animated">
          <FlatCard
            v-for="flat in apartmentList"
            :key="flat.id"
            :flat="flat"
          />
        </div>
      </div>
</template>

<script>
import FlatCard from './FlatCard'
import gsap, { Power2 } from 'gsap'

export default {
  components: {
    FlatCard
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    apartmentList () {
      const list = this.$store.getters.apartmentList
      switch (this.id) {
        case 'studios' : return list.filter(el => (el.count === 'studio' && el.id !== 13))
        case '1' : return list.filter(el => el.count === 'one' && el.id !== 9 && el.id !== 10 && el.id !== 14)
        case '2' : return list.filter(el => el.count === 'two' && el.id !== 11 && el.id !== 17)
        case '3' : return list.filter(el => el.count === 'three')
        default : return []
      }
    }
  },
  methods: {
    changeType (id) {
      if (id !== this.id) this.$router.push('/apartments/parameters/' + id)
    }
  },
  mounted () {
    gsap.to('.apartments-parameters-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to('.apartments-parameters-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: Power2.easeInOut })
  },
  updated () {
    gsap.to('.flat-cards', { opacity: 0, duration: 0 })
    gsap.to('.flat-cards', { opacity: 1, duration: 1, ease: Power2.easeInOut })
  }
}
</script>

<style scoped>
.parameters{
  padding:10vh 0;
}

.parameters__title{
  font-weight: 500;
  font-size: 2.1vh;
  margin-bottom:3.125vh;
  color: #242135;
}

.parameters__buttons{
  display:flex;
  align-items:center;
  margin-bottom:5.4vh;
}

.parameter-btn{
  border: 1px solid #242135;
  width:10.4vh;
  height:5.2vh;
  display:flex;
  align-items:Center;
  justify-content:Center;
  margin-right:2.1vh;
  cursor:pointer;
  transition:0.3s;
}

.parameter-btn span{
  font-size: 1.875vh;
  color: #242135;
  transition:0.3s;
}

.flat-cards{
  display:Flex;
  align-items:Center;
  flex-wrap:wrap;
  margin: 0 -1.15%;
}

.active-btn{
  background: #242135;
}

.active-btn span{
  color: #FFFFFF;
}

@media(hover:hover){
  .parameter-btn:not(.active-btn):hover{
    background:#615e71;
  }
  .parameter-btn:not(.active-btn):hover span{
    color:#fff;
  }
}
</style>
