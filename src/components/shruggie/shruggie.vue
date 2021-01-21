<template>
  <div class="wrapper">
    <div class="arm"></div>
    <div class="hand handLeft"></div>
    <div class="shoulder"></div>
    <div class="cheek cheekLeft"></div>
    <div class="eye"></div>
    <div class="eye"></div>
    <div class="mouth"></div>
    <div class="cheek cheekRight"></div>
    <div class="shoulder shoulderRight"></div>
    <div class="hand handRight"></div>
    <div class="arm armRight"></div>
  </div>
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

<style scoped>
.wrapper {
  position: relative;

  /* width: calc(20 * 16px); */
  width: 260px;
  display: flex;
}

.arm {
  width: 20px;

  /* height: calc(20 * 3px); */
  height: 60px;
  border-top: 3px solid black;
}

.armRight {
  /* margin-left: calc(20px / 5); */
  margin-left: 4px;
}

.hand {
  width: 20px;

  /* height: calc(20 * 3px); */
  height: 60px;
}

.handLeft {
  border-right: 3px solid black;
  transform: rotate(-45deg);

  /* margin-top: calc(20px / 5); */
  margin-top: 4px;
  margin-right: 20px;

  /* margin-left: calc(20px / 2); */
  margin-left: 10px;
}

.handRight {
  border-left: 3px solid black;
  transform: rotate(45deg);

  /* margin-top: calc(20px / 5); */
  margin-top: 4px;

  /* margin-right: calc(20px / 5); */
  margin-right: 4px;

  /* margin-left: -calc(20px / 5); */
  margin-left: -4px;
}

.cheek {
  width: 20px;

  /* height: calc(20 * 3px); */
  height: 60px;
  border-radius: 50%;
}

.cheekLeft {
  border-left: 3px solid black;
}

.cheekRight {
  position: relative;
  border-right: 3px solid black;

  /* left: -calc(20 * 1.5px); */
  left: -25px;
}

.shoulder {
  /* width: calc(20 * 2px); */
  width: 40px;

  /* height: calc(20 * 3px); */
  height: 60px;
  border-bottom: 3px solid black;
}

.shoulderRight {
  position: relative;

  /* left: -calc(20 * 1.5px); */
  left: -25px;
}

.eye {
  /* width: calc(20px / 2); */
  width: 10px;
  height: 20px;
  border-left: 3px solid black;
  transform: rotate(-10deg);
}

.mouth {
  position: relative;

  /* width: calc(20 * 2px); */
  width: 40px;

  /* height: calc(20 * 2px); */
  height: 40px;
  border-bottom: 3px solid black;
  border-radius: 50%;
  left: -25px;
  transform: rotate(-30deg);
}
</style>
