<template>
<<<<<<< HEAD
  <HeroSection />
=======
  <div class="bg-[#D4EBF8] dark:bg-[#080326] min-h-screen">
    <Suspense>
      <template #default>
        <div>
          <Navbar />
          <HeroSection />
          <Counter />
          <Services />
          <Skills />
          <Whyme />
          <Projects />
          <Contact />
          <Footer />
          <BackToTop />
        </div>
      </template>

      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      </template>
    </Suspense>
  </div>
>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const HeroSection = defineAsyncComponent(() => import('@/components/layout/HeroSection.vue'))
<<<<<<< HEAD

import LoadingSpinner from '@/components/layout/LoadingSpinner.vue'
</script>
=======
const Counter = defineAsyncComponent(() => import('@/components/layout/Counter.vue'))
const Services = defineAsyncComponent(() => import('@/components/layout/Services.vue'))
const Skills = defineAsyncComponent(() => import('@/components/layout/Skills.vue'))
const Whyme = defineAsyncComponent(() => import('@/components/layout/Whyme.vue'))
const Projects = defineAsyncComponent(() => import('@/components/layout/Projects.vue'))
const Contact = defineAsyncComponent(() => import('@/components/layout/Contact.vue'))

const Navbar = defineAsyncComponent(() => import('@/components/layout/HeroNavbar.vue'))
const Footer = defineAsyncComponent(() => import('@/components/layout/Footer.vue'))
const BackToTop = defineAsyncComponent(() => import('@/components/layout/BackToTop.vue'))
import LoadingSpinner from '@/components/layout/LoadingSpinner.vue'
</script>

>>>>>>> 429be68bf473c3c4d35b7ee32ac1c11a5bc61b5a
