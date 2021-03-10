<template>
  <section class="content">
    <div class="app-wrapper content-wrapper">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.content{
  position:fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:0;
  padding:10.42vh 0 13.54vh 0;
}

.content-wrapper{
  /* padding:0 6.25vh 0 calc(67.55vh - 5vw); */
  padding:0 2vw 0 27.3vw;
  height:100%;
  background: rgba(36, 33, 53, 0.02);
  position:relative;
  overflow-y:Scroll;
}

.content-wrapper::-webkit-scrollbar {
    width: 4px;
    background-color: #fff;
}

.content-wrapper::-webkit-scrollbar-thumb {
    background-color: #242135;
}

@media screen and (max-width:1620px){
  .content-wrapper{
    padding:0 2vw 0 29.8vw;
  }
}
</style>
