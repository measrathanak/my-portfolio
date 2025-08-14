<template>
  <div class="flex justify-center items-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
    <div class="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
      <Icon icon="eos-icons:bubble-loading" class="text-secondary text-7xl animate-spin mb-4" />
      <span class="text-gray-700 text-lg font-semibold tracking-wide">Loading...</span>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
