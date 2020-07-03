<template>
  <v-card>
    <v-card-title class="subheading font-weight-bold">{{
      item.name
    }}</v-card-title>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="(key, index) in keys" :key="index">
        <v-list-item-content>{{ key }}:</v-list-item-content>
        <v-list-item-content class="align-end">{{
          item[key.toLowerCase()]
        }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      keys: ["Name", "Calories", "Fat", "Carbs"]
    };
  }
};
</script>
