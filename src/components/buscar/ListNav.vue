<template>
  <div>
    <span class="mr-4 grey--text">
      Página {{ page }} de {{ numberOfPages }}
    </span>
    <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn fab dark color="blue darken-3" class="ml-1 mr-2" @click="nextPage">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("ListFrameData", ["page", "itemsPerPage"]),
    ...mapGetters("ListFrameData", ["numberOfPages"])
  },
  methods: {
    ...mapActions("ListFrameData", ["nextPage", "formerPage"])
  }
};
</script>
