import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import search from "/src/components/search.vue"

describe('search.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(search)
    expect(wrapper.find("h3").exists()).to.be.true;
    expect(wrapper.find("h3").text()).equal("Search Users");
    expect(wrapper.find("label").exists()).to.be.true;
    expect(wrapper.find("label").text()).equal("E-mail");
  })
})








