<template>
  <footer class="bg-secondary-900 text-white">
    <div class="mx-auto max-w-7xl container-padding py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">AC</span>
            </div>
            <span class="text-lg font-bold">AIHC Capital</span>
          </div>
          <p class="text-gray-300 mb-4">
            Professional investment firm specializing in strategic investments and portfolio management.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <RouterLink to="/about" class="text-gray-300 hover:text-white transition-colors">
                About Us
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/team" class="text-gray-300 hover:text-white transition-colors">
                Our Team
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/philosophy" class="text-gray-300 hover:text-white transition-colors">
                Philosophy
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/cases" class="text-gray-300 hover:text-white transition-colors">
                Cases
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contact" class="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Information</h3>
          <div class="space-y-2 text-gray-300">
            <p>📍 123 Investment Avenue</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ info@aihccapital.com</p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} AIHC Capital. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
            Privacy Policy
          </a>
          <a href="#" class="text-gray-400 hover:text-white text-sm transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>