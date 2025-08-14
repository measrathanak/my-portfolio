<template>
  <section class="mt-32 min-h-screen px-4 md:px-12 lg:px-32" id="skills">
    <SectionHeader title="My Skills" :title-style="{ color: '#6366F1' }" />
    <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div
        v-for="skill in skills"
        :key="skill.id"
        class="bg-black dark:bg-gray-800 rounded-xl shadow-md p-8 flex flex-col items-start"
      >
        <div class="w-full mb-3 flex justify-between items-center">
          <span class="font-semibold text-lg" :style="{ color: skill.textColor }">
            {{ skill.title }}
          </span>
          <span class="font-bold text-gray-700 dark:text-gray-200"> {{ skill.percentage }}% </span>
        </div>
        <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            class="h-3 rounded-full transition-all duration-700"
            :style="{
              width: skill.percentage + '%',
              background: `linear-gradient(${skill.bgGradient})`,
            }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from '@/components/UI/SectionHeader.vue'

const skills = ref([
  {
    id: 1,
    percentage: 98,
    title: 'Figma',
    bgGradient: '90deg, #acac39 0%, #1f1e1c99 100%',
    textColor: '#FFE600',
  },
  {
    id: 2,
    percentage: 95,
    title: 'Vue.js',
    bgGradient: '90deg, #4FC08D 0%, #1f1e1c99 100%',
    textColor: '#4FC08D',
  },
  {
    id: 3,
    percentage: 90,
    title: 'Tailwind CSS',
    bgGradient: '90deg, #06B6D4 0%, #1f1e1c99 100%',
    textColor: '#06B6D4',
  },
  {
    id: 4,
    percentage: 85,
    title: 'JavaScript',
    bgGradient: '90deg, #F7DF1E 0%, #1f1e1c99 100%',
    textColor: '#F7DF1E',
  },
  {
    id: 5,
    percentage: 80,
    title: 'HTML & CSS',
    bgGradient: '90deg, #E34F26 0%, #1f1e1c99 100%',
    textColor: '#E34F26',
  },
  {
    id: 6,
    percentage: 75,
    title: 'Git & GitHub',
    bgGradient: '90deg, #F05032 0%, #1f1e1c99 100%',
    textColor: '#F05032',
  },
  {
    id: 7,
    percentage: 70,
    title: 'Node.js',
    bgGradient: '90deg, #8CC84B 0%, #1f1e1c99 100%',
    textColor: '#8CC84B',
  },
  {
    id: 8,
    percentage: 95,
    title: 'PHP',
    bgGradient: '90deg, #306998 0%, #1f1e1c99 100%',
    textColor: '#306998',
  },
])
</script>
