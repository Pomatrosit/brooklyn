<template>
<div>
  <div v-if="isDesktop">
    <ContentWrapper>
        <CameraMain />
    </ContentWrapper>
    <AsideNav :animated="true">
      <CameraNav />
    </AsideNav>
    <CameraFooter />
  </div>
  <div v-else :style="{paddingTop: '57px'}">
    <CameraMobile />
  </div>
  </div>
</template>

<script>
import CameraFooter from '@/components/camera/CameraFooter'
import AsideNav from '@/components/AsideNav'
import CameraNav from '@/components/camera/CameraNav'
import ContentWrapper from '@/components/ContentWrapper'
import CameraMain from '@/components/camera/CameraMain'
import CameraMobile from '@/components/camera/CameraMobile'

export default {
  components: {
    CameraFooter,
    AsideNav,
    CameraNav,
    ContentWrapper,
    CameraMain,
    CameraMobile
  },
  computed: {
    isDesktop () {
      return this.$store.getters.isDesktop
    }
  }
}
</script>
