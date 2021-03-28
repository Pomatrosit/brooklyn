<template>
  <div class="overlay" @wheel.stop @click="closeModal">
    <div
      @click.stop
      class="modal"
      :style="{
        fontSize: '30px',
        overflow,
        height
      }"
    >
      <slot />
      <svg class="modal-bg" width="100%" height="100%" viewBox="0 0 952 730" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M952 594.391L2 1146.46L952 1681M952 270.347L2 822.415L952 1356.96M952 432.183L2 984.25L952 1518.79M952 108.139L2 660.206L952 1194.75M952 540.321L2 1092.39L952 1626.93M952 216.278L2 768.345L952 1302.89M952 378.113L2 930.181L952 1464.72M952 54.0694L2 606.137L952 1140.68M952 486.252L2 1038.32L952 1572.86M952 162.208L2 714.276L952 1248.82M952 324.044L2 876.111L952 1410.65M952 0L2 552.068L952 1086.61" stroke="#eee"/>
      </svg>
      <div class="modal-cross" @click="closeModal">
        <svg width="1.8vh" height="1.8vh" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.41406" width="20" height="2" rx="1" transform="rotate(45 1.41406 0)" fill="#242135"/>
          <rect x="15.5566" y="1.41406" width="20" height="2" rx="1" transform="rotate(135 15.5566 1.41406)" fill="#242135"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { setScrollAvailable, setScrollUnavailable } from '@/utils/utils'

export default {
  props: ['height', 'modalWithSlider', 'overflow', 'closeModal'],
  mounted () {
    setScrollUnavailable()
  },
  beforeDestroy () {
    setScrollAvailable()
  }
}
</script>

<style scoped>
.overlay{
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background: rgba(0, 0, 0, 0.8);
  display:flex;
  align-items:center;
  justify-content:center;
  perspective: 1500px;
  z-index:1000;
}

.modal{
  background: #322F45;
  position:relative;
  z-index:1001;
  overflow-y:scroll;
  width:100%;
  max-height:80vh;
  position:relative;
  overflow-x:hidden;
  overflow-y:scroll;
  transform-style: preserve-3d;
  animation:open-modal-animation 0.5s ease-in-out forwards;
  padding:6vh;
  max-width:500px;
}

.modal-cross{
  position:absolute;
  width:4.2vh;
  height:4.2vh;
  background:#fff;
  right:0;
  top:0;
  cursor:pointer;
  display:flex;
  align-items:Center;
  justify-content:center;
  transition:0.3s;
}

.modal::-webkit-scrollbar {
    width: 4px; /* ширина для вертикального скролла */
    background-color: #322F45;
}

.modal::-webkit-scrollbar-thumb {
    background-color: #fff;
}

.modal-bg{
  position:absolute;
  right:0;
  bottom:0;
  z-index:0;
  opacity:0.05;
}

@keyframes open-modal-animation{
  from{
    opacity:0;
    transform:translateY(50px)
  }
  to{
    opacity:1;
    transform:translateY(0)
  }
}

@media (hover:hover){
  .modal-cross:hover{
    background:#eee;
  }
}

@media screen and (max-width:768px){
  .overlay{
    align-items: flex-end;
  }
  .modal-cross{
    width:30px;
    height:30px;
  }
}
</style>
