<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div class="mx-auto max-w-7xl container-padding py-20">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Professional Investment Excellence
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            AIHC Capital specializes in strategic investments and portfolio management, 
            delivering superior returns through expertise and innovation.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <RouterLink to="/about" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Learn More About Us
            </RouterLink>
            <RouterLink to="/cases" class="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-primary-600">
              View Cases
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="py-16 bg-white">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose AIHC Capital
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine deep industry expertise with innovative investment strategies 
            to deliver exceptional value for our clients and portfolio companies.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Strategic Expertise</h3>
            <p class="text-gray-600">
              Our team brings decades of experience in identifying and nurturing high-potential investments across various sectors.
            </p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Innovation Focus</h3>
            <p class="text-gray-600">
              We invest in cutting-edge technologies and business models that drive transformational growth and market disruption.
            </p>
          </div>

          <div class="card text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Partnership Approach</h3>
            <p class="text-gray-600">
              We work closely with portfolio companies as strategic partners, providing not just capital but also operational expertise.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Success Cases -->
    <section class="py-16 bg-gray-50">
      <div class="mx-auto max-w-7xl container-padding">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our strategic investments have created value and driven growth for our portfolio companies.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card hover:shadow-lg transition-shadow duration-200">
            <div class="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-500">Case Study Image</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">TechStart Innovation</h3>
            <p class="text-gray-600 mb-4">
              Strategic investment in emerging technology startup resulted in 300% growth and successful market expansion.
            </p>
            <RouterLink to="/cases/1" class="text-primary-600 hover:text-primary-700 font-medium">
              Read More →
            </RouterLink>
          </div>

          <div class="card hover:shadow-lg transition-shadow duration-200">
            <div class="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-500">Case Study Image</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">GreenEnergy Solutions</h3>
            <p class="text-gray-600 mb-4">
              Investment in renewable energy sector leading to sustainable growth and environmental impact.
            </p>
            <RouterLink to="/cases/2" class="text-primary-600 hover:text-primary-700 font-medium">
              Read More →
            </RouterLink>
          </div>

          <div class="card hover:shadow-lg transition-shadow duration-200">
            <div class="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-gray-500">Case Study Image</span>
            </div>
            <h3 class="text-xl font-semibold mb-2">Healthcare Innovation</h3>
            <p class="text-gray-600 mb-4">
              Supporting breakthrough medical technology with potential to transform patient care worldwide.
            </p>
            <RouterLink to="/cases/3" class="text-primary-600 hover:text-primary-700 font-medium">
              Read More →
            </RouterLink>
          </div>
        </div>

        <div class="text-center mt-12">
          <RouterLink to="/cases" class="btn-primary">
            View All Cases
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-primary-600 text-white">
      <div class="mx-auto max-w-7xl container-padding text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Ready to Partner With Us?
        </h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Discover how AIHC Capital can help accelerate your growth through strategic investment and partnership.
        </p>
        <RouterLink to="/contact" class="btn-primary bg-white text-primary-600 hover:bg-gray-100">
          Get In Touch
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>