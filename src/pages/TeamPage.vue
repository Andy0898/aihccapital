<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-900 text-white py-16">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Expert Team</h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the experienced professionals who drive AIHC Capital's success through strategic vision, 
            deep industry expertise, and unwavering commitment to excellence.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Grid -->
    <section class="py-16 bg-white">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="member in teamMembers" 
            :key="member.id"
            class="card hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            @click="navigateToMember(member.id)"
          >
            <div class="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
              <img 
                v-if="member.image" 
                :src="member.image" 
                :alt="member.name"
                class="w-full h-full object-cover"
              >
              <div v-else class="text-6xl text-gray-400">👤</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ member.name }}</h3>
            <p class="text-primary-600 font-medium mb-3">{{ member.title }}</p>
            <p class="text-gray-600 text-sm line-clamp-3">{{ member.bio }}</p>
            <div class="mt-4 flex flex-wrap gap-1">
              <span 
                v-for="skill in member.expertise.slice(0, 2)" 
                :key="skill"
                class="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
              >
                {{ skill }}
              </span>
              <span 
                v-if="member.expertise.length > 2"
                class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                +{{ member.expertise.length - 2 }} more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Philosophy -->
    <section class="py-16 bg-gray-50">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team Philosophy</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe that diverse perspectives and collaborative expertise drive the best investment decisions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Continuous Learning</h3>
            <p class="text-gray-600">
              Our team stays at the forefront of industry trends and emerging technologies to make informed investment decisions.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Collaborative Approach</h3>
            <p class="text-gray-600">
              We leverage collective expertise and diverse perspectives to identify the most promising investment opportunities.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Results-Driven</h3>
            <p class="text-gray-600">
              Every team member is committed to delivering exceptional results and creating lasting value for our portfolio companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { TeamMember } from '@/types'

const router = useRouter()

// Mock team data - in a real app, this would come from an API
const teamMembers = ref<TeamMember[]>([
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
])

const navigateToMember = (memberId: string) => {
  router.push(`/team/${memberId}`)
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