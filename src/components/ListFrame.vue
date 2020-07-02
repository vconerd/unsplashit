<template>
  <v-card>
    <v-system-bar></v-system-bar>
    <info-panel></info-panel>
    <image-search></image-search>
    <image-list></image-list>
  </v-card>
</template>
<script>
import InfoPanel from "@/components/InfoPanel.vue";
import ImageSearch from "@/components/ImageSearch.vue";
import ImageList from "@/components/ImageList.vue";

export default {
  components: { InfoPanel, ImageSearch, ImageList }
};
</script>
