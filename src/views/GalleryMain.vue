<template>
  <div>
    <GalleryMain />
    <GalleryFooter />
  </div>
</template>

<script>
import GalleryMain from '@/components/gallery/GalleryMain'
import GalleryFooter from '@/components/gallery/GalleryFooter'

export default {
  name: 'Gallery',
  components: {
    GalleryMain,
    GalleryFooter
  }
}
</script>
