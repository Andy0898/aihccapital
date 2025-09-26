import { ref, computed } from 'vue'
import { authService } from '@/services/authService'
import type { User } from '@/types'

// Global authentication state
const isAuthenticated = ref(false)
const currentUser = ref<User | null>(null)
const authToken = ref<string | null>(null)

// Initialize auth state from storage
const initAuth = () => {
  const token = authService.getStoredToken()
  const user = authService.getStoredUser()
  
  if (token && user) {
    authToken.value = token
    currentUser.value = user
    isAuthenticated.value = true
  }
}

// Initialize on module load
initAuth()

export function useAuth() {
  const login = async (username: string, password: string, rememberMe: boolean = false): Promise<boolean> => {
    try {
      const result = await authService.authenticate(username, password)
      
      if (result.success && result.user && result.token) {
        // Update global state
        currentUser.value = result.user
        authToken.value = result.token
        isAuthenticated.value = true
        
        // Store authentication data
        authService.storeAuth(result.token, result.user, rememberMe)
        
        return true
      }
      
      return false
    } catch (error) {
      console.error('Login error:', error)
      return false
    }
  }

  const logout = () => {
    // Clear global state
    currentUser.value = null
    authToken.value = null
    isAuthenticated.value = false
    
    // Clear stored authentication data
    authService.clearAuth()
  }

  const checkAuth = (): boolean => {
    if (!authToken.value) {
      initAuth()
    }
    return isAuthenticated.value
  }

  const refreshUser = async (): Promise<void> => {
    if (authToken.value) {
      const user = authService.getStoredUser()
      if (user) {
        currentUser.value = user
      }
    }
  }

  return {
    // State
    isAuthenticated: computed(() => isAuthenticated.value),
    currentUser: computed(() => currentUser.value),
    authToken: computed(() => authToken.value),
    
    // Actions
    login,
    logout,
    checkAuth,
    refreshUser
  }
}