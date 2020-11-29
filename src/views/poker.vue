<template>
  <div class="poker">
    <h1>Poker Page: {{ $route.params.hash }}</h1>
    <div>
      <h1>Tasks List</h1>
      <ul>
        <li
          v-for="task in poker.tasks_list"
          :key="task.title"
          :class="{ active: task.is_active }"
        >
          {{ task.title }}
        </li>
      </ul>
    </div>
    <div>
      <h1>Members</h1>
      <ul>
        <li
          v-for="({ name, role }) in poker.members"
          :key="name"
          :class="{ owner: role === 'owner' }"
        >
          {{ name }}
        </li>
      </ul>
    </div>
    <div>
      <h1>Story points</h1>
      <ul>
        <li v-for="point in poker.story_points" :key="point.value">
          {{ point.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ActionTypes } from '@/store/action-types';

export default defineComponent({
  name: 'Poker',
  computed: {
    poker() {
      return this.$store.state.poker;
    },
  },
  created() {
    this.$store.dispatch(ActionTypes.GET_POKER, this.$route.params.hash);
  },
});
</script>

<style scoped>
  .poker {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .owner {
    color: blue;
  }

  .active {
    color: blue;
  }
</style>
