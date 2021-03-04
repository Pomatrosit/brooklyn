<template>
  <div>
    <GalleryCategory />
    <GalleryFooter />
  </div>
</template>

<script>
import GalleryCategory from '@/components/gallery/GalleryCategory'
import GalleryFooter from '@/components/gallery/GalleryFooter'

export default {
  name: 'Gallery',
  components: {
    GalleryCategory,
    GalleryFooter
  }
}
</script>
