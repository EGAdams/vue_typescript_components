<template>
  <div class="app">
    this came from a copy of the progress component
    <log-viewer v-bind:object_name="object_name"
                v-bind:screen_html="screen_html"></log-viewer>
    <monitor-led></monitor-led>            
    <button @click="startCommandManager">Start Command Manager</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogViewer from './components/LogViewer.vue';
import MonitorLed from './components/MonitorLed.vue';
export default defineComponent({
    name: 'App',
    components: {
    LogViewer,
    MonitorLed
    },
    data() {
        return {
            object_name: "",
            screen_html: "ready.",
        }
    },
    methods: {
        startCommandManager() {
            alert( "starting command manager..." );
        }
    }
});
</script>

<style></style>
