<template>
  <div id="nav">
    <router-link to="/">Home Page</router-link>
    <h3 v-if="userName">Your name is: {{ userName }}</h3>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  computed: {
    userName(): string {
      return this.$store.state.user.name;
    },
  },
});
</script>

<style>
html, body, #app {
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
  justify-content: flex-end;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
