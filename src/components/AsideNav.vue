<template>
  <div class="aside-nav" ref="nav">
    <nav>
      <slot />
      <svg class="background" ref="bg" width="419" height="730" viewBox="0 0 419 730" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" d="M-59 0L418 430L-59 860M-300 0L177 430L-300 860M-180 0L298 430L-180 860M-421 0L57 430L-421 860M-120 0L357 430L-120 860M-361 0L116 430L-361 860M-240 0L237 430L-240 860M-481 0L-4 430L-481 860M-79 0L398 430L-79 860M-320 0L157 430L-320 860M-199 0L278 430L-199 860M-440 0L37 430L-440 860M-140 0L337 430L-140 860M-381 0L96 430L-381 860M-260 0L217 430L-260 860M-501 0L-24 430L-501 860M-99 0L378 430L-99 860M-340 0L137 430L-340 860M-219 0L258 430L-219 860M-460 0L17 430L-460 860M-160 0L317 430L-160 860M-401 0L76 430L-401 860M-280 0L197 430L-280 860M-521 0L-44 430L-521 860M-541 0L-64 430L-541 860" stroke="#EA8E79"/>
      </svg>
    </nav>
  </div>
</template>

<script>
import gsap, { Power2 } from 'gsap'

export default {
  props: ['animated'],
  mounted () {
    if (this.animated) {
      gsap.to(this.$refs.bg, { opacity: 0, x: -100, duration: 0 })
      gsap.to(this.$refs.nav, { startAt: { x: -100, opacity: 0 }, opacity: 1, x: 0, duration: 1, ease: Power2.easeInOut })
      gsap.to(this.$refs.bg, { opacity: 1, x: 0, duration: 1, ease: Power2.easeInOut, delay: 0.5 })
    }
  }
}
</script>

<style scoped>
.aside-nav{
  width:30.3vw;
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
  padding:8.333vh 5.2vw 8.333vh 6.12vw;
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

@media (max-aspect-ratio: 16/9) {
  nav{
      padding:8.333vh 3vw 8.333vh 3vw;
  }
}
</style>
