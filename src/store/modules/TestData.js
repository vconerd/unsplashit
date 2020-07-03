export const namespaced = true;

export const state = {
  page: 1,
  itemsPerPage: 6,
  items: [
    {
      name: "Freezen Yogurt",
      calories: 159,
      fat: 6.0,
      carbs: 24
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 23
    },
    {
      name: "Cupcake",
      calories: 305,
      fat: 3.7,
      carbs: 67
    },
    {
      name: "Gingerbread",
      calories: 356,
      fat: 16.0,
      carbs: 49
    },
    {
      name: "Jelly bean",
      calories: 375,
      fat: 0.0,
      carbs: 94
    },
    {
      name: "Lollipop",
      calories: 392,
      fat: 0.2,
      carbs: 98
    },
    {
      name: "Honeycomb",
      calories: 408,
      fat: 3.2,
      carbs: 87
    },
    {
      name: "Donut",
      calories: 452,
      fat: 25.0,
      carbs: 51
    },
    {
      name: "KitKat",
      calories: 518,
      fat: 26.0,
      carbs: 65
    }
  ]
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
    // console.log("mutations.numberOfPages: " + params.numberOfPages);
    if (state.page + 1 <= params.numberOfPages) state.page += 1;
  },
  FORMER_PAGE(state) {
    if (state.page - 1 >= 1) state.page -= 1;
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
  }
};
