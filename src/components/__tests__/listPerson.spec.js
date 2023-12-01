import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import ListPerson from "/src/components/ListPerson.vue"

describe('ListPersons.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ListPerson)
    expect(wrapper.find("table").exists()).to.be.true;
    expect(wrapper.find("thead").exists()).to.be.true;
  })
})








