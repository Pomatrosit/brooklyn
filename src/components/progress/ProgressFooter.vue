<template>
  <footer>
    <div class="app-wrapper">
      <p class="footer__screen-description">Ход строительства</p>
      <FooterMain />
  </div>
  </footer>
</template>

<script>
import FooterMain from '@/components/FooterMain'

export default {
  components: {
    FooterMain
  }
}
</script>

<style scoped>
footer{
  background:#fff;
  position:fixed;
  bottom:0;
  right:0;
  width:100%;
  z-index:1;
}

.app-wrapper{
  display:flex;
  align-items:center;
  justify-content:space-between;
}

.footer__screen-description{
  font-size: 2.08vh;
  color: #242135;
  position:relative;
  width:31vh;
  height:3.125vh;
}
</style>
