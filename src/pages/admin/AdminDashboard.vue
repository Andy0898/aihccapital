<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
      <p class="text-gray-600">Manage your website content and monitor portfolio performance.</p>
    </div>

    <!-- Stats Overview -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="card">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600">Success Cases</p>
            <p class="text-2xl font-bold text-gray-900">{{ stats.successCases }}</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600">Team Members</p>
            <p class="text-2xl font-bold text-gray-900">{{ stats.teamMembers }}</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600">Portfolio Value</p>
            <p class="text-2xl font-bold text-gray-900">${{ stats.portfolioValue }}B</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          </div>
          <div>
            <p class="text-sm text-gray-600">Average ROI</p>
            <p class="text-2xl font-bold text-gray-900">{{ stats.averageROI }}%</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div class="card">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div class="space-y-3">
          <RouterLink 
            to="/admin/cases" 
            class="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg class="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
            <div>
              <p class="font-medium text-gray-900">Manage Cases</p>
              <p class="text-sm text-gray-600">Add, edit, or remove case studies</p>
            </div>
          </RouterLink>
          
          <button class="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors w-full text-left">
            <svg class="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <div>
              <p class="font-medium text-gray-900">Manage Team Members</p>
              <p class="text-sm text-gray-600">Update team profiles and information</p>
            </div>
          </button>
          
          <button class="flex items-center p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors w-full text-left">
            <svg class="w-5 h-5 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
            <div>
              <p class="font-medium text-gray-900">View Analytics</p>
              <p class="text-sm text-gray-600">Website traffic and engagement metrics</p>
            </div>
          </button>
        </div>
      </div>

      <div class="card">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Recent Activities</h2>
        <div class="space-y-3">
          <div v-for="activity in recentActivities" :key="activity.id" class="flex items-start">
            <div class="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div>
              <p class="text-sm text-gray-900">{{ activity.description }}</p>
              <p class="text-xs text-gray-500">{{ activity.timestamp }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Performance Chart Placeholder -->
    <div class="card">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Portfolio Performance</h2>
      <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
        <div class="text-center text-gray-500">
          <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <p>Performance Chart</p>
          <p class="text-sm">Portfolio performance metrics would be displayed here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const stats = ref({
  successCases: 50,
  teamMembers: 4,
  portfolioValue: 2.5,
  averageROI: 350
})

const recentActivities = ref([
  {
    id: 1,
    description: 'New success case "TechStart Innovation" added',
    timestamp: '2 hours ago'
  },
  {
    id: 2,
    description: 'Team member profile updated for Sarah Johnson',
    timestamp: '1 day ago'
  },
  {
    id: 3,
    description: 'Portfolio metrics refreshed',
    timestamp: '2 days ago'
  },
  {
    id: 4,
    description: 'Investment philosophy content updated',
    timestamp: '3 days ago'
  },
  {
    id: 5,
    description: 'New contact inquiry received',
    timestamp: '1 week ago'
  }
])
</script>