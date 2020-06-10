import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    event: {
      name: "Lasse-Stefanz",
      price: 350,
      location: "Kjell Härnqvistsalen",
      date: [
        {
          month: "MAR",
          day: "29",
          time: [
            {
              start: "19.00",
              end: "21.00"
            }
          ]
        }
      ]
      },
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
    changeEvent(state, event) {
      state.event = event;
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
