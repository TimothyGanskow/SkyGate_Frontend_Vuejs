import { describe, it, expect } from 'vitest'

import { mount, shallowMount } from '@vue/test-utils'
import ChangeUserData from "/src/components/ChangeUserData.vue"

describe('ChangeUserData.vue', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(ChangeUserData)
    expect(wrapper.find("div").exists()).to.be.true;
    expect(wrapper.find("h3").exists()).to.be.true;
    expect(wrapper.find("h3").text()).equal("Change User Details");
  })
})


/* Interessant hier konnte ich durch shallowMount tatsächlich einen Fehler beheben */

  
    


