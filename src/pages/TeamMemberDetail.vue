<template>
  <div v-if="member">
    <!-- Header Section -->
    <section class="bg-gray-900 text-white py-16">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <div class="w-48 h-48 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            <img 
              v-if="member.image" 
              :src="member.image" 
              :alt="member.name"
              class="w-full h-full object-cover"
            >
            <div v-else class="text-8xl text-gray-400">👤</div>
          </div>
          <div class="text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ member.name }}</h1>
            <p class="text-2xl text-primary-300 mb-4">{{ member.title }}</p>
            <p class="text-xl text-gray-300 max-w-2xl">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Details -->
    <section class="py-16 bg-white">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Experience -->
          <div class="card">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
            <p class="text-gray-600 mb-6">{{ member.experience }}</p>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in member.expertise" 
                  :key="skill"
                  class="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

          <!-- Education -->
          <div class="card">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <p class="text-gray-600">{{ member.education }}</p>
          </div>

          <!-- Achievements -->
          <div class="card">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <ul class="space-y-3">
              <li 
                v-for="achievement in member.achievements" 
                :key="achievement"
                class="flex items-start"
              >
                <span class="text-primary-600 mr-3 mt-1">•</span>
                <span class="text-gray-600">{{ achievement }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="py-12 bg-gray-50">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
          <RouterLink 
            to="/team" 
            class="btn-secondary flex items-center"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Team
          </RouterLink>
          
          <div class="flex gap-4">
            <button 
              v-if="previousMember"
              @click="navigateToMember(previousMember.id)"
              class="btn-secondary flex items-center"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              {{ previousMember.name }}
            </button>
            
            <button 
              v-if="nextMember"
              @click="navigateToMember(nextMember.id)"
              class="btn-secondary flex items-center"
            >
              {{ nextMember.name }}
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
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Team Member Not Found</h1>
      <p class="text-gray-600 mb-6">The team member you're looking for doesn't exist.</p>
      <RouterLink to="/team" class="btn-primary">
        Back to Team
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import type { TeamMember } from '@/types'

const route = useRoute()
const router = useRouter()

const member = ref<TeamMember | null>(null)

// Mock team data - same as in TeamPage
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Managing Partner & CEO',
    bio: 'Sarah brings over 15 years of experience in venture capital and private equity, with a proven track record of identifying and nurturing high-growth companies.',
    image: '',
    expertise: ['Venture Capital', 'Strategic Planning', 'Technology Investments'],
    experience: '15+ years in venture capital and private equity',
    education: 'MBA from Harvard Business School, BS in Economics from Stanford',
    achievements: [
      'Led investments worth over $500M in portfolio value',
      'Successfully exited 12 portfolio companies',
      'Named "Top 40 Under 40" by Investment Weekly'
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Senior Investment Director',
    bio: 'Michael specializes in technology and healthcare investments, with extensive experience in due diligence and portfolio management across emerging markets.',
    image: '',
    expertise: ['Healthcare Tech', 'Due Diligence', 'Emerging Markets'],
    experience: '12+ years in investment management',
    education: 'MBA from Wharton, MS in Bioengineering from MIT',
    achievements: [
      'Managed portfolio of 25+ healthcare technology companies',
      'Led Series A rounds totaling $200M+',
      'Published researcher in medical technology journals'
    ]
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Principal, ESG & Sustainability',
    bio: 'Emily focuses on sustainable investments and ESG compliance, ensuring our portfolio companies meet the highest standards of environmental and social responsibility.',
    image: '',
    expertise: ['ESG Investing', 'Sustainability', 'Clean Energy'],
    experience: '10+ years in sustainable investing',
    education: 'MBA from INSEAD, MS in Environmental Science from UC Berkeley',
    achievements: [
      'Developed AIHC Capital ESG framework',
      'Led $150M in clean energy investments',
      'Board member of Sustainable Investment Association'
    ]
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'VP of Operations & Portfolio Management',
    bio: 'David oversees portfolio company operations and performance, working closely with management teams to optimize growth strategies and operational efficiency.',
    image: '',
    expertise: ['Operations Management', 'Growth Strategy', 'Performance Analytics'],
    experience: '8+ years in operations and consulting',
    education: 'MBA from Kellogg, BS in Industrial Engineering from Georgia Tech',
    achievements: [
      'Improved operational efficiency by 40% across portfolio',
      'Former McKinsey consultant with expertise in growth strategy',
      'Implemented performance tracking systems for 30+ companies'
    ]
  }
]

const currentIndex = computed(() => {
  if (!member.value) return -1
  return teamMembers.findIndex(m => m.id === member.value!.id)
})

const previousMember = computed(() => {
  const index = currentIndex.value
  return index > 0 ? teamMembers[index - 1] : null
})

const nextMember = computed(() => {
  const index = currentIndex.value
  return index < teamMembers.length - 1 ? teamMembers[index + 1] : null
})

const navigateToMember = (memberId: string) => {
  router.push(`/team/${memberId}`)
}

onMounted(() => {
  const memberId = route.params.id as string
  member.value = teamMembers.find(m => m.id === memberId) || null
})

// Watch for route changes
router.afterEach((to) => {
  if (to.name === 'TeamMemberDetail') {
    const memberId = to.params.id as string
    member.value = teamMembers.find(m => m.id === memberId) || null
  }
})
</script>