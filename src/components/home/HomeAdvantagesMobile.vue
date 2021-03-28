<template>
  <div class="advantages">
    <div class="app-wrapper">
      <div class="mobile-toggler" @click="toggleOpen">
        <span>
          Преимущества
        </span>
        <svg ref="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="9" width="20" height="2" rx="1" fill="white"/>
          <rect x="11" width="20" height="2" rx="1" transform="rotate(90 11 0)" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="mobile-content" ref="content">
      <img class="advantages-img" :src="advantages.length > 0 ? advantages[0].image.path : ''" alt="">
      <h3 class="advantage-title">{{ advantages.length > 0 ? advantages[0].title : "" }}</h3>
      <p class="advantage-text">{{ advantages.length > 0 ? advantages[0].text : "" }}</p>
      <img class="advantages-img" :src="advantages.length > 0 ? advantages[1].image.path : ''" alt="">
      <h3 class="advantage-title">{{ advantages.length > 0 ? advantages[1].title : "" }}</h3>
      <p class="advantage-text">{{ advantages.length > 0 ? advantages[1].text : "" }}</p>
      <img class="advantages-img" :src="advantages.length > 0 ? advantages[2].image.path : ''" alt="">
      <h3 class="advantage-title">{{ advantages.length > 0 ? advantages[2].title : "" }}</h3>
      <p class="advantage-text">{{ advantages.length > 0 ? advantages[2].text : "" }}</p>
      <img class="advantages-img" :src="advantages.length > 0 ? advantages[3].image.path : ''" alt="">
      <h3 class="advantage-title">{{ advantages.length > 0 ? advantages[3].title : "" }}</h3>
      <p class="advantage-text">{{ advantages.length > 0 ? advantages[3].text : "" }}</p>
      <img class="advantages-img" :src="advantages.length > 0 ? advantages[4].image.path : ''" alt="">
      <h3 class="advantage-title">{{ advantages.length > 0 ? advantages[4].title : "" }}</h3>
      <p class="advantage-text">{{ advantages.length > 0 ? advantages[4].text : "" }}</p>
      <img class="advantages-img" :src="advantages.length > 0 ? advantages[5].image.path : ''" alt="">
      <h3 class="advantage-title">{{ advantages.length > 0 ? advantages[5].title : "" }}</h3>
      <p class="advantage-text">{{ advantages.length > 0 ? advantages[5].text : "" }}</p>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data: () => ({
    isOpen: false
  }),
  methods: {
    toggleOpen () {
      $(this.$refs.content).slideToggle(1000)
      $(this.$refs.plus).toggleClass('rotate')
    }
  },
  mounted () {
    $(this.$refs.content).slideToggle(0)
  },
  computed: {
    advantages () {
      return this.$store.getters.advantages
    }
  }
}
</script>

<style scoped>
.advantages{
  background:#242135;
}

.mobile-toggler{
  display:flex;
  align-items:Center;
  justify-content:space-between;
  padding:30px 0;
  border-top:1px solid #fff;
  cursor:pointer;
}

.mobile-toggler span{
  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
}

.mobile-toggler svg{
  transition:0.5s;
}

.rotate{
  transform:rotate(45deg);
}

.advantages-img{
  width:100%;
  height:180px;
  object-fit:cover;
  display:block;
  border-top:3px solid #EA8E79;
  border-bottom:3px solid #EA8E79;
  margin-bottom:37px;
}

.mobile-content{
  position:relative;
  overflow:hidden;
  background:#fff;
}

.advantage-title{
  font-weight: bold;
  font-size: 16px;
  line-height: 160%;
  text-transform: uppercase;
  color: #242135;
  text-align:center;
  padding:0 20px;
  margin-bottom:18px;
}

.advantage-text{
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  color: #242135;
  padding:0 20px;
  margin-bottom:75px;
}
</style>
