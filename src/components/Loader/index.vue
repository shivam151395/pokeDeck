<template>
  <div style="position:relative">
    <div v-if="type!=='big'" class="loader"></div>
    <img
      v-if="type==='big'"
      class="loader-big"
      style="width:400px;height:400px;border-radius:50%;"
      src="https://img1.looper.com/img/gallery/detective-pikachu-2-release-date-cast-and-plot/intro-1568566852.jpg"
    />
  </div>
</template>
<script src="./Loader.js"></script>
<style lang="scss" src="./Loader.scss" scoped></style>
