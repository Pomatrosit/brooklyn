<template>
  <div>
    <ContentWrapper>
      123
    </ContentWrapper>
    <AsideNav>
      <NewsNav />
    </AsideNav>
    <NewsFooter />
  </div>
</template>

<script>
import NewsFooter from '@/components/news/NewsFooter'
import AsideNav from '@/components/AsideNav'
import ContentWrapper from '@/components/ContentWrapper'
import NewsNav from '@/components/news/NewsNav'

export default {
  name: 'News',
  components: {
    NewsFooter,
    AsideNav,
    ContentWrapper,
    NewsNav
  }
}
</script>
