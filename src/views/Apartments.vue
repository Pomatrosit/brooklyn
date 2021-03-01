<template>
  <div class="apartments">
    <div v-if="currentScreen === 1">
      <ApartmentsVisualFirst />
    </div>
    <div v-else-if="currentScreen === 2">
      <ApartmentsVisualSecond />
    </div>
    <ApartmentsNav />
  </div>
</template>

<script>
import ApartmentsVisualFirst from '@/components/apartments/ApartmentsVisualFirst'
import ApartmentsVisualSecond from '@/components/apartments/ApartmentsVisualSecond'
import ApartmentsNav from '@/components/apartments/ApartmentsNav'

export default {
  name: 'Apartments',
  components: {
    ApartmentsVisualFirst,
    ApartmentsVisualSecond,
    ApartmentsNav
  },
  computed: {
    currentScreen () {
      return this.$store.getters.currentScreen
    }
  }
}
</script>
