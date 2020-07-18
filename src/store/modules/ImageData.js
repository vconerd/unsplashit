import searchServices from "@/helpers/searchServices.js";

export const namespaced = true;

export const state = {
  page: 0,
  itemsPerPage: 6,
  totalFound: 0,
  items: []
  //  selected: []
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
  /*  SELECT(state, params) {
    let posItem = state.selected.findIndex(elem => elem.id === params.id);

    if (posItem >= 0) {
      // deseleccionar: eliminar el item del arreglo
      state.selected.splice(posItem, 1);
    } else {
      // seleccionar: agregar el item al arreglo
      state.selected.push(params);
    }
  }
*/
};

const sanitizar = function(value) {
  // limpia el valor introducido por el usuario
  return value.replace(/<\/?[^>]+(>|$)/g, "");
};

export const actions = {
  nextPage({ commit, getters }) {
    commit("NEXT_PAGE", { numberOfPages: getters.numberOfPages });
  },
  formerPage({ commit }) {
    commit("FORMER_PAGE");
  },
  // Retorna una promesa que permite manejar asincronamente la busqueda
  search({ commit, rootGetters }, eventObject) {
    let value = eventObject.target.value.trim();

    let totalFound = 0;
    let results = [];
    let payload = null;

    let promesa = null;

    if (value !== "") {
      // sanitizar el valor a buscar
      value = sanitizar(value);

      // Se llama una funcion asincrona que implementa la lectura remota.
      // Devuelve una promesa
      promesa = searchServices
        .searchApi(value, 1)
        .then(response => {
          let datos = response.data.results;

          // aqui vamos a cargar los items obtenidos
          totalFound = response.data.total;

          // llenar el arreglo de resultados
          datos.forEach(item => {
            // Marca la imagen por si fue seleccionada en una busqueda previa
            // let posItem = state.selected.findIndex(elem => elem.id === item.id);
            let posItem = rootGetters["SelectionData/getSelectedItemPosition"](
              item.id
            );
            let itemSelected = posItem >= 0;

            // Normaliza las descripciones para que la mas corta sea el titulo
            // y la mas larga sea la descripcion de la imagen.
            let descNormal = item.description ? item.description : "";
            let descAlt = item.alt_description ? item.alt_description : "";

            let titulo = "";
            let descripcion = "";

            if (descNormal.length <= descAlt.length) {
              titulo = descNormal;
              descripcion = descAlt;
            } else {
              titulo = descAlt;
              descripcion = descNormal;
            }

            let semicard = {
              id: item.id,
              username: item.user.name,
              title: titulo,
              description: descripcion,
              small: item.urls.small,
              regular: item.urls.regular,
              selected: itemSelected
            };
            results.push(semicard);
          });

          payload = { totalFound, results };
          commit("SET_STATE", payload);
        })
        .catch(error => {
          throw { error };
        });
    } else {
      // No recibe keywords, lo cual signiica vaciar el listado
      payload = { totalFound, results };
      commit("SET_STATE", payload);
    }

    return promesa;
  }
  /*  seleccionar({ commit }, params) {
    // genera una copia del objeto con la data de la tarjeta seleccionada
    let seleccionado = { ...params };
    commit("SELECT", seleccionado);
  } */
};
