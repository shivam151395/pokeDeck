import Vue from 'vue'
import Vuex from 'vuex'
import pokemonStore from './pokemonStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pokemonStore
  }
})
