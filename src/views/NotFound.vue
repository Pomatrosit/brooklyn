<template>
<div>
  <div v-if="isDesktop">
    <ContentWrapper>
      <NewsList />
    </ContentWrapper>
    <AsideNav :animated="true">
      <NewsNav :animated="true"/>
    </AsideNav>
    <NewsFooter />
  </div>
  <div v-else>
    <NewsMobile />
  </div>
</div>
</template>

<script>
import NewsFooter from '@/components/news/NewsFooter'
import AsideNav from '@/components/AsideNav'
import ContentWrapper from '@/components/ContentWrapper'
import NewsNav from '@/components/news/NewsNav'
import NewsList from '@/components/news/NewsList'
import NewsMobile from '@/components/news/NewsMobile'

export default {
  name: 'News',
  components: {
    NewsFooter,
    AsideNav,
    ContentWrapper,
    NewsNav,
    NewsList,
    NewsMobile
  },
  computed: {
    isDesktop () {
      return this.$store.getters.isDesktop
    }
  }
}
</script>
