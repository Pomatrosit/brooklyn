<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
    font-family: 'Montserrat', sans-serif;
}

*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
}

input, input:before, input:after {
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: initial;
}

.app-wrapper{
  margin:0 auto;
  width:90%;
}

.white-text{
  color: #FFFFFF;
}

.pink-text{
  color:#EA8E79;
}

.ymap-container{
  height:100%;
}

.svg-in-btn{
  transform:translateY(13%);
}

.gallery-main{
  position:fixed;
  top:0;
  right:0;
  left:0;
  bottom:0;
  padding:10.42vh 0 13.54vh 0;
}

@media screen and (max-width:1620px){
  .app-wrapper{
    width:95%;
  }
}
</style>
