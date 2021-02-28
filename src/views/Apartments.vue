<template>
  <div class="apartments">
    <ApartmentsFirst />
    <ApartmentsNav />
  </div>
</template>

<script>
import ApartmentsFirst from '@/components/apartments/ApartmentsFirst'
import ApartmentsNav from '@/components/apartments/ApartmentsNav'

export default {
  name: 'Apartments',
  components: {
    ApartmentsFirst,
    ApartmentsNav
  }
}
</script>
