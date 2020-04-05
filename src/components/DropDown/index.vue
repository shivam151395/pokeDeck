<template>
  <div
    class="dropdown-wrapper"
    :style="`width: ${styles ? styles.width: ''}`"
    v-click-outside="hideDropdown"
  >
    <div
      class="dropdown-box"
      @click="toggleList"
      :style="`background-color: ${styles && styles.backgroundColor}; height: ${styles && styles.height}`"
    >
      <span :class="['label', {'inactive': value==='', 'active': value!==''}]">{{label}}</span>
      <span class="value">{{value}}</span>
      <span v-bind:class="{open: listOpen }" class="arrow-down">
        <img :src="CaretDown" alt="arrowDown" class="arrow" />
      </span>
    </div>
    <div class="options-list" v-bind:class="{opened: listOpen}">
      <ul>
        <li v-for="item in listOptions" :key="item.title" @click="selectThisItem(item)">
          <span :class="{'selected-item': item.title === value}">{{item.title}}</span>
          <!-- <img v-if="item.title === value" :src="caretBlueLeft" alt="caretBlueLeft" class="tick"> -->
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" src="./DropDown.scss"></style>
<script src="./DropDown.js"></script>
