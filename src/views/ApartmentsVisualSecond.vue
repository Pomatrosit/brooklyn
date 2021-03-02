<template>
  <div>
      <ApartmentsVisualSecond />
      <AsideNav>
        <ApartmentsNav :active="1" />
      </AsideNav>
      <ApartmentsFooter />
  </div>
</template>

<script>
import ApartmentsVisualSecond from '@/components/apartments/ApartmentsVisualSecond'
import ApartmentsNav from '@/components/apartments/ApartmentsNav'
import ApartmentsFooter from '@/components/apartments/ApartmentsFooter'
import AsideNav from '@/components/AsideNav'

export default {
  name: 'Apartments',
  components: {
    ApartmentsVisualSecond,
    ApartmentsNav,
    ApartmentsFooter,
    AsideNav
  }
}
</script>
