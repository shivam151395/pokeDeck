<template>
  <div class="search-container">
    <div class="search-container__search-box">
      <div class="search-container__search-box__input-container">
        <input
          :placeholder="getPlaceHolder"
          class="search-container__search-box__input-container__search-input-box"
          type="text"
          v-model="value"
          @keyup.enter="searchClickHandle"
        />
        <img
          @click="closeHandler"
          v-if="shouldCloseIconDisplay"
          class="search-container__search-box__input-container__close-icon"
          :src="CloseIcon"
        />
      </div>
      <div
        :class="{disabled: this.value==='', ripple: this.value.length>0}"
        @click="searchClickHandle"
        class="search-container__search-box__search-button-container"
      >
        <img
          style="width:20px;height:20px"
          src="https://rusticbedroomideas.implantbirthcontrol.com/wp-content/themes/powerthemepi/images/btn_search.png"
        />
      </div>
    </div>
  </div>
</template>
<script src="./SearchComponent.js"></script>
<style lang="scss" src="./SearchComponent.scss" scoped></style>
