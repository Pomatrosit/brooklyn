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
