<template>
  <div class="root">
    <h1><slot name="header" /></h1>
    <poker-link-item v-for="({ hash }) in pokers" :key="hash" :url="`/pokers/${hash}`" />
  </div>
</template>

<script>
import PokerLinkItem from '@/components/poker-link-item.vue';

export default {
  props: {
    pokers: {
      type: Array,
      required: true,
    },
  },
  components: {
    PokerLinkItem,
  },
};
</script>

<style scoped>
  .root {
    display: block;
  }
</style>
