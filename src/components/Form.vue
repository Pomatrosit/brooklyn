<template>
  <form @submit.prevent="onSubmit">
      <h3 class="title">Хотите {{ modalType }}?</h3>
      <p class="subtitle"><strong>Отправьте заявку</strong> и наш менеджер<br/> свяжется с вами <strong>в течение 5 минут</strong></p>
      <span class="input-label">Телефон</span>
      <div class="form-control">
        <masked-input
          v-model="phone"
          mask="\+\7 (111) 111-11-11"
          placeholder="+7 (___) ___-__-__"
          @input="rawVal = arguments[1]"
        />
      </div>
      <span class="input-label">Имя</span>
      <div class="form-control">
        <input
          v-model="name"
          type="text"
          class="name"
          placeholder="Укажите имя (необязательно)"
        >
      </div>
      <input type="submit" value="Отправить" class="submit-btn">
      <div class="policy">
        <div class="policy__checkbox" @click="toggleCheckbox">
          <svg :style="{ opacity: checked ? 1 : 0 }" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1.59999L13.5 0L3.74996 10.3999L5.24997 11.9999L15 1.59999Z" fill="#242135"/>
            <path d="M1.50025 4.80006L0.000244141 6.40005L5.24997 11.9999L6.75027 10.4L1.50025 4.80006Z" fill="#242135"/>
          </svg>
        </div>
        <p class="policy__text">Отправляя форму вы соглашаетесь с нашей <span>политикой конфиденциальности</span></p>
      </div>
  </form>
</template>

<script>
import MaskedInput from 'vue-masked-input'

export default {
  components: {
    MaskedInput
  },
  data: () => ({
    name: '',
    phone: '',
    rawVal: '',
    checked: true
  }),
  methods: {
    onSubmit () {
      const rawValue = this.rawVal.trim()
      if (!rawValue.split('').includes('_') && this.checked && rawValue !== '') {
        const payload = {
          phone: rawValue,
          name: this.name
        }
        /// отправка
        console.log(payload)
      }
      // иначе ошибка
    },
    toggleCheckbox () {
      this.checked = !this.checked
    }
  },
  computed: {
    modalType () {
      return this.$store.getters.modalType === 1 ? 'записаться на просмотр' : 'заказать звонок'
    }
  }
}
</script>

<style scoped>
form{
  position:relative;
  z-index:1;
}

.title{
  font-weight: bold;
  font-size: 2.5vh;
  color: #EFEFEF;
  text-align: center;
  margin-bottom:4.1vh;
}

.subtitle{
  font-weight: 400;
  font-size: 1.667vh;
  line-height: 150%;
  color: #EFEFEF;
  margin-bottom:5vh;
  text-align:center;
}

.input-label{
  font-size: 1.667vh;
  color: #FFFFFF;
  margin-bottom:0;
}

.form-control input, .submit-btn{
  width:100%;
  height:6.25vh;
  outline:none;
  border:none;
  padding:0 2vh;
  background: #FFFFFF;
  border-radius: 5px;
  font-size: 1.5vh;
  line-height: 17px;
  color: #828282;
}

.submit-btn{
  margin: 4vh 0 2.5vh 0;
  background: rgba(207, 215, 194, 0.8);
  box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.5vh;
  letter-spacing: 0.04em;
  text-transform:uppercase;
  color: #FFFFFF;
  cursor:pointer;
  display:block;
  margin-bottom:2.5vh;
}

.policy{
  display:flex;
  align-items:center;
}

.policy__checkbox{
  background: #FFFFFF;
  border: 1px solid #CFD7C2;
  border-radius: 0.5vh;
  width:2.4vh;
  height:2.4vh;
  min-width:2.4vh;
  margin-right:4vh;
  cursor:pointer;
  position:relative;
}

.policy__text{
  font-style: normal;
  font-weight: 300;
  font-size: 1.46vh;
  line-height: 1.7vh;
  color: #FFFFFF;
}

.policy__text span{
  color:#EA8E79;
  cursor:pointer;
}

.policy__checkbox svg{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width:1.5625;
  height:1.25vh;
}
</style>
