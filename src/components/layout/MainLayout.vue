<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader />
    <main class="flex-1">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>