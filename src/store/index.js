import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
      }
  },
  mutations: {
    changeEvent: (state, event) => state.event = event
  },
  actions: {
    
  },
  modules: {
  }
})
