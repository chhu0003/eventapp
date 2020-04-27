<template>
  <div>
    <h1>Oops!</h1>
    <h2>
      The <template v-if="resource">{{ resource }}</template> you're looking for
      is not here.
    </h2>
    <router-link :to="{ name: 'event-list' }">Back to homepage</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>
