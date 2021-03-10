<template>
  <div>
    <ProgressMain />
    <ProgressFooter />
  </div>
</template>

<script>
import ProgressFooter from '@/components/progress/ProgressFooter'
import ProgressMain from '@/components/progress/ProgressMain'

export default {
  name: 'Progress',
  components: {
    ProgressFooter,
    ProgressMain
  }
}
</script>
