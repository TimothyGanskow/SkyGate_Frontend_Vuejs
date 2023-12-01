import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import MyData from "/src/components/myData.vue"

describe('myData.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(MyData)
    expect(wrapper.find("div").exists()).to.be.true;
    expect(wrapper.find("h3").exists()).to.be.true;
    expect(wrapper.find("h3").text()).equal("My Data");
  })
})





