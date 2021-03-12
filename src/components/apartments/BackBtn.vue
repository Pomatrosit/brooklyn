<template>
  <div class="back" @click="$router.go(-1)">
    <span class="back__label">Вернуться назад</span>
    <span class="back__btn">
      <SliderArrowLeft fill="#EFEFEF" width="50vh" height="2.08vh"/>
    </span>
  </div>
</template>

<script>
import SliderArrowLeft from '../svg/SliderArrowLeft'

export default {
  components: {
    SliderArrowLeft
  }
}
</script>

<style scoped>
.back{
  position:absolute;
  top:0;
  right:0;
  display:flex;
  align-items:center;
}

.back__label{
  font-weight: 500;
  font-size: 2.1vh;
  color: #242135;
  margin-right:3.54vh;
}

.back__btn{
  display:flex;
  align-items:center;
  justify-content:center;
  width:8.3vh;
  height:8.3vh;
  background:#242135;
  cursor:pointer;
  transition:0.3s;
}

.back__btn:hover svg{
  transition:0.3s;
}

@media(hover:hover){
  .back__btn:hover{
    background:#615e71;
  }
  .back__btn:hover svg{
    transform:translateX(-10%)
  }
}
</style>
