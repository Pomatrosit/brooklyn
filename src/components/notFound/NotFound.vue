<template>
  <div class="not-found">
    <div class="app-wrapper">
      <div class="content">
        <p class="title">Упс! Кажется что-то пошло не так...</p>
        <p class="number">404</p>
        <p class="text">Страница, которую вы запрашиваете, не существует. Возможно она была удалена, или вы набрали
          неверный адрес. Перейдите на главную страницу и попробуйте найти необходимую вам информацию там.</p>
        <div class="buttons">
          <Button
            text="Вернуться обратно"
            background="#EA8E79"
            width="26vh"
            height="6.25vh"
            fontSize="1.667vh"
            fontColor="#fff"
            border="1px solid #242135"
            margin="0 15px 0 0"
            type="light-btn"
            :clickHandler="goBack"
          >
          </Button>
          <Button
            text="На главную"
            background="#EA8E79"
            width="26vh"
            height="6.25vh"
            fontSize="1.667vh"
            fontColor="#fff"
            border="1px solid #242135"
            type="dark-btn"
            :clickHandler="goHome"
          >
          </Button>
        </div>
      </div>
      <img src="/img/404.png" alt="not found">
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.not-found{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:0;
  padding:10.42vh 0 13.54vh 0;
}

.app-wrapper{
  padding-left:7.8vw;
  padding-right:45vw;
  height:100%;
  position:relative;
}

.content{
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  position:relative;
  z-index:1;
}

.title{
  font-size: 3.75vh;
  text-align: center;
  color: #EA8E79;
}

.number{
  font-weight: bold;
  font-size: 15.6vh;
  line-height: 160%;
  color: #242135;
  text-align: center;
}

.text{
  font-weight: normal;
  font-size: 1.875vh;
  line-height: 160%;
  text-align: center;
  color: #000000;
  margin-bottom:4vh;
}

.buttons{
  width:100%;
  display:flex;
  justify-content:center;
}

img{
  position:Absolute;
  top:0;
  right:5vw;
  height:100%;
  z-index:-1;
}
</style>
