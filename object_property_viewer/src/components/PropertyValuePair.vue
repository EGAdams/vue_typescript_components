<template>
    <li>
        <div class="grid-container">
            <div>
                {{ property_value_pair.property }}
            </div>
            <div>
                {{ property_value_pair.value }}
            </div>
        </div>
    </li>
</template>

<script lang="ts">
import DefaultPropertyValuePair from "@/typescript_source/concrete/DefaultPropertyValuePair";
import { defineComponent } from "vue";

export default defineComponent({
    name: "property_value_pair",
    props: {
        property_value_pair: {
            type: DefaultPropertyValuePair,
            default: {},
        },
    },
});
</script>

<style scoped></style>
