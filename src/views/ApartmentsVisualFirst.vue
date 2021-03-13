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
  data: () => ({
    animated: false,
    prevRoute: null
  }),
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
    localStorage.setItem('path', from.path)
  },
  mounted () {
    const path = localStorage.getItem('path')
    const pathArr = path.split('/')
    if (!pathArr.includes('apartments') && !pathArr.includes('flat')) this.animated = true
  }
}
</script>
