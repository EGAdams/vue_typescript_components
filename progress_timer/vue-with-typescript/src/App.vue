<template>
  <div class="app">
    this came from the ninjas repo
    <progress-timer v-bind:timer_speed="timer_speed"></progress-timer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProgressTimer from './ProgressTimer.vue';

export default defineComponent({
  name: 'App',
  components: {
      ProgressTimer
  },
  data() {
      return {
          timer_speed: 200
      }
  },
});
</script>

<style></style>
