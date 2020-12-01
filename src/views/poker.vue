<template>
  <div>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-8">
          <poker-table class="m-5" :members="poker.members" />
          <story-points :items="poker.story_points" />
        </div>
        <div class="col-4">
          <div>
            <h1>Tasks List</h1>
            <tasks :items="poker.tasks_list" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ActionTypes } from '@/store/action-types';
import Tasks from '@/components/tasks/index.vue';
import PokerTable from '@/components/poker-table/index.vue';
import StoryPoints from '@/components/story-points/index.vue';

export default defineComponent({
  name: 'Poker',
  components: {
    PokerTable,
    Tasks,
    StoryPoints,
  },
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

  .main-board {
    flex-basis: 60%;
  }

  .side-column > * + * {
    margin-top: 20px;
  }
</style>
