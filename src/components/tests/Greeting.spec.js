import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Greeting from '../Greeting.vue'

describe('Greeting.vue', () => {
  it('renders the message passed via props', () => {
    const message = 'Halo Dunia'
    
    const wrapper = mount(Greeting, {
      props: {
        msg: message,
      },
    })

    
    expect(wrapper.text()).toContain(message)
  })

  it('renders a different message', () => {
    const message = 'Selamat Datang di Vitest'
    const wrapper = mount(Greeting, {
      props: {
        msg: message,
      },
    })

    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe(message)
  })
})
