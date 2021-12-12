<script setup lang="ts">
// import { useFakeTimers } from 'sinon'
import { useCountdown } from '~/composables'
// This is for mocking
// const clock = useFakeTimers({ now: new Date(2021, 0, 1, 23, 59, 55), shouldAdvanceTime: true })
const now = useNow()
const currentYear = computed(() => now.value.getFullYear())
const isNewYearDay = computed(() => {
  const currentMonth = now.value.getMonth() // 0 = Jan
  const currentDay = now.value.getDate() // 1 = 1 just like normal people
  return currentMonth === 0 && currentDay === 1
})
const countDownInfo = useCountdown(0, 1)
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
    <div v-if="!isNewYearDay" class="text-4xl">
      {{ countDownInfo.days }} Days
      {{ countDownInfo.hours }} Hours
      {{ countDownInfo.minutes }} Minutes
      {{ countDownInfo.seconds }} Seconds
    </div>
    <div v-else class="text-4xl">
      I encourage you to celebrate but it's your choice <div class="inline-block align-middle i-icon-ph-android-logo" />
    </div>
  </div>
</template>
