<template>
  <ul class="list-group">
    <li
      v-for="({ title, is_active }) in items"
      :key="title"
      :class="{
       'list-group-item': true,
       'list-group-item-action': true,
        active: is_active
      }"
    >
      {{ title }}
    </li>
  </ul>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>

<style scoped>
</style>
