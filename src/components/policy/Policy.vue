<template>
  <div class="policy-wrapper">
   <div class="app-wrapper">
      <div class="policy" v-html="policy"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    policy () {
      return this.$store.getters.allInfo[0].policy
    }
  }
}
</script>

<style scoped>
.policy-wrapper{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  padding:10.42vh 0 13.54vh 0;
}

.app-wrapper{
  padding:5vh 0;
  height:100%;
  position:relative;
  overflow-y:scroll;
}

.app-wrapper::-webkit-scrollbar {
    width: 4px; /* ширина для вертикального скролла */
    background-color: #fff;
}

.app-wrapper::-webkit-scrollbar-thumb {
    background-color: #322F45;
}
</style>
