<template>
  <div>
      <ContentWrapper>
        <ApartmentsParameters />
      </ContentWrapper>
      <AsideNav>
        <ApartmentsNav :active="2"/>
      </AsideNav>
      <ApartmentsFooter />
  </div>
</template>

<script>
import ApartmentsNav from '@/components/apartments/ApartmentsNav'
import ApartmentsFooter from '@/components/apartments/ApartmentsFooter'
import AsideNav from '@/components/AsideNav'
import ApartmentsParameters from '@/components/apartments/ApartmentsParameters'
import ContentWrapper from '@/components/ContentWrapper'

export default {
  name: 'Apartments',
  components: {
    ApartmentsNav,
    ApartmentsFooter,
    AsideNav,
    ApartmentsParameters,
    ContentWrapper
  }
}
</script>
