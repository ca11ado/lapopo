<template>
  <ul class="list-group">
    <li
      v-for="({ name, role }) in items"
      :key="name"
      :class="{ 'list-group-item': true, active: role === 'owner' }"
    >
      {{ name }}
    </li>
  </ul>
</template>

<script>

export default {
  components: {
  },
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {};
  },
  computed: {
  },
};
</script>

<style scoped>
</style>
