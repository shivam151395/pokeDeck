import apiCall from './apiUtils/makeApiCall'
import config from './config'

export default {
  getAllPokemons (params) {
    return apiCall.makeGetRequest(config.api.getAllPokemons, params)
  },
  getPokemon (id) {
    return apiCall.makeGetRequest(config.api.getPokemon.replace('{id}', id))
  },
  getPokemonSpecies (id) {
    return apiCall.makeGetRequest(config.api.getPokemonSpecies.replace('{id}', id))
  },
  getPokemonGender (id) {
    return apiCall.makeGetRequest(config.api.getPokemonGender.replace('{id}', id))
  },
  getPokemonRegion (id) {
    return apiCall.makeGetRequest(config.api.getPokemonRegion.replace('{id}', id))
  },
  getRegions () {
    return apiCall.makeGetRequest(config.api.getRegions)
  },
  getHabitats () {
    return apiCall.makeGetRequest(config.api.getHabitats)
  },
  getGenders () {
    return apiCall.makeGetRequest(config.api.getGenders)
  }
}
