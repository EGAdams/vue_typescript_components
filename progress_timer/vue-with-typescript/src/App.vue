<template>
  <div class="app">
    this came from the ninjas repo
  </div>
  <div>
      <progress-timer></progress-timer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProgressTimer from './ProgressTimer.vue';

export default defineComponent({
  name: 'App',
  components: {
      ProgressTimer
  }
});
</script>

<style>

</style>
