import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    biljettNr: [
      {
        id: 1,
        number: "123ABC",
      },
      {
        id: 2,
        number: "456DEF",
      },
      {
        id: 3,
        number: "789GHI",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
