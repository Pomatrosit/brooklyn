<template>
  <div>
  <div v-if="isDesktop">
    <Contacts />
    <ContactsFooter />
  </div>
  <div v-else :style="{paddingTop: '57px'}">
    <MobileContactsMain />
  </div>
</div>
</template>

<script>
import Contacts from '@/components/contacts/Contacts'
import ContactsFooter from '@/components/contacts/ContactsFooter'
import MobileContactsMain from '@/components/home/MobileContactsMain'

export default {
  name: 'Contact',
  components: {
    Contacts,
    ContactsFooter,
    MobileContactsMain
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
    document.title = this.titles[0].contactstitle
    document.querySelector('meta[name="description"]').setAttribute('content', this.titles[0].contactsdescription)
  }
}
</script>
