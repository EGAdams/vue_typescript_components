<template>
    <div>
        <div class="monitor-led" :style="monitor_led_data.classObject">{{ monitor_led_data.ledText }}</div>
    </div>
</template>

<script lang="ts">
import IMonitorLedData from "@/typescript_source/abstract/IMonitorLedData";
import ServerLedData from "@/typescript_source/concrete/ServerLedData";
import { defineComponent, PropType } from "vue";
export default defineComponent({
    name: "monitor-led",
    props: {
        monitor_led_data: {
            type: Object as PropType< IMonitorLedData >,
            default: ServerLedData
        }
    },
    data() {
        return {
            object_view_id: "100",
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
