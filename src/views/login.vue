<template>
  <div class="login">
    <h1 v-if="userName">You are authorized</h1>
    <Login v-else />
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import Login from '@/components/login.vue';
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
      if (this.$store.state.user.name) {
        const backPage = new URL(String(window.location)).searchParams.get('back');
        if (backPage) {
          router.push({ name: backPage });
        }
      }
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
