<template>
  <div class="nav-container">
    <div class="nav-container__header">
      <img
        class="nav-container__header__logo"
        src="https://i.ya-webdesign.com/images/pikachu-face-png-8.png"
        alt
      />
      <span class="nav-container__header__text">Pokédex</span>
    </div>
    <div class="nav-container__search-area">
      <search-component @onClick="handleSearch" />
      <div class="nav-container__search-area__info-card">
        <div class="nav-container__search-area__info-card__text">
          <span>Search for a Pokémon by name or using its National Pokédex number</span>
          <br />
          <span class="margin-top-10">
            Or try out our advance
            <span
              @click="showAdvanceFilter"
              class="ripple nav-container__search-area__info-card__text__filter-text"
            >Filters</span>
          </span>
        </div>
      </div>
    </div>
    <filters
      @close="shouldFilterEnable = false"
      @onFilterSelected="handleFilterSelected"
      @resetFilter="(val) => handleFilterSelected(val,'clear')"
      v-if="shouldFilterEnable"
    />
  </div>
</template>
<script src="./Nav.js"></script>
<style lang="scss" src="./Nav.scss" scoped></style>
