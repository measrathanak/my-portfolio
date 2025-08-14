<template>
<<<<<<< HEAD
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
=======
  <section class="mt-32" id="skills">
    <SectionHeader title="My Skills" />
    <div class="mt-20 flex justify-center">
      <ul class="flex flex-wrap justify-center items-center">
        <li
          ref="skillRefs"
          v-for="(skill, index) in skills"
          :key="index"
          :class="`mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t ${skill.bgGradient}`"
        >
          <div class="rounded-[12px] bg-primary mt-[3px] p-10 sm:p-12 md:p-5 text-center">
            <h3 class="font-bold text-[35px] text-white flex items-center justify-center">
              <Countup
                v-if="visibleItems[index]"
                :endVal="skill.percentage"
                :startVal="0"
                :duration="2"
              />
              %
            </h3>
            <p
              class="font-normal text-[12px] sm:text-[16px] w-[72px] sm:w-auto"
              :style="{ color: skill.textColor }"
            >
              {{ skill.title }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
import SectionHeader from '@/components/UI/SectionHeader.vue'

const skills = ref([
  {
    id: 1,
    percentage: 98,
    title: 'Figma',
<<<<<<< HEAD
    bgGradient: '90deg, #acac39 0%, #1f1e1c99 100%',
=======
    bgGradient: 'to-[#acac39] from-[#1f1e1c99]',
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
    textColor: '#FFE600',
  },
  {
    id: 2,
    percentage: 95,
    title: 'Vue.js',
<<<<<<< HEAD
    bgGradient: '90deg, #4FC08D 0%, #1f1e1c99 100%',
=======
    bgGradient: 'to-[#4FC08D] from-[#1f1e1c99]',
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
    textColor: '#4FC08D',
  },
  {
    id: 3,
    percentage: 90,
    title: 'Tailwind CSS',
<<<<<<< HEAD
    bgGradient: '90deg, #06B6D4 0%, #1f1e1c99 100%',
=======
    bgGradient: 'to-[#06B6D4] from-[#1f1e1c99]',
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
    textColor: '#06B6D4',
  },
  {
    id: 4,
    percentage: 85,
    title: 'JavaScript',
<<<<<<< HEAD
    bgGradient: '90deg, #F7DF1E 0%, #1f1e1c99 100%',
=======
    bgGradient: 'to-[#F7DF1E] from-[#1f1e1c99]',
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
    textColor: '#F7DF1E',
  },
  {
    id: 5,
    percentage: 80,
    title: 'HTML & CSS',
<<<<<<< HEAD
    bgGradient: '90deg, #E34F26 0%, #1f1e1c99 100%',
=======
    bgGradient: 'to-[#E34F26] from-[#1f1e1c99]',
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
    textColor: '#E34F26',
  },
  {
    id: 6,
    percentage: 75,
    title: 'Git & GitHub',
<<<<<<< HEAD
    bgGradient: '90deg, #F05032 0%, #1f1e1c99 100%',
=======
    bgGradient: 'to-[#F05032] from-[#1f1e1c99]',
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
    textColor: '#F05032',
  },
  {
    id: 7,
    percentage: 70,
    title: 'Node.js',
<<<<<<< HEAD
    bgGradient: '90deg, #8CC84B 0%, #1f1e1c99 100%',
=======
    bgGradient: 'to-[#8CC84B] from-[#1f1e1c99]',
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
    textColor: '#8CC84B',
  },
  {
    id: 8,
    percentage: 95,
    title: 'PHP',
<<<<<<< HEAD
    bgGradient: '90deg, #306998 0%, #1f1e1c99 100%',
    textColor: '#306998',
  },
])
</script>
=======
    bgGradient: 'to-[#306998] from-[#1f1e1c99]',
    textColor: '#306998',
  },
])

// Track visibility of items
const visibleItems = ref(skills.value.map(() => false))
const skillRefs = ref([])

// IntersectionObserver logic
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = skillRefs.value.indexOf(entry.target)
          if (index !== -1) {
            visibleItems.value[index] = true //Mark item as visible
          }
        }
      })
    },
    { threshold: 0.3 } //Trigger when 30% of the item is visible
  )

  // Observe each skill element
  skillRefs.value.forEach((el) => observer.observe(el))
})
</script>
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
