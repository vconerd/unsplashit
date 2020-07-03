import Vue from "vue";
import Vuex from "vuex";

// Para que la tienda sea polimorfica, se necesita que los modulos que
// exportan los items de datos implementen los mismos servicios.
import * as ListFrameData from "@/store/modules/TestData.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ListFrameData
  }
});
