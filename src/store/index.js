import Vue from "vue";
import Vuex from "vuex";

// Si se desea probar con fake data, descomentar esta linea
// y comentar la siguiente. Tambien se debe modificar el
// componente ImageList.vue
// import * as ListFrameData from "@/store/modules/TestData.js";

import * as ListFrameData from "@/store/modules/ImageData.js";

import * as SelectionData from "@/store/modules/SelectionData.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    var: 500
  },
  mutations: {},
  actions: {},
  modules: {
    ListFrameData,
    SelectionData
  }
});
