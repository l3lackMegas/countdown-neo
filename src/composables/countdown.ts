import type { ComputedRef } from 'vue'
import { ref } from 'vue'
import { useNow } from '@vueuse/core'
export type CountdownInfo = {
  days: ComputedRef<number>
  hours: ComputedRef<number>
  minutes: ComputedRef<number>
  seconds: ComputedRef<number>
}

export const useCountdown = (destinationMonth: number, destinationDate: number): CountdownInfo => {
  const now = useNow() // Current time: Updated automatically
  // Create from the current year first.
  const destination = ref(new Date(now.value.getFullYear(), destinationMonth, destinationDate))
  // If the destination is in the past, move it next year.
  watch(now, (newValue) => {
    if (newValue.getTime() - destination.value.getTime() >= 0)
      destination.value.setFullYear(newValue.getFullYear() + 1)
  })
  const timeDiff = computed(() => destination.value.getTime() - now.value.getTime())

  // Millisecond to other units
  const mSeconds = 1000
  const mMinutes = mSeconds * 60
  const mHours = mMinutes * 60
  const mDays = mHours * 24

  const days = computed(() => Math.max(Math.floor(timeDiff.value / mDays), 0))
  const hours = computed(() => Math.max(Math.floor(timeDiff.value % mDays / mHours), 0))
  const minutes = computed(() => Math.max(Math.floor(timeDiff.value % mHours / mMinutes), 0))
  const seconds = computed(() => Math.max(Math.floor(timeDiff.value % mMinutes / mSeconds), 0))

  return {
    days,
    hours,
    minutes,
    seconds,
  } as CountdownInfo
}
