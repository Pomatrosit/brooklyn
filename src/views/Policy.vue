<template>
<div>
  <div v-if="isDesktop">
    <Policy />
    <PolicyFooter />
  </div>
  <div v-else>
    <PolicyMobile />
  </div>
</div>
</template>

<script>
import Policy from '@/components/policy/Policy'
import PolicyFooter from '@/components/policy/PolicyFooter'
import PolicyMobile from '@/components/policy/PolicyMobile'

export default {
  components: {
    Policy,
    PolicyFooter,
    PolicyMobile
  },
  computed: {
    isDesktop () {
      return this.$store.getters.isDesktop
    }
  }
}
</script>
