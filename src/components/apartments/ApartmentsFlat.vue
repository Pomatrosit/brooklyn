<template>
  <section class="apartments-main">
    <div class="app-wrapper apartments-wrapper">
       <BackBtn />
       <div class="flat">
         <img src="/img/apartments/flat1.png" alt="flat">
       </div>
    </div>
  </section>
</template>

<script>
import BackBtn from './BackBtn'

export default {
  components: {
    BackBtn
  }
}
</script>
<style scoped>
.flat{
  display:flex;
  align-items:center;
  justify-content:center;
  padding:10vh 0;
}

.flat img {
  max-width:95%;
}
</style>
