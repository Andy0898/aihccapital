import type { User, ApiResponse } from '@/types'

// Authentication response interface
interface AuthResponse {
  success: boolean
  user?: User
  token?: string
  message?: string
}

// Storage methods enum
export enum StorageMethod {
  LOCALSTORAGE = 'localStorage',
  ENVIRONMENT = 'environment',
  JSON_FILE = 'jsonFile'
}

// Default admin credentials (can be moved to environment variables)
const DEFAULT_ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
  user: {
    id: 'admin-001',
    username: 'admin',
    email: 'admin@aihccapital.com',
    role: 'admin' as const,
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: new Date().toISOString()
  }
}

// Environment-based credentials (for production)
const getEnvCredentials = () => {
  // Using process.env for Node.js compatibility or direct assignment for demo
  const envUsername = typeof window !== 'undefined' ? 'admin' : process.env.ADMIN_USERNAME || 'admin'
  const envPassword = typeof window !== 'undefined' ? 'admin123' : process.env.ADMIN_PASSWORD || 'admin123'
  const envEmail = typeof window !== 'undefined' ? 'admin@aihccapital.com' : process.env.ADMIN_EMAIL || 'admin@aihccapital.com'
  
  return {
    username: envUsername,
    password: envPassword,
    user: {
      id: 'admin-001',
      username: envUsername,
      email: envEmail,
      role: 'admin' as const,
      createdAt: '2024-01-01T00:00:00Z',
      lastLogin: new Date().toISOString()
    }
  }
}

// JSON file-based credentials (for development/demo)
let jsonCredentials: any = null

const loadJsonCredentials = async () => {
  try {
    // In a real application, this would be loaded from a secure JSON file
    // For demo purposes, we'll use a hardcoded structure
    return {
      users: [
        {
          username: 'admin',
          password: 'admin123', // In production, this should be hashed
          user: {
            id: 'admin-001',
            username: 'admin',
            email: 'admin@aihccapital.com',
            role: 'admin' as const,
            createdAt: '2024-01-01T00:00:00Z',
            lastLogin: new Date().toISOString()
          }
        },
        {
          username: 'editor',
          password: 'editor123',
          user: {
            id: 'editor-001',
            username: 'editor',
            email: 'editor@aihccapital.com',
            role: 'editor' as const,
            createdAt: '2024-01-01T00:00:00Z',
            lastLogin: new Date().toISOString()
          }
        }
      ]
    }
  } catch (error) {
    console.error('Failed to load JSON credentials:', error)
    return null
  }
}

class AuthService {
  private storageMethod: StorageMethod
  private tokenKey = 'aihc_auth_token'
  private userKey = 'aihc_user_data'

  constructor(storageMethod: StorageMethod = StorageMethod.LOCALSTORAGE) {
    this.storageMethod = storageMethod
  }

  async authenticate(username: string, password: string): Promise<AuthResponse> {
    try {
      let credentials: any

      switch (this.storageMethod) {
        case StorageMethod.ENVIRONMENT:
          credentials = getEnvCredentials()
          if (credentials.username === username && credentials.password === password) {
            const token = this.generateToken()
            return {
              success: true,
              user: credentials.user,
              token
            }
          }
          break

        case StorageMethod.JSON_FILE:
          if (!jsonCredentials) {
            jsonCredentials = await loadJsonCredentials()
          }
          if (jsonCredentials?.users) {
            const userCredential = jsonCredentials.users.find(
              (u: any) => u.username === username && u.password === password
            )
            if (userCredential) {
              const token = this.generateToken()
              return {
                success: true,
                user: { ...userCredential.user, lastLogin: new Date().toISOString() },
                token
              }
            }
          }
          break

        case StorageMethod.LOCALSTORAGE:
        default:
          // For localStorage method, we use the default credentials
          // In production, you might want to store encrypted credentials in localStorage
          if (DEFAULT_ADMIN_CREDENTIALS.username === username && 
              DEFAULT_ADMIN_CREDENTIALS.password === password) {
            const token = this.generateToken()
            return {
              success: true,
              user: { ...DEFAULT_ADMIN_CREDENTIALS.user, lastLogin: new Date().toISOString() },
              token
            }
          }
          break
      }

      return {
        success: false,
        message: 'Invalid username or password'
      }
    } catch (error) {
      console.error('Authentication error:', error)
      return {
        success: false,
        message: 'Authentication service error'
      }
    }
  }

  private generateToken(): string {
    // Simple JWT-like token generation (in production, use proper JWT library)
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
    const payload = btoa(JSON.stringify({ 
      iss: 'aihc-capital',
      exp: Date.now() + (24 * 60 * 60 * 1000), // 24 hours
      iat: Date.now()
    }))
    const signature = btoa(`signature-${Date.now()}`)
    
    return `${header}.${payload}.${signature}`
  }

  storeAuth(token: string, user: User, rememberMe: boolean = false): void {
    const storage = rememberMe ? localStorage : sessionStorage
    
    storage.setItem(this.tokenKey, token)
    storage.setItem(this.userKey, JSON.stringify(user))
  }

  getStoredToken(): string | null {
    // Check both localStorage and sessionStorage
    return localStorage.getItem(this.tokenKey) || sessionStorage.getItem(this.tokenKey)
  }

  getStoredUser(): User | null {
    try {
      const userData = localStorage.getItem(this.userKey) || sessionStorage.getItem(this.userKey)
      return userData ? JSON.parse(userData) : null
    } catch (error) {
      console.error('Error parsing stored user data:', error)
      return null
    }
  }

  clearAuth(): void {
    localStorage.removeItem(this.tokenKey)
    localStorage.removeItem(this.userKey)
    sessionStorage.removeItem(this.tokenKey)
    sessionStorage.removeItem(this.userKey)
  }

  isTokenValid(token: string): boolean {
    try {
      // Simple token validation (in production, use proper JWT validation)
      const parts = token.split('.')
      if (parts.length !== 3) return false
      
      const payload = JSON.parse(atob(parts[1]))
      return payload.exp > Date.now()
    } catch (error) {
      return false
    }
  }

  setStorageMethod(method: StorageMethod): void {
    this.storageMethod = method
  }

  getCurrentStorageMethod(): StorageMethod {
    return this.storageMethod
  }
}

// Export singleton instance
export const authService = new AuthService()

// Storage options for success cases and other content
export class ContentStorage {
  private static instance: ContentStorage
  private storageMethod: StorageMethod

  constructor(storageMethod: StorageMethod = StorageMethod.LOCALSTORAGE) {
    this.storageMethod = storageMethod
  }

  static getInstance(storageMethod?: StorageMethod): ContentStorage {
    if (!ContentStorage.instance) {
      ContentStorage.instance = new ContentStorage(storageMethod)
    }
    return ContentStorage.instance
  }

  // Success cases storage methods
  async saveSuccessCase(caseData: any): Promise<ApiResponse<any>> {
    try {
      switch (this.storageMethod) {
        case StorageMethod.LOCALSTORAGE: {
          const cases = this.getStoredSuccessCases()
          cases.push({ ...caseData, id: Date.now().toString() })
          localStorage.setItem('aihc_success_cases', JSON.stringify(cases))
          return { success: true, data: caseData }
        }

        case StorageMethod.JSON_FILE:
          // In production, this would write to a JSON file on the server
          console.log('Saving to JSON file:', caseData)
          return { success: true, data: caseData }

        default:
          return { success: false, error: 'Unsupported storage method' }
      }
    } catch (error) {
      return { success: false, error: 'Failed to save success case' }
    }
  }

  getStoredSuccessCases(): any[] {
    try {
      const stored = localStorage.getItem('aihc_success_cases')
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      console.error('Error loading success cases:', error)
      return []
    }
  }

  async deleteSuccessCase(caseId: string): Promise<ApiResponse<any>> {
    try {
      const cases = this.getStoredSuccessCases()
      const filteredCases = cases.filter(c => c.id !== caseId)
      localStorage.setItem('aihc_success_cases', JSON.stringify(filteredCases))
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Failed to delete success case' }
    }
  }
}

export default authService