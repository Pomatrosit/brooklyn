<template>
      <div class="nav-content">
        <div class="nav-top">
          <h2 class="nav-title news-animated">Новости</h2>
          <p class="nav-text news-animated"><strong>В разделе Новости </strong>публикуются самые последние и актуальные сведения о жилом комплексе «Бруклин». </p>
          <p class="nav-text news-animated"><strong>Регулярно просматривайте </strong>новостной блок, знакомьтесь с развитием инфраструктуры и
            планируйте светлое будущее вместе с нами.</p>
        </div>

        <div v-show="isBackBtn" class="news__back" @click="goBack">
          <SliderArrowLeft fill="#fff" width="1vh" height="1.667vh"/>
          <span>К списку новостей</span>
        </div>

        <div class="nav-btn news-animated" @click="goToMainPage" :style="{ width: '100%' }" >
          <Button
            text="Вернуться на главную"
            background="#EA8E79"
            width="100%"
            height="6.25vh"
            fontSize="1.667vh"
            fontColor="#fff"
            type="pink-btn"
          >
            <svg class="svg-in-btn" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 17.202C28 21.2864 25.0848 24 20.9008 24L11.0992 24C6.91955 24 4 21.2783 4 17.202L4 6.7992C4 2.71466 6.9154 0 11.0992 0L20.9008 0C25.0846 0 28 2.71466 28 6.7992L28 17.202ZM26.2 17.202L26.2 6.7992C26.2 3.7386 24.118 1.8 20.9008 1.8L11.0992 1.8C7.88196 1.8 5.8 3.7386 5.8 6.7992L5.8 17.202C5.8 20.2549 7.88654 22.2 11.0992 22.2L20.9008 22.2C24.1184 22.2 26.2 20.2623 26.2 17.202ZM21.8032 12C21.8032 12.4556 21.4646 12.8322 21.0253 12.8918L20.9032 12.9L13.2772 12.9L16.2483 15.8598C16.5685 16.1787 16.5986 16.6786 16.3379 17.0315L16.251 17.1326C15.9322 17.4528 15.4322 17.483 15.0793 17.2223L14.9782 17.1354L10.4614 12.6378C10.4322 12.6082 10.4059 12.5782 10.3817 12.5465L10.4614 12.6378C10.4171 12.5936 10.3783 12.546 10.3451 12.4958C10.3337 12.4779 10.3224 12.4594 10.3117 12.4404C10.303 12.4256 10.2952 12.4109 10.2879 12.3959C10.2777 12.3743 10.2676 12.3513 10.2584 12.3279C10.2518 12.3119 10.2464 12.2967 10.2414 12.2814C10.2338 12.2574 10.2266 12.2321 10.2206 12.2064C10.2169 12.192 10.214 12.178 10.2114 12.164C10.2072 12.1396 10.2036 12.1143 10.2011 12.0887C10.199 12.0707 10.1978 12.053 10.1971 12.0354C10.197 12.0237 10.1968 12.0119 10.1968 12L10.1971 11.9658C10.1978 11.9473 10.199 11.9289 10.2009 11.9105L10.1968 12C10.1968 11.9438 10.202 11.8888 10.2118 11.8354C10.214 11.822 10.2169 11.808 10.2202 11.794C10.2266 11.7679 10.2338 11.7426 10.242 11.7177C10.2464 11.7033 10.2518 11.6881 10.2577 11.673C10.2676 11.6487 10.2777 11.6257 10.2887 11.6033C10.2952 11.5891 10.303 11.5744 10.3112 11.5598C10.3224 11.5406 10.3337 11.5221 10.3457 11.504C10.3542 11.4904 10.3638 11.4767 10.3738 11.4633L10.3817 11.4535C10.4059 11.4218 10.4322 11.3918 10.4604 11.3636L10.4614 11.3623L14.9782 6.86465C15.3304 6.51393 15.9003 6.51514 16.251 6.86736C16.5698 7.18756 16.5978 7.68762 16.3356 8.03939L16.2483 8.14015L13.2748 11.1L20.9032 11.1C21.4003 11.1 21.8032 11.5029 21.8032 12Z" fill="white"/>
            </svg>
          </Button>
      </div>
    </div>
</template>

<script>
import Button from '@/components/Button'
import gsap, { Power2 } from 'gsap'
import SliderArrowLeft from '@/components/svg/SliderArrowLeft'

export default {
  components: {
    Button,
    SliderArrowLeft
  },
  methods: {
    goToMainPage () {
      this.$router.push('/')
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  props: ['animated', 'isBackBtn'],
  mounted () {
    if (this.animated) {
      gsap.to('.news-animated', { opacity: 0, y: 100, duration: 0 })
      gsap.to('.news-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: Power2.easeInOut, delay: 1 })
    }
  }
}
</script>

<style scoped>
.nav-content{
  width:100%;
  height:100%;
  position:relative;
  z-index:1;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
}

.nav-title{
  font-weight: bold;
  font-size: 3.125vh;
  text-transform: uppercase;
  color: #FFFFFF;
  padding-bottom:2.6vh;
  position:relative;
  margin-bottom:3.6vh;
}

.nav-title:after{
  content:'';
  position:absolute;
  bottom:0;
  left:0;
  width:10.4vh;
  height:2px;
  background:#EA8E79;
}

.nav-text{
  font-style: normal;
  font-weight: 400;
  font-size: 1.667vh;
  line-height: 125%;
  color: #FFFFFF;
  margin-bottom:2.6vh;
}

.news__back{
  cursor:pointer;
  display:flex;
  align-items:Center;
  animation: anim 0.5s ease-in-out forwards;
}

.news__back span{
  font-weight: 400;
  font-size: 2.09vh;
  color: #fff;
  margin-left:2.5vh
}

@keyframes anim {
  from{
    opacity:0;
    transform:translateY(30px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}
</style>
