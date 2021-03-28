<template>
<div>
  <form @submit.prevent="onSubmit" v-if="formStep === 1">
      <h3 class="title">Хотите {{ modalType }}?</h3>
      <p class="subtitle"><strong>Отправьте заявку</strong> и наш менеджер<br/> свяжется с вами <strong>в течение 5 минут</strong></p>
      <span class="input-label">Телефон *</span>
      <div class="form-control">
        <masked-input
          ref="phoneInput"
          v-model="phone"
          mask="\+\7 (111) 111-11-11"
          placeholder="+7 (___) ___-__-__"
          @input="rawVal = arguments[1]"
        />
      </div>
      <span class="input-label">Имя *</span>
      <div class="form-control">
        <input
          v-model="name"
          ref="nameInput"
          type="text"
          class="name"
          placeholder="Укажите ваше имя"
        >
      </div>
      <div class="submit-btn-wrapper">
        <input type="submit" value="Отправить" class="submit-btn" :disabled="isSubmitBtnDisabled">
        <div v-if="isErrorMessage" class="error-message">Поля заполненны некорректно, попробуйте ввести данные повторно</div>
      </div>
      <div class="policy">
        <div class="policy__checkbox" @click="toggleCheckbox">
          <svg :style="{ opacity: checked ? 1 : 0 }" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1.59999L13.5 0L3.74996 10.3999L5.24997 11.9999L15 1.59999Z" fill="#242135"/>
            <path d="M1.50025 4.80006L0.000244141 6.40005L5.24997 11.9999L6.75027 10.4L1.50025 4.80006Z" fill="#242135"/>
          </svg>
        </div>
        <p class="policy__text">Отправляя форму вы соглашаетесь с нашей
          <span @click="goToPolicy">политикой конфиденциальности</span>
        </p>
      </div>
  </form>
  <div v-if="formStep === 2" class="after-submut">
    {{afterSubmitText}}
  </div>
</div>
</template>

<script>
import axios from 'axios'
import MaskedInput from 'vue-masked-input'
const API_URL = 'http://cy83453.tmweb.ru'

export default {
  components: {
    MaskedInput
  },
  data: () => ({
    name: '',
    phone: '',
    rawVal: '',
    checked: true,
    isFormDirty: false,
    isErrorMessage: false,
    isSubmitBtnDisabled: false,
    formStep: 1,
    afterSubmitText: 'Ваша заявка принята, ожидайте звонка'
  }),
  methods: {
    goToPolicy () {
      this.$router.push('/policy')
      this.$store.commit('toggleModal', 1)
    },
    onSubmit () {
      const thisComponent = this
      const rawValue = this.rawVal.trim()
      if (!rawValue.split('').includes('_') && this.checked && rawValue !== '' && this.name.length >= 2) {
        // отправка
        this.isSubmitBtnDisabled = true
        const payload = {
          phone: rawValue,
          name: this.name,
          type: this.modalTypeForRequest
        }
        axios.post(`${API_URL}/api/order`, payload)
          .then(function (response) {
            thisComponent.formStep = 2
          })
          .catch(function (error) {
            console.log(error)
            thisComponent.formStep = 2
            thisComponent.afterSubmitText = 'Что-то пошло не так, попробуйте позже'
          })
      } else {
        // ошибка
        this.isFormDirty = true
        this.isErrorMessage = true
        this.isSubmitBtnDisabled = true
        setTimeout(() => {
          this.isErrorMessage = false
          this.isSubmitBtnDisabled = false
        }, 2000)
        if (this.name.length < 2) this.$refs.nameInput.style.border = '1px solid #BB2929'
        if (rawValue === '' || rawValue.split('').includes('_')) this.$refs.phoneInput.$el.style.border = '1px solid #BB2929'
      }
    },
    toggleCheckbox () {
      this.checked = !this.checked
    }
  },
  watch: {
    phone () {
      if (this.isFormDirty) {
        const rawValue = this.rawVal.trim()
        if (rawValue === '' || rawValue.split('').includes('_')) this.$refs.phoneInput.$el.style.border = '1px solid #BB2929'
        else this.$refs.phoneInput.$el.style.border = 'none'
      }
    },
    name () {
      if (this.isFormDirty) {
        if (this.name.length < 2) this.$refs.nameInput.style.border = '1px solid #BB2929'
        else this.$refs.nameInput.style.border = 'none'
      }
    }
  },
  computed: {
    modalType () {
      return this.$store.getters.modalType === 1 ? 'записаться на просмотр' : 'заказать звонок'
    },
    modalTypeForRequest () {
      return this.$store.getters.modalType === 1 ? 'Запись на просмотр' : 'Заказ звонка'
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
  font-family:'Montserrat';
  width:100%;
  height:6.25vh;
  outline:none;
  border:none;
  padding:0 2vh;
  background: #FFFFFF;
  border-radius: 5px;
  font-size: 1.7vh;
  line-height: 17px;
  color: #828282;
}

.submit-btn{
  margin: 4vh 0 2.5vh 0;
  background: rgba(207, 215, 194, 0.8);
  box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.6vh;
  letter-spacing: 0.04em;
  text-transform:uppercase;
  color: #FFFFFF;
  cursor:pointer;
  display:block;
  margin-bottom:2.5vh;
  transition:0.3s;
}

.submit-btn-wrapper{
  position:relative;
}

.error-message{
  position:absolute;
  left:0;
  right:0;
  bottom:7.5vh;
  background:#fff;
  padding:2vh;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #242135;
  border: 2px solid #BB2828;
  box-sizing: border-box;
  border-radius: 5px;
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
  line-height: 130%;
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
  width:1.5625vh;
  height:1.25vh;
}

.after-submut {
  font-size:3vh;
  font-weight:500;
  color:#fff;
  padding:5vh 0;
}

@media (hover:hover){
  .submit-btn:hover{
    background:rgba(207, 215, 194, 0.6)
  }
}

@media screen and (max-width:1120px){
  .title{
    font-size: 20px;
  }
  .subtitle{
    font-size: 14px;
  }
  .input-label{
    font-size: 14px;
  }
  .form-control input, .submit-btn{
    height:50px;
  }
  .form-control input{
    font-size:14px;
  }
  .policy__text{
    font-size: 10px;
  }
  .policy__checkbox{
    width:24px;
    height:24px;
    min-width:24px;
  }
  .policy__checkbox svg{
    width:15px;
    height:12px;
  }
  .submit-btn{
    font-size:12px;
  }
}
</style>
