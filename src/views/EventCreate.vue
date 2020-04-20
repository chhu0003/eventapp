<template>
  <div>
    <h1>Create an Event, {{ user.name }}</h1>
    <p>This event is created by {{ user.name }}</p>
    <li v-for="item in categories" :key="item.id">
      {{ item }}
    </li>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['categories', 'user'])
  }
}
</script>
