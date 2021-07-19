<template>
    <div class="camera-main camera-animated">
        <iframe width="100%" height="480" src="https://rtsp.me/embed/eBbB49QY/" frameborder="0" allowfullscreen></iframe>
    </div>
</template>

<script>
import gsap, { Power2 } from 'gsap'

export default {
  mounted () {
    gsap.to('.camera-animated', { opacity: 0, y: 100, duration: 0 })
    gsap.to('.camera-animated', { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: Power2.easeInOut, delay: 1 })
  }
}
</script>

<style scoped>
.camera-main{
    margin-top:8.3vh;
    margin-bottom:8.3vh;
}
</style>
