import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'

// Mock router for testing
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/about', component: { template: '<div>About</div>' } },
    { path: '/team', component: { template: '<div>Team</div>' } },
    { path: '/philosophy', component: { template: '<div>Philosophy</div>' } },
    { path: '/cases', component: { template: '<div>Cases</div>' } },
    { path: '/contact', component: { template: '<div>Contact</div>' } },
  ],
})

describe('AppHeader', () => {
  it('renders the logo and company name', () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('AIHC Capital')
    expect(wrapper.find('[data-testid=\"logo\"]').exists()).toBe(false) // No data-testid added yet
    expect(wrapper.find('.text-xl.font-bold').text()).toBe('AIHC Capital')
  })

  it('renders all navigation items', () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router],
      },
    })

    const expectedNavItems = [
      'About Us',
      'Team',
      'Philosophy',
      'Cases',
      'Contact Us'
    ]

    expectedNavItems.forEach(item => {
      expect(wrapper.text()).toContain(item)
    })
  })

  it('shows mobile menu button on mobile', () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router],
      },
    })

    const mobileMenuButton = wrapper.find('.md\\:hidden button')
    expect(mobileMenuButton.exists()).toBe(true)
  })

  it('toggles mobile menu when button is clicked', async () => {
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router],
      },
    })

    const mobileMenuButton = wrapper.find('.md\\:hidden button')
    
    // Initially, mobile menu should be closed
    expect(wrapper.find('.md\\:hidden .border-t').exists()).toBe(false)
    
    // Click to open mobile menu
    await mobileMenuButton.trigger('click')
    expect(wrapper.find('.md\\:hidden .border-t').exists()).toBe(true)
    
    // Click to close mobile menu
    await mobileMenuButton.trigger('click')
    expect(wrapper.find('.md\\:hidden .border-t').exists()).toBe(false)
  })

  it('applies active class to current route', async () => {
    await router.push('/about')
    
    const wrapper = mount(AppHeader, {
      global: {
        plugins: [router],
      },
    })

    // Wait for router to update
    await wrapper.vm.$nextTick()
    
    const aboutLink = wrapper.find('a[href=\"/about\"]')
    expect(aboutLink.classes()).toContain('nav-link-active')
  })
})