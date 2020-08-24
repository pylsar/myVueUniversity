import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    universities: []
  },
  mutations: {
    SET_UNIVERSITIES_TO_STATE: (state, universities) =>{
      state.universities = universities
    },
  },
  actions: {
    GET_UNIVERSITIES_FROM_API({commit}){
      return axios('http://localhost:3001/universities',{
        method: 'GET'
      })
      .then((universities) =>{
        commit('SET_UNIVERSITIES_TO_STATE', universities.data)
        return universities
      })
      .catch((error) => {
        console.log(error)
        return error
      })
    },
  },
  getters: {
    UNIVERSITIES(state){
      return state.universities
    },
    universityById: (state) => (id) => state.universities.find((university) => university.id === id)
  },
  modules: {
  }
})
