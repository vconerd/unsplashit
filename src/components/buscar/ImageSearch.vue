<template>
  <div>
    <v-text-field
      class="mx-2"
      label="Buscar..."
      single-line
      @keyup.enter="buscar($event)"
      prepend-icon="mdi-cloud-search-outline"
    ></v-text-field>
  </div>
</template>
<script>
export default {
  methods: {
    buscar: function(event) {
      try {
        let promesa = this.$store.dispatch("ListFrameData/search", event);
      } catch (error) {
        console.log(error);
      } finally {
        //
      }
    }
  }
};
</script>
