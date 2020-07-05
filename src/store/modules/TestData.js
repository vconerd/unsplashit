import Vue from "vue";

Vue.use(require("vue-faker"), { locale: "es_MX" });

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
    // console.log("actions.numberOfPages: " + getters.numberOfPages);
    commit("NEXT_PAGE", { numberOfPages: getters.numberOfPages });
  },
  formerPage({ commit, getters }) {
    // console.log("actions.numberOfPages: " + getters.numberOfPages);
    commit("FORMER_PAGE", { numberOfPages: getters.numberOfPages });
  },
  search({ commit }, eventObject) {
    let value = eventObject.target.value.trim();
    console.log("el carajo recibio: " + value);

    let totalFound = 0;
    let results = [];
    let payload = null;

    // si se ordena buscar la cadena vacia, limpiar datos
    if (value === "") {
      payload = { totalFound, results };
      commit("SET_STATE", payload);
    } else {
      // generar numero random desde 0 hasta 64
      totalFound = Math.floor(Math.random() * 65);

      // llenar el arreglo de resultados con fake cards
      for (let i = 0; i <= totalFound; i++) {
        let card = Vue.faker().helpers.contextualCard();

        let semicard = {
          name: card.name,
          username: card.username,
          email: card.email,
          phone: card.phone,
          avatar: card.avatar
        };
        results.push(semicard);
      }

      let payload = { totalFound, results };
      commit("SET_STATE", payload);
    }
  }
};

// Ahora con el valor vamos a proceder a realizar la busqueda
// con Axios. Si no se encuentra nada, pues retornamos y ya.
// Vamos a tener que encadenar esta accion sincrona, con una
// asincrona que va a golpear al API y hacer commit
