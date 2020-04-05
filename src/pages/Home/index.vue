<template>
  <div class="main" ref="home">
    <nav-component
      v-if="getAllpokemons.length>0"
      @onSearch="handleSearch"
      @onAdvanceFilterSelected="handleAdvanceFilter"
    />
    <div v-if="getAllpokemons.length>0" class="main__section" ref="mainPokemonCardSection">
      <div v-if="filteredPokemons.length > 0">
        <pokemon-card v-for="(pokemon, index) in filteredPokemons" :key="index" :pokemon="pokemon" />
      </div>
      <div v-if="getLoader" style="position:absolute; bottom:5px;left:50%">
        <loader />
      </div>
      <div
        class="no-more-result"
        v-else-if="filteredPokemons.length<1&& getAllpokemons.length > 10"
      >
        <span class="no-more-result__heading">No Pokémon Matched Your Search!</span>
        <div>
          <span>Try these suggestions to find a Pokémon:</span>
          <ul>
            <li>Try to load complete data using infinite scroll.</li>
            <li>Search for only one pokemon at a time.</li>
            <li>Reduce the number of search parameters</li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="getAllpokemons.length<1" class="main__section-empty" ref="mainPokemonCardSection">
      <loader type="big" />
    </div>
  </div>
</template>
<script src="./Home.js"></script>
<style lang="scss" src="./Home.scss" scoped></style>
