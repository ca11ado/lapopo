<template>
  <div class="card-group">
    <div
      class="card text-white bg-dark mx-1"
      :class="{ active: role === 'owner' }"
      v-for="({ value }) in items"
      :key="`card-${value}`"
    >
      <div class="card-body">
        <h3 class="card-title mx-auto" v-html="value"></h3>
      </div>
    </div>
  </div>
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
