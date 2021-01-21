<template>
  <div class="center">
    <h1>Page not found</h1>
    <Shruggie />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Shruggie from '@/components/shruggie/shruggie.vue';

export default defineComponent({
  name: 'Error Page',
  components: {
    Shruggie,
  },
});
</script>

<style scoped>
.center {
  margin-top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.center > * + * {
  margin-top: 20px;
}
</style>
