<template>
  <div class="chip">
    <span>{{content}}</span>
    <img @click="closeChip" :src="closeIcon" alt />
  </div>
</template>

<script src="./Chip.js"></script>
<style lang="scss" src="./Chip.scss"></style>
