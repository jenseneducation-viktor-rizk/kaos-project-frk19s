import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api/index.js";

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
    events:[],
  },
  mutations: {
    getEvents(state, data) {
      state.events = data;
    },
  },
  actions: {
    async getEvents(context) {
      const data = await API.fetchEvents();
      console.log(data);
        context.commit("getEvents", data);
    
    },
  },
  modules: {},
});
