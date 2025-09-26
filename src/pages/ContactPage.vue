<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gray-900 text-white py-16">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p class="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to explore partnership opportunities? Get in touch with our team to discuss 
            how AIHC Capital can help accelerate your company's growth and success.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-16 bg-white">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Details -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
            
            <div class="space-y-6">
              <!-- Address -->
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                  <p class="text-gray-600">
                    {{ contactInfo.address }}<br>
                    New York, NY 10001<br>
                    United States
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <a 
                    :href="`tel:${contactInfo.phone}`"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {{ contactInfo.phone }}
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <a 
                    :href="`mailto:${contactInfo.email}`"
                    class="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {{ contactInfo.email }}
                  </a>
                </div>
              </div>

              <!-- Business Hours -->
              <div class="flex items-start">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p class="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br>
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8 pt-8 border-t border-gray-200">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors">
                  <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors">
                  <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
              </div>

              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select a subject</option>
                  <option value="investment">Investment Opportunity</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="general">General Inquiry</option>
                  <option value="media">Media Relations</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  placeholder="Please provide details about your inquiry..."
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="privacy"
                    v-model="form.acceptPrivacy"
                    type="checkbox"
                    required
                    class="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  >
                </div>
                <div class="ml-3 text-sm">
                  <label for="privacy" class="text-gray-700">
                    I agree to the <a href="#" class="text-primary-600 hover:text-primary-700">Privacy Policy</a> 
                    and <a href="#" class="text-primary-600 hover:text-primary-700">Terms of Service</a> *
                  </label>
                </div>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary flex items-center justify-center"
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
              >
                <svg 
                  v-if="isSubmitting" 
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="showSuccess" class="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <p class="text-green-800">
                  Thank you for your message! We'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-16 bg-gray-50">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
          <p class="text-lg text-gray-600">
            Located in the heart of Manhattan's financial district
          </p>
        </div>
        
        <!-- Map Placeholder -->
        <div class="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <div class="text-center text-gray-500">
            <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <p>Interactive Map</p>
            <p class="text-sm">{{ contactInfo.address }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { ContactInfo } from '@/types'

const isSubmitting = ref(false)
const showSuccess = ref(false)

const contactInfo: ContactInfo = {
  address: '123 Investment Avenue, Suite 4500',
  phone: '+1 (555) 123-4567',
  email: 'info@aihccapital.com',
  mapCoordinates: {
    lat: 40.7128,
    lng: -74.0060
  }
}

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  subject: '',
  message: '',
  acceptPrivacy: false
})

const resetForm = () => {
  form.firstName = ''
  form.lastName = ''
  form.email = ''
  form.company = ''
  form.subject = ''
  form.message = ''
  form.acceptPrivacy = false
}

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form and show success message
    resetForm()
    showSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
    // Handle error (show error message, etc.)
  } finally {
    isSubmitting.value = false
  }
}
</script>