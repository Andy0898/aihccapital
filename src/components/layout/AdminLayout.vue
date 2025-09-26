<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header -->
    <div class="bg-white shadow-sm">
      <div class="mx-auto max-w-7xl container-padding py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <RouterLink to="/admin" class="text-2xl font-bold text-gray-900 hover:text-primary-600">
              AIHC Capital Admin
            </RouterLink>
            <nav class="hidden md:flex space-x-6">
              <RouterLink 
                to="/admin" 
                class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                :class="{ 'bg-gray-100 text-gray-900': $route.name === 'AdminDashboard' }"
              >
                Dashboard
              </RouterLink>
              <RouterLink 
                to="/admin/cases" 
                class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                :class="{ 'bg-gray-100 text-gray-900': $route.name === 'CaseManagement' }"
              >
                Cases
              </RouterLink>
            </nav>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- User Info -->
            <div v-if="currentUser" class="flex items-center space-x-3">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                  </svg>
                </div>
                <div class="hidden md:block">
                  <p class="text-sm font-medium text-gray-900">{{ currentUser.username }}</p>
                  <p class="text-xs text-gray-500 capitalize">{{ currentUser.role }}</p>
                </div>
              </div>
            </div>
            
            <!-- Logout Button -->
            <button
              @click="handleLogout"
              class="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:border-gray-400 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
              <span>Logout</span>
            </button>
            
            <!-- Back to Site -->
            <RouterLink 
              to="/" 
              class="flex items-center space-x-2 text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:border-gray-400 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              <span class="hidden md:inline">Back to Site</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <div v-if="showMobileMenu" class="md:hidden bg-white shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink 
          to="/admin" 
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          :class="{ 'bg-gray-100 text-gray-900': $route.name === 'AdminDashboard' }"
          @click="showMobileMenu = false"
        >
          Dashboard
        </RouterLink>
        <RouterLink 
          to="/admin/cases" 
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          :class="{ 'bg-gray-100 text-gray-900': $route.name === 'CaseManagement' }"
          @click="showMobileMenu = false"
        >
          Cases
        </RouterLink>
      </div>
    </div>
    
    <!-- Main Content -->
    <div class="mx-auto max-w-7xl container-padding py-8">
      <RouterView />
    </div>
    
    <!-- Mobile Menu Toggle (if needed) -->
    <button 
      v-if="false" 
      @click="showMobileMenu = !showMobileMenu"
      class="md:hidden fixed bottom-4 right-4 bg-primary-600 text-white p-3 rounded-full shadow-lg"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { RouterView, RouterLink, useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { logout, currentUser, checkAuth } = useAuth()

const showMobileMenu = ref(false)

// Ensure user is authenticated on component mount
onMounted(() => {
  if (!checkAuth()) {
    router.push('/login')
  }
})

const handleLogout = async () => {
  try {
    logout()
    await router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
    // Force navigation even if there's an error
    window.location.href = '/login'
  }
}
</script>