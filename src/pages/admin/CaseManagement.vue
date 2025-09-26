<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Cases Management</h1>
        <p class="text-gray-600">Manage your portfolio success stories and case studies.</p>
      </div>
      <button 
        @click="openCreateModal"
        class="btn-primary flex items-center"
      >
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
        </svg>
        Add New Case
      </button>
    </div>

    <!-- Filters -->
    <div class="card mb-6">
      <div class="flex flex-wrap gap-4 items-center">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select 
            v-model="selectedCategory" 
            class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Clean Energy">Clean Energy</option>
            <option value="Industrial">Industrial</option>
            <option value="Financial Services">Financial Services</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search cases..."
            class="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
        </div>
      </div>
    </div>

    <!-- Cases Table -->
    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Case
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Investment
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ROI
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timeline
              </th>
              <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="caseItem in filteredCases" :key="caseItem.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-12 w-12">
                    <div class="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                      <svg class="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{ caseItem.title }}</div>
                    <div class="text-sm text-gray-500 truncate max-w-xs">{{ caseItem.description }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 text-primary-800">
                  {{ caseItem.category }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {{ caseItem.investmentAmount }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span class="text-green-600 font-semibold">{{ caseItem.roi }}</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ caseItem.timeline }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div class="flex justify-end space-x-2">
                  <button 
                    @click="viewCase(caseItem)"
                    class="text-primary-600 hover:text-primary-900"
                  >
                    View
                  </button>
                  <button 
                    @click="editCase(caseItem)"
                    class="text-gray-600 hover:text-gray-900"
                  >
                    Edit
                  </button>
                  <button 
                    @click="deleteCase(caseItem)"
                    class="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Empty State -->
      <div v-if="filteredCases.length === 0" class="text-center py-12">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
        <h3 class="text-lg font-medium text-gray-900 mb-2">No cases found</h3>
        <p class="text-gray-600 mb-4">Get started by creating your first success case.</p>
        <button @click="openCreateModal" class="btn-primary">
          Add New Case
        </button>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <div 
      v-if="showModal" 
      class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50"
      @click="closeModal"
    >
      <div 
        class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white"
        @click.stop
      >
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-medium text-gray-900">
            {{ editingCase ? 'Edit Success Case' : 'Add New Success Case' }}
          </h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <form @submit.prevent="saveCase" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Title *</label>
              <input
                v-model="formData.title"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Category *</label>
              <select
                v-model="formData.category"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Select category</option>
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Clean Energy">Clean Energy</option>
                <option value="Industrial">Industrial</option>
                <option value="Financial Services">Financial Services</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <textarea
              v-model="formData.description"
              rows="3"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Overview *</label>
            <textarea
              v-model="formData.overview"
              rows="4"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            ></textarea>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Investment Amount</label>
              <input
                v-model="formData.investmentAmount"
                type="text"
                placeholder="e.g., $20M"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">ROI</label>
              <input
                v-model="formData.roi"
                type="text"
                placeholder="e.g., 350%"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
              <input
                v-model="formData.timeline"
                type="text"
                placeholder="e.g., 2020-2023"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">External URL</label>
            <input
              v-model="formData.externalUrl"
              type="url"
              placeholder="https://company.example.com"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Key Outcomes</label>
            <div class="space-y-2">
              <div v-for="(outcome, index) in formData.outcomes" :key="index" class="flex items-center space-x-2">
                <input
                  v-model="formData.outcomes[index]"
                  type="text"
                  class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter outcome..."
                >
                <button
                  type="button"
                  @click="removeOutcome(index)"
                  class="text-red-600 hover:text-red-800"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
              <button
                type="button"
                @click="addOutcome"
                class="text-primary-600 hover:text-primary-800 text-sm flex items-center"
              >
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
                Add Outcome
              </button>
            </div>
          </div>

          <div class="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              @click="closeModal"
              class="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn-primary"
            >
              {{ editingCase ? 'Update Case' : 'Create Case' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { SuccessCase } from '@/types'

const router = useRouter()

const showModal = ref(false)
const editingCase = ref<SuccessCase | null>(null)
const selectedCategory = ref('')
const searchQuery = ref('')

// Mock data - in a real app, this would come from an API
const cases = ref<SuccessCase[]>([
  {
    id: '1',
    title: 'TechStart Innovation',
    description: 'A revolutionary AI-powered platform that transforms customer service operations for enterprise clients.',
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
    description: 'Leading renewable energy company specializing in solar and wind power solutions.',
    overview: 'GreenEnergy Solutions provides comprehensive renewable energy solutions for commercial and residential markets.',
    timeline: '2019-2022',
    outcomes: ['$100M revenue milestone', 'Carbon footprint reduction of 50%', 'IPO preparation'],
    externalUrl: 'https://greenenergy.example.com',
    category: 'Clean Energy',
    investmentAmount: '$25M',
    roi: '350%'
  }
])

const formData = reactive({
  title: '',
  description: '',
  overview: '',
  timeline: '',
  outcomes: [''],
  externalUrl: '',
  category: '',
  investmentAmount: '',
  roi: ''
})

const filteredCases = computed(() => {
  let filtered = cases.value

  if (selectedCategory.value) {
    filtered = filtered.filter(c => c.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(c => 
      c.title.toLowerCase().includes(query) || 
      c.description.toLowerCase().includes(query)
    )
  }

  return filtered
})

const resetForm = () => {
  formData.title = ''
  formData.description = ''
  formData.overview = ''
  formData.timeline = ''
  formData.outcomes = ['']
  formData.externalUrl = ''
  formData.category = ''
  formData.investmentAmount = ''
  formData.roi = ''
}

const openCreateModal = () => {
  editingCase.value = null
  resetForm()
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  editingCase.value = null
}

const editCase = (caseItem: SuccessCase) => {
  editingCase.value = caseItem
  formData.title = caseItem.title
  formData.description = caseItem.description
  formData.overview = caseItem.overview
  formData.timeline = caseItem.timeline
  formData.outcomes = [...caseItem.outcomes]
  formData.externalUrl = caseItem.externalUrl || ''
  formData.category = caseItem.category
  formData.investmentAmount = caseItem.investmentAmount || ''
  formData.roi = caseItem.roi || ''
  showModal.value = true
}

const viewCase = (caseItem: SuccessCase) => {
  window.open(`/cases/${caseItem.id}`, '_blank')
}

const deleteCase = (caseItem: SuccessCase) => {
  if (confirm(`Are you sure you want to delete "${caseItem.title}"?`)) {
    const index = cases.value.findIndex(c => c.id === caseItem.id)
    if (index > -1) {
      cases.value.splice(index, 1)
    }
  }
}

const addOutcome = () => {
  formData.outcomes.push('')
}

const removeOutcome = (index: number) => {
  formData.outcomes.splice(index, 1)
}

const saveCase = () => {
  const caseData: SuccessCase = {
    id: editingCase.value?.id || Date.now().toString(),
    title: formData.title,
    description: formData.description,
    overview: formData.overview,
    timeline: formData.timeline,
    outcomes: formData.outcomes.filter(o => o.trim()),
    externalUrl: formData.externalUrl || undefined,
    category: formData.category,
    investmentAmount: formData.investmentAmount || undefined,
    roi: formData.roi || undefined
  }

  if (editingCase.value) {
    // Update existing case
    const index = cases.value.findIndex(c => c.id === editingCase.value!.id)
    if (index > -1) {
      cases.value[index] = caseData
    }
  } else {
    // Add new case
    cases.value.push(caseData)
  }

  closeModal()
}
</script>