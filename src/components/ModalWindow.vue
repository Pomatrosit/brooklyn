<template>
  <div class="overlay" @click="closeModal">
    <div
      class="modal"
      :style="{
        maxWidth: maxWidth || '500px',
        padding: padding || '20px',
        fontSize: '30px',
        overflow,
        height
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['maxWidth', 'height', 'padding', 'modalWithSlider', 'overflow', 'closeModal']
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
  background: #fff;
  position:relative;
  z-index:1001;
  overflow-y:scroll;
  width:100%;
  background:#fff;
  max-height:80vh;
  position:relative;
  padding:padding;
  overflow-x:hidden;
  overflow-y:scroll;
  transform-style: preserve-3d;
}

.modal::-webkit-scrollbar {
    width: 4px; /* ширина для вертикального скролла */
    background-color: #fff;
}

.modal::-webkit-scrollbar-thumb {
    background-color: #492A64;
}

@media screen and (max-width:768px){
  .overlay{
    align-items: flex-end;
  }
}

</style>
