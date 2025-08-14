<template>
  <HeroSection />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const HeroSection = defineAsyncComponent(() => import('@/components/layout/HeroSection.vue'))

import LoadingSpinner from '@/components/layout/LoadingSpinner.vue'
</script>
