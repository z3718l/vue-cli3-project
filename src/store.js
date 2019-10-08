import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
           return state.count ++
        } 
    },
    actions: {
        actionsAddCount(content) {
            return content.commit('increment')
        }
    },
    getters: {
        getterCount(state) {
            return state.count --
        }
    }
})
