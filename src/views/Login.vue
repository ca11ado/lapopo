<template>
  <div class="login">
    <div v-if="userName">Your name is {{ userName }}</div>
    <Login v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/Login.vue';
import { ActionTypes } from '@/store/action-types';

export default defineComponent({
  components: {
    Login,
  },
  data() {
    return {
      name: '',
    };
  },
  async created() {
    if (!this.name) {
      await this.$store.dispatch(ActionTypes.GET_USER);
    }
  },
  computed: {
    userName(): string {
      return this.$store.state.user.name;
    },
  },
});
</script>

<style scoped>
  .login {
    height: 100%;
  }
</style>
