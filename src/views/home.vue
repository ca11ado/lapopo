<template>
  <div class="home">
    <div class="links">
      <div class="">
        <h1>Create poker</h1>
        <create-button class="button" />
      </div>
      <div class="">
        <poker-link-list :pokers="pokers.filter(({ is_owner }) => is_owner)">
            <template #header>Admin for:</template>
          </poker-link-list>
      </div>
      <div class="">
          <poker-link-list :pokers="pokers.filter(({ is_owner }) => !is_owner)">
            <template #header>Participation for:</template>
          </poker-link-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import get from 'lodash/get';
import { defineComponent } from 'vue';
import CreateButton from '@/components/create-button.vue';
import PokerLinkList from '@/components/poker-link-list.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CreateButton,
    PokerLinkList,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    pokers() {
      return get(this.$store, 'state.user.pokers', []);
    },
  },
});
</script>
<style scoped>
  .links {
    display: flex;
    justify-content: space-around;
  }

  .button {
    width: 100%;
    min-width: 100%;
  }
</style>
