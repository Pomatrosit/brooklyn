<template>
  <div class="apartments">
    <div class="app-wrapper">
      <h2 class="apartments__title">Выбор квартиры</h2>
      <div class="apartments__nav">
        <div class="nav-main">
          <p class="nav-subtitle">Количество комнат</p>
          <div class="parameters__buttons">
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
        </div>
      </div>
      <div class="apartments__cards">
        <FlatCardMobile
          v-for="flat in apartmentList"
          :key="flat.id"
          :flat="flat"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FlatCardMobile from './FlatCardMobile'

export default {
  components: {
    FlatCardMobile
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
  }
}
</script>

<style scoped>
.apartments{
  padding-top:57px;
  background:#242135;
}

.apartments__title{
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  padding:40px 0;
  border-bottom:1px solid #C4C4C4;
}

.apartments__nav{
  padding-bottom:28px;
  border-bottom:1px solid #CFD7C2;
  margin-bottom:30px;
}

.nav-title{
  font-weight: 500;
  font-size: 16px;
  color:#fff;
  padding:37px 0;
  position:relative;
}

.nav-title:after{
  position:absolute;
  content:"•";
  right:0;
  top:50%;
  transform:translateY(-50%);
}

.nav-main{
  padding:20px 20px 10px 20px;
  background: #3C3A48;
  border-top:3px solid #EA8E79;
}

.nav-subtitle{
  font-weight: 500;
  font-size: 16px;
  margin-bottom:30px;
  color: #FFFFFF;
}

.parameters__buttons{
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
}

.parameter-btn{
  border: 1px solid #EFEFEF;
  width:calc(50% - 10px);
  height:50px;
  display:flex;
  align-items:Center;
  justify-content:Center;
  cursor:pointer;
  transition:0.3s;
  margin-bottom:20px;
}

.parameter-btn span{
  font-size: 18px;
  color: #fff;
}

.active-btn{
  background: #242135;
  border: 1px solid #EA8E79;
}

.apartments__cards{
  padding-bottom:1px;
}
</style>
