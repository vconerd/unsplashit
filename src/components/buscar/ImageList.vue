<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page="itemsPerPage"
      :page="page"
      locale="es"
      hide-default-footer
      disable-items-per-page="true"
    >
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <image-card :item="item"></image-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:no-data>
        <v-row>
          <v-col cols="12">
            <p>
              No hay resultados para mostrar. Cambie las palabras clave y pulse
              Enter para ejecutar una nueva búsqueda.
            </p>
          </v-col>
        </v-row>
      </template>

      <template v-slot:loading>
        <v-row>
          <v-col cols="12">
            Cargando datos...
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
// import ImageCard from "@/components/TestCard.vue";
import ImageCard from "@/components/buscar/ImageCard.vue";
import ListNav from "@/components/buscar/ListNav.vue";
import { mapState } from "vuex";

export default {
  components: {
    ImageCard,
    ListNav
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapState("ListFrameData", ["page", "itemsPerPage", "items"])
  }
};
</script>
