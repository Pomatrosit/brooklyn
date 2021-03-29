<template>
  <div class="footer">
    <svg class="bg" width="319" height="368" viewBox="0 0 319 368" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
      <rect x="-163.636" y="-381" width="683.58" height="683.58" transform="rotate(45 -163.636 -381)" fill="#35314B"/>
      </g>
      <defs>
      <filter id="filter0_d" x="-661" y="-383" width="994.728" height="994.728" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset dy="12"/>
      <feGaussianBlur stdDeviation="7"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      </defs>
    </svg>
    <div class="app-wrapper">
      <div class="footer-phone-ant-title">
        <p class="footer__title">ЖК Бруклин.<br/> Все права защищены</p>
        <svg @click="openModal"
          width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="27.5" cy="27.5" r="26.5" fill="#242135" stroke="#CFD7C2" stroke-width="2"/>
          <path d="M18.6043 26.0104C18.9895 25.7465 19.518 25.8409 19.7823 26.231C22.7107 30.5154 28.0638 35.3423 31.4711 36.7697C32.85 37.4134 33.8766 37.4532 34.6389 36.9027C35.2329 36.5388 36.9247 34.8475 36.8942 33.9672C36.8841 33.8637 36.7666 33.6693 36.5667 33.4623C35.9162 32.7912 33.7343 31.1284 33.278 30.9556C32.9144 30.8816 32.5439 31.0977 31.9736 31.4583L31.68 31.6425C31.2791 31.8848 30.7573 31.7528 30.5179 31.3513C30.2762 30.9465 30.4061 30.4221 30.807 30.1799L31.0713 30.015C31.7037 29.6146 32.5711 29.0698 33.6722 29.2984C34.5361 29.4781 37.2579 31.7335 37.7774 32.2703C38.2664 32.773 38.5386 33.3099 38.5849 33.8672C38.6583 35.961 35.871 38.1515 35.5525 38.3358C34.9438 38.7771 34.2312 39 33.4305 39C32.6332 39 31.7478 38.7794 30.7889 38.3312C27.1005 36.7867 21.5226 31.7858 18.3875 27.1966C18.1221 26.8099 18.2192 26.2788 18.6043 26.0104ZM20.8498 16.2424L21.0583 16.246C21.6399 16.2938 22.173 16.5679 22.6744 17.0604C23.2063 17.5824 25.4459 20.3246 25.6254 21.1958C25.8185 22.1295 25.4018 22.8586 25.098 23.3908C24.7987 23.9152 24.6948 24.1392 24.7976 24.4224C25.5543 26.2854 26.722 27.806 28.2568 28.9104C28.6374 29.1856 28.7255 29.7168 28.4533 30.1012C28.2884 30.3332 28.0287 30.4583 27.7644 30.4583C27.5939 30.4583 27.4211 30.4071 27.272 30.2991C25.473 29.0036 24.1087 27.2339 23.2165 25.0354C22.8246 23.9493 23.2899 23.1349 23.6299 22.5401C23.8851 22.0943 24.0263 21.8281 23.9664 21.5438C23.8083 21.1332 22.156 18.9347 21.4909 18.2819C21.2853 18.0783 21.0922 17.9589 20.9488 17.9475C20.1876 17.9122 18.4868 19.5398 18.1118 20.1653C17.5302 20.9706 17.5709 22.0033 18.1954 23.3852C18.3885 23.8139 18.201 24.3189 17.7753 24.5145C17.3506 24.7102 16.847 24.5202 16.6538 24.0914C15.7662 22.1272 15.782 20.4872 16.7035 19.2202C16.8978 18.8904 19.0469 16.113 21.0583 16.246L20.8498 16.2424ZM30.2501 20.0343L30.3631 20.0464C32.7121 20.507 34.5259 22.3336 34.9844 24.6992C35.0736 25.161 34.7743 25.6103 34.3147 25.7001C34.2605 25.7103 34.2051 25.7149 34.1509 25.7149C33.7545 25.7149 33.3999 25.4328 33.3208 25.0257C32.9956 23.3447 31.707 22.0481 30.0389 21.7217C29.5804 21.6318 29.28 21.1826 29.3692 20.7208C29.4596 20.259 29.9102 19.9679 30.3631 20.0464L30.2501 20.0343ZM30.1802 16.0001L30.2951 16.0069C34.9006 16.5209 38.4784 20.1195 38.9945 24.7565C39.0476 25.225 38.7121 25.6481 38.248 25.6993C38.2152 25.7027 38.1836 25.705 38.152 25.705C37.7273 25.705 37.3603 25.3831 37.3117 24.9475C36.8826 21.1078 33.9214 18.128 30.1076 17.7015C29.6423 17.6492 29.308 17.2284 29.3588 16.7598C29.4119 16.2912 29.8309 15.9466 30.2951 16.0069L30.1802 16.0001Z" fill="#CFD7C2"/>
        </svg>
      </div>
      <p @click="goToPolicy" class="footer__subtitle">Политика в отношении обработки персональных данных</p>
      <p class="footer__subtitle with-link" @click="goToSells">Разработка сайта компания Sells</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal () {
      this.$store.commit('toggleModal', 2)
    },
    goToSells () {
      window.open('https://sells.company/', '_blank')
    },
    goToPolicy () {
      this.$router.push('/policy').then(() => window.scrollTo(0, 0))
    }
  }
}
</script>

<style scoped>
.footer{
  background: #242135;
  position:relative;
  overflow:hidden;
}

.footer-phone-ant-title{
  display:flex;
  justify-content:space-between;
  margin-bottom:50px;
}

.app-wrapper{
  padding:33px 20px 70px 20px;
  position:relative;
  z-index:1;
}

.bg{
  position:absolute;
  top:0;
  right:0;
  width:100%;
  z-index:0;
}

.footer__title{
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #EFEFEF;
  padding-top:20px;
}

.footer__subtitle{
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #EFEFEF;
  margin-bottom:30px;
}

.with-link{
  text-decoration-line: underline;
  color: #EA8E79;
}
</style>
