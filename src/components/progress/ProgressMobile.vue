<template>
  <div class="progress">
    <div class="app-wrapper">
      <h1 class="title">Xод строительства</h1>
      <!-- <div class="button">
        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.7451 0C16.894 0 19.0862 1.99334 19.3197 4.91759L22.7612 3.51125C24.2502 2.90394 25.8748 3.93582 25.9931 5.50385L26 5.68709V14.3142C26 15.922 24.4304 17.0345 22.933 16.5514L22.7607 16.4885L19.3197 15.082C19.0857 18.0044 16.889 20 13.7451 20H5.59528C2.2606 20 0 17.7661 0 14.5579V5.44214C0 2.23389 2.2606 0 5.59528 0H13.7451ZM13.7451 1.94919H5.59528C3.3326 1.94919 1.95003 3.31543 1.95003 5.44214V14.5579C1.95003 16.6846 3.3326 18.0508 5.59528 18.0508H13.7451C16.0022 18.0508 17.3904 16.681 17.3904 14.5579L17.3901 13.667C17.3897 13.6531 17.3896 13.6392 17.3898 13.6253L17.3904 5.44214C17.3904 3.31594 16.007 1.94919 13.7451 1.94919ZM23.5866 5.29087L23.4985 5.31577L19.3404 7.01319V12.9855L23.4979 14.684C23.7326 14.7797 23.9863 14.6377 24.0397 14.4053L24.05 14.3142V5.68709C24.05 5.43396 23.822 5.25269 23.5866 5.29087Z" fill="white"/>
        </svg>
        <span>Онлайн трансляция</span>
      </div> -->
      <ProgressItemMobile
        v-for="item in progressItems"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script scoped>
import ProgressItemMobile from './ProgressItemMobile'

export default {
  components: {
    ProgressItemMobile
  },
  computed: {
    progressItems () {
      return this.$store.getters.progressItems
    }
  }
}
</script>

<style scoped>
.progress{
  padding-top:57px;
  margin-bottom:60px;
}

.title{
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  padding:40px 0 5px 0;
  color: #242135;
  text-align:center;
}

.button{
  width:100%;
  height:60px;
  background: #242135;
  border-radius: 2px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  margin:30px 0;
}

.button span {
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  margin-left:15px;
}
</style>
