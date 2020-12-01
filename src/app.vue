<template>
  <div id="nav" class="container">
    <router-link to="/">
      <h5>Home Page</h5>
    </router-link>
    <h5 v-if="$store.state.poker && $store.state.poker.hash === $route.params.hash">
      Poker: {{ $store.state.poker.name || '' }}
    </h5>
    <h5 v-if="userName">Your name is: {{ userName }}</h5>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  created() {
    console.log('%c custom log', 'color:red;', this.$route, this.$store.state.poker);
  },
  computed: {
    userName(): string {
      return this.$store.state.user.name;
    },
  },
});
</script>

<style>
html,
body,
#app {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#nav a {
  color: #2c3e50;
  margin-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
