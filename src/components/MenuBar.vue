<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>Vuensplashit</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="link.name"
      color="white"
      text
      rounded
      class="my-2"
      href
      :to="{ name: link.name }"
      exact
    >
      {{ link.label }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          label: "Búsqueda",
          name: "Buscar"
        },
        {
          label: "Selecciones",
          name: "Selecciones"
        }
      ]
    };
  }
};
// Pendiente agregar iconos opcionales a los links usando:
//   <v-icon>mdi-{{ label.icon }}</v-icon>
</script>
