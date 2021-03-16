<template>
  <div class="contacts">
    <div class="app-wrapper">
      <div class="mobile-toggler" @click="toggleOpen">
        <span>
          Контакты
        </span>
        <svg ref="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="9" width="20" height="2" rx="1" fill="white"/>
          <rect x="11" width="20" height="2" rx="1" transform="rotate(90 11 0)" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="mobile-content" ref="content">
      <MobileContactsMain />
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import MobileContactsMain from '@/components/home/MobileContactsMain'

export default {
  components: {
    MobileContactsMain
  },
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
  }
}
</script>

<style scoped>
.contacts{
  background:#242135;
}

.mobile-toggler{
  display:flex;
  align-items:Center;
  justify-content:space-between;
  padding:30px 0;
  border-top:1px solid #fff;
  cursor:pointer;
  background:#242135;
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
</style>
