<template>
  <div>
    <v-card>
      <v-img :src="item.small" width="100%" contain :aspect-ratio="16 / 9">
        <v-row align="end" class="lightbox white--text pa-1 mt-2 fill-height">
          <v-col>
            <div class="font-weight-bold text-truncate">
              {{ item.title }}
            </div>
            <div class="body-1 text-truncate">{{ item.username }}</div>
          </v-col>
        </v-row>

        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-1"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <v-card-text>
        <span
          class="black--text d-block text-truncate"
          style="max-height: 150px;"
          >{{ item.description }}</span
        >
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-checkbox
          v-model="item.selected"
          @click.capture.stop="seleccionar(item)"
          label="Seleccionar"
        ></v-checkbox>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["item"],
  methods: {
    ...mapActions("ListFrameData", ["seleccionar"])
  }
};
</script>

<style scoped>
.lightbox {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    transparent 84px
  );
}
</style>
