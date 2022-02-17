<template>
    <div>
        <div class="monitor-led" :style="monitorLedData.classObject">{{ monitorLedData.ledText }}</div>
    </div>
</template>

<script lang="ts">
import ServerLedData from "@/typescript_source/concrete/ServerLedData";
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
    name: "monitor-led",
    props: {
        monitorLedData: {
            type: ServerLedData,
            default: new ServerLedData 
        }
    },
});
</script>

<style>
.monitor-led {
    width: 34.85em;
    height: 0.8m;
}
</style>
