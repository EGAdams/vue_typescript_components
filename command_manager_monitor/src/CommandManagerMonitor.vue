<template>
  <div class="app">
    this came from a copy of the progress component
    <log-viewer v-bind:object_name="object_name"
                v-bind:screen_html="screen_html"></log-viewer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogViewer from './components/LogViewer.vue';
export default defineComponent({
    name: 'App',
    components: {
        LogViewer
    },
    data() {
        return {
            object_name: "",
            screen_html: "",
        }
    },
});
</script>

<style></style>
