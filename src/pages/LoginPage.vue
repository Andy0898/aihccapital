<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="mx-auto h-16 w-16 flex items-center justify-center bg-primary-100 rounded-full">
          <svg class="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Admin Login
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Sign in to access the AIHC Capital admin panel
        </p>
      </div>
      
      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Username</label>
            <input
              id="username"
              v-model="loginForm.username"
              name="username"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Username"
              :class="{ 'border-red-300': errors.username }"
            />
            <p v-if="errors.username" class="mt-1 text-sm text-red-600">{{ errors.username }}</p>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              v-model="loginForm.password"
              name="password"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              :class="{ 'border-red-300': errors.password }"
            />
            <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              v-model="loginForm.rememberMe"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="loginError" class="rounded-md bg-red-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">
                Login Failed
              </h3>
              <div class="mt-2 text-sm text-red-700">
                {{ loginError }}
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg v-if="!isLoading" class="h-5 w-5 text-primary-500 group-hover:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
              <svg v-else class="animate-spin h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            {{ isLoading ? 'Signing in...' : 'Sign in' }}
          </button>
        </div>

        <!-- Demo Credentials Info -->
        <div class="mt-6 p-4 bg-blue-50 rounded-md">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">Demo Credentials</h3>
              <div class="mt-2 text-sm text-blue-700">
                <p><strong>Username:</strong> admin</p>
                <p><strong>Password:</strong> admin123</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const route = useRoute()
const { login } = useAuth()

const isLoading = ref(false)
const loginError = ref('')

const loginForm = reactive({
  username: '',
  password: '',
  rememberMe: false
})

const errors = reactive({
  username: '',
  password: ''
})

const validateForm = () => {
  errors.username = ''
  errors.password = ''
  
  if (!loginForm.username.trim()) {
    errors.username = 'Username is required'
    return false
  }
  
  if (!loginForm.password.trim()) {
    errors.password = 'Password is required'
    return false
  }
  
  if (loginForm.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
    return false
  }
  
  return true
}

const handleLogin = async () => {
  if (!validateForm()) {
    return
  }
  
  isLoading.value = true
  loginError.value = ''
  
  try {
    const success = await login(
      loginForm.username,
      loginForm.password,
      loginForm.rememberMe
    )
    
    if (success) {
      // Redirect to intended route or admin dashboard
      const redirect = (route.query.redirect as string) || '/admin'
      await router.push(redirect)
    } else {
      loginError.value = 'Invalid username or password'
    }
  } catch (error) {
    loginError.value = 'An error occurred during login. Please try again.'
    console.error('Login error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>