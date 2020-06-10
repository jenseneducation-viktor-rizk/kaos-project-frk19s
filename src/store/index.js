import Vue from "vue";
import Vuex from "vuex";
import * as API from "@/api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: {},
    events: [],
    boughtTicket: {},
    ticketVerify: null,
  },
  mutations: {
    getEvents(state, data) {
      state.events = data;
    },
    changeEvent(state, event) {
      state.event = event;
    },
    changeBoughtTicket(state, event) {
      state.boughtTicket = event;
    },
    verify(state, data) {
      state.ticketVerify = data;
      //console.log(data);
    },
  },
  actions: {
    async getEvents(context) {
      const data = await API.fetchEvents();
      // console.log(data);
      context.commit("getEvents", data);
    },
    async buyTicket(context, event) {
      const data = await API.buyTicket(event);
      // console.log(data)
      context.commit("changeBoughtTicket", data);
    },
    async getTicket(context, ticketNr) {
      const data = await API.verifyTicket(ticketNr);
      //console.log(data);
      context.commit("verify", data);
    },
  },
  modules: {},
});
