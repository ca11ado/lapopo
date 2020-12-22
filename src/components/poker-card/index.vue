<template>
  <div class="root">
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
  .root {
    display: block;
    width: 100px;
    height: 120px;
    border: 1px solid black;
    background: url('./noun_4 of Clubs_1395516.svg');
  }
</style>
