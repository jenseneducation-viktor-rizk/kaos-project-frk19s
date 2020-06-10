import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    event: {},
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
    boughtTicket: {}
  },
  mutations: {
    getEvents(state, data) {
      state.events = data;
    },
    changeEvent(state, event) {
      state.event = event;
    },
    changeBoughtTicket(state,event){
      state.boughtTicket = event
    }
  },
  actions: {
    async getEvents(context) {
      const data = await API.fetchEvents();
      console.log(data);
        context.commit("getEvents", data);
    
    },
    async buyTicket(context,event){
      const data = await API.buyTicket(event)
      console.log(data)
      context.commit("changeBoughtTicket", data)
      
    }
  },
  modules: {},
});
