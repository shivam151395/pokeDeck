<template>
  <overlay-component>
    <div class="pokemon-details-container">
      <card-component>
        <div class="pokemon-details-container__details-area">
          <div class="pokemon-details-container__header">
            <span>{{pokemon.name | title}}</span>
          </div>
          <div class="pokemon-details-container__main">
            <div class="pokemon-details-container__main__first">
              <tr
                style="display:flex;flex:1;justify-content:space-between;width:100%;padding:10px;"
              >
                <td>
                  <span class="key">Height</span>
                  <span class="val">{{pokemon.height ? pokemon.height : '-'}}</span>
                </td>
                <td style="width:30%">
                  <span class="key">Weight</span>
                  <span class="val">{{pokemon.weight?pokemon.weight : '-'}}</span>
                </td>
              </tr>
              <tr
                style="display:flex;flex:1;justify-content:space-between;width:100%;padding:10px;"
              >
                <td>
                  <span class="key">Abilities</span>
                  <span class="val">{{pokemon.abilities? pokemon.abilities.join(', ') : '-'}}</span>
                </td>
                <td style="width:30%">
                  <span class="key">Region</span>
                  <span class="val">{{pokemon.region ? pokemon.region : '-'}}</span>
                </td>
              </tr>
              <tr
                style="display:flex;flex:1;justify-content:space-between;width:100%;padding:10px;"
              >
                <td>
                  <span class="key">Gender</span>
                  <span class="val">{{pokemon.gender ? pokemon.gender : '-'}}</span>
                </td>
                <td style="width:30%">
                  <span class="key">Habitat</span>
                  <span class="val">{{pokemon.habitat ? pokemon.habitat : '-'}}</span>
                </td>
              </tr>
            </div>
            <div class="pokemon-details-container__main__second">
              <div style="display:flex;align-items:center">
                <img style="width:150px;height:150px" :src="pokemon.image" alt="">
                <div>
                  <span>{{pokemon.name | title}}</span>
                </div>
              </div>
              <div style="margin-left:8px;display:flex;align-items:center">
                <b>From</b>
              </div>
              <div style="margin-right:16px;display:flex;align-items:center">
                 <img style="width:150px;height:150px" v-if="pokemon.evolvesFrom.image" :src="pokemon.evolvesFrom.image" alt="">
                 <div>
                   <span v-if="pokemon.evolvesFrom.image">{{pokemon.evolvesFrom.name | title}}</span>
                    <span v-if="!pokemon.evolvesFrom.image">Evolved From No One</span>
                 </div>
              </div>
            </div>
          </div>
          <div class="pokemon-details-container__footer">
             <button-component @onClick="handleClose">
              <span>Close</span>
            </button-component>
          </div>
        </div>
      </card-component>
    </div>
  </overlay-component>
</template>
<script src="./PokemonDetails.js"></script>
<style lang="scss" src="./PokemonDetails.scss" scoped></style>
