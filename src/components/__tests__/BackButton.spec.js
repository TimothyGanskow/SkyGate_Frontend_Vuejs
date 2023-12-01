import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import BackButton from "/src/components/backButton.vue"

describe('BackButton.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(BackButton)
    expect(wrapper.find("BIconArrowLeft").exists()).to.be.true;
  })
})