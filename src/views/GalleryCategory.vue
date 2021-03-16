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
    }
  }
}
</script>
