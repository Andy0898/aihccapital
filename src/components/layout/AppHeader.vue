<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <nav class="mx-auto max-w-7xl container-padding">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <RouterLink to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">AC</span>
            </div>
            <span class="text-xl font-bold text-gray-900">AIHC Capital</span>
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ 'nav-link-active': $route.path === item.path }"
          >
            {{ item.name }}
          </RouterLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
        <div class="flex flex-col space-y-4">
          <RouterLink
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="nav-link-mobile"
            :class="{ 'nav-link-mobile-active': $route.path === item.path }"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { NavigationItem } from '@/types'

const mobileMenuOpen = ref(false)

const navigationItems: NavigationItem[] = [
  { name: 'About Us', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Philosophy', path: '/philosophy' },
  { name: 'Cases', path: '/cases' },
  { name: 'Contact Us', path: '/contact' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200;
}

.nav-link-active {
  @apply text-primary-600 font-semibold;
}

.nav-link-mobile {
  @apply text-gray-600 hover:text-primary-600 font-medium py-2 transition-colors duration-200;
}

.nav-link-mobile-active {
  @apply text-primary-600 font-semibold bg-primary-50 px-4 py-2 rounded-lg;
}
</style>