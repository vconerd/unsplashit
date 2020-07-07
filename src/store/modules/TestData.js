import Vue from "vue";

Vue.use(require("vue-faker"), { locale: "es" });

export const namespaced = true;

export const state = {
  page: 0,
  itemsPerPage: 6,
  totalFound: 0,
  items: [],
  selected: []
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
  },
  SELECT(state, params) {
    let posItem = state.selected.findIndex(elem => elem.id === params.id);

    if (posItem >= 0) {
      // deseleccionar: eliminar el item del arreglo
      state.selected.splice(posItem, 1);
    } else {
      // seleccionar: agregar el item al arreglo
      state.selected.push(params);
    }
  },
  COMMIT() {
    //
  }
};

export const actions = {
  nextPage({ commit, getters }) {
    commit("NEXT_PAGE", { numberOfPages: getters.numberOfPages });
  },
  formerPage({ commit, getters }) {
    commit("FORMER_PAGE", { numberOfPages: getters.numberOfPages });
  },
  search({ commit }, eventObject) {
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

        let semicard = {
          id: faker.random.uuid(),
          name: card.name,
          username: card.username,
          email: card.email,
          phone: card.phone,
          avatar: card.avatar,
          selected: false
        };
        results.push(semicard);
      }
    }

    payload = { totalFound, results };
    commit("SET_STATE", payload);
  },
  seleccionar({ commit }, params) {
    // genera una copia del objeto con la data de la tarjeta seleccionada
    let seleccionado = { ...params };
    commit("SELECT", seleccionado);
  }
};
