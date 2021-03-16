<template>
  <div>
    <div v-if="isDesktop">
      <ContentWrapper>
        <ApartmentsParameters />
      </ContentWrapper>
      <AsideNav>
        <ApartmentsNav :active="2"/>
      </AsideNav>
      <ApartmentsFooter />
    </div>
    <div v-else>
      <ApartmentsParametersMobile />
    </div>
  </div>
</template>

<script>
import ApartmentsNav from '@/components/apartments/ApartmentsNav'
import ApartmentsFooter from '@/components/apartments/ApartmentsFooter'
import AsideNav from '@/components/AsideNav'
import ApartmentsParameters from '@/components/apartments/ApartmentsParameters'
import ContentWrapper from '@/components/ContentWrapper'
import ApartmentsParametersMobile from '@/components/apartments/ApartmentsParametersMobile'

export default {
  name: 'Apartments',
  components: {
    ApartmentsNav,
    ApartmentsFooter,
    AsideNav,
    ApartmentsParameters,
    ContentWrapper,
    ApartmentsParametersMobile
  },
  computed: {
    isDesktop () {
      return this.$store.getters.isDesktop
    }
  }
}
</script>
