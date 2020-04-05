<template>
  <overlay-component>
    <div class="filter-container">
      <card-component>
        <div class="filter-main-area" style="position:relative">
          <img
            @click="closeHandler"
            style="cursor:pointer;position:absolute;top:14px;right:20px"
            :src="CloseIcon"
            alt
          />
          <div class="filter-main-area__header">
            <span>Advance Filter</span>
          </div>
          <div class="filter-main-area__main">
            <div style="position: relative">
              <drop-down
                :options="filters.habitat"
                :value="selectedFilters.habitat"
                @onItemClick="(item) => {filterSelectionHandler(item, 'habitat')}"
                label="Pokemon Habitat"
              />
            </div>
            <div>
              <drop-down
                :options="filters.region"
                :value="selectedFilters.region"
                @onItemClick="(item) => {filterSelectionHandler(item, 'region')}"
                :label="'Pokemon Region'"
              />
            </div>
            <div style="display:flex; justify-content: space-between;width:100%">
              <div v-for="gender in filters.gender" :key="gender" class="radio-container">
                <input type="radio" :id="gender" :value="gender" v-model="selectedFilters.gender" />
                <label for="one">{{gender | title}}</label>
              </div>
            </div>
          </div>
          <div class="filter-main-area__footer">
            <button-component @onClick="clearFilter">
              <span>Clear</span>
            </button-component>
            <button-component @onClick="applyFilter">
              <span>Apply</span>
            </button-component>
          </div>
        </div>
      </card-component>
    </div>
  </overlay-component>
</template>
<script src="./Filters.js"></script>
<style lang="scss" src="./Filters.scss" scoped></style>
