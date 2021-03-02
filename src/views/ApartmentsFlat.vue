<template>
  <div>
      <ApartmentsFlat />
      <AsideNav>
        <ApartmentsNav />
      </AsideNav>
      <ApartmentsFooter />
  </div>
</template>

<script>
import ApartmentsFlat from '@/components/apartments/ApartmentsFlat'
import ApartmentsNav from '@/components/apartments/ApartmentsNav'
import ApartmentsFooter from '@/components/apartments/ApartmentsFooter'
import AsideNav from '@/components/AsideNav'

export default {
  name: 'Apartments',
  components: {
    ApartmentsFlat,
    ApartmentsNav,
    ApartmentsFooter,
    AsideNav
  }
}
</script>
