import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import TeamPage from '@/pages/TeamPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/team', component: TeamPage },
  ],
})

describe('TeamPage', () => {
  it('renders team members correctly', () => {
    const wrapper = mount(TeamPage, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Our Expert Team')
    expect(wrapper.text()).toContain('Sarah Johnson')
    expect(wrapper.text()).toContain('Michael Chen')
  })

  it('displays team philosophy section', () => {
    const wrapper = mount(TeamPage, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.text()).toContain('Our Team Philosophy')
    expect(wrapper.text()).toContain('Continuous Learning')
  })
})