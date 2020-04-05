const POKE_API_PATH = 'https://pokeapi.co/api/v2'
export default {
  api: {
    getAllPokemons: POKE_API_PATH + '/pokemon/',
    getPokemon: POKE_API_PATH + '/pokemon/{id}',
    getPokemonSpecies: POKE_API_PATH + '/pokemon-species/{id}',
    getPokemonGender: POKE_API_PATH + '/gender/{id}',
    getPokemonRegion: POKE_API_PATH + '/pokedex/{id}',
    getGenders: POKE_API_PATH + '/gender',
    getHabitats: POKE_API_PATH + '/pokemon-habitat',
    getRegions: POKE_API_PATH + '/region'
  }
}
