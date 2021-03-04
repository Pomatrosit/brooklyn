<template>
  <div class="gallery-main">
    <div class="app-wrapper">
       {{id}}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
