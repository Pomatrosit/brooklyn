<template>
  <div>
    <div v-if="isDesktop">
      <GalleryCategory />
      <GalleryFooter />
    </div>
    <div v-else>
      <GalleryCategoryMobile />
    </div>
  </div>
</template>

<script>
import GalleryCategory from '@/components/gallery/GalleryCategory'
import GalleryFooter from '@/components/gallery/GalleryFooter'
import GalleryCategoryMobile from '@/components/gallery/GalleryCategoryMobile'

export default {
  name: 'Gallery',
  components: {
    GalleryCategory,
    GalleryFooter,
    GalleryCategoryMobile
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
