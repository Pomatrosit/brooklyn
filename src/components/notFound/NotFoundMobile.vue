<template>
  <div class="not-found">
    <div class="app-wrapper">
      <p class="title">Упс! Кажется что-то пошло не так...</p>
      <p class="number">404</p>
      <p class="text">Страница, которую вы запрашиваете, не существует. Возможно она была удалена, или вы набрали
        неверный адрес. Перейдите на главную страницу и попробуйте найти необходимую вам информацию там.</p>
      <div class="button" @click="goBack">
        <span>Вернуться обратно</span>
      </div>
      <div class="button dark" @click="goHome">
        <span>На главную</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  padding-top:57px;
}
.title{
  font-size: 24px;
  line-height: 160%;
  text-align: center;
  color: #EA8E79;
  margin-top:58px;
}
.number{
  font-weight: bold;
  font-size: 90px;
  text-align: center;
  color: #242135;
}
.text{
  font-size: 14px;
  line-height: 160%;
  text-align: center;
  color: #000000;
  margin-bottom: 40px;
}
.button{
  width:100%;
  height:60px;
  background: #fff;
  border-radius: 2px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  margin-bottom:20px;
  border:1px solid #242135;
}

.button span {
  font-weight: 400;
  font-size: 16px;
  color: #242135;
  margin-right:15px;
}

.dark{
  margin-bottom:60px;
  background:#242135;
}

.dark span{
  color:#fff;
}
</style>
