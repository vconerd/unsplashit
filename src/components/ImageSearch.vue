<template>
  <div>
    <v-text-field
      class="mx-2"
      label="Buscar..."
      single-line
      @keyup.enter="search($event)"
      prepend-icon="mdi-cloud-search-outline"
    ></v-text-field>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    display: event => {
      let val = event.target.value.trim();
      alert(`Valor: ${val}`);
      // Problemas con esto porque this no se refiere al componente
      // sino a este manejador de eventos.
      //
      // this.$store.ListFrameData.dispatch("search", { val });
      // this.search({ val });
    },
    ...mapActions("ListFrameData", ["search"])
  }
};
</script>
