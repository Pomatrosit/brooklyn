<template>
   <div class="app-wrapper">
      <div class="policy" :style="{padding: '80px 0'}" v-html="policy"></div>
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
