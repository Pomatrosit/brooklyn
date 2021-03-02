<template>
  <section class="apartments-main">
    <div class="app-wrapper apartments-wrapper">
      <div class="parameters">
        <p class="parameters__title">Количество комнат</p>
        <div class="parameters__buttons">
          <div class="parameter-btn"><span>C</span></div>
          <div class="parameter-btn"><span>1</span></div>
          <div class="parameter-btn"><span>2</span></div>
          <div class="parameter-btn"><span>3</span></div>
        </div>
        <p class="parameters__title">Найдено 4 планировки</p>
        <div class="flat-cards">
          <figure class="flat-card">
            <div class="flat-card__img">
              <img src="/img/apartments/mini.png" alt="flat">
            </div>
            <div class="flat-card__bottom">
              <div class="flat-card__count">
                <p class="flat-card__title">Количество комнат:</p>
                <p class="flat-card__text">Студия</p>
              </div>
              <div class="flat-card__square">
                <p class="flat-card__title">Общая площадь:</p>
                <p class="flat-card__text">56 м2</p>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

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
}

.flat-card{
  width:30%;
  padding:4.5vh 2.1vh 2.1vh 2.1vh;
  background:#fff;
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
  font-size: 12px;
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
