<template>
  <div style="display:inline-block">
    <div @click="showCardDetails" class="card-container">
      <div style="display:flex;justify-content:center;align-items:center">
        <img style="width:150px;height:150px" :src="pokemon.image" alt />
      </div>
      <div style="width:100%;min-height:50px">
        <span class="name">{{pokemon.name | title}}</span>
      </div>
    </div>
    <pokemon-details @close="shouldShowCardDetails = false" :pokemon="pokemon" v-if="shouldShowCardDetails" />
  </div>
</template>
<script src="./Card.js"></script>
<style lang="scss" src="./Card.scss"></style>
