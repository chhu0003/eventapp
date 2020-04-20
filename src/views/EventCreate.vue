<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event is created by {{ user.name }}</p>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength
    },
    ...mapState(['categories', 'user']),
    ...mapGetters(['getEventById'])
  }
}
</script>
