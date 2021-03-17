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
    }
  }
}
</script>
