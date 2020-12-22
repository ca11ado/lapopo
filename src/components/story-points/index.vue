<template>
  <div class="card-group">
    <div
      class="card text-white bg-dark"
      :class="{
        active: role === 'owner',
        ['mr-1']: index === 0,
        ['mx-1']: index !== 0,
      }"
      v-for="({ value }, index) in items"
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
