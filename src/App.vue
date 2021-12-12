<script lang="ts" setup>
import { snowOptions } from '~/core/snow'

</script>
<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <Particles
      id="tsparticles"
      :options="snowOptions"
    />
    <router-view />
    <Footer />
  </main>
</template>
