<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-900 text-white py-16">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Cases</h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our strategic investments have created exceptional value and driven 
            transformational growth across diverse industries and market segments.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-8 bg-white border-b">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="flex flex-wrap gap-4 justify-center">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-4 py-2 rounded-full font-medium transition-colors',
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Cases Grid -->
    <section class="py-16 bg-gray-50">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="caseItem in filteredCases" 
            :key="caseItem.id"
            class="card hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            @click="navigateToCase(caseItem.id)"
          >
            <div class="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img 
                v-if="caseItem.image" 
                :src="caseItem.image" 
                :alt="caseItem.title"
                class="w-full h-full object-cover"
              >
              <div v-else class="text-gray-500 text-center">
                <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <span class="text-sm">{{ caseItem.category }}</span>
              </div>
            </div>
            
            <div class="flex justify-between items-start mb-2">
              <span class="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                {{ caseItem.category }}
              </span>
              <span v-if="caseItem.roi" class="text-green-600 font-semibold text-sm">
                {{ caseItem.roi }} ROI
              </span>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ caseItem.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ caseItem.description }}</p>
            
            <div class="flex justify-between items-center">
              <span class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                Read More →
              </span>
              <a 
                v-if="caseItem.externalUrl"
                :href="caseItem.externalUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-500 hover:text-gray-700"
                @click.stop
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredCases.length === 0" class="text-center py-12">
          <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 0a9 9 0 110 18 9 9 0 010-18zm0 0a9 9 0 019 9m-9-9V3m0 18v-3"/>
          </svg>
          <h3 class="text-lg font-medium text-gray-900 mb-2">No cases found</h3>
          <p class="text-gray-600">No success cases match the selected category.</p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio Impact</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our investments have generated significant value and positive impact across our portfolio companies.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">$2.5B+</div>
            <div class="text-gray-600">Total Portfolio Value</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div class="text-gray-600">Portfolio Companies</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div class="text-gray-600">Successful Exits</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">350%</div>
            <div class="text-gray-600">Average ROI</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="mx-auto max-w-7xl container-padding text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          If you're building an exceptional company and looking for strategic investment, we'd love to hear from you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/philosophy" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Learn Our Approach
          </RouterLink>
          <RouterLink to="/contact" class="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-primary-600">
            Get In Touch
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import type { SuccessCase } from '@/types'

const router = useRouter()

const selectedCategory = ref('All')

const categories = ['All', 'Technology', 'Healthcare', 'Clean Energy', 'Industrial', 'Financial Services']

// Mock cases data
const successCases = ref<SuccessCase[]>([
  {
    id: '1',
    title: 'TechStart Innovation',
    description: 'A revolutionary AI-powered platform that transforms customer service operations for enterprise clients, achieving 300% growth and successful market expansion.',
    overview: 'TechStart Innovation developed cutting-edge AI technology for customer service automation.',
    timeline: '2020-2023',
    outcomes: ['300% revenue growth', 'Expanded to 15 countries', 'Series B funding secured'],
    externalUrl: 'https://techstart.example.com',
    category: 'Technology',
    investmentAmount: '$15M',
    roi: '400%'
  },
  {
    id: '2',
    title: 'GreenEnergy Solutions',
    description: 'Leading renewable energy company specializing in solar and wind power solutions, contributing to sustainable energy transition and environmental impact.',
    overview: 'GreenEnergy Solutions provides comprehensive renewable energy solutions for commercial and residential markets.',
    timeline: '2019-2022',
    outcomes: ['$100M revenue milestone', 'Carbon footprint reduction of 50%', 'IPO preparation'],
    externalUrl: 'https://greenenergy.example.com',
    category: 'Clean Energy',
    investmentAmount: '$25M',
    roi: '350%'
  },
  {
    id: '3',
    title: 'Healthcare Innovation Hub',
    description: 'Breakthrough medical technology company developing next-generation diagnostic tools with potential to transform patient care worldwide.',
    overview: 'Healthcare Innovation Hub creates advanced diagnostic solutions for early disease detection.',
    timeline: '2021-2024',
    outcomes: ['FDA approval received', '5 patents granted', 'Partnership with major hospitals'],
    category: 'Healthcare',
    investmentAmount: '$20M',
    roi: '280%'
  },
  {
    id: '4',
    title: 'FinTech Dynamics',
    description: 'Digital banking platform providing innovative financial services to underserved markets, driving financial inclusion and accessibility.',
    overview: 'FinTech Dynamics offers comprehensive digital banking solutions for emerging markets.',
    timeline: '2020-2023',
    outcomes: ['2M+ active users', 'Regulatory approval in 8 countries', 'Series C funding'],
    externalUrl: 'https://fintechdynamics.example.com',
    category: 'Financial Services',
    investmentAmount: '$30M',
    roi: '320%'
  },
  {
    id: '5',
    title: 'Industrial Automation Pro',
    description: 'Smart manufacturing solutions provider leveraging IoT and AI to optimize production efficiency and reduce operational costs.',
    overview: 'Industrial Automation Pro develops cutting-edge automation solutions for manufacturing.',
    timeline: '2019-2023',
    outcomes: ['40% efficiency improvement', 'Global expansion to 20 countries', 'Strategic partnerships'],
    category: 'Industrial',
    investmentAmount: '$18M',
    roi: '380%'
  },
  {
    id: '6',
    title: 'MedDevice Innovations',
    description: 'Medical device company creating minimally invasive surgical instruments that improve patient outcomes and reduce recovery times.',
    overview: 'MedDevice Innovations specializes in advanced surgical instrument development.',
    timeline: '2018-2022',
    outcomes: ['CE and FDA certifications', '500+ hospitals adoption', 'Acquisition by major MedTech'],
    category: 'Healthcare',
    investmentAmount: '$12M',
    roi: '450%'
  }
])

const filteredCases = computed(() => {
  if (selectedCategory.value === 'All') {
    return successCases.value
  }
  return successCases.value.filter(caseItem => caseItem.category === selectedCategory.value)
})

const navigateToCase = (caseId: string) => {
  router.push(`/cases/${caseId}`)
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>