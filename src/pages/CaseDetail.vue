<template>
  <div v-if="caseItem">
    <!-- Header Section -->
    <section class="bg-gray-900 text-white py-16">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="flex items-center mb-4">
              <span class="px-3 py-1 bg-primary-600 text-white text-sm rounded-full mr-4">
                {{ caseItem.category }}
              </span>
              <span v-if="caseItem.roi" class="text-green-400 font-semibold">
                {{ caseItem.roi }} ROI
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ caseItem.title }}</h1>
            <p class="text-xl text-gray-300 mb-6">{{ caseItem.description }}</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="text-sm">
                <span class="text-gray-400">Investment:</span>
                <span class="text-white font-semibold ml-2">{{ caseItem.investmentAmount }}</span>
              </div>
              <div class="text-sm">
                <span class="text-gray-400">Timeline:</span>
                <span class="text-white font-semibold ml-2">{{ caseItem.timeline }}</span>
              </div>
            </div>
          </div>
          <div class="aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <img 
              v-if="caseItem.image" 
              :src="caseItem.image" 
              :alt="caseItem.title"
              class="w-full h-full object-cover"
            >
            <div v-else class="text-gray-500 text-center">
              <svg class="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              <span>Case Study Visualization</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Overview -->
    <section class="py-16 bg-white">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Investment Overview</h2>
            <div class="prose prose-lg text-gray-600 mb-8">
              <p>{{ caseItem.overview }}</p>
              <p>
                This strategic investment represents AIHC Capital's commitment to identifying and nurturing 
                companies with exceptional growth potential and market-disrupting capabilities. Through our 
                comprehensive due diligence process and strategic partnership approach, we were able to 
                identify the unique value proposition and growth opportunities that made this investment 
                particularly attractive.
              </p>
              <p>
                Our involvement extended beyond financial investment to include strategic guidance, 
                operational support, and access to our extensive network of industry experts and potential 
                partners. This comprehensive approach enabled the company to accelerate its growth trajectory 
                and achieve remarkable results within our investment timeline.
              </p>
            </div>

            <!-- Key Metrics -->
            <div class="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Key Performance Metrics</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600 mb-1">{{ caseItem.roi || '300%' }}</div>
                  <div class="text-sm text-gray-600">Return on Investment</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600 mb-1">{{ caseItem.investmentAmount || '$20M' }}</div>
                  <div class="text-sm text-gray-600">Total Investment</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-primary-600 mb-1">{{ getTimelineYears() }}</div>
                  <div class="text-sm text-gray-600">Investment Period</div>
                </div>
              </div>
            </div>

            <!-- External Link -->
            <div v-if="caseItem.externalUrl" class="mb-8">
              <a 
                :href="caseItem.externalUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center btn-primary"
              >
                Visit Company Website
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Key Outcomes -->
          <div>
            <div class="card sticky top-8">
              <h3 class="text-xl font-semibold mb-4">Key Outcomes</h3>
              <ul class="space-y-3">
                <li 
                  v-for="outcome in caseItem.outcomes" 
                  :key="outcome"
                  class="flex items-start"
                >
                  <svg class="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700">{{ outcome }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Investment Journey -->
    <section class="py-16 bg-gray-50">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Investment Journey</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of key milestones and achievements throughout our partnership.
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200"></div>
            
            <div class="space-y-12">
              <div class="flex items-center">
                <div class="flex-1 pr-8 text-right">
                  <h3 class="text-lg font-semibold text-gray-900">Initial Investment</h3>
                  <p class="text-gray-600">
                    After comprehensive due diligence, AIHC Capital led the Series A round, providing strategic capital and industry expertise.
                  </p>
                </div>
                <div class="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div class="flex-1 pl-8"></div>
              </div>

              <div class="flex items-center">
                <div class="flex-1 pr-8"></div>
                <div class="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div class="flex-1 pl-8">
                  <h3 class="text-lg font-semibold text-gray-900">Strategic Growth</h3>
                  <p class="text-gray-600">
                    Implemented growth strategies, expanded market presence, and achieved key operational milestones with AIHC's guidance.
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="flex-1 pr-8 text-right">
                  <h3 class="text-lg font-semibold text-gray-900">Market Leadership</h3>
                  <p class="text-gray-600">
                    Achieved market leadership position, expanded internationally, and established strategic partnerships.
                  </p>
                </div>
                <div class="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div class="flex-1 pl-8"></div>
              </div>

              <div class="flex items-center">
                <div class="flex-1 pr-8"></div>
                <div class="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg relative z-10"></div>
                <div class="flex-1 pl-8">
                  <h3 class="text-lg font-semibold text-gray-900">Successful Exit</h3>
                  <p class="text-gray-600">
                    Achieved successful exit through strategic acquisition, delivering exceptional returns to all stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="py-12 bg-white">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <RouterLink 
            to="/cases" 
            class="btn-secondary flex items-center"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to All Cases
          </RouterLink>
          
          <div class="flex gap-4">
            <button 
              v-if="previousCase"
              @click="navigateToCase(previousCase.id)"
              class="btn-secondary flex items-center"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Previous Case
            </button>
            
            <button 
              v-if="nextCase"
              @click="navigateToCase(nextCase.id)"
              class="btn-secondary flex items-center"
            >
              Next Case
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Loading/Error States -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
      <p class="text-gray-600 mb-6">The case study you're looking for doesn't exist.</p>
      <RouterLink to="/cases" class="btn-primary">
        Back to All Cases
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import type { SuccessCase } from '@/types'

const route = useRoute()
const router = useRouter()

const caseItem = ref<SuccessCase | null>(null)

// Mock cases data - same as in CasesPage
const successCases: SuccessCase[] = [
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
  // Add other cases as needed
]

const currentIndex = computed(() => {
  if (!caseItem.value) return -1
  return successCases.findIndex(c => c.id === caseItem.value!.id)
})

const previousCase = computed(() => {
  const index = currentIndex.value
  return index > 0 ? successCases[index - 1] : null
})

const nextCase = computed(() => {
  const index = currentIndex.value
  return index < successCases.length - 1 ? successCases[index + 1] : null
})

const getTimelineYears = () => {
  if (!caseItem.value?.timeline) return '3 Years'
  const years = caseItem.value.timeline.split('-')
  if (years.length === 2) {
    const startYear = parseInt(years[0])
    const endYear = parseInt(years[1])
    return `${endYear - startYear + 1} Years`
  }
  return '3 Years'
}

const navigateToCase = (caseId: string) => {
  router.push(`/cases/${caseId}`)
}

onMounted(() => {
  const caseId = route.params.id as string
  caseItem.value = successCases.find(c => c.id === caseId) || null
})

// Watch for route changes
router.afterEach((to) => {
  if (to.name === 'CaseDetail') {
    const caseId = to.params.id as string
    caseItem.value = successCases.find(c => c.id === caseId) || null
  }
})
</script>

<style scoped>
.prose {
  max-width: none;
}
</style>