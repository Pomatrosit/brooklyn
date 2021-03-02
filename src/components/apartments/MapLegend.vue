<template>
  <div class="legend">
    <p class="legend__title">Обозначение квартир</p>
    <div class="legend__row">
      <div class="legend__color legend__color1"></div>
      <p class="legend__text">Студия</p>
    </div>
    <div class="legend__row">
      <div class="legend__color legend__color2"></div>
      <p class="legend__text">Однокомнатная</p>
    </div>
    <div class="legend__row">
      <div class="legend__color legend__color3"></div>
      <p class="legend__text">Двухкомнатная</p>
    </div>
    <div class="legend__row">
      <div class="legend__color legend__color4"></div>
      <p class="legend__text">Трёхкомнатная</p>
    </div>
    <div class="compass">
      <p class="compass__title">Направление сторон света</p>
      <img src="/img/apartments/compass.png" alt="compass">
    </div>
  </div>
</template>

<style scoped>
.legend{
  width:22.5%;
}

.legend__title{
  font-weight: 600;
  font-size: 1.4vh;
  line-height: 150%;
  color: #242135;
  margin-bottom:2.6vh;
}

.legend__row{
  display:flex;
  align-items:Center;
  margin-bottom:1.3vh;
}

.legend__color{
  border-radius: 2px;
  width:5.72vh;
  min-width:5.72vh;
  height:2.4vh;
  margin-right:2.3vh;
}

.legend__color1{
  background:#A0A2AB;
}

.legend__color2{
  background:#DFE0E0;
}

.legend__color3{
  background:#F7BFB3;
}

.legend__color4{
  background:#C4D0BB;
}

.legend__text{
  font-weight: 500;
  font-size: 1.3vh;
  color: #242135;
}

.compass{
  padding-top:1.5vh;
  margin-top:3.4vh;
  border-top:1px solid #C4C4C4;
}

.compass img{
  width:55%;
  margin-left:10%;
}

.compass__title{
  font-weight: 600;
  font-size: 1.4vh;
  line-height: 150%;
  color: #242135;
  margin-bottom:2.1vh;
}
</style>
