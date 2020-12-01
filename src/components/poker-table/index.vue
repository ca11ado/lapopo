<template>
  <div class="d-flex flex-row justify-content-between">
    <div
      v-for="member in members"
      :key="member.name"
      class="card"
    >
      <div class="card-body bg-light">
        <h5 class="card-title">{{ member.name }}</h5>
        Пользователь ещё не проголосовал
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    members: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  created() {
    console.log('%c custom log', 'color:red;', this.members);
  },
  computed: {
  },
};
</script>

<style scoped>
  .root {
    display: block;
  }
</style>
