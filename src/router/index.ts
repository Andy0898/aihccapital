import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { authService } from '@/services/authService'

// Layout components
import MainLayout from '@/components/layout/MainLayout.vue'

// Page components
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import TeamPage from '@/pages/TeamPage.vue'
import TeamMemberDetail from '@/pages/TeamMemberDetail.vue'
import PhilosophyPage from '@/pages/PhilosophyPage.vue'
import CasesPage from '@/pages/CasesPage.vue'
import CaseDetail from '@/pages/CaseDetail.vue'
import ContactPage from '@/pages/ContactPage.vue'
import LoginPage from '@/pages/LoginPage.vue'

// Admin components
import AdminLayout from '@/components/layout/AdminLayout.vue'
import AdminDashboard from '@/pages/admin/AdminDashboard.vue'
import CaseManagement from '@/pages/admin/CaseManagement.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage,
        meta: { title: 'AIHC Capital - Professional Investment Firm' }
      },
      {
        path: '/about',
        name: 'About',
        component: AboutPage,
        meta: { title: 'About Us - AIHC Capital' }
      },
      {
        path: '/team',
        name: 'Team',
        component: TeamPage,
        meta: { title: 'Our Team - AIHC Capital' }
      },
      {
        path: '/team/:id',
        name: 'TeamMemberDetail',
        component: TeamMemberDetail,
        meta: { title: 'Team Member - AIHC Capital' }
      },
      {
        path: '/philosophy',
        name: 'Philosophy',
        component: PhilosophyPage,
        meta: { title: 'Philosophy - AIHC Capital' }
      },
      {
        path: '/cases',
        name: 'Cases',
        component: CasesPage,
        meta: { title: 'Cases - AIHC Capital' }
      },
      {
        path: '/cases/:id',
        name: 'CaseDetail',
        component: CaseDetail,
        meta: { title: 'Case Study - AIHC Capital' }
      },
      {
        path: '/contact',
        name: 'Contact',
        component: ContactPage,
        meta: { title: 'Contact Us - AIHC Capital' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { 
      title: 'Admin Login - AIHC Capital',
      requiresGuest: true // Only accessible when not authenticated
    }
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'AdminDashboard',
        component: AdminDashboard,
        meta: { title: 'Admin Dashboard - AIHC Capital' }
      },
      {
        path: 'cases',
        name: 'CaseManagement',
        component: CaseManagement,
        meta: { title: 'Case Management - AIHC Capital' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Check authentication status
const isAuthenticated = (): boolean => {
  const token = authService.getStoredToken()
  return token ? authService.isTokenValid(token) : false
}

// Navigation guard for admin routes
router.beforeEach((to, from, next) => {
  const authenticated = isAuthenticated()
  
  // Check if route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authenticated) {
      // Redirect to login with return path
      next({
        name: 'Login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
  // Check if route requires guest (not authenticated)
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (authenticated) {
      // Redirect authenticated users away from login page
      next({ name: 'AdminDashboard' })
    } else {
      next()
    }
  }
  else {
    next()
  }
})

// Update page title
router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string
  }
})

export default router