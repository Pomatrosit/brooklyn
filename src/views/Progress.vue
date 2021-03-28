<template>
  <div>
    <div v-if="isDesktop">
      <ProgressMain />
      <ProgressFooter />
    </div>
    <div v-else>
      <ProgressMobile />
    </div>
  </div>
</template>

<script>
import ProgressFooter from '@/components/progress/ProgressFooter'
import ProgressMain from '@/components/progress/ProgressMain'
import ProgressMobile from '@/components/progress/ProgressMobile'

export default {
  name: 'Progress',
  components: {
    ProgressFooter,
    ProgressMain,
    ProgressMobile
  },
  computed: {
    isDesktop () {
      return this.$store.getters.isDesktop
    },
    titles () {
      return this.$store.getters.titles
    }
  },
  mounted () {
    document.title = this.titles[0].progresstitle
    document.querySelector('meta[name="description"]').setAttribute('content', this.titles[0].progressdescription)
  }
}
</script>
