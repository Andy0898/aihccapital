export interface TeamMember {
  id: string
  name: string
  title: string
  bio: string
  image: string
  expertise: string[]
  experience: string
  education: string
  achievements: string[]
}

export interface SuccessCase {
  id: string
  title: string
  description: string
  overview: string
  timeline: string
  outcomes: string[]
  externalUrl?: string
  image?: string
  category: string
  investmentAmount?: string
  roi?: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  mapCoordinates: {
    lat: number
    lng: number
  }
}

export interface NavigationItem {
  name: string
  path: string
  component?: string
}

export interface User {
  id: string
  username: string
  email: string
  role: 'admin' | 'editor' | 'viewer'
  createdAt: string
  lastLogin?: string
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}