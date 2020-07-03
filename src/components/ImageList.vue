<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page="itemsPerPage"
      :page="page"
      locale="es-ES"
      loading="true"
      no-data-text="No hay imágenes para mostrar"
      hide-default-footer
      disable-items-per-page="true"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <test-card :item="item"></test-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="end" justify="end">
          <list-nav></list-nav>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import TestCard from "@/components/TestCard.vue";
import ListNav from "@/components/ListNav.vue";
import { mapState } from "vuex";

export default {
  components: {
    TestCard,
    ListNav
  },
  data() {
    return {
      search: ""
      /*      page: 1,
      itemsPerPage: 6 */
    };
  },
  computed: {
    ...mapState("ListFrameData", ["page", "itemsPerPage", "count", "items"])
  }
};
</script>
