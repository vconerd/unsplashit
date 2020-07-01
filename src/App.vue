<template>
  <v-app>
    <menu-bar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import MenuBar from "@/components/MenuBar";

export default {
  name: "Vuensplashit",

  components: {
    MenuBar
  },

  data: () => ({
    //
  })
};
</script>
