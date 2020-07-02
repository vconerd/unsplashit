<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page="itemsPerPage"
      :page="page"
      :search="search"
      locale="es"
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
            <test-card :item="item" :dataKeys="keys"></test-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="end" justify="end">
          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1 mr-2"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import TestCard from "@/components/TestCard.vue";

export default {
  components: { TestCard },
  data() {
    return {
      search: "",
      filter: {},
      page: 1,
      itemsPerPage: 6,
      keys: ["Name", "Calories", "Fat", "Carbs"],
      items: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65
        }
      ]
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    }
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    }
  }
};
</script>
