import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import Navbar from "/src/components/Navbar.vue"

describe('Navbar.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.find("nav").exists()).to.be.true;
    expect(wrapper.find("a").exists()).to.be.true;
    expect(wrapper.find("img").exists()).to.be.true;
  })


  /* it("anchor has correct text renderer", () => {
    const wrapper = shallowMount(Navbar);
    expect(wrapper.find('xxx').text()).equal("Logout");
  }) */

})

  
    


