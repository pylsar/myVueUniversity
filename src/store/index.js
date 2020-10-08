import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    universities: [],
    comments: [
      {
        title: "а я вообще не учился",
        author: "Илон Маск",
        date: new Date(Date.now()).toLocaleString()
      }
    ]
  },
  mutations: {
    SET_UNIVERSITIES_TO_STATE: (state, universities) =>{
      state.universities = universities
    },
    addComment: (state, payload) => {
      state.comments.unshift({
        title: payload,
        author: "Илон Маск",
        date: new Date(Date.now()).toLocaleString()
      })
    },
    deleteComment(state, payload) {
      state.comments.splice(payload, 1);
    },
    editComment(state, [payload]) {
      //разобраться
      Vue.set(state.posts[payload[0]], "title", payload[1]);
    }
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
    addComment({commit}, payload){
      commit('addComment', payload);
    },
    deleteComment({ commit }, payload) {
      commit("deleteComment", payload);
    },
    //разобраться
    editComment({ commit }, ...payload) {
      commit("editComment", payload);
    },

  },
  getters: {
    UNIVERSITIES(state){
      return state.universities
    },
    universityById: (state) => (id) => state.universities.find((university) => university.id === id),
    comments: (state) => {
      return state.comments;
    },
    commentsCount: (state) => {
      return state.comments.length;
    },
  },
 
  modules: {
  }
})
