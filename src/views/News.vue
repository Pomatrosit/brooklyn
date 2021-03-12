<template>
  <div>
    <ContentWrapper>
      <NewsList />
    </ContentWrapper>
    <AsideNav :animated="true">
      <NewsNav :animated="true"/>
    </AsideNav>
    <NewsFooter />
  </div>
</template>

<script>
import NewsFooter from '@/components/news/NewsFooter'
import AsideNav from '@/components/AsideNav'
import ContentWrapper from '@/components/ContentWrapper'
import NewsNav from '@/components/news/NewsNav'
import NewsList from '@/components/news/NewsList'

export default {
  name: 'News',
  components: {
    NewsFooter,
    AsideNav,
    ContentWrapper,
    NewsNav,
    NewsList
  }
}
</script>
