<template>
  <div class="login">
    <h1 v-if="userName">You are authorized</h1>
    <Login v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/login.vue';

export default defineComponent({
  components: {
    Login,
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
