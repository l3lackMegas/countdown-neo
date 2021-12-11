import { mount } from '@vue/test-utils'
import { describe, it, expect, sinon } from 'vitest'
import NewYear from '../components/NewYear.vue'

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
  })
})
