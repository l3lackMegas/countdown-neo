<script lang="ts" setup>
import reindeer from '~/assets/reindeer.png'
</script>

<template>
  <div class="reindeer-move">
    <img :src="reindeer" class="absolute reindeer" alt="reindeer">
  </div>
</template>

<style scoped>

.reindeer-move {
  position: absolute;
  top: 10%;
  left: 0;
  width: 200px;
  animation: reindeer-walk 5s linear infinite;
  z-index: -1;
}

@keyframes reindeer-walk {
  0% {
    left: 0;
    transform: scaleX(1);
  }

  48% {
    left: calc(100% - 250px);
    transform: scaleX(1);
  }

  52% {
    left: calc(100% - 250px);
    transform: scaleX(-1);
  }

  96% {
    left: 0;
    transform: scaleX(-1);
  }

  100% {
    left: 0;
    transform: scaleX(1);
  }
}

.reindeer {
  animation-name: reindeer-spin;
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes reindeer-spin {
  0% {
    transform: translateY(0) rotate(0);
  }

  25% {
    transform: translateY(-50px) rotate(-20deg);
  }

  50% {
    transform: translateY(-70px) rotate(0deg);
  }

  75% {
    transform: translateY(-50px) rotate(20deg);
  }

  100% {
    transform: translateY(0) rotate(0deg);
  }
}
</style>
