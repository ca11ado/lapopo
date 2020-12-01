<template>
  <li class="root"><router-link :to="url">{{ url }}</router-link></li>
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
</style>
