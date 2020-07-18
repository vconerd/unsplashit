export const namespaced = true;

export const state = {
  selected: []
};

export const getters = {
  getSelectedItemPosition: state => id => {
    return state.selected.findIndex(elem => elem.id === id);
  }
};

export const mutations = {
  SELECT(state, payload) {
    let posItem = payload.posItem;
    let item = payload.seleccionado;
    if (posItem >= 0) {
      // deseleccionar: eliminar el item del arreglo
      state.selected.splice(posItem, 1);
    } else {
      // seleccionar: agregar el item al arreglo
      state.selected.push(item);
    }
  }
};

export const actions = {
  seleccionar({ commit, getters }, itemToSelect) {
    let posItem = getters.getSelectedItemPosition(itemToSelect.id);

    let seleccionado = { ...itemToSelect };
    let payload = { seleccionado, posItem };

    commit("SELECT", payload);
  }
};
