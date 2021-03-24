<template>
  <figure class="flat-card" @click="goToFlat(flat.id)">
    <div class="flat-card__img">
      <img :src="flat.image.path" alt="flat">
    </div>
    <div class="flat-card__bottom">
      <div class="flat-card__count">
        <p class="flat-card__title">Количество комнат:</p>
        <p class="flat-card__text">{{ flatCountCaption }}</p>
      </div>
      <div class="flat-card__square">
        <p class="flat-card__title">Общая площадь:</p>
        <p class="flat-card__text">{{ flat.square }} м&sup2;</p>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  methods: {
    goToFlat (id) {
      this.$router.push('/flat/' + id)
    }
  },
  props: ['flat'],
  computed: {
    flatCountCaption () {
      switch (this.flat.count) {
        case 'one' : return 1
        case 'two' : return 2
        case 'three' : return 3
        case 'studio' : return 'Студия'
        default: return 0
      }
    }
  }
}
</script>

<style scoped>
.flat-card{
  width:31%;
  margin:0 1.15% 2.6vh 1.15%;
  padding:4.5vh 2.1vh 2.1vh 2.1vh;
  background:#fff;
  cursor:pointer;
}

.flat-card__img{
  width:100%;
  height:22vh;
  display:flex;
  align-items:Center;
  justify-content:center;
  padding-bottom:3.5vh;
  border-bottom:1px solid #F9F9F9;
  margin-bottom:2.1vh;
}

.flat-card__img img {
  max-height:100%;
  max-width:90%;
}

.flat-card__bottom{
  display:Flex;
  align-items:Center;
  justify-content:center;
  text-align:Center;
}

.flat-card__count{
  width:50%;
  border-right:1px solid #F9F9F9;
}

.flat-card__square{
  width:50%;
}

.flat-card__title{
  font-weight: 500;
  font-size: 1.3vh;
  line-height: 150%;
  color: #242135;
  margin-bottom:1.7vh
}

.flat-card__text{
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #242135;
}
</style>
