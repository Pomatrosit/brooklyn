<template>
  <div>
      <ApartmentsVisualFirst />
      <ApartmentsNav :active="1" />
      <ApartmentsFooter />
  </div>
</template>

<script>
import ApartmentsVisualFirst from '@/components/apartments/ApartmentsVisualFirst'
import ApartmentsNav from '@/components/apartments/ApartmentsNav'
import ApartmentsFooter from '@/components/apartments/ApartmentsFooter'

export default {
  name: 'Apartments',
  components: {
    ApartmentsVisualFirst,
    ApartmentsNav,
    ApartmentsFooter
  }
}
</script>
