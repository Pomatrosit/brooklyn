<template>
      <div class="parameters">
        <p class="parameters__title">Количество комнат</p>
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
        <p class="parameters__title">Найдено 4 планировки</p>
        <div class="flat-cards">
          <FlatCard />
          <FlatCard />
          <FlatCard />
          <FlatCard />
        </div>
      </div>
</template>

<script>
import FlatCard from './FlatCard'

export default {
  components: {
    FlatCard
  },
  computed: {
    id () {
      return this.$route.params.id
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
}

.parameter-btn span{
  font-size: 1.875vh;
  color: #242135;
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
</style>
