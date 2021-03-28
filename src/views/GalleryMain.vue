<template>
  <div>
    <div v-if="isDesktop">
      <GalleryMain />
      <GalleryFooter />
    </div>
    <div v-else>
      <GalleryMainMobile />
    </div>
  </div>
</template>

<script>
import GalleryMain from '@/components/gallery/GalleryMain'
import GalleryFooter from '@/components/gallery/GalleryFooter'
import GalleryMainMobile from '@/components/gallery/GalleryMainMobile'

export default {
  name: 'Gallery',
  components: {
    GalleryMain,
    GalleryFooter,
    GalleryMainMobile
  },
  computed: {
    isDesktop () {
      return this.$store.getters.isDesktop
    },
    titles () {
      return this.$store.getters.titles
    }
  },
  mounted () {
    document.title = this.titles[0].gallerytitle
    document.querySelector('meta[name="description"]').setAttribute('content', this.titles[0].gallerydescription)
  }
}
</script>
