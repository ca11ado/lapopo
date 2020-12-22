<template>
  <div>
    <div
      v-for="member in members"
      :key="member.name"
      class="card"
    >
      <div class="card-body bg-light">
        <h5 class="card-title">{{ member.name }}</h5>
        <poker-card class="mx-auto" type="test" />
      </div>
    </div>
  </div>
</template>

<script>
import PokerCard from '@/components/poker-card/index.vue';

export default {
  components: {
    PokerCard,
  },
  props: {
    members: {
      type: Array,
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
