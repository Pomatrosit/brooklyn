<template>
  <div>
      <ContentWrapper>
        <ApartmentsVisualFirst />
      </ContentWrapper>
      <AsideNav :animated="true">
        <ApartmentsNav :active="1" :animated="true"/>
      </AsideNav>
      <ApartmentsFooter />
  </div>
</template>

<script>
import ApartmentsVisualFirst from '@/components/apartments/ApartmentsVisualFirst'
import ApartmentsNav from '@/components/apartments/ApartmentsNav'
import ApartmentsFooter from '@/components/apartments/ApartmentsFooter'
import AsideNav from '@/components/AsideNav'
import ContentWrapper from '@/components/ContentWrapper'

export default {
  name: 'Apartments',
  components: {
    ApartmentsVisualFirst,
    ApartmentsNav,
    ApartmentsFooter,
    AsideNav,
    ContentWrapper
  },
  computed: {
    titles () {
      return this.$store.getters.titles
    },
    isDesktop () {
      return this.$store.getters.isDesktop
    }
  },
  watch: {
    isDesktop (isDesktop) {
      if (!isDesktop) this.$router.push('/apartments/parameters/studios')
    }
  },
  mounted () {
    document.title = this.titles[0].apartmentstitle
    document.querySelector('meta[name="description"]').setAttribute('content', this.titles[0].apartmentsdescription)
  }
}
</script>
