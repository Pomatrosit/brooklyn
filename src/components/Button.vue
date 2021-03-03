<template>
  <div class="button"
   :style="{
       background,
       width: width || '100%',
       height: height || '60px',
       border: border || 'none',
       margin: margin || '0'
     }"
  >
    <span
      :style="{
        fontSize,
        color: fontColor
      }">
      {{text}}
    </span>
    <slot />
  </div>
</template>

<script>
export default {
  props: ['text', 'background', 'width', 'height', 'fontSize', 'fontColor', 'border', 'margin']
}
</script>

<style>
.button{
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:2px;
  cursor:pointer;
}

.button span{
  margin-right:1.5vh;
  font-weight:500;
}
</style>
