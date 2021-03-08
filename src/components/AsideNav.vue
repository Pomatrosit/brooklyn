<template>
  <div class="aside-nav">
    <nav>
      <slot />
      <svg class="background" width="419" height="730" viewBox="0 0 419 730" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" d="M-59 0L418 430L-59 860M-300 0L177 430L-300 860M-180 0L298 430L-180 860M-421 0L57 430L-421 860M-120 0L357 430L-120 860M-361 0L116 430L-361 860M-240 0L237 430L-240 860M-481 0L-4 430L-481 860M-79 0L398 430L-79 860M-320 0L157 430L-320 860M-199 0L278 430L-199 860M-440 0L37 430L-440 860M-140 0L337 430L-140 860M-381 0L96 430L-381 860M-260 0L217 430L-260 860M-501 0L-24 430L-501 860M-99 0L378 430L-99 860M-340 0L137 430L-340 860M-219 0L258 430L-219 860M-460 0L17 430L-460 860M-160 0L317 430L-160 860M-401 0L76 430L-401 860M-280 0L197 430L-280 860M-521 0L-44 430L-521 860M-541 0L-64 430L-541 860" stroke="#EA8E79"/>
      </svg>
    </nav>
  </div>
</template>

<style scoped>
.aside-nav{
  width:61.3vh;
  position:fixed;
  top:10.42vh;
  bottom:13.54vh;
  left:0;
  z-index:0;
}

nav{
  background:#242135;
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:space-between;
  padding:8.333vh 10.4vh 8.333vh 12.5vh;
  position:relative;
}

.background{
  position:absolute;
  top:0;
  left:0;
  width:44.75vh;
  height:76vh;
  z-index:0;
}

@media screen and (max-width:1250px){
  nav{
      padding:8.333vh 8.4vh 8.333vh 10.5vh;
  }
}
</style>
