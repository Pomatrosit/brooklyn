<template>
  <nav>
    <div class="app-wrapper">
      <div class="nav__main">
        <div class="nav__logo">
          <router-link to="/">
            <Logo width="8.3vh" height="5.83vh"/>
          </router-link>
        </div>
        <ul class="nav__links">
          <li><router-link to="/apartments/visual"><a class="nav-hovered" :class="{ 'activeLink' : page===1 }">Выбор квартиры</a></router-link></li>
          <li><router-link to="/gallery"><a class="nav-hovered" :class="{ 'activeLink' : page===2 }">Галерея</a></router-link></li>
          <li><router-link to="/news"><a class="nav-hovered" :class="{ 'activeLink' : page===3 }">Новости</a></router-link></li>
          <li><router-link to="/progress"><a class="nav-hovered" :class="{ 'activeLink' : page===4 }">Ход строительства</a></router-link></li>
          <li><router-link to="/contacts"><a class="nav-hovered" :class="{ 'activeLink' : page===5 }">Контакты</a></router-link></li>
        </ul>
        <div class="nav__record" @click="openModal(1)">
          <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.6281 0L16.0753 0.0075295C22.2174 0.211665 27.734 4.53268 30.9326 11.5401L31.1502 12.0298C31.2816 12.3256 31.2833 12.6625 31.1548 12.9596C27.923 20.4327 22.0921 25 15.6219 25L15.1747 24.9925C9.02413 24.7881 3.50997 20.458 0.319123 13.4637L0.0951795 12.9596C-0.0317265 12.6662 -0.0317265 12.3338 0.0951795 12.0404C3.32697 4.56732 9.15793 0 15.6281 0ZM15.6391 2.32722C10.4554 2.32854 5.64246 5.89554 2.69778 11.9784L2.45312 12.4986L2.71741 13.062C5.50996 18.8038 9.97299 22.3001 14.8134 22.643L15.2296 22.6646L15.6312 22.67L16.0295 22.664C21.1827 22.477 25.9355 18.7507 28.7808 12.5361L28.7953 12.4986C26.0196 6.41489 21.4252 2.71068 16.4296 2.35695L16.0124 2.33525L15.6391 2.32722Z" fill="#242135"/>
            <path class="record-animation" d="M15.6242 6.42725C19 6.42725 21.7367 9.14566 21.7367 12.5003C21.7367 15.8536 18.9997 18.5717 15.6242 18.5717C12.2489 18.5717 9.51328 15.8538 9.51328 12.5003C9.51328 9.14548 12.2486 6.42725 15.6242 6.42725ZM15.6242 8.75586C13.5431 8.75586 11.857 10.4314 11.857 12.5003C11.857 14.5677 13.5433 16.2431 15.6242 16.2431C17.7055 16.2431 19.393 14.5673 19.393 12.5003C19.393 10.4318 17.7057 8.75586 15.6242 8.75586Z" fill="#242135"/>
          </svg>
          <p class="nav-hovered">Записаться на просмотр</p>
        </div>
        <div class="nav__call" @click="openModal(2)">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.55879 0.00215684L5.59435 0.00451361C6.24467 0.0604989 6.81089 0.385698 7.32582 0.891403L7.48499 1.05244C8.47303 2.09068 10.2525 4.47552 10.5428 5.3208L10.5741 5.43152C10.7511 6.28587 10.5627 6.8407 10.0007 7.82216L9.86492 8.06338C9.60711 8.53642 9.56771 8.73153 9.64739 8.95492C10.8731 11.9701 12.9647 14.0722 15.9308 15.2899C16.2117 15.3924 16.4237 15.3339 17.0166 14.992L17.327 14.8154C18.1608 14.3557 18.6893 14.2102 19.4689 14.3728C20.1328 14.5123 22.2792 16.0907 23.519 17.1993L23.8614 17.5158L23.9844 17.6381C24.4884 18.1567 24.8128 18.7265 24.8694 19.4245C24.9289 21.121 22.8695 23.5097 21.6137 24.2276C20.1854 25.2561 18.3726 25.2387 16.3386 24.2872C11.0225 22.0636 2.89081 13.9422 0.723768 8.60525L0.594115 8.30687C-0.228285 6.33093 -0.210178 4.62267 0.731569 3.33633C1.58987 1.90479 3.91273 -0.0744271 5.55879 0.00215684ZM5.45622 1.82996L5.34868 1.83563C4.50395 1.94864 2.80738 3.41684 2.24443 4.34899L2.14703 4.49475C1.66131 5.29062 1.71743 6.38448 2.39389 7.88071L2.52326 8.18509C4.70635 13.11 12.2651 20.6023 17.0715 22.6134L17.3364 22.7319C18.7277 23.3247 19.7799 23.2986 20.6318 22.6905L20.6948 22.6498C20.9586 22.4656 21.5667 21.9102 22.0351 21.3668C22.6931 20.6037 23.0657 19.9045 23.0537 19.5323C23.0406 19.3731 22.9184 19.1585 22.6948 18.9282L22.5936 18.8276C21.7268 17.9937 19.3623 16.219 19.098 16.1635C18.8276 16.1071 18.6055 16.1833 17.9988 16.5341L17.6924 16.7071C16.7982 17.1918 16.1671 17.3219 15.2767 16.9963C11.8247 15.58 9.37387 13.117 7.94994 9.6121C7.61262 8.67485 7.79432 8.01209 8.38132 6.98423L8.52079 6.73768C8.78735 6.25406 8.84361 6.04885 8.79274 5.80331C8.73891 5.54176 7.11142 3.35441 6.27135 2.42687L6.05479 2.19889L5.94005 2.09397C5.78253 1.95861 5.64263 1.87646 5.524 1.84298L5.45622 1.82996Z" fill="#242135"/>
            <path class="call-animation1" d="M15.6016 4.62622L15.7244 4.64177C18.2348 5.13372 20.1965 7.10602 20.6859 9.62997C20.782 10.1257 20.4602 10.606 19.967 10.7026C19.4739 10.7992 18.9963 10.4757 18.9001 9.9799C18.5526 8.18713 17.1595 6.78654 15.3763 6.4371C14.8832 6.34047 14.5614 5.86023 14.6575 5.36447C14.7376 4.95133 15.0826 4.65777 15.4808 4.62732L15.6016 4.62622Z" fill="#242135"/>
            <path class="call-animation2" d="M15.5271 0.304688L15.6507 0.310083C20.5629 0.858379 24.4422 4.75377 24.9942 9.6918C25.0504 10.1937 24.6911 10.6464 24.1919 10.7028C23.6926 10.7592 23.2424 10.3981 23.1863 9.89611C22.7292 5.80735 19.5172 2.58201 15.45 2.12803C14.9506 2.0723 14.5908 1.62015 14.6462 1.11814C14.6924 0.699798 15.0124 0.378838 15.4068 0.315725L15.5271 0.304688Z" fill="#242135"/>
          </svg>
          <p class="nav-hovered">Заказать звонок</p>
        </div>
      </div>
    </div>

    <div v-if="path === '/'" class="page-progress" :style="{width: progress + '%'}"></div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from '@/components/svg/Logo'

export default {
  name: 'Navbar',
  components: {
    Logo
  },
  computed: {
    ...mapGetters(['progress']),
    page () {
      let id = 0
      const pathArr = this.path.split('/')
      if (pathArr.includes('apartments') || pathArr.includes('flat')) id = 1
      else if (pathArr.includes('gallery')) id = 2
      else if (pathArr.includes('news')) id = 3
      else if (pathArr.includes('progress')) id = 4
      else if (pathArr.includes('contacts')) id = 5
      return id
    }
  },
  data: () => ({
    path: '/'
  }),
  watch: {
    $route (to, from) {
      this.path = to.path
    }
  },
  methods: {
    openModal (id) {
      this.$store.commit('toggleModal', id)
    }
  }
}
</script>

<style scoped>
nav{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:1;
  background:#fff;
}

.nav__main{
  display:flex;
  align-items:center;
  height:10.42vh;
}

.nav__logo{
  height:6.25vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding-right:3.15vw;
  border-right:1px solid #242135;
}

.nav__logo img{
  height:6.25vh;
  cursor:pointer;
}

.nav__links{
  display:flex;
  align-items:center;
  margin-left:0.79vw;
  flex-grow:1;
}

.nav__links li{
  list-style:none;
  margin-left:2.36vw;
  font-size: 1.667vh;
}

.nav__links li a {
  text-decoration:none;
  color: #242135;
}

.nav__record, .nav__call{
  display:flex;
  align-items:center;
}

.nav__record{
  height:6.25vh;
  padding-right:3.15vw;
  border-right:1px solid #242135;
  cursor:pointer;
}

.nav__call{
  margin-left:3.15vw;
  cursor:pointer;
}

.nav__record p, .nav__call p{
  font-size: 1.667vh;
  color: #242135;
  text-decoration:none;
  font-weight:500;
}

.nav__record svg, .nav__call svg{
  margin-right:1vw;
}

.page-progress{
  position:absolute;
  bottom:0;
  left:0;
  transition:1s;
  transition-timing-function: ease-in-out;
  height:3px;
  background:#EA8E79;
}

.nav__record svg, .nav__call svg{
  width:3.333vh;
  height:2.6vh;
  margin-top:-3px;
}

.record-animation{
  animation:record-animation 3s linear infinite;
}

.call-animation1{
  animation:call-animation1 2s linear infinite;
}

.call-animation2{
  animation:call-animation2 2s linear infinite;
}

.nav-hovered{
  position:Relative;
  display:block;
  overflow-x:hidden;
  padding-bottom:3px;
}

.nav-hovered:not(.activeLink):after{
  content:"";
  position:absolute;
  width:100%;
  height:1px;
  background: linear-gradient(90deg, rgba(36, 33, 53, 0.13) 0%, #242135 100%, #242135 100%);
  bottom:0;
  left:0;
  transform:translateX(-100%);
  transition:1s;
  transition-timing-function:ease-in-out;
}

.activeLink{
  font-weight: 500;
}

@keyframes shape-animation{
  0%{transform:translateX(-100%)}
  100%{transform:translateX(100%)}
}

@keyframes record-animation{
  0%{opacity:0.3}
  50%{opacity:1}
  100%{opacity:0.3}
}

@keyframes call-animation1{
  0%{opacity:0}
  25%{opacity:1}
  100%{opacity:1}
}

@keyframes call-animation2{
  0%{opacity:0}
  50%{opacity:1}
  100%{opacity:1}
}

@media (hover:hover){
  .nav-hovered:hover:after{
    animation:shape-animation 0.5s linear forwards;
  }
}

@media screen and (max-width:1620px){
  .nav__links li, .nav__record p, .nav__call p{
    font-size:1.8vh;
  }
}

@media (max-aspect-ratio: 16/9) {
  .nav__call p{
    border:2px solid red;
  }
  .nav__record p, .nav__call p{
    display:none;
  }
}
</style>
