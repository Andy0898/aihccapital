import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import router from '@/router'

describe('App Integration Tests', () => {
  it('renders the main application structure', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('#app').exists()).toBe(true)
  })

  it('navigates between main pages correctly', async () => {
    const testRouter = createRouter({
      history: createWebHistory(),
      routes: router.getRoutes(),
    })

    await testRouter.push('/')
    expect(testRouter.currentRoute.value.path).toBe('/')

    await testRouter.push('/about')
    expect(testRouter.currentRoute.value.path).toBe('/about')

    await testRouter.push('/team')
    expect(testRouter.currentRoute.value.path).toBe('/team')
  })

  it('has all required routes configured', () => {
    const routes = router.getRoutes()
    const routePaths = routes.map(route => route.path)

    expect(routePaths).toContain('/')
    expect(routePaths).toContain('/about')
    expect(routePaths).toContain('/team')
    expect(routePaths).toContain('/philosophy')
    expect(routePaths).toContain('/cases')
    expect(routePaths).toContain('/contact')
  })
})