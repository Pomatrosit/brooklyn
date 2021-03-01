<template>
  <div>
      <ApartmentsVisualSecond />
      <ApartmentsNav :active="1" />
      <ApartmentsFooter />
  </div>
</template>

<script>
import ApartmentsVisualSecond from '@/components/apartments/ApartmentsVisualSecond'
import ApartmentsNav from '@/components/apartments/ApartmentsNav'
import ApartmentsFooter from '@/components/apartments/ApartmentsFooter'

export default {
  name: 'Apartments',
  components: {
    ApartmentsVisualSecond,
    ApartmentsNav,
    ApartmentsFooter
  }
}
</script>
