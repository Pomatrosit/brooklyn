<template>
<div>
  <div v-if="isDesktop">
    <ContentWrapper>
      <NewsSingle />
    </ContentWrapper>
    <AsideNav>
      <NewsNav :isBackBtn="true"/>
    </AsideNav>
    <NewsFooter />
  </div>
  <div v-else>
    <NewsSingleMobile />
  </div>
</div>
</template>

<script>
import NewsFooter from '@/components/news/NewsFooter'
import AsideNav from '@/components/AsideNav'
import ContentWrapper from '@/components/ContentWrapper'
import NewsNav from '@/components/news/NewsNav'
import NewsSingle from '@/components/news/NewsSingle'
import NewsSingleMobile from '@/components/news/NewsSingleMobile'

export default {
  name: 'News',
  components: {
    NewsFooter,
    AsideNav,
    ContentWrapper,
    NewsNav,
    NewsSingle,
    NewsSingleMobile
  },
  computed: {
    isDesktop () {
      return this.$store.getters.isDesktop
    }
  }
}
</script>
