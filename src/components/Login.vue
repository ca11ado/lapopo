<template>
  <div class="login">
    <h1>Please, enter your name</h1>
    <form @submit.prevent="submitName">
      <input
        v-model="userName"
        class="login__input"
      />
      <button
        class="login__button"
      >Ok</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ActionTypes } from '@/store/action-types';
import router from '@/router';
// import * as userApi from '@/api/user';

export default defineComponent({
  data() {
    return {
      userName: '',
    };
  },
  methods: {
    async submitName() {
      await this.$store.dispatch(ActionTypes.SET_USER, this.name);
      if (this.$store.state.user.name) {
        const backPage = new URL(String(window.location)).searchParams.get('back');
        if (backPage) {
          router.push({ name: backPage });
        }
      }
    },
  },
  computed: {
    name(): string {
      return this.userName.trim();
    },
  },
});
</script>

<style scoped>
  .login {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login__input,
  .login__button {
    font-size: 20px;
  }
</style>
