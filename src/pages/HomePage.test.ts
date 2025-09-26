import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: { template: '<div>About</div>' } },
    { path: '/cases', component: { template: '<div>Cases</div>' } },
    { path: '/contact', component: { template: '<div>Contact</div>' } },
  ],
})

describe('HomePage', () => {
  it('renders the hero section with correct title', () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Professional Investment Excellence')
    expect(wrapper.text()).toContain('AIHC Capital specializes in strategic investments')
  })

  it('displays company overview section', () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Why Choose AIHC Capital')
    expect(wrapper.text()).toContain('Strategic Expertise')
    expect(wrapper.text()).toContain('Innovation Focus')
    expect(wrapper.text()).toContain('Partnership Approach')
  })

  it('shows featured success cases section', () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Success Stories')
    expect(wrapper.text()).toContain('TechStart Innovation')
    expect(wrapper.text()).toContain('GreenEnergy Solutions')
    expect(wrapper.text()).toContain('Healthcare Innovation')
  })

  it('includes call-to-action section', () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Ready to Partner With Us?')
    expect(wrapper.text()).toContain('Get In Touch')
  })

  it('has navigation links to other pages', () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [router],
      },
    })

    const aboutLink = wrapper.find('a[href=\"/about\"]')
    const casesLink = wrapper.find('a[href=\"/cases\"]')
    const contactLink = wrapper.find('a[href=\"/contact\"]')

    expect(aboutLink.exists()).toBe(true)
    expect(casesLink.exists()).toBe(true)
    expect(contactLink.exists()).toBe(true)
  })

  it('renders feature cards with icons', () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [router],
      },
    })

    const featureCards = wrapper.findAll('.card')
    expect(featureCards.length).toBeGreaterThan(0)
    
    // Check for SVG icons in feature cards
    const svgIcons = wrapper.findAll('svg')
    expect(svgIcons.length).toBeGreaterThan(0)
  })
})