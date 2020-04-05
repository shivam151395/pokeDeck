import api from '@/api/pokemonApi.js'
const LIMIT = 20
export default {
  state: {
    pokemons: [],
    offset: 0,
    shouldCallApi: true,
    loader: false,
    filters: {
      genders: [],
      regions: [],
      habitats: []
    }
  },
  getters: {
    getFilters: state => state.filters,
    getAllpokemons: state => state.pokemons,
    getShouldCallApi: state => state.shouldCallApi,
    getLoader: state => state.loader
  },
  mutations: {
    addFilters: (state, filters) => {
      state.filters = filters
    },
    addPokemon: (state, pokimon) => {
      state.pokemons = [...state.pokemons, pokimon]
    },
    setOffset: (state, value) => {
      state.offset = state.offset + value
    },
    startLoader: (state, value) => {
      state.loader = true
    },
    stopLoader: (state, value) => {
      state.loader = false
    },
    setShouldCallApi: (state, value) => {
      state.shouldCallApi = value
    }
  },
  actions: {
    async GET_POKEMONS ({ commit, state }) {
      if (state.shouldCallApi) {
        commit('setShouldCallApi', false)
        state.offset && commit('startLoader')
        const pokemons = await api.getAllPokemons({ offset: state.offset, limit: LIMIT })
        commit('setOffset', LIMIT)
        commit('setShouldCallApi', !!pokemons.data.next)
        const pokimonsDetails = await Promise.all(pokemons.data.results.map(async pokemon => {
          const pokemonObj = {}
          const singlePokemon = (await api.getPokemon(pokemon.name)).data
          const pokemonSpeciesUrl = singlePokemon.species.url.split('/')
          const pokemonSpeciesId = pokemonSpeciesUrl[pokemonSpeciesUrl.length - 2]
          const pokemonSpecies = (await api.getPokemonSpecies(pokemonSpeciesId)).data
          pokemonObj.abilities = singlePokemon.abilities.map((ability) => (ability.ability.name))
          pokemonObj.baseExperience = singlePokemon.base_experience
          pokemonObj.forms = singlePokemon.forms.map((form) => form.name)
          pokemonObj.height = singlePokemon.height
          pokemonObj.id = singlePokemon.id
          pokemonObj.name = singlePokemon.name
          pokemonObj.image = singlePokemon.sprites.front_default
          pokemonObj.species = singlePokemon.species ? singlePokemon.species.name : null
          pokemonObj.types = singlePokemon.types.map(type => type.type ? type.type.name : null)
          pokemonObj.weight = singlePokemon.weight
          pokemonObj.color = pokemonSpecies.color
          const tempregion = (await api.getPokemonRegion(singlePokemon.id)).data
          pokemonObj.region = tempregion ? tempregion.region ? tempregion.region.name : null : null
          pokemonObj.evolvesFrom = {
            name: pokemonSpecies.evolves_from_species ? pokemonSpecies.evolves_from_species.name : null,
            image: pokemonSpecies.evolves_from_species ? (await api.getPokemon(pokemonSpecies.evolves_from_species.name)).data.sprites.front_default : null
          }
          pokemonObj.habitat = pokemonSpecies.habitat ? pokemonSpecies.habitat.name : null
          const tempGender = (await api.getPokemonGender(singlePokemon.id)).data
          pokemonObj.gender = tempGender ? tempGender.name ? tempGender.name : null : null
          commit('addPokemon', pokemonObj)
          return pokemonObj
        }))
        commit('stopLoader')
        console.log(pokimonsDetails, 'details')
      }
    },
    async GET_FILTER_VALUE ({ commit, state }) {
      const regions = (await api.getRegions()).data.results.map(d => d.name)
      const habitats = (await api.getHabitats()).data.results.map(d => d.name)
      const genders = (await api.getGenders()).data.results.map(d => d.name)
      commit('addFilters', { regions, habitats, genders })
    }
  }
}
