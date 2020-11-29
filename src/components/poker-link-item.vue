<template>
  <ul class="root">
    <li><a :href="url">{{ url }}</a></li>
  </ul>
</template>

<script lang="ts">
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
  .root {
    display: block;
  }
</style>
