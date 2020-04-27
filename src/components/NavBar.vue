<template>
  <div id="nav">
    <router-link :to="{ name: 'event-list' }">List</router-link> |
    <router-link :to="{ name: 'event-create' }">Create</router-link>
  </div>
</template>
<script>
export default {}
</script>
