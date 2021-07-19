<template>
    <div class="warn"><p>Мы используем куки-файлы, чтобы обеспечить вам наилучшие впечатления на нашем сайте. Продолжая использовать наш сайт
вы автоматически соглашаетесь с использованием данных технологий.
    </p>
    <div class="btn-wrapper">
    <Button
               text="Согласиться"
               background="#EA8E79"
               width="100%"
               height="6.25vh"
               fontSize="1.667vh"
               fontColor="#fff"
               backgroundHover="#EBA393"
               type="pink-btn"
               :clickHandler='toggleCookieWarning'
    />
    </div>
    </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  },
  props: ['toggleCookieWarning']
}
</script>

<style scoped>
.warn{
    position:fixed;
    width:100%;
    height:13.54vh;
    background:#242135;
    z-index:9999;
    left:0;
    bottom:0;
    display:flex;
    padding: 0 6.25vw;
    align-items:center;
    justify-content:space-between;
}
p{
    width:60vw;
    font-weight: 300;
    font-size: 1.875vh;
    line-height: 2.3vh;
    color: #FFFFFF;
}
.btn-wrapper{
    width:20%;
}

@media screen and (max-width: 1100px){
    .warn{
        height:auto;
        border-top:1px solid #ea8e79;
        flex-direction:column;
        padding: 50px 20px;
    }
    p{
        margin-bottom:50px;
        width:100%;
    }
    .btn-wrapper{
        width:50%;
    }
}

@media screen and (max-width: 600px){
.btn-wrapper{
        width:100%;
    }
}
</style>
