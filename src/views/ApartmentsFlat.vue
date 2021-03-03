<template>
  <div>
      <ContentWrapper>
        <ApartmentsFlat />
      </ContentWrapper>
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
import ContentWrapper from '@/components/ContentWrapper'

export default {
  name: 'Apartments',
  components: {
    ApartmentsFlat,
    ApartmentsNav,
    ApartmentsFooter,
    AsideNav,
    ContentWrapper
  }
}
</script>
