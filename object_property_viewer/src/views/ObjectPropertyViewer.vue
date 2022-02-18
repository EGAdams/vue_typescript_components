<template>
    <div id="property_table">
        <ol>
            <property-value-pair
                v-for="property_value_pair in property_value_pairs"
                v-bind:property_value_pair="property_value_pair"
                v-bind:key="property_value_pair.id">
            </property-value-pair>
        </ol>
    </div>
</template>

<script lang="ts">
import PropertyValuePair from "@/components/PropertyValuePair.vue";
import { defineComponent } from "vue";

export default defineComponent({
    name: "object-property-viewer",
    components: {
        PropertyValuePair,
    },
    props: {
        property_value_pairs: [] as Array< typeof PropertyValuePair >
    },
});
</script>

<style>
.grid-container {
    /* variables */
    --normal_cell_width: 0.6fr;
    display: grid;
    grid-template-columns: .6fr .6fr;;
    grid-gap: 2px;
    background-color: #373838;
    padding: 2px;
    /* min-width: 100px; */
    background: repeating-linear-gradient(#ddd 0 35px,transparent 35px 70px);
}

.grid-container > div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 2px;
    font-size: 17px;
    min-width: 10px;
}
ol {
    list-style-type: none;
    margin-block-start: 3px;
    padding-inline-start: 0px;
}
</style>
