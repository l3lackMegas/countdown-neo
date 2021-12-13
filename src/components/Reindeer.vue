<script lang="ts" setup>
import reindeer from '~/assets/reindeer.png'
</script>

<template>
  <img :src="reindeer" class="absolute reindeer" alt="reindeer">
</template>

<style scoped>
.reindeer {
  top: 20%;
  left: 50%;
  animation-name: reindeer-spin;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes reindeer-spin {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(100px);
  }
}
</style>
