<template>
    <monitor-led v-bind:monitorLedData="serverLedData"></monitor-led>
</template>

<script lang="ts">
import ServerLedData from '@/typescript_source/concrete/ServerLedData';
import { defineComponent } from 'vue';
import MonitorLed from './MonitorLed.vue';

export default defineComponent({
  name: 'Home',
  data() {
      return {
          serverLedData: new ServerLedData()
      }
  },
  components: {
      MonitorLed
  },
});
</script>

<style>
.monitor-led {
    width: 34.85em;
    height: 0.8m;
}
</style>
