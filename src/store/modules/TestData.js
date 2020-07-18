import Vue from "vue";

Vue.use(require("vue-faker"), { locale: "es" });

export const namespaced = true;

export const state = {
  page: 0,
  itemsPerPage: 6,
  totalFound: 0,
  items: []
};

export const getters = {
  numberOfPages(state, getters) {
    return Math.ceil(getters.count / state.itemsPerPage);
  },
  count(state) {
    return state.items.length;
  }
};

export const mutations = {
  NEXT_PAGE(state, params) {
    if (state.page + 1 <= params.numberOfPages) state.page += 1;
  },
  FORMER_PAGE(state) {
    if (state.page - 1 >= 1) state.page -= 1;
  },
  SET_STATE(state, params) {
    // actualizacion del estado despues de una busqueda
    // supone el reseteo de todo el listado de imagenes
    //
    state.page = params.totalFound > 0 ? 1 : 0;
    state.totalFound = params.totalFound;
    state.items = params.results;
  }
};

export const actions = {
  nextPage({ commit, getters }) {
    commit("NEXT_PAGE", { numberOfPages: getters.numberOfPages });
  },
  formerPage({ commit }) {
    commit("FORMER_PAGE");
  },
  search({ commit, rootGetters }, eventObject) {
    let value = eventObject.target.value.trim();

    let totalFound = 0;
    let results = [];
    let payload = null;

    // si se ordena buscar la cadena vacia, limpiar datos
    if (value !== "") {
      // generar numero random desde 1 hasta 64
      totalFound = Math.floor(Math.random() * 65) + 1;

      let faker = Vue.faker();

      // llenar el arreglo de resultados con fake cards
      for (let i = 0; i < totalFound; i++) {
        let card = faker.helpers.contextualCard();

        let id = faker.random.uuid();

        // Marca la imagen por si fue seleccionada en una busqueda previa
        let posItem = rootGetters["SelectionData/getSelectedItemPosition"](id);
        let itemSelected = posItem >= 0;

        let semicard = {
          id: id,
          name: card.name,
          username: card.username,
          email: card.email,
          phone: card.phone,
          avatar: card.avatar,
          selected: itemSelected
        };
        results.push(semicard);
      }
    }

    payload = { totalFound, results };
    commit("SET_STATE", payload);
  }
};
