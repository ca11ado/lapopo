<template>
  <ul class="root">
    <li><router-link :to="url">{{ url }}</router-link></li>
  </ul>
</template>

<script>

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
