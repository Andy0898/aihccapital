import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import ContactPage from '@/pages/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/contact', component: ContactPage }],
})

describe('ContactPage', () => {
  it('renders contact information correctly', () => {
    const wrapper = mount(ContactPage, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Contact Us')
    expect(wrapper.text()).toContain('Get In Touch')
    expect(wrapper.text()).toContain('Office Address')
    expect(wrapper.text()).toContain('info@aihccapital.com')
  })

  it('displays contact form with required fields', () => {
    const wrapper = mount(ContactPage, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('#firstName').exists()).toBe(true)
    expect(wrapper.find('#email').exists()).toBe(true)
    expect(wrapper.find('#message').exists()).toBe(true)
  })
})