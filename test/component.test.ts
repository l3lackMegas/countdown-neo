import { mount } from '@vue/test-utils'
import { describe, it, expect, sinon } from 'vitest'
import NewYear from '../src/components/NewYear.vue'

describe('NewYear.vue', () => {
  it('display happy new year when it is new year', () => {
    const clock = sinon.useFakeTimers(new Date('1/1/2021'))
    const wrapper = mount(NewYear)
    expect(wrapper.text()).toContain('Happy New Year 2021')
    clock.restore()
  })

  it('display countdown text when it is not new year', () => {
    const clock = sinon.useFakeTimers(new Date('2/2/2021'))
    const wrapper = mount(NewYear)
    expect(wrapper.text()).toContain('New Year 2022 Countdown')
    clock.restore()
  })

  it('it display less information when time pass', () => {
    // At this point, only day, hours, minutes, and seconds are presented.
    const testDate = new Date()
    testDate.setFullYear(2020)
    testDate.setMonth(11) // 11 = December. Noelle will cry if she sees this.
    testDate.setHours(23, 0, 0, 0) // 11 December 2020 23:0:0 0ms
    let clock = sinon.useFakeTimers(testDate)
    const wrapper = mount(NewYear)
    expect(wrapper.text()).toContain('1 Hour 0 Minutes 0 Seconds')
    // Let increase the minute by one
    clock.tick('01:00') // 23:01:00
    expect(wrapper.text()).toContain('59 Minutes 0 Seconds')
    clock.tick('58:01') // 24:59:01
    expect(wrapper.text()).toContain('59 Seconds')
    clock.restore()
    testDate.setFullYear(2020, 10, 1)
    testDate.setHours(24)
    clock = sinon.useFakeTimers(testDate)
    expect(wrapper.text()).toContain('30 Days')
  })
})
