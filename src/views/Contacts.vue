<template>
  <div>
    <Contacts />
    <ContactsFooter />
  </div>
</template>

<script>
import Contacts from '@/components/contacts/Contacts'
import ContactsFooter from '@/components/contacts/ContactsFooter'

export default {
  name: 'Contact',
  components: {
    Contacts,
    ContactsFooter
  }
}
</script>
