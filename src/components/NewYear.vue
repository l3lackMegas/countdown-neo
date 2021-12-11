<script setup lang="ts">
const now = useNow()
const currentYear = computed(() => now.value.getFullYear())
const isNewYearDay = computed(() => {
  const currentMonth = now.value.getMonth() // 0 = Jan
  const currentDay = now.value.getDate() // 1 = 1 just like normal people
  return currentMonth === 0 && currentDay === 1
})
</script>

<template>
  <h1 class="text-5xl font-sans font-bold" mb="4" text="blue-gray-800 dark:blue-gray-50">
    <template v-if="isNewYearDay">
      Happy New Year {{ currentYear }}
    </template>
    <template v-else>
      New Year {{ currentYear + 1 }} Countdown
    </template>
  </h1>
  <div>
    <span class="text-4xl">23:12:00</span>
  </div>
</template>
