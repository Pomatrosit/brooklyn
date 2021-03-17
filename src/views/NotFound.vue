<template>
<div>
  <div v-if="isDesktop">
    <NotFound />
    <NotFoundFooter />
  </div>
  <div v-else>
    <NotFoundMobile />
  </div>
</div>
</template>

<script>
import NotFound from '@/components/notFound/NotFound'
import NotFoundFooter from '@/components/notFound/NotFoundFooter'
import NotFoundMobile from '@/components/notFound/NotFoundMobile'

export default {
  name: 'News',
  components: {
    NotFound,
    NotFoundFooter,
    NotFoundMobile
  },
  computed: {
    isDesktop () {
      return this.$store.getters.isDesktop
    }
  }
}
</script>
