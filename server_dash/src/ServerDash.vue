<template>
    <log-viewer></log-viewer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import LogViewer from './components/LogViewer.vue'

@Options({
  components: {
    LogViewer
  }
})
export default class ServerDash extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
